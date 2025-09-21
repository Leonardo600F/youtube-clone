
import {

    ButtonIcon,
    Container,
    MenuItem,
    YouItem,
    MenuItemContainer,
    MenuItemSecondPart,
    LineContainer,
    Line,
    ChannelIcon,
    LoginContainer,
    LoginRequestSpan,
    SubscribeSpan,
    ExplorerSpan,
    ContactsSpan,
    MenuLoginContainer,
    LoginButtonIcon,
    PlusYouTubeContainer,
    CreditsContainer,
    LogOutYouMenuItem,
    LogOutYouIconContainer,
    LogOutYouItemIcon,
    YouItemIcon,
    YouItemArrow,
    MusicIconContainer,
    ContainerOneIcons,
    SocialMedia,
    SocialMediaContainer,
    SocialMediaIcons

} from "./menu-style";

import { useNavigate, Link } from "react-router-dom";

import LoginIcon from "../../assets/icon-login.png";
import HomeIcon from "../../assets/icon-home.png";
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
import Instagram from '../../assets/icon-instagram.png';
import GitHub from '../../assets/icon-github.png';
import VerifyIcon from '../../assets/icon-verify.png';
import FB from '../../assets/icon-facebook.png';
import LinkedIn from '../../assets/icon-linkedin.png';

import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useCategoryContext } from "../../context/searchCategories";
import { ComponentContext } from "../../context/componentContext";

const youItem = [

    { name: 'Você', link: '/' }

];

const items2 = [

    { name: 'Seu canal', link: '/', icon: <ButtonIcon alt="" title="Seu Canal" src={ProfileIcon} /> },
    { name: 'Histórico', link: '/', icon: <ButtonIcon alt="" title="Seu Histórico" src={HistoryIcon} /> },
    { name: 'Playlists', link: '/', icon: <ButtonIcon alt="" title="Suas playlists" src={PlaylistIcon} /> },
    { name: 'Seus vídeos', link: '/videos', icon: <ButtonIcon alt="" title="Seus vídeos" src={YourVideosIcon} /> },
    { name: 'Seus filmes', link: '/', icon: <ButtonIcon alt="" title="Seus filmes" src={YourMoviesIcon} /> },
    { name: 'Assistir mais tarde', link: '/', icon: <ButtonIcon alt="" title="Assistir mais tarde" src={WatchLaterIcon} /> },
    { name: 'Vídeos com "Gostei"', link: '/', icon: <ButtonIcon alt="" title='Videos com "Gostei"' src={LikeIcon} /> }

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

    { name: 'Em alta', link: '/', icon: <ButtonIcon alt="" title="Em alta" src={TrendingIcon} /> },
    { name: 'Shopping', link: '/', icon: <ButtonIcon alt="" title="Shopping" src={ShoppingIcon} /> },
    { name: 'Música', link: '/', icon: <ButtonIcon alt="" title="Música" src={MusicIcon} /> },
    { name: 'Filmes', link: '/', icon: <ButtonIcon alt="" title="Filmes" src={YourMoviesIcon} /> },
    { name: 'Ao vivo', link: '/', icon: <ButtonIcon alt="" title="Ao vivo" src={LiveIcon} /> },
    { name: 'Jogos', link: '/', icon: <ButtonIcon alt="" title="Jogos" src={ControllerIcon} /> },
    { name: 'Notícias', link: '/', icon: <ButtonIcon alt="" title="Notícias" src={NewsIcon} /> },
    { name: 'Esportes', link: '/', icon: <ButtonIcon alt="" title="Esportes" src={SportsIcon} /> },
    { name: 'Cursos', link: '/', icon: <ButtonIcon alt="" title="Cursos" src={CoursesIcon} /> },
    { name: 'Podcasts', link: '/', icon: <ButtonIcon alt="" title="Podcasts" src={PodcastIcon} /> }

];

