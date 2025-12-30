import {
    Overlay,
    Menu,
    MenuItemContainer,
    MenuItem,
    ContainerOneIcons,
    GeneralButtonIcon,
    ChannelIcon,
    MusicIconContainer,
    // Daqui pra baixo começa as importações do OpenedMenu! //
    OpenedMenu,
    OpenMenuButtonContainer,
    ResponsiveMenuItem,
    ItemsIcon,
    MenuButtonIcon,
    LogoContainer,
    LinkLogo,
    Logo,
    LineContainer,
    Line,
    SubscribeSpan,
    LoginContainer,
    LoginRequestSpan,
    MenuLoginContainer,
    LoginButtonIcon,
    OpenedMenuSpan,
    SocialMediaContainer,
    SocialMediaIcons,
    SocialMedia,
    CreditsContainer

} from "./responsiveMenu-style";

import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useCategoryContext } from "../../context/searchCategories";
import { ComponentContext } from "../../context/componentContext";
import { useNavigate, Link } from "react-router-dom";

import LoginIcon from "../../assets/icon-login.png";
import BlackLoginIcon from "../../assets/icon-login-black.png";
import YouTubeLogoIcon from "../../assets/icon-youtube-logo.png";
import MenuIcon from "../../assets/icon-menu.png";
import HomeIcon from "../../assets/icon-home.png";
import DownloadIcon from "../../assets/icon-download.png";
import ShortsIcons from "../../assets/icon-shorts-menu.png";
import SubIcon from '../../assets/icon-subscribe.png';
import YouIcon from '../../assets/icon-you.png';
import ProfileIcon from '../../assets/icon-profile.png';
import HistoryIcon from '../../assets/icon-history.png';
import PlaylistIcon from '../../assets/icon-playlist.png';
import YourVideosIcon from "../../assets/icon-your-videos.png";
import YourMoviesIcon from '../../assets/icon-movie.png';
import WatchLaterIcon from '../../assets/icon-watch.png';
import LikeIcon from '../../assets/icon-like.png';
import TrendingIcon from '../../assets/icon-trending.png';
import ShoppingIcon from '../../assets/icon-shopping.png';
import MusicIcon from '../../assets/icon-music.png';
import LiveIcon from '../../assets/icon-live.png';
import ControllerIcon from '../../assets/icon-controller.png';
import NewsIcon from '../../assets/icon-news.png';
import SportsIcon from '../../assets/icon-reward.png';
import CoursesIcon from '../../assets/icon-course.png';
import PodcastIcon from '../../assets/icon-podcast.png';
import YouTubeLogo from '../../assets/icon-youtube-solo-logo.png';
import YouTubeMusicLogo from '../../assets/icon-youtube-music.png';
import YouTubeKidsLogo from '../../assets/icon-kids.png';
import YouTubeStudioLogo from '../../assets/icon-studio.png';
import ConfigsIcon from '../../assets/icon-config.png';
import FlagIcon from '../../assets/icon-flag.png';
import HelpIcon from '../../assets/icon-help.png';
import FeedbackIcon from '../../assets/icon-feedback.png';
import RightArrowIcon from '../../assets/icon-right-arrow.png';
import ColdplayIcon from '../../assets/avatar-coldplay.png';
import PSIcon from '../../assets/avatar-ps.png';
import NarventIcon from '../../assets/avatar-narvent.png';
import EltonJhon from '../../assets/avatar-elton-jhon.png';
import ArtistIcon from '../../assets/avatar-artist.png';
import CoD from '../../assets/avatar-cod.png';
import Playstation from '../../assets/avatar-playstation.png';
import PapoDeCarona from '../../assets/avatar-papo-de-carona.png';
import GitHub from '../../assets/icon-github.png';
import VerifyIcon from '../../assets/icon-verify.png';
import LinkedIn from '../../assets/icon-linkedin.png';

