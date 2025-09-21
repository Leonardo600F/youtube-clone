import { useContext, useRef, useState, useEffect } from "react";

import {
    Container,
    LogoContainer,
    LinkLogo,
    Logo,
    MenuButtonContainer,
    CreateVideoButtonContainer,
    ButtonIcon,
    DropDownMenuButtonIcon,
    PlusIconContainer,
    NotificationIconContainer,
    ProfileImageContainer,
    DropDownMenuProfileImageContainer,
    HiddenIcon,
    SearchButtonResponsive,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    BackButton,
    KeyboardContainer,
    ClearButton,
    CloseImg,
    MicButton,
    HeaderButton,
    OptionsContainer,
    LoginContainer,
    SpanButton,
    LoginButtonIcon,
    DropDownMenuContent,
    UserInfoContainer,
    UserName
} from "./header-style";

import { ComponentContext } from "../../context/componentContext";
import { useCategoryContext } from "../../context/searchCategories";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useSearchContext } from "../../context/searchContext";

import YouTubeLogoIcon from "../../assets/icon-youtube-logo.png";
import SearchIcon from "../../assets/icon-search.png";
import MenuIcon from "../../assets/icon-menu.png";
import CloseIcon from "../../assets/icon-close.png";
import MicIcon from "../../assets/icon-mic.png";
import PlusIcon from "../../assets/icon-plus.png";
import NotificationIcon from "../../assets/icon-notification.png";
import OptionsIcon from "../../assets/icon-options.png";
import LoginIcon from "../../assets/icon-login.png";
import KeyboardIcon from "../../assets/icon-keyboard.png";
import LogoutIcon from "../../assets/icon-logout.png";
import YourVideosIcon from "../../assets/icon-your-videos.png";
import DropDownMenuPortal from "./DropDownMenuPortal";