const plus = [

    { name: 'Premium', link: '/', icon: <ButtonIcon alt="" title="YouTube Premium" src={YouTubeLogo} /> },
    { name: 'Studio', link: '/', icon: <ButtonIcon alt="" title="YouTube Studio" src={YouTubeStudioLogo} /> },
    { name: 'Music', link: '/', icon: <ButtonIcon alt="" title="YouTube Music" src={YouTubeMusicLogo} /> },
    { name: 'Kids', link: '/', icon: <ButtonIcon alt="" title="YouTube Kids" src={YouTubeKidsLogo} /> }

];

const configs = [

    { name: 'Configurações', link: '/', icon: <ButtonIcon alt="" title="Configurações" src={ConfigsIcon} /> },
    { name: 'Histórico de denún...', link: '/', icon: <ButtonIcon alt="" title="Histórico de denúncias" src={FlagIcon} /> },
    { name: 'Ajuda', link: '/', icon: <ButtonIcon alt="" title="Ajuda" src={HelpIcon} /> },
    { name: 'Enviar feedback', link: '/', icon: <ButtonIcon alt="" title="Enviar feedback" src={FeedbackIcon} /> }

];


export default function Menu() {

    const { login } = useContext(UserContext);

    const { openMenu } = useContext(ComponentContext);

    const { setCategoryId } = useCategoryContext();

    const items = [
        { name: 'Início', link: '/', icon: <ContainerOneIcons alt="" title="Início" src={HomeIcon} /> },
        { name: 'Shorts', link: '/', icon: <ContainerOneIcons alt="" title="Shorts" src={ShortsIcons} /> },
        { name: 'Inscrições', link: '/', icon: <ContainerOneIcons alt="" title="Inscrições" src={SubIcon} /> }
    ];

    const logOutItems = [
        { name: 'Histórico', link: '/', icon: <ContainerOneIcons alt="" title="Seu Histórico" src={HistoryIcon} /> }
    ];

    const navigate = useNavigate();

    return (
        <>

            <Container openMenu={openMenu}>
                {items.map((items) => (

                    <MenuItemContainer openMenu={openMenu}>
                        <MenuItem openMenu={openMenu} onClick={() => navigate(items.link)}>
                            <div>{items.icon}</div>
                            <span>{items.name}</span>
                        </MenuItem>
                    </MenuItemContainer>
                ))}

                <LineContainer openMenu={openMenu}>
                    <Line />
                </LineContainer>


                {login ?
                    <>
                        {youItem.map((youItem) => (

                            <MenuItemContainer openMenu={openMenu}>
                                <YouItem openMenu={openMenu} title="Você" onClick={() => navigate(youItem.link)}>
                                    <YouItemIcon openMenu={openMenu} alt="" title="Você" src={YouIcon} />
                                    <span>{youItem.name}</span>
                                    <YouItemArrow openMenu={openMenu} alt="" src={RightArrowIcon} />
                                </YouItem>
                            </MenuItemContainer>
                        ))}
                    </>
                    :
                    <>
                        {youItem.map((youItem) => (

                            <MenuItemContainer openMenu={openMenu}>
                                <LogOutYouMenuItem openMenu={openMenu} title="Você" onClick={() => navigate(youItem.link)}>
                                    <LogOutYouIconContainer openMenu={openMenu}>
                                        <LogOutYouItemIcon openMenu={openMenu} alt="" title="Você" src={YouIcon} />
                                    </LogOutYouIconContainer>
                                    <span>{youItem.name}</span>
                                </LogOutYouMenuItem>
                            </MenuItemContainer>
                        ))}
                    </>

                }



                {login ?
                    <>

                        {items2.map((items2) => (

                            <MenuItemContainer openMenu={openMenu}>
                                <MenuItemSecondPart openMenu={openMenu} onClick={() => navigate(items2.link)}>
                                    <div>{items2.icon}</div>
                                    <span>{items2.name}</span>
                                </MenuItemSecondPart>
                            </MenuItemContainer>
                        ))}

                    </>
                    :
                    <>

                        {logOutItems.map((logOutItems) => (

                            <MenuItemContainer openMenu={openMenu}>
                                <MenuItem openMenu={openMenu} onClick={() => navigate(logOutItems.link)}>
                                    <div>{logOutItems.icon}</div>
                                    <span>{logOutItems.name}</span>
                                </MenuItem>
                            </MenuItemContainer>
                        ))}

                    </>
                }

                <LineContainer openMenu={openMenu}>
                    <Line />
                </LineContainer>


                {login ?
                    <>
                        <SubscribeSpan openMenu={openMenu}>
                            <span>Inscrições</span>
                        </SubscribeSpan>

                        {subscribes.map((subscribes) => (

                            <MenuItemContainer openMenu={openMenu}>
                                <MenuItemSecondPart openMenu={openMenu} onClick={() => navigate(subscribes.link)}>
                                    <div>{subscribes.icon}</div>
                                    <span>{subscribes.name}</span>
                                    <div>{subscribes.option}</div>
                                </MenuItemSecondPart>
                            </MenuItemContainer>

                        ))}
                    </>
                    :
                    <LoginContainer openMenu={openMenu}>

                        <LoginRequestSpan>Faça login para curtir vídeos, comentar e se inscrever.</LoginRequestSpan>

                        <MenuLoginContainer onClick={() => navigate('/sign-in')}>
                            <LoginButtonIcon alt="" src={LoginIcon} />
                            <span>Fazer login</span>
                        </MenuLoginContainer>

                    </LoginContainer>

                }

                <LineContainer openMenu={openMenu}>
                    <Line />
                </LineContainer>


                <ExplorerSpan openMenu={openMenu}>
                    <span>Explorar</span>
                </ExplorerSpan>

                {explorer.map((explorer) => (
                    <MenuItemContainer openMenu={openMenu}>
                        <MenuItemSecondPart openMenu={openMenu} onClick={() => navigate(explorer.link)}>
                            <div>{explorer.icon}</div>
                            <span>{explorer.name}</span>
                        </MenuItemSecondPart>
                    </MenuItemContainer>
                ))}

                <LineContainer openMenu={openMenu}>
                    <Line />
                </LineContainer>

                <PlusYouTubeContainer openMenu={openMenu}>
                    <span>Mais do YouTube</span>
                </PlusYouTubeContainer>


                {plus.map((plus) => (
                    <MenuItemContainer openMenu={openMenu}>
                        <MenuItemSecondPart openMenu={openMenu} onClick={() => navigate(plus.link)}>
                            <div>{plus.icon}</div>
                            <span>{plus.name}</span>
                        </MenuItemSecondPart>
                    </MenuItemContainer>
                ))}

                <LineContainer openMenu={openMenu} style={{ marginBottom: '10px' }}>
                    <Line />
                </LineContainer>

                {configs.map((configs) => (
                    <MenuItemContainer openMenu={openMenu}>
                        <MenuItemSecondPart openMenu={openMenu} onClick={() => navigate(configs.link)}>
                            <div>{configs.icon}</div>
                            <span>{configs.name}</span>
                        </MenuItemSecondPart>
                    </MenuItemContainer>
                ))}

                <LineContainer openMenu={openMenu}>
                    <Line />
                </LineContainer>

                <SocialMedia openMenu={openMenu}>

                    <ContactsSpan openMenu={openMenu}>
                        <span>Contatos</span>
                    </ContactsSpan>

                    <SocialMediaContainer openMenu={openMenu}>

                        <Link style={{ width: '25px', height: '25px' }} to='https://github.com/Leonardo600F' target="blank">
                            <SocialMediaIcons openMenu={openMenu} alt="" title="Meu GitHub" src={GitHub} />
                        </Link>

                        <Link style={{ width: '25px', height: '25px', marginLeft: '19px' }} to='https://br.linkedin.com' target="blank">
                            <SocialMediaIcons openMenu={openMenu} alt="" title="Meu LinkedIn" src={LinkedIn} />
                        </Link>

                    </SocialMediaContainer>

                </SocialMedia>

                <LineContainer openMenu={openMenu}>
                    <Line />
                </LineContainer>

                <CreditsContainer openMenu={openMenu}>
                    <span>Todos os direitos reservados © </span>
                    <span >Desenvolvido por: Leonardo Marin Zem</span>
                </CreditsContainer>

            </Container>

        </>

    )
}