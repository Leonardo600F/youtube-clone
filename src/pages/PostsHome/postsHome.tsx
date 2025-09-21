import {
    PostsContainer,
    PostsPictureContainer,
    PostsContainerSpan,
    LikeButtonIcon,
    DeslikeButtonIcon,
    ShareButtonIcon,
    CommentsButtonIcon,
    CommentsNumberIcon,
    OptionsButtonIcon,
    PostsLine,
    LikeViewerNumber,
    ShowMoreContainer,
    ShowMoreIcon
} from './postsHome-style';

import PostsComponents from '../../components/PostsComponents/posts';
import SecondPostsComponents from '../../components/PostsComponents/SecondPostsComponents/secondPosts';
import { useState, useContext, useEffect, useMemo } from 'react';
import { ComponentContext } from '../../context/componentContext';

import NarventIcon from '../../assets/avatar-narvent.png';
import JetRockzIcon from '../../assets/avatar-jetrockz.png';
import PSIcon from '../../assets/avatar-playstation.png';
import XboxIcon from '../../assets/avatar-xbox.png';
import CoDIcon from '../../assets/avatar-cod.png';
import CultIcon from '../../assets/avatar-cult.png';
import EduIcon from '../../assets/avatar-brksedu.png';
import ReunionIcon from '../../assets/avatar-reunion.png';
import FunkyIcon from '../../assets/avatar-funky.png';
import HayashiiIcon from '../../assets/avatar-hayashii.png';
import PeeWeeIcon from '../../assets/avatar-peewee.png';
import NerdIcon from '../../assets/avatar-einerd.png';
import LikeIcon from '../../assets/icon-like.png';
import DeslikeIcon from '../../assets/icon-deslike.png';
import ShareIcon from '../../assets/icon-share.png';
import CommentsIcon from '../../assets/icon-comments.png';
import OptionsIcon from "../../assets/icon-options.png";
import MoreIcon from '../../assets/icon-down.png';
import LessIcon from '../../assets/icon-up.png';

const posts = [
    {
        icone: <PostsPictureContainer alt="" src={JetRockzIcon} />,
        name: 'JetRockz Gaming • ',
        time: '5 horas',
        text: 'Glimpses of some content coming up this week.',
        image: 'https://yt3.ggpht.com/bYsytCNqezf1JycrD3XWYMq57iTlDdJYGz2-8rGBcFTLe_dePnR48--HMgEvvQUCyu87h_wIb7rfsQ=s640-c-fcrop64=1,32f60000c2f5ffff-rw-nd-v1',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>1,1</LikeViewerNumber>,
        count: <LikeViewerNumber>mil</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>145</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    },
    {
        icone: <PostsPictureContainer alt="" src={PSIcon} />,
        name: 'Playstation • ',
        time: '2 dias',
        text: 'The Plucky Squire launches September 17 as a day one PlayStation Plus Game Catalog title ⚔️ How the PS5 game is colorful combat leaps off the page: https://play.st/3WL2OUe',
        image: 'https://yt3.ggpht.com/UY0zjuGJjroKRb15TysLx1wz4n0wphOFMZxZkbRzGfVvKSGGb1BlpGNPgppUq_t8YZNUv9t0HTSO=s500-c-fcrop64=1,00000000ffffffff-nd-v1-rwa',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>15</LikeViewerNumber>,
        count: <LikeViewerNumber>mil</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>150</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    },
    {
        icone: <PostsPictureContainer alt="" src={XboxIcon} />,
        name: 'Xbox • ',
        time: '10 dias',
        text: 'idk what these things taste like but i know it would go n. sane',
        image: 'https://yt3.ggpht.com/SQgmL7Hh-JP7e2Z3qFKiFXEo4K6nTHZNsd4wV1ULOaAu3JhSCYagwFBm96UFoRKe4coZv7sr20tk=s640-c-fcrop64=1,00000000ffffffff-nd-v1-rwa',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>10</LikeViewerNumber>,
        count: <LikeViewerNumber>mil</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>317</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    },
    {
        icone: <PostsPictureContainer alt="" src={NarventIcon} />,
        name: 'Narvent • ',
        time: '11 dias',
        text: '❗️❗️❗️IS FINALLY OUT NOW❗️❗️❗️ Narvent - Insomnia (Album)LISTEN ON ALL PLATFORMS: https://band.link/DtlR5',
        image: 'https://yt3.ggpht.com/8PrcetX_4IV1xQcjFanfNCqoQKxiuMFrzTfqvakIvy_DBQr2IWr9u8wobncHs_3YViggU9YysJlZEg=s640-c-fcrop64=1,00000000ffffffff-rw-nd-v1',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>2,3</LikeViewerNumber>,
        count: <LikeViewerNumber>mil</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>51</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    },
    {
        icone: <PostsPictureContainer alt="" src={CoDIcon} />,
        name: 'Call of Duty • ',
        time: '4 dias',
        text: 'As we look ahead to #BlackOps6, we have been working on ways to improve the Call of Duty experience by optimizing menu navigation and offering smaller and more...',
        image: 'https://yt3.ggpht.com/rOql5qdJN86GOWIGfEPHx3qWPC4NSweDzmgT_T_sLih135m3qefASi6EHfJyO31Vdkb3uMK2o36g3Q=s640-c-fcrop64=1,38000000c7ffffff-rw-nd-v1',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>8,3</LikeViewerNumber>,
        count: <LikeViewerNumber>mil</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>798</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    },

    {
        icone: <PostsPictureContainer alt="" src={CultIcon} />,
        name: 'Refúgio Cult• ',
        time: '5 dias',
        text: 'Hoje falo sobre o filme de terror mais comentado dos últimos tempos. Uma produção que constrói o horror principalmente em sua atmosfera, e mescla diferentes...',
        image: 'https://yt3.ggpht.com/DYQCeCts-mqXFP_uCQuBnRzTEBEfCmvRPhobqYlGKbLF07RWoPBgFBsn_6eTMdUJFc8mcJiHDSR8=s640-c-fcrop64=1,70000000ffffffff-rw-nd-v1',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>589</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>22</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    }
];

