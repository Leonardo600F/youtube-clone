import axios from "axios";
import moment from "moment";
import { Container, HomeContainer, MainContainer } from './home-style';
import { useState, useEffect, useContext } from "react";
import { ComponentContext } from "../../context/componentContext";
import { useCategoryContext } from "../../context/searchCategories";
import Menu from "../../components/menu/menu";
import Categories from "../categories/categories";
import VideosCardsComponent from "../../components/VideosCardsComponents/videosCardsComponent";
import ShortsHome from "../shortsHome/shortsHome";
import PostsHome from "../PostsHome/postsHome";

export default function Home() {

    const { openMenu } = useContext(ComponentContext);

    interface Videos {
        id: string;
        snippet: {
            title: string;
            thumbnails: {
                high: {
                    url: string;
                }
                maxres: {
                    url: string;
                }
            }
            channelTitle: string;
            publishedAt: string;
        },
        statistics: {
            viewCount: string;
        }
    }

    const [videos, setVideos] = useState<Videos[]>([]);
    const { categoryId } = useCategoryContext()

    useEffect(() => {
        load()
    }, [categoryId])

    const API_KEY = 'AIzaSyBxEcjsvy6W7j5rt6WaR0Ixix-gC4yQJJE';

    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=45&regionCode=br&videoCategoryId=${categoryId}&key=${API_KEY}`;

    async function load() {
        try {
            const resposta = await axios.get(url)
            setVideos(resposta.data.items)
        } catch (erro) {
            console.log(erro)
        }
    }

    function formatViewCount(viewCount: number): string {
        if (viewCount >= 1000000) {
            return `${(viewCount / 1000000).toFixed(0)} mi de visualizações`;
        } else if (viewCount >= 1000) {
            return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
        } else {
            return `${viewCount} visualizações`;
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
            return `${diffDays} dias`;
        } else if (diffDays <= 30) {
            const diffWeeks = Math.floor(diffDays / 7);
            if (diffWeeks === 1) {
                return 'há 1 semana';
            } else {
                return `${diffWeeks} semanas`;
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
                return `${diffYears} anos`;
            }
        }
    }

    return (
        <>
            <Menu />
            <MainContainer openMenu={openMenu}>
                <Categories />
                <Container openMenu={openMenu}>
                    {videos.map((video) => (
                        <VideosCardsComponent
                            title={video.snippet.title}
                            thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                            channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
                            channelName={video.snippet.channelTitle}
                            details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
                            key={video.id}
                        />
                    ))}
                </Container>

                <ShortsHome />
                <PostsHome />

            </MainContainer>
        </>
    )
}