export default function Header() {

    const { login, logOut, user, openDropDownMenu, setOpenDropDownMenu } = useContext(UserContext);

    const { openMenu, setOpenMenu, openBar, setOpenBar } = useContext(ComponentContext);

    const { setSearch } = useSearchContext();

    const { setCategoryId } = useCategoryContext();

    const [clearButton, setClearButton] = useState(false);

    const [openSearch, setOpenSearch] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (openDropDownMenu) {
            // Salva a posição atual do scroll
            const scrollY = window.scrollY;

            // Aplica estilos para manter a barra visível mas impedir rolagem
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflowY = 'scroll'; // Mantém a barra visível

            return () => {
                // Remove os estilos e restaura a posição do scroll
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [openDropDownMenu]);

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            // Verifica se o clique foi no dropdown menu
            const dropdownElement = document.querySelector('[data-dropdown-menu]');

            // Se clicou no dropdown ou dentro dele, não fecha o menu
            if (dropdownElement && dropdownElement.contains(event.target as Node)) {
                return;
            }

            // Se clicou fora do dropdown, fecha o menu
            setOpenDropDownMenu(false);
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const handleOverlayClick = () => {
        setOpenMenu(false);
    };

    const search = () => {
        setOpenSearch(true);
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const handleDropDownMenu = () => {
        setOpenDropDownMenu(!openDropDownMenu);
    }

    const goOut = () => {
        logOut()
        handleDropDownMenu()
        navigate('/')
    }

    const goToYourVideos = () => {
        navigate('/yourvideos')
        handleDropDownMenu()
    }

    const [inputValue, setInputValue] = useState('');

    function handleInput(inputValue: string) {
        setInputValue(inputValue);
        if (inputValue === '') {
            setClearButton(false);
        } else {
            setClearButton(true);
        }
    }

    const clearInput = () => {
        setInputValue('');
        setClearButton(false);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <Container>

            <LogoContainer>

                <MenuButtonContainer onClick={() => setOpenMenu(!openMenu)} >
                    <ButtonIcon alt="Menu" src={MenuIcon} />
                </MenuButtonContainer>

                <LinkLogo to="/" onClick={() => setCategoryId('0')}>
                    <Logo title="Página Inicial do YouTube" src={YouTubeLogoIcon} />
                </LinkLogo>

            </LogoContainer>

            <SearchButtonResponsive onClick={search}>
                <ButtonIcon alt="Pesquisar" src={SearchIcon} />
            </SearchButtonResponsive>

            <SearchContainer openSearch={openSearch}>

                <BackButton openSearch={openSearch} onClick={() => setOpenSearch(false)}>
                    <img alt="" src={SearchIcon} style={{ width: '20px' }} />
                </BackButton>

                <SearchInputContainer openBar={openBar} onFocus={() => setOpenBar(true)} onBlur={() => setOpenBar(false)}>

                    <HiddenIcon openBar={openBar} alt="" src={SearchIcon} />

                    <SearchInput
                        openBar={openBar}
                        ref={inputRef}
                        value={inputValue}
                        placeholder="Pesquisar"
                        onChange={(e) => {
                            handleInput(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setSearch(inputValue)
                                navigate('/search')
                                setOpenSearch(false)
                            }
                        }}
                    />

                    <KeyboardContainer alt="Teclado digital" src={KeyboardIcon} />

                    <ClearButton
                        clearButton={clearButton}
                        onClick={clearInput}>

                        <CloseImg src={CloseIcon} />

                    </ClearButton>
                </SearchInputContainer>

                <SearchButton onClick={() => {
                    if (inputValue.trim() === '') {
                        alert('Digite algo antes de pesquisar')
                        return;
                    }
                    setSearch(inputValue)
                    navigate('/search')
                }}>
                    <ButtonIcon alt="" src={SearchIcon} />
                </SearchButton>

            </SearchContainer>

            <MicButton>
                <ButtonIcon alt="" title="Pesquisar com sua voz" src={MicIcon} />
            </MicButton>


            <HeaderButton>

                {login ?
                    <>
                        <CreateVideoButtonContainer onClick={() => navigate('/yourVideos')}>
                            <PlusIconContainer alt="" title="Criar" src={PlusIcon} />
                            <span>Criar</span>
                        </CreateVideoButtonContainer>

                        <NotificationIconContainer>
                            <ButtonIcon alt="" title="Notificações" src={NotificationIcon} />
                        </NotificationIconContainer>
                    </>
                    :
                    <OptionsContainer>
                        <ButtonIcon style={{ width: '23px', marginLeft: '5px' }} alt="" title="Configurações" src={OptionsIcon} />
                    </OptionsContainer>
                }


                {login ?
                    <>
                        <ProfileImageContainer onClick={handleDropDownMenu} data-profile-button>
                            {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
                        </ProfileImageContainer>

                        <DropDownMenuPortal openDropDownMenu={openDropDownMenu}>

                            <UserInfoContainer>
                                <DropDownMenuProfileImageContainer
                                    onClick={handleDropDownMenu}
                                >
                                    <span>{user && user.name ? user.name.charAt(0).toUpperCase() : ''}</span>
                                </DropDownMenuProfileImageContainer>

                                <UserName>{user && user.name ? user.name : ''}</UserName>
                            </UserInfoContainer>

                            <DropDownMenuContent onClick={goToYourVideos}>
                                <DropDownMenuButtonIcon alt="ícone logout" src={LogoutIcon} />
                                <span>Seus vídeos</span>
                            </DropDownMenuContent>

                            <DropDownMenuContent onClick={goOut} style={{ marginBottom: '15px' }}>
                                <DropDownMenuButtonIcon alt="ícone de vídeos" src={YourVideosIcon} />
                                <span>Sair</span>
                            </DropDownMenuContent>

                        </DropDownMenuPortal>
                    </>
                    :
                    <LoginContainer>

                        <SpanButton onClick={() => navigate('/sign-in')} >
                            <LoginButtonIcon alt="" src={LoginIcon} />
                            Fazer login
                        </SpanButton>

                    </LoginContainer>
                }

            </HeaderButton>

        </Container>
    )
}