const secondPosts = [
    {
        icone: <PostsPictureContainer alt="" src={HayashiiIcon} />,
        name: 'Hayashii • ',
        time: '2 meses',
        text: '👀',
        image: 'https://yt3.ggpht.com/vUFXlyD1fjgKPIW8wtGRwQzJfHxGSxQADXp_US67rRtW9h8DFuMAJe9VTEwm99RTrx7UG0ZIyJ6x=s640-c-fcrop64=1,38000000c7ffffff-rw-nd-v1',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>1,6</LikeViewerNumber>,
        count: <LikeViewerNumber>mil</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>58</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    },
    {
        icone: <PostsPictureContainer alt="" src={PeeWeeIcon} />,
        name: 'Canal PeeWee • ',
        time: '6 dias',
        text: 'O Mal que nos Habita(2023)',
        image: 'https://yt3.ggpht.com/qEgbj4_8zrfE1szInNpP4HV3dAhsu61M485bF_SPMaoTU5tLU8tUl2_TgDtI5pgUpwvIby9iXSR5kA=s640-c-fcrop64=1,00000000ffffffff-rw-nd-v1',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>22</LikeViewerNumber>,
        count: <LikeViewerNumber>mil</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>342</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    },
    {
        icone: <PostsPictureContainer alt="" src={FunkyIcon} />,
        name: 'FunkyBlackCat • ',
        time: '3 dias',
        text: 'Só avisando aqui, como eu tô só entrando no Black Myth Wukong agora as 23h do dia 19, vou postar só amanhã de manhã o vídeo do início. Depois vai ter live lá pelas 14 horas.',
        image: 'https://yt3.ggpht.com/sssAyIu-IJXbvFk6meF_7GC55N0ujNyVVIy_0QH4T5vBR_XRmB_I76XgSRAOIZIeBSbZW8nNpMGL=s640-c-fcrop64=1,38000000c7ffffff-rw-nd-v1',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>4,9</LikeViewerNumber>,
        count: <LikeViewerNumber>mil</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>113</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    },
    {
        icone: <PostsPictureContainer alt="" src={EduIcon} />,
        name: 'BRKsEDU • ',
        time: '3 semanas',
        text: 'Tirei o Alan de casa de novo. Na próxima desbloqueia troféu?',
        image: 'https://yt3.ggpht.com/9s217OW1SVyMgcqbZLVzsCACAE8jQQiiN36nIZk0vZkLrA8soYzLXa717UA-NlRTCaj4FJM-nYUynCM=s640-c-fcrop64=1,00000e55ffffce54-rw-nd-v1',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>40</LikeViewerNumber>,
        count: <LikeViewerNumber>mil</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>617</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    },
    {
        icone: <PostsPictureContainer alt="" src={NerdIcon} />,
        name: 'Ei Nerd • ',
        time: '1 dia',
        text: 'E esse Shadow em Sonic 3, galera?  🔥',
        image: 'https://yt3.ggpht.com/KpWAWdKGufM4CL0A9HXe7Z5AL925xnPXwdsdRXqRlc6juzDJ-ZkueohPWTcGQbmiepTvSgdPGT4ETw=s1080-c-fcrop64=1,000022c1ffffef8d-rw-nd-v1',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>57</LikeViewerNumber>,
        count: <LikeViewerNumber>mil</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>1</CommentsNumberIcon>,
        secondCount: <CommentsNumberIcon>mil</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    },

    {
        icone: <PostsPictureContainer alt="" src={ReunionIcon} />,
        name: 'Reunion Rider • ',
        time: '2 dias',
        text: '‼️KAWASAKI Z900‼️',
        image: 'https://yt3.ggpht.com/L_79M0o5PDjemyKsL5cW0EY8KxEmKZ66B3KZ-Xl7ZlMCnb8kN_9l8O9I6f-Jw-u8cZYDpEJWeMSfjwY=s640-rw-nd-v1',
        like: <LikeButtonIcon alt="" title="Gostei" src={LikeIcon} />,
        viewer: <LikeViewerNumber>1,2</LikeViewerNumber>,
        count: <LikeViewerNumber>mil</LikeViewerNumber>,
        deslike: <DeslikeButtonIcon alt="" title="Não gostei" src={DeslikeIcon} />,
        share: <ShareButtonIcon alt="" title="Compartilhar" src={ShareIcon} />,
        comments: <CommentsButtonIcon alt="" src={CommentsIcon} />,
        numbers: <CommentsNumberIcon>102</CommentsNumberIcon>,
        options: <OptionsButtonIcon alt="" src={OptionsIcon} />
    }

]

