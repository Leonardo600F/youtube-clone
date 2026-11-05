import { useUser } from '../../context/userContext';
import { useState } from "react";

import TrashIcon from "../../assets/icon-trash.png";

import {
    Banner,
    ChannelImage,
    DeleteVideoButton,
    DeleteVideoButtonIcon,
    DeleteVideoModal,
    DeleteButton,
    BackButton,
    Modal,
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

export default function YourVideosCards({
    videoId,
    title,
    thumbnail,
    channelImage,
    channelName,
    details,
    publishedAt
}: Props) {

    const { deleteVideo } = useUser();

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const deleteVideoFunction = async () => {
        if (!videoId) {
            alert('Não foi possível identificar o vídeo para excluir.');
            return;
        }

        const success = await deleteVideo(videoId);

        if (success) {
            setIsDeleteModalOpen(false);
        }
    };

    return (
        <>
            <Container>

                <DeleteVideoButton title="Apagar vídeo enviado." onClick={() => setIsDeleteModalOpen(true)}>
                    <DeleteVideoButtonIcon src={TrashIcon} />
                </DeleteVideoButton>

                <Banner alt="thumbnail" src={thumbnail} />

                <TitleContainer>
                    <ChannelImage>{channelImage}</ChannelImage>
                    <TextContainer>
                        <Title>{title}</Title>
                        <TextCard>{details}</TextCard>
                        <TextCard style={{ fontSize: '13px', marginTop: '5px' }}>{publishedAt}</TextCard>
                    </TextContainer>
                </TitleContainer>

                <ResponsiveTitleContainer>
                    <TextContainer>
                        <Title>{title}</Title>
                        <ChannelImage>{channelImage}</ChannelImage>
                        <ResponsiveChannelName>{channelName}</ResponsiveChannelName>
                        <ResponsivePublishedData><span>{publishedAt}</span></ResponsivePublishedData>
                        <ResponsiveDescription><span>{details}</span></ResponsiveDescription>

                    </TextContainer>
                </ResponsiveTitleContainer>

            </Container>

            <Modal isDeleteModalOpen={isDeleteModalOpen}>

                <DeleteVideoModal isDeleteModalOpen={isDeleteModalOpen}>
                    <span>Você deseja excluir este vídeo?</span>

                    <DeleteButton onClick={deleteVideoFunction}>
                        <span>Sim, excluir</span>
                    </DeleteButton>

                    <BackButton onClick={() => setIsDeleteModalOpen(false)}>
                        <span>Não, voltar</span>
                    </BackButton>

                </DeleteVideoModal>

            </Modal>

        </>
    )
}