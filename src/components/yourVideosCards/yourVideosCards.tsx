import { UserContext } from '../../context/userContext';
import { useContext } from "react";

import TrashIcon from "../../assets/icon-trash.png";

import {
    Banner,
    ChannelImage,
    DeleteVideoButton,
    DeleteVideoButtonIcon,
    Container,
    TextCard,
    TextContainer,
    Title,
    TitleContainer,
    ResponsiveTitleContainer,
    ResponsiveChannelName,
    ResponsiveDescription,
    ResponsivePublishedData
} from './yourVideosCards-style'

interface Props {
    videoId: string
    title: string
    thumbnail: string
    channelImage: string
    channelName: string
    details: string
    publishedAt: string
}

export default function YourVideosCards(props: Props) {

    const { deleteVideo } = useContext(UserContext);

    const deleteVideoFunction = () => {
        if (!props.videoId) {
            alert('Não foi possível identificar o vídeo para excluir.');
            return;
        }
        deleteVideo(props.videoId)
    }

    return (
        <Container>

            <DeleteVideoButton title="Apagar vídeo enviado." onClick={deleteVideoFunction}>
                <DeleteVideoButtonIcon src={TrashIcon} />
            </DeleteVideoButton>

            <Banner alt="thumbnail" src={props.thumbnail} />

            <TitleContainer>
                <ChannelImage>{props.channelImage}</ChannelImage>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.details}</TextCard>
                    <TextCard style={{ fontSize: '13px', marginTop: '5px' }}>{props.publishedAt}</TextCard>
                </TextContainer>
            </TitleContainer>

            <ResponsiveTitleContainer>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <ChannelImage>{props.channelImage}</ChannelImage>
                    <ResponsiveChannelName>{props.channelName}</ResponsiveChannelName>
                    <ResponsivePublishedData><span>{props.publishedAt}</span></ResponsivePublishedData>
                    <ResponsiveDescription><span>{props.details}</span></ResponsiveDescription>

                </TextContainer>
            </ResponsiveTitleContainer>

        </Container>
    )
}