export default function PostsHome() {

    const { openPosts, setOpenPosts } = useContext(ComponentContext);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const displayPosts = useMemo(() => {
        if (windowWidth <= 819) return posts.slice(0, 1);
        if (windowWidth <= 1559) return posts.slice(0, 3);
        if (windowWidth <= 1920) return posts.slice(0, 4);
        return posts;
    }, [windowWidth, posts]);

    const displaySecondPosts = useMemo(() => {
        if (windowWidth <= 819) return secondPosts.slice(0, 1);
        if (windowWidth <= 1559) return secondPosts.slice(0, 3);
        if (windowWidth <= 1920) return secondPosts.slice(0, 4);
        return secondPosts;
    }, [windowWidth, secondPosts]);

    return (
        <>
            <PostsContainerSpan>Postagens mais recentes do YouTube</PostsContainerSpan>
            <PostsContainer openPosts={openPosts}>
                {displayPosts.map((posts) => (
                    <PostsComponents post={posts} />
                ))}

                {displaySecondPosts.map((secondPosts) => (
                    <SecondPostsComponents secondPosts={secondPosts} />
                ))}
            </PostsContainer>


            {openPosts ?

                <PostsLine>
                    <ShowMoreContainer openPosts={openPosts} onClick={() => setOpenPosts(!openPosts)}>
                        <span>
                            Mostrar menos
                            <ShowMoreIcon alt="" src={LessIcon} />
                        </span>
                    </ShowMoreContainer>

                </PostsLine>
                :

                <PostsLine>
                    <ShowMoreContainer openPosts={openPosts} onClick={() => setOpenPosts(!openPosts)}>
                        <span>
                            Mostrar mais
                            <ShowMoreIcon alt="" src={MoreIcon} />
                        </span>
                    </ShowMoreContainer>
                </PostsLine>}
        </>

    )
}