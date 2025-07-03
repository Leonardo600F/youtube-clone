import { createContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({});
    const [userVideos, setUserVideos] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [openMenu, setOpenMenu] = useState(false);
    const [openDropDownMenu, setOpenDropDownMenu] = useState(false);
    const navigate = useNavigate();

    const getVideos = (token: string, user_id: string) => {
        api.get(`/videos/get-videos?user_id=${user_id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(({ data }) => {
            setUserVideos(data.videos)
        }).catch(() => {
            alert('Erro ao buscar vídeos. Tente novamente mais tarde.');
        })
    }

    const createVideos = (token: string, user_id: string, thumbnail: string, title: string, description: string, publishedAt: Date) => {
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

        const authToken = `Bearer ${storedToken}`;

        api.post('/videos/create-video',
            { user_id, thumbnail, title, description, publishedAt },
            {
                headers: {
                    'Authorization': authToken,
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            alert('Vídeo enviado com sucesso!')
            getUser(storedToken)
        }).catch((error) => {
            if (error.response?.status === 401) {
                alert('Sessão expirada. Por favor, faça login novamente.');
                logOut();
            } else {
                alert('Não foi possível enviar o vídeo. Tente novamente.')
            }
        })
    }

    const getUser = async (token: string) => {
        if (!token) {
            logOut();
            return;
        }

        try {
            const response = await api.get('/users/get-user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data) {
                setUser(response.data);
                setLogin(true);
                getVideos(token, response.data.user_id);
            }
        } catch (error: any) {
            if (error.response?.status === 401) {
                logOut();
            }
        }
    }

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            getUser(storedToken);
        }
    }, []);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
        navigate('/');
    }

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await api.post('/users/sign-in', { email, password });
            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                setToken(token);
                setLogin(true);
                await getUser(token);
                navigate('/');
            }
        } catch (error: any) {
            if (!error.response) {
                alert('Erro de conexão. Por favor, verifique se o servidor está rodando.');
                return;
            }
            const errorMessage = error.response.data.error || 'Ocorreu um erro ao fazer login.';
            alert(errorMessage);
        }
    };

    const handleCreateUser = (name: string, surname: string, email: string, password: string) => {
        api.post('/users/sign-up', { name, surname, email, password })
            .then(() => {
                alert('Cadastro realizado com sucesso!')
                handleLogin(email, password);
            })
            .catch((error) => {
                if (error.response?.status === 409) {
                    alert('Este e-mail já está em uso. Por favor, tente outro.');
                } else {
                    alert('Não foi possível criar o usuário. Verifique os dados e tente novamente.');
                }
            })
    }

    return (
        <UserContext.Provider value={{
            login,
            email, setEmail,
            password, setPassword,
            showPassword, setShowPassword,
            user,
            createVideos,
            userVideos,
            openMenu,
            setOpenMenu,
            handleLogin,
            handleCreateUser,
            logOut,
            openDropDownMenu,
            setOpenDropDownMenu
        }}>
            {children}
        </UserContext.Provider>
    )
}