export default function ResponsiveMenu() {

    const { login } = useContext(UserContext);
    const { openMenu, setOpenMenu } = useContext(ComponentContext);
    const { setCategoryId } = useCategoryContext();

    const navigate = useNavigate();

    useEffect(() => {
        if (openMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [openMenu]);

    const handleOverlayClick = () => {
        setOpenMenu(false);
    };

    const firstItems = [
        { name: 'Início', link: '/', icon: <ContainerOneIcons alt="" title="Início" src={HomeIcon} /> },
        { name: 'Shorts', link: '/', icon: <ContainerOneIcons alt="" title="Shorts" src={ShortsIcons} /> },
        { name: 'Inscrições', link: '/', icon: <ContainerOneIcons alt="" title="Inscrições" src={SubIcon} /> },
        { name: 'Você', link: '/', icon: <ContainerOneIcons alt="" title="Você" src={YouIcon} /> },
        { name: login ? 'Downloads' : 'Histórico', link: '/', icon: <ContainerOneIcons alt="" title={login ? 'Downloads' : 'Histórico'} src={login ? DownloadIcon : HistoryIcon} /> }
    ];

    const responsiveSignInYouContainer = [

        { name: 'Você', link: '/', icon: <ContainerOneIcons style={{ width: '11px', marginLeft: '15px' }} alt="" title="Você" src={RightArrowIcon} /> }

    ];

    const responsiveMenuFirstItems = [
        { name: 'Início', link: '/', icon: <ItemsIcon alt="" title="Início" src={HomeIcon} /> },
        { name: 'Shorts', link: '/', icon: <ItemsIcon alt="" title="Shorts" src={ShortsIcons} /> },
        { name: 'Inscrições', link: '/', icon: <ItemsIcon alt="" title="Inscrições" src={SubIcon} /> }
    ];

    const responsiveSignedInMenuSecondItems = [
        { name: 'Seu canal', link: '/', icon: <GeneralButtonIcon alt="" title="Seu Canal" src={ProfileIcon} /> },
        { name: 'Histórico', link: '/', icon: <GeneralButtonIcon alt="" title="Seu Histórico" src={HistoryIcon} /> },
        { name: 'Playlists', link: '/', icon: <GeneralButtonIcon alt="" title="Suas playlists" src={PlaylistIcon} /> },
        { name: 'Seus vídeos', link: '/videos', icon: <GeneralButtonIcon alt="" title="Seus vídeos" src={YourVideosIcon} /> },
        { name: 'Seus filmes', link: '/', icon: <GeneralButtonIcon alt="" title="Seus filmes" src={YourMoviesIcon} /> },
        { name: 'Assistir mais tarde', link: '/', icon: <GeneralButtonIcon alt="" title="Assistir mais tarde" src={WatchLaterIcon} /> },
        { name: 'Vídeos com "Gostei"', link: '/', icon: <GeneralButtonIcon alt="" title='Videos com "Gostei"' src={LikeIcon} /> }
    ];

    const responsiveSignedOutMenuSecondItems = [
        { name: 'Você', link: '/', icon: <ItemsIcon alt="" title="Você" src={BlackLoginIcon} /> },
        { name: 'Histórico', link: '/', icon: <ItemsIcon alt="" title="Histórico" src={HistoryIcon} /> }
    ];

    const subscribes = [

        { name: 'Coldplay', link: '/', icon: <ChannelIcon alt="" title="Coldplay ♪" src={ColdplayIcon} />, option: <MusicIconContainer alt="" title="Canal oficial do artista" src={ArtistIcon} /> },
        { name: 'Peter Schilling ', link: '/', icon: <ChannelIcon alt="" title="Peter Schilling ♪" src={PSIcon} />, option: <MusicIconContainer alt="" title="Canal oficial do artista" src={ArtistIcon} /> },
        { name: 'Call of Duty', link: '/', icon: <ChannelIcon alt="" title="Call of Duty" src={CoD} />, option: <MusicIconContainer alt="" title="Canal oficial do artista" src={VerifyIcon} /> },
        { name: 'PlayStation', link: '/', icon: <ChannelIcon alt="" title="PlayStation" src={Playstation} />, option: <MusicIconContainer alt="" title="Canal oficial do artista" src={VerifyIcon} /> },
        { name: 'Papo de Carona', link: '/', icon: <ChannelIcon alt="" title="Papo de Carona" src={PapoDeCarona} />, option: <MusicIconContainer alt="" title="Canal oficial do artista" src={VerifyIcon} /> },
        { name: 'Narvent', link: '/', icon: <ChannelIcon alt="" title="Narvent ♪" src={NarventIcon} />, option: <MusicIconContainer alt="" title="Canal oficial do artista" src={ArtistIcon} /> },
        { name: 'Elton Jhon', link: '/', icon: <ChannelIcon alt="" title="Elton Jhon ♪" src={EltonJhon} />, option: <MusicIconContainer alt="" title="Canal oficial do artista" src={ArtistIcon} /> }

    ];

    const explorer = [

        { name: 'Em alta', link: '/', icon: <GeneralButtonIcon alt="" title="Em alta" src={TrendingIcon} /> },
        { name: 'Shopping', link: '/', icon: <GeneralButtonIcon alt="" title="Shopping" src={ShoppingIcon} /> },
        { name: 'Música', link: '/', icon: <GeneralButtonIcon alt="" title="Música" src={MusicIcon} /> },
        { name: 'Filmes', link: '/', icon: <GeneralButtonIcon alt="" title="Filmes" src={YourMoviesIcon} /> },
        { name: 'Ao vivo', link: '/', icon: <GeneralButtonIcon alt="" title="Ao vivo" src={LiveIcon} /> },
        { name: 'Jogos', link: '/', icon: <GeneralButtonIcon alt="" title="Jogos" src={ControllerIcon} /> },
        { name: 'Notícias', link: '/', icon: <GeneralButtonIcon alt="" title="Notícias" src={NewsIcon} /> },
        { name: 'Esportes', link: '/', icon: <GeneralButtonIcon alt="" title="Esportes" src={SportsIcon} /> },
        { name: 'Cursos', link: '/', icon: <GeneralButtonIcon alt="" title="Cursos" src={CoursesIcon} /> },
        { name: 'Podcasts', link: '/', icon: <GeneralButtonIcon alt="" title="Podcasts" src={PodcastIcon} /> }

    ];

    const plusSignedOut = [

        { name: 'YouTube Premium', link: '/', icon: <GeneralButtonIcon alt="" title="YouTube Premium" src={YouTubeLogo} /> },
        { name: 'YouTube Music', link: '/', icon: <GeneralButtonIcon alt="" title="YouTube Music" src={YouTubeMusicLogo} /> },
        { name: 'YouTube Kids', link: '/', icon: <GeneralButtonIcon alt="" title="YouTube Kids" src={YouTubeKidsLogo} /> }

    ];

    const plusSignedIn = [

        { name: 'YouTube Premium', link: '/', icon: <GeneralButtonIcon alt="" title="YouTube Premium" src={YouTubeLogo} /> },
        { name: 'YouTube Studio', link: '/', icon: <GeneralButtonIcon alt="" title="YouTube Studio" src={YouTubeStudioLogo} /> },
        { name: 'YouTube Music', link: '/', icon: <GeneralButtonIcon alt="" title="YouTube Music" src={YouTubeMusicLogo} /> },
        { name: 'YouTube Kids', link: '/', icon: <GeneralButtonIcon alt="" title="YouTube Kids" src={YouTubeKidsLogo} /> }

    ];

    const configs = [

        { name: 'Configurações', link: '/', icon: <GeneralButtonIcon alt="" title="Configurações" src={ConfigsIcon} /> },
        { name: 'Histórico de denún...', link: '/', icon: <GeneralButtonIcon alt="" title="Histórico de denúncias" src={FlagIcon} /> },
        { name: 'Ajuda', link: '/', icon: <GeneralButtonIcon alt="" title="Ajuda" src={HelpIcon} /> },
        { name: 'Enviar feedback', link: '/', icon: <GeneralButtonIcon alt="" title="Enviar feedback" src={FeedbackIcon} /> }

    ];

    return (
        <>
            <Overlay openMenu={openMenu} onClick={handleOverlayClick} />

            <OpenedMenu openMenu={openMenu}>

                <LogoContainer>

                    <OpenMenuButtonContainer onClick={() => setOpenMenu(!openMenu)}>
                        <MenuButtonIcon alt="Menu" src={MenuIcon} />
                    </OpenMenuButtonContainer>

                    <LinkLogo to="/" onClick={() => setCategoryId('0')}>
                        <Logo title="Página Inicial do YouTube" src={YouTubeLogoIcon} />
                    </LinkLogo>

                </LogoContainer>

                { }

                {responsiveMenuFirstItems.map((items) => (
                    /*Primeiro container*/
                    <MenuItemContainer>
                        <ResponsiveMenuItem onClick={() => navigate(items.link)}>
                            <div>{items.icon}</div>
                            <span>{items.name}</span>
                        </ResponsiveMenuItem>
                    </MenuItemContainer>
                ))}

                <LineContainer><Line /></LineContainer>

                {login ?
                    /*Segundo container*/
                    /*Usuário logado*/
                    <>

                        {responsiveSignInYouContainer.map((items) => (
                            <MenuItemContainer>
                                <ResponsiveMenuItem onClick={() => navigate(items.link)}>
                                    <span style={{ fontSize: '17px', fontWeight: '700', marginLeft: '0' }}>{items.name}</span>
                                    <div>{items.icon}</div>
                                </ResponsiveMenuItem>
                            </MenuItemContainer>
                        ))}
                        {responsiveSignedInMenuSecondItems.map((items) => (
                            <MenuItemContainer>
                                <ResponsiveMenuItem onClick={() => navigate(items.link)}>
                                    <div>{items.icon}</div>
                                    <span>{items.name}</span>
                                </ResponsiveMenuItem>
                            </MenuItemContainer>
                        ))}
                    </>
                    :
                    /*Usuário deslogado*/
                    <>
                        {responsiveSignedOutMenuSecondItems.map((items) => (
                            <MenuItemContainer>
                                <ResponsiveMenuItem onClick={() => navigate(items.link)}>
                                    <div>{items.icon}</div>
                                    <span>{items.name}</span>
                                </ResponsiveMenuItem>
                            </MenuItemContainer>
                        ))}
                    </>
                }


                <LineContainer><Line /></LineContainer>

                {login ?
                    /*Terceiro container*/
                    <>
                        <OpenedMenuSpan>Inscrições</OpenedMenuSpan>

                        {subscribes.map((subscribes) => (

                            <MenuItemContainer >
                                <ResponsiveMenuItem onClick={() => navigate(subscribes.link)}>
                                    <div>{subscribes.icon}</div>
                                    <span>{subscribes.name}</span>
                                    <div>{subscribes.option}</div>
                                </ResponsiveMenuItem>
                            </MenuItemContainer>

                        ))}
                    </>
                    :
                    <LoginContainer>

                        <LoginRequestSpan>Faça login para curtir vídeos, comentar e se inscrever.</LoginRequestSpan>

                        <MenuLoginContainer onClick={() => navigate('/sign-in')}>
                            <LoginButtonIcon alt="" src={LoginIcon} />
                            <span>Fazer login</span>
                        </MenuLoginContainer>

                    </LoginContainer>

                }

                <LineContainer><Line /></LineContainer>

                <OpenedMenuSpan>Explorar</OpenedMenuSpan>

                {explorer.map((explorer) => (
                    /*Quarto container*/
                    <MenuItemContainer >
                        <ResponsiveMenuItem onClick={() => navigate(explorer.link)}>
                            <div>{explorer.icon}</div>
                            <span>{explorer.name}</span>
                        </ResponsiveMenuItem>
                    </MenuItemContainer>

                ))}

                <LineContainer><Line /></LineContainer>

                <OpenedMenuSpan>Mais do YouTube</OpenedMenuSpan>

                {login ?
                    <>
                        {plusSignedIn.map((plusSignedIn) => (
                            /*Quinto container*/
                            /*Usuário logado*/
                            <MenuItemContainer >
                                <ResponsiveMenuItem onClick={() => navigate(plusSignedIn.link)}>
                                    <div>{plusSignedIn.icon}</div>
                                    <span>{plusSignedIn.name}</span>
                                </ResponsiveMenuItem>
                            </MenuItemContainer>

                        ))}
                    </>
                    :
                    <>
                        {plusSignedOut.map((plusSignedOut) => (
                            /*Usuário deslogado*/
                            <MenuItemContainer >
                                <ResponsiveMenuItem onClick={() => navigate(plusSignedOut.link)}>
                                    <div>{plusSignedOut.icon}</div>
                                    <span>{plusSignedOut.name}</span>
                                </ResponsiveMenuItem>
                            </MenuItemContainer>

                        ))}
                    </>}

                <LineContainer><Line /></LineContainer>

                {configs.map((configs) => (
                    /*Sexto container*/
                    <MenuItemContainer >
                        <ResponsiveMenuItem onClick={() => navigate(configs.link)}>
                            <div>{configs.icon}</div>
                            <span>{configs.name}</span>
                        </ResponsiveMenuItem>
                    </MenuItemContainer>

                ))}

                <LineContainer><Line /></LineContainer>

                <SocialMedia>

                    <OpenedMenuSpan>Contatos</OpenedMenuSpan>

                    <SocialMediaContainer>

                        <Link style={{ width: '25px', height: '25px' }} to='https://github.com/Leonardo600F' target="blank">
                            <SocialMediaIcons alt="" title="Meu GitHub" src={GitHub} />
                        </Link>

                        <Link style={{ width: '25px', height: '25px', marginLeft: '19px' }} to='https://br.linkedin.com' target="blank">
                            <SocialMediaIcons alt="" title="Meu LinkedIn" src={LinkedIn} />
                        </Link>

                    </SocialMediaContainer>

                </SocialMedia>

                <LineContainer>
                    <Line />
                </LineContainer>

                <CreditsContainer>
                    <span>Todos os direitos reservados © </span>
                    <span >Desenvolvido por: Leonardo Marin Zem</span>
                </CreditsContainer>

            </OpenedMenu >

            <Menu openMenu={openMenu}>
                {firstItems.map((items) => (

                    <MenuItemContainer>
                        <MenuItem onClick={() => navigate(items.link)}>
                            <div>{items.icon}</div>
                            <span>{items.name}</span>
                        </MenuItem>
                    </MenuItemContainer>
                ))}
            </Menu>
        </>

    )

}