/* import VideosCardsComponent from "../../components/VideosCardsComponents/videosCardsComponent";
import SecondVideosCardsComponents from "../../components/VideosCardsComponents/secondVideosCardsComponents/secondVideosCardsComponents";
import { Container,
    PictureContainer,
    VerifyContainer
} from "./home-style";
import Coldplay from '../../assets/coldplay.png';
import Elton from '../../assets/Elton.png';
import MrKitty from '../../assets/MrKitty2.png';
import BandaiIcon from '../../assets/Bandai.png';
import HondaIcon from '../../assets/Honda.png';
import NarventIcon from '../../assets/Narvent.png';
import PSIcon from '../../assets/PSicon.png';
import CoD from '../../assets/CoD.png';
import Verify from '../../assets/verify.png';
import PapoDeCarona from '../../assets/PapoDeCarona.png';
import SonyIcon from '../../assets/Sony.png';
import PlayStation from '../../assets/PlayStation.png';
import ACDC from '../../assets/ACDC.png';
import KORDHELLIcon from '../../assets/KORDHELL.png';
import ArtemasIcon from '../../assets/Artemas.png';
import SavageIcon from '../../assets/Savage.png';
import MKTIcon from '../../assets/MKT.png';
import PeeweeIcon from '../../assets/Peewee.png';
import WarnerIcon from '../../assets/Warner.png';
import { useContext } from "react";
import { ComponentContext } from "../../context/componentContext";
import ShortsHome from "../shortsHome/shortsHome";
import Categories from "../categories/categories";
import PostsHome from "../../components/PostsHome/Posts";


const videos = [
    
{
           
        icone: <PictureContainer alt="" title="Call of Duty" src={CoD} />,
        verify: <VerifyContainer alt="" title="Verificado" src={Verify} />,
        banner: 'https://i.ytimg.com/vi/oyZY_BiTmd8/maxresdefault.jpg', 
        title: 'Black Ops 6 - Gameplay Reveal Trailer',
        channel: 'Call of Duty',
        views: '57.542.336',
        time: '2 meses'
},

{
    icone: <PictureContainer  alt="" title="PlayStation" src={PlayStation}/>,
    banner: 'https://i.ytimg.com/vi/rn4qhWWfgCM/maxresdefault.jpg',
    verify: <VerifyContainer alt="" title="Verificado" src={Verify} />,
    title: 'Marvel’s Spider-Man 2 – Trailer de Lançamento I PS5',
    channel: 'PlayStation Brasil',
    views: '328.102',
    time: '9 meses'
},

{
    icone: <PictureContainer  alt="" title="Bandai Namco Entertainment America" src={BandaiIcon}/>,
    banner: 'https://i.ytimg.com/vi/bSCANspTDeE/maxresdefault.jpg', 
    verify: <VerifyContainer alt="" title="Verificado" src={Verify} />,
    title: 'DRAGON BALL: Sparking! ZERO – Announcement Trailer',
    channel: 'Bandai Namco Entertainment America',
    views: '2.968.127',
    time: '8 meses'
},

{
    icone: <PictureContainer alt="" title="Sony Pictures Brasil" src={SonyIcon}/>,
    banner: 'https://i.ytimg.com/vi/c-1i96qpF-s/maxresdefault.jpg',
    verify: <VerifyContainer alt="" title="Verificado" src={Verify}/>,
    title: 'VENOM: A ÚLTIMA RODADA | Trailer Oficial Dublado',
    channel: 'Sony Pictures Brasil',
    views: '8.811.041',
    time: '2 meses'
},

{
    icone: <PictureContainer alt="" title="Honda Motorcycles Europe" src={HondaIcon}/>,
    banner: 'https://i.ytimg.com/vi/dhRSxPQvE24/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHoHW7EGNO5Hfep5Cv1ygAxSzdyg', 
    title: 'New 2024 CB1000 Hornet | Street Motorcycle | Honda',
    channel: 'Honda Motorcycles Europe',
    views: '154.819',
    time: '9 meses'
},

{
    icone: <PictureContainer alt="" title="Papo de Carona" src={PapoDeCarona}/>,
    banner: 'https://i.ytimg.com/vi/ZuphNDrcMvQ/maxresdefault.jpg',
    verify: <VerifyContainer alt="" title="Verificado" src={Verify} />,
    title: 'Honda CBR 650R: tudo mudou!',
    channel: 'Papo de Carona',
    views: '162.767',
    time: '3 anos'
},

{
    icone: <PictureContainer alt="" title="Elton Jhon ♪" src={Elton}/>,
    banner: 'https://i.ytimg.com/vi/ZHwVBirqD2s/maxresdefault.jpg',
    title: 'Elton John - I am Still Standing',
    channel: 'Elton John ♪',
    views: '215.211.709',
    time: '13 anos'
},

{
    icone: <PictureContainer alt="" title="Peter Schilling ♪" src={PSIcon}/>,
    banner: 'https://i.ytimg.com/vi/wO0A0XcWy88/maxresdefault.jpg', 
    title: 'Peter Schilling - Major Tom (Coming Home) (Official Video)',
    channel: 'Peter Schilling ♪',
    views: '67.410.178',
    time: '4 anos'
},

{
    icone: <PictureContainer  alt="" title="Coldplay ♪" src={Coldplay}/>,
    banner: 'https://content.skyradio.nl/images/m3kfiwxadki8/37zlWPCJO6F596lxPERaxQ/998ea59994328c1bd3bf0769bd95dea8/LINKPOST_VIVA_LA_VIDA.png?fit=thumb&w=1200&h=675&fm=jpg',
    title: 'Coldplay - Viva la Vida (Official Video)',
    channel: 'Coldplay ♪',
    views: '907 mi',
    time: '15 anos'
},

{
    icone: <PictureContainer  alt="" title="AC/DC ♪" src={ACDC}/>,
    banner: 'https://i.ytimg.com/vi/pAgnJDJN4VA/maxresdefault.jpg', 
    title: 'AC/DC - Back In Black (Official 4K Video)',
    channel: 'AC/DC ♪',
    views: '1.045.198.937',
    time: '11 anos'
},

{
    icone: <PictureContainer alt="" title="Narvent ♪" src={NarventIcon}/>,
    banner: 'https://i.ytimg.com/vi/izPATSdGxng/maxresdefault.jpg',
    title: 'Narvent - Fainted (Slowed | 4K Music Video)',
    channel: 'Narvent ♪',
    views: '5.588.397',
    time: '6 meses'
},

{
    icone: <PictureContainer alt="" title="Mr.Kitty ♪" src={MrKitty}/>,
    banner: 'https://steamuserimages-a.akamaihd.net/ugc/783001359585143501/C9EB69CF43BDC4C7B8106B02AF913DC433BAA5F7/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true', 
    title: 'Mr.Kitty - After Dark ',
    channel: 'Mr.Kitty ♪',
    views: '223.527.725',
    time: '7 anos'
}

];

const secondVideos = [
    
    {
           
        icone: <PictureContainer alt="" title="KORDHELL ♪" src={KORDHELLIcon}/> ,
        banner: 'https://i.ytimg.com/vi/DK6IRG4CAbw/maxresdefault.jpg',
        title: 'KORDHELL - KILLERS FROM THE NORTHSIDE',
        channel: 'KORDHELL ♪',
        views: '68.939.927',
        time: '2 anos'
},
{
           
    icone: <PictureContainer alt="" title="Artemas ♪" src={ArtemasIcon}/> ,
    banner: 'https://i.ytimg.com/vi/evJ6gX1lp2o/maxresdefault.jpg',
    title: 'Artemas - i like the way you kiss me (official music video)',
    channel: 'Artemas ♪',
    views: '77.591.244',
    time: '4 meses'
},
{
           
    icone: <PictureContainer alt="" title="21 Savage ♪" src={SavageIcon}/> ,
    banner: 'https://i.ytimg.com/vi/U4mADkt6o-M/maxresdefault.jpg',
    title: '21 Savage - redrum (Official Music Video)',
    channel: '21 Savage ♪',
    views: '76.422.547',
    time: '6 meses'
},
{
           
    icone: <PictureContainer alt="" title="MARQUETTI MKT" src={MKTIcon}/> ,
    banner: 'https://i.ytimg.com/vi/P3YygkrUPkc/maxresdefault.jpg',
    verify: <VerifyContainer alt="" title="Verificado" src={Verify} />,
    title: 'A MOTO QUE DÁ 299 E NÃO É 1000, SRAD 750 É BOA?',
    channel: 'MARQUETTI MKT',
    views: '101.435',
    time: '3 anos'
},
{
           
    icone: <PictureContainer alt="" title="Canal Peewee" src={PeeweeIcon}/> ,
    banner: 'https://i.ytimg.com/vi/F6uO6qJFN2U/maxresdefault.jpg',
    verify: <VerifyContainer alt="" title="Verificado" src={Verify} />,
    title: 'Saga Deadpool | História, Curiosidades e Opinião',
    channel: 'Canal Peewee',
    views: '734.291',
    time: '1 mês'
},
{
           
    icone: <PictureContainer alt="" title="Warner Bros. Picutres Brasil" src={WarnerIcon}/> ,
    banner: 'https://i.ytimg.com/vi/exeVIM3j3y0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDVARPWgfo2pTek8Mnppc5JJz8CFQ',
    verify: <VerifyContainer alt="" title="Verificado" src={Verify} />,
    title: 'Coringa: Delírio a Dois | Trailer Oficial #2',
    channel: 'Warner Bros. Picutres Brasil',
    views: '3.003.386',
    time: '2 semanas'
},
];

export default function Home() {

    const{openMenu}=useContext(ComponentContext);

    return (
        <>
        <Categories/>
        <Container openMenu={openMenu}>
            {videos.map((videos)=> (
                <VideosCardsComponent video={videos} />
            ))}
        </Container>

        <ShortsHome />
        
        <Container openMenu={openMenu}>
            {secondVideos.map((secondVideos) => (
                <SecondVideosCardsComponents secondVideos={secondVideos} />
            )) }
        </Container>

        <PostsHome />
        </>
    )
} */