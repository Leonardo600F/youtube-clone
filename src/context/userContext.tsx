import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { signInUseCase, createUserUseCase, getUserUseCase, getVideosUseCase, createVideoUseCase, deleteVideoUseCase } from "../application/useCases";
import { useNavigate } from "react-router-dom";

interface User {
    user_id: string;
    name: string;
    surname: string;
    email: string;
    nickname: string;
}

interface Video {
    video_id: string;
    user_id: string;
    thumbnail: string;
    title: string;
    description: string;
    publishedAt: string;
}

interface UserContextType {
    login: boolean;
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    showPassword: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
    user: User | null;
    getUser: (token: string) => Promise<void>;
    createVideos: (
        user_id: string,
        thumbnail: string,
        title: string,
        description: string,
        publishedAt: Date
    ) => Promise<void>;
    deleteVideo: (video_id: string) => Promise<boolean>;
    userVideos: Video[];
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
    handleLogin: (email: string, password: string) => Promise<void>;
    handleCreateUser: (
        name: string,
        surname: string,
        email: string,
        nickname: string,
        password: string
    ) => Promise<void>;
    logOut: () => void;
    openDropDownMenu: boolean;
    setOpenDropDownMenu: React.Dispatch<React.SetStateAction<boolean>>;
    dropDownPosition: {
        top: number;
        right: number;
    };
}

export const UserContext = createContext<UserContextType | null>(null);

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser deve ser utilizado dentro do UserStorage.");
    }

    return context;
}

export const UserStorage = ({ children }: { children: ReactNode }) => {
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [userVideos, setUserVideos] = useState<Video[]>([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropDownMenu, setOpenDropDownMenu] = useState(false);
    const navigate = useNavigate();

    const getVideos = async (token: string, user_id: string) => {
        try {

            const response = await getVideosUseCase.execute(token, user_id);

            setUserVideos(response.videos);
        } catch (error) {
            alert("Erro ao buscar os vídeos. Tente novamente mais tarde.");
        }
    };


    const createVideos = async (
        user_id: string,
        thumbnail: string,
        title: string,
        description: string,
        publishedAt: Date
    ) => {
        const storedToken = localStorage.getItem('token');

        if (!storedToken) {
            alert('Sessão expirada. Por favor, faça login novamente.');
            logOut();
            return;
        }

        if (!user_id) {
            alert('Erro ao identificar usuário. Por favor, faça login novamente.');
            return;
        }

        try {
            await createVideoUseCase.execute(
                storedToken,
                user_id,
                thumbnail,
                title,
                description,
                publishedAt
            );

            alert('Vídeo enviado com sucesso!');

            await getUser(storedToken);

        } catch (error: any) {
            if (error.response?.status === 401) {
                alert('Sessão expirada. Por favor, faça login novamente.');
                logOut();
            } else {
                alert('Não foi possível enviar o vídeo. Tente novamente.');
            }
        }
    };


    const deleteVideo = async (video_id: string) => {
        const storedToken = localStorage.getItem("token");

        if (!storedToken) {
            alert("Sessão expirada. Por favor, faça seu login novamente.");
            logOut();
            return false;
        }

        try {
            await deleteVideoUseCase.execute(storedToken, video_id);

            alert("Vídeo removido com sucesso!");
            await getUser(storedToken);

            return true;
        } catch (error: any) {
            if (error.response?.status === 401) {
                alert("Sessão expirada. Por favor, faça login novamente.");
                logOut();
            } else {
                alert("Não foi possível remover o vídeo. Tente novamente.");
            }

            return false;
        }

    };

    const getUser = async (token: string) => {
        if (!token) {
            logOut();
            return;
        }

        try {
            const response = await getUserUseCase.execute(token);

            if (response) {
                setUser(response);
                setLogin(true);

                await getVideos(token, response.user_id);
            }
        } catch (error: any) {
            console.error("ERRO EM GET USER:", error);

            if (error.response?.status === 401) {
                logOut();
            }
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            getUser(storedToken);
        }
    }, []);

    const logOut = () => {
        localStorage.removeItem('token');
        setToken(null);
        setLogin(false);
        setUser(null);
        setUserVideos([]);
        setOpenMenu(false);
        setOpenDropDownMenu(false);
        navigate('/');
    };

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await signInUseCase.execute(email, password);

            const token = response.token;

            localStorage.setItem('token', token);
            setToken(token);
            setLogin(true);

            await getUser(token);

            navigate('/');
        } catch (error: any) {
            if (!error.response) {
                alert("Erro de conexão. Por favor, verifique se o servidor está rodando.");
                return;
            }

            const errorMessage = error.response.data.error || 'Ocorreu um erro ao fazer login.';

            alert(errorMessage);
        }
    };

    const handleCreateUser = async (
        name: string,
        surname: string,
        email: string,
        nickname: string,
        password: string
    ) => {
        try {
            await createUserUseCase.execute(name, surname, email, nickname, password);

            alert("Cadastro realizado com sucesso!");
            await handleLogin(email, password);
        } catch (error: any) {
            if (error.response?.status === 409) {
                alert("Este e-mail já está em uso. Por favor, tente outro.");
            } else {
                alert("Não foi possível criar o usuário. Verifique os dados e tente novamente.");
            }
        }
    };


    const [dropDownPosition, setDropDownPosition] = useState({
        top: 60,
        right: 45
    });

    const updateDropDownPosition = () => {
        const profileButton = document.querySelector(
            '[data-profile-button]'
        ) as HTMLElement;

        if (!profileButton) return;

        const rect = profileButton.getBoundingClientRect();
        const scrollY = window.scrollY;

        const top = rect.bottom + scrollY + 5;
        const right = window.innerWidth - rect.right;

        setDropDownPosition({ top, right });
    };

    useEffect(() => {
        if (!openDropDownMenu) return;

        updateDropDownPosition();

        window.addEventListener('scroll', updateDropDownPosition);
        window.addEventListener('resize', updateDropDownPosition);

        return () => {
            window.removeEventListener('scroll', updateDropDownPosition);
            window.removeEventListener('resize', updateDropDownPosition);
        };
    }, [openDropDownMenu]);

    return (
        <UserContext.Provider value={{
            login,
            token,
            setToken,
            email, setEmail,
            password, setPassword,
            showPassword, setShowPassword,
            user,
            getUser,
            createVideos,
            deleteVideo,
            userVideos,
            openMenu,
            setOpenMenu,
            handleLogin,
            handleCreateUser,
            logOut,
            openDropDownMenu,
            setOpenDropDownMenu,
            dropDownPosition
        }}>
            {children}
        </UserContext.Provider>
    )
}