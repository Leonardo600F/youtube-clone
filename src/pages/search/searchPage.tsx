import axios from "axios";
import moment from "moment";
import VideosSearchCards from "../../components/videosSearchCards/videosSearchCards";
import { useState, useEffect, useContext, useMemo } from "react";
import { ComponentContext } from "../../context/componentContext";
import { useSearchContext } from "../../context/searchContext";
import { Container, SearchContainer } from "./searchPage-style";
import Menu from "../../components/menu/menu";
import ResponsiveMenu from "../../components/responsiveMenu/responsiveMenu";

export default function SearchPage() {

    interface Videos {
        id: { videoId: string }

        snippet: {
            title: string;
            thumbnails: { high: { url: string } }
            channelTitle: string;
            publishedAt: string;
            description: string;
        }
    }

    const { openMenu } = useContext(ComponentContext);
    const { search } = useSearchContext();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (search !== '') { load() }
    }, [search])

    const [videosApi, setVideosApi] = useState<Videos[]>([]);
    const API_KEY = 'AIzaSyBxEcjsvy6W7j5rt6WaR0Ixix-gC4yQJJE';
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=48&&key=${API_KEY}`

    async function load() {
        if (search !== '') {
            try {
                const resposta = await axios.get(URL);
                setVideosApi(resposta.data.items);
            }

            catch (error) { console.log(error) }
        }
    }

    function getPublishedTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days');

        if (diffDays <= 0) {
            return 'hoje';
        } else if (diffDays === 1) {
            return 'há 1 dia';
        } else if (diffDays <= 7) {
            return `há ${diffDays}`;
        } else if (diffDays <= 30) {
            const diffWeeks = Math.floor(diffDays / 7);
            if (diffWeeks === 1) {
                return 'há 1 semana';
            } else {
                return `há ${diffWeeks} semanas`;
            }
        } else if (diffDays <= 365) {
            const diffMonths = Math.floor(diffDays / 30);
            if (diffMonths === 1) {
                return 'há 1 mês';
            } else {
                return `há ${diffMonths} meses`;
            }
        } else {
            const diffYears = Math.floor(diffDays / 365);
            if (diffYears === 1) {
                return 'há 1 ano';
            } else {
                return `há ${diffYears} anos`;
            }
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const ResponsiveMenuApplication = useMemo(() => {
        if (windowWidth >= 1313) {
            return (
                <Menu />
            )
        } else {
            return (
                <ResponsiveMenu />
            )
        }

    }, [windowWidth])

    return (
        <>
            {ResponsiveMenuApplication}
            <SearchContainer>

                <Container openMenu={openMenu}>
                    {videosApi.map((video) => (
                        <VideosSearchCards
                            title={video.snippet.title}
                            thumbnail={video.snippet.thumbnails.high?.url}
                            channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
                            channelName={video.snippet.channelTitle}
                            details={`90 mil visualizações • ${getPublishedTime(video.snippet.publishedAt)}`}
                            description={video.snippet.description}
                            key={video.id.videoId}
                        />
                    ))}
                </Container>

            </SearchContainer>

        </>

    )
}