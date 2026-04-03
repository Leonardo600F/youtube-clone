import { UserContext } from '../../context/userContext';
import { useState, useContext } from "react";

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

export default function YourVideosCards(props: Props) {

    const { deleteVideo } = useContext(UserContext);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const deleteVideoFunction = () => {
        if (!props.videoId) {
            alert('Não foi possível identificar o vídeo para excluir.');
            return;
        } else {
            setIsDeleteModalOpen(true);
            deleteVideo(props.videoId)
        }

    }

    return (
        <>
            <Container>

                <DeleteVideoButton title="Apagar vídeo enviado." onClick={() => setIsDeleteModalOpen(true)}>
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