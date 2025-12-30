import { useContext, useState, useEffect, useMemo } from "react";
import { ComponentContext } from "../../context/componentContext";

import {
    Container,
    ShortsIconImage,
    ShortsSpanContainer,
    ShortsContainer,
    CloseButtonContainer,
    CloseButtonImage,
    ShortsLine,
    SpanMessageContainer,
    SpanMessage,
    ReturnContainer
} from "./shortsHome-style";

import ShortsComponent from "../../components/ShortsComponent/shortsComponent";
import Shorts from '../../assets/icon-shorts.png';
import CloseIcon from '../../assets/icon-close.png';

const shortsVideo = [{
    banner: 'https://preview.redd.it/what-are-some-good-black-suit-spider-man-comics-v0-3uisnizzj03b1.jpg?auto=webp&s=1cb025ab5d89b18c4f61725121878170154de521',
    title: 'Peter usando o traje preto no jogo! #marvel #spider-man',
    views: '340 mil'
},
{
    banner: 'https://i.ytimg.com/vi/4v1S_ZzrpAE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAJISRDwBPTC16Xhsd_PQMhgItMpg',
    title: 'Albert Wesker in RE1 vs RE5 [4K] | Resident Evil',
    views: '50 mil'
},
{
    banner: 'https://images.pexels.com/photos/26551174/pexels-photo-26551174/free-photo-of-kawasaki-ninja-zx-10r-on-road.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Kawasaki Ninja ZX10R sound #motorcycles',
    views: '545 mil'
},
{
    banner: 'https://criticalhits.com.br/wp-content/uploads/2012/11/call-of-duty-black-ops-2.jpg',
    title: 'O COD MAIS AMADO DE TODOS! #cod #bo2',
    views: '98 mil'
},
{
    banner: 'https://i1.sndcdn.com/artworks-tJfHDuyyIHVLOkJz-s3kkZQ-t500x500.png',
    title: 'BLEACH Rebirth of Souls - Announcement Trailer',
    views: '102 mil'
},
{
    banner: 'https://i.pinimg.com/736x/18/b1/01/18b101aa1cce2db96b508cea22dc47dd.jpg',
    title: 'Cada transformação de Goku na obra explicada! #dbz',
    views: '863 mil'
},
{
    banner: 'https://i.pinimg.com/474x/65/85/95/658595b160acdd71d7df5a83eb9bbe93.jpg',
    title: 'A moto mais cobiçada do Brasil! - Honda Hornet #moto',
    views: '258 mil'
},
{
    banner: 'https://wallpapers.com/images/featured/batman-4k-jwuxwi1azm1ww3er.jpg',
    title: 'O dia que Batman foi criado! #curiosidade #dc',
    views: '679 mil'
},
{
    banner: 'https://i.ytimg.com/vi/7gR4V5IdR9Q/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCFu-6VMBxX1efBFAyuKsUquu0nwA',
    title: 'Deadpool 3 - Bye Bye Bye #MCU #deadpool',
    views: '3 mi'
},
];

export default function ShortsHome() {
    const { openButton, openMenu, openShorts, setOpenShorts } = useContext(ComponentContext);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const displayShorts = useMemo(() => {
        if (windowWidth <= 586) return shortsVideo.slice(0, 2);
        if (windowWidth <= 976) return shortsVideo.slice(0, 3);
        if (windowWidth <= 1680) return shortsVideo.slice(0, 5);
        if (windowWidth <= 1920) return shortsVideo.slice(0, 6);
        return shortsVideo;
    }, [windowWidth, shortsVideo]);

    return (
        <>
            {openShorts ?
                <ShortsContainer openMenu={openMenu} >
                    <ShortsSpanContainer openButton={openButton}>
                        <ShortsIconImage alt="" src={Shorts} openButton={openButton} />
                        Shorts
                        <CloseButtonContainer openMenu={openMenu}>
                            <CloseButtonImage alt="" title="Não tenho interesse" src={CloseIcon} openShorts={openShorts} onClick={() => setOpenShorts(!openShorts)} />
                        </CloseButtonContainer>
                    </ShortsSpanContainer>

                    <Container openButton={openButton}>
                        {displayShorts.map((shortsVideo) => (
                            <ShortsComponent shortsVideo={shortsVideo} />
                        ))}
                    </Container>

                </ShortsContainer>

                :
                <SpanMessageContainer>
                    <SpanMessage>Esta ação vai ficar oculta por 30 dias</SpanMessage>

                    <ReturnContainer openShorts={openShorts} onClick={() => setOpenShorts(!openShorts)}>
                        <span>Desfazer</span>
                    </ReturnContainer>
                </SpanMessageContainer>


            }
            <ShortsLine openShorts={openShorts} />

        </>
    )
}