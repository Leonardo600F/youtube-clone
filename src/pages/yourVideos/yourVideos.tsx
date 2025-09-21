import { useContext, useState, useRef } from "react";
import { UserContext } from '../../context/userContext'
import { ComponentContext } from "../../context/componentContext";
import YourVideosCards from "../../components/yourVideosCards/yourVideosCards";

import {
    Container,
    YourVideosContainer,
    UserContainer,
    UserProfile,
    UserName,
    Modal,
    ModalContent,
    ModalTitle,
    CloseButton,
    ThumbnailURL,
    VideoTitle,
    VideoDescription,
    AddVideoButton,
    ClearButton,
    MessageContainer,
    EmptyInput
} from './yourVideos-style';
import Menu from "../../components/menu/menu";

export default function YourVideos() {

    interface Videos {
        id: string
        title: string
        thumbnail: string
        description: string
        publishedAt: string
    }

    const { openMenu } = useContext(ComponentContext);

    const { user, userVideos, createVideos, token } = useContext(UserContext)


    const USER_ID = user?.user_id;

    console.log('USER_ID obtido:', USER_ID);

    const [thumbnail, setThumbnail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [hideModal, setHideModal] = useState(false);

    const thumbnailRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    const [thumbnailValid, setThumbnailValid] = useState(true);
    const [titleValid, setTitleValid] = useState(true);
    const [descriptionValid, setDescriptionValid] = useState(true);

    const sendVideo = () => {
        const date: Date = new Date();

        if (!USER_ID) {
            alert('Erro: ID do usuário não encontrado. Por favor, faça login novamente.');
            return;
        }

        if (thumbnail.trim() !== '') {
            setThumbnailValid(true);
        }
        if (title.trim() !== '') {
            setTitleValid(true);
        }
        if (description.trim() !== '') {
            setDescriptionValid(true);
        }
        if (thumbnail.trim() === '' && title.trim() === '' && description.trim() === '') {
            setThumbnailValid(false);
            setTitleValid(false);
            setDescriptionValid(false);
            if (thumbnailRef.current) {
                thumbnailRef.current.focus();
            }
        } else if (thumbnail.trim() === '') {
            setThumbnailValid(false);
            if (thumbnailRef.current) {
                thumbnailRef.current.focus();
            }
        } else if (title.trim() === '') {
            setTitleValid(false);
            if (titleRef.current) {
                titleRef.current.focus();
            }
        } else if (description.trim() === '') {
            setThumbnailValid(false);
            if (descriptionRef.current) {
                descriptionRef.current.focus();
            }
        }
        else {
            createVideos(token, USER_ID, thumbnail, title, description, date);
            clearInputs();
            setHideModal(true)

        }
    }

    const clearInputs = () => {
        if (thumbnailRef.current) {
            thumbnailRef.current.value = '';
            thumbnailRef.current.focus();
            setThumbnail('')
        }
        if (titleRef.current) {
            titleRef.current.value = '';
            setTitle('')
        }
        if (descriptionRef.current) {
            descriptionRef.current.value = '';
            setDescription('')
        }
    }

    const closeModal = () => {
        clearInputs();
        setThumbnailValid(true);
        setTitleValid(true);
        setDescriptionValid(true);
        setHideModal(true)
    }

    function getTimeDifference(publishedAt: string): string {
        const diff = Date.now() - Date.parse(publishedAt);
        const minute = 60 * 1000;
        const hour = 60 * minute;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30 * day;
        const year = 12 * month;

        if (diff < minute * 5) {
            return "Agora";
        } else if (diff < hour) {
            const minutes = Math.floor(diff / minute);
            return `Há ${minutes} ${minutes < 2 ? "minuto" : "minutos"}`;
        } else if (diff < day) {
            const hours = Math.floor(diff / hour);
            return `Há ${hours} ${hours < 2 ? "hora" : "horas"}`;
        } else if (diff < week) {
            const days = Math.floor(diff / day);
            return `Há ${days} ${days < 2 ? "dia" : "dias"}`;
        } else if (diff < month) {
            const weeks = Math.floor(diff / week);
            return `Há ${weeks} ${weeks < 2 ? "semana" : "semanas"}`;
        } else if (diff < year) {
            const months = Math.floor(diff / month);
            return `Há ${months} ${months < 2 ? "mês" : "meses"}`;
        } else {
            const years = Math.floor(diff / year);
            return `Há ${years} ${years < 2 ? "ano" : "anos"}`;
        }
    }

    return (
        <>
            <Menu />
            <YourVideosContainer>

                <Container openMenu={openMenu}>
                    <UserContainer>
                        <UserProfile>{user && user.name ? user.name.charAt(0).toUpperCase() : ''}</UserProfile>
                        <UserName>{user && user.name ? user.name : ''}</UserName>
                        <AddVideoButton onClick={() => setHideModal(false)}>Cadastrar vídeo</AddVideoButton>

                        <Modal hideModal={hideModal}>
                            <ModalContent>
                                <CloseButton onClick={closeModal}>X</CloseButton>
                                <ModalTitle>Enviar um novo vídeo</ModalTitle>
                                <ThumbnailURL
                                    type="text"
                                    placeholder="URL"
                                    onChange={(e) => setThumbnail(e.target.value)}
                                    maxLength={200}
                                    ref={thumbnailRef}
                                    valid={thumbnailValid}
                                />
                                <MessageContainer>
                                    <EmptyInput valid={thumbnailValid}>
                                        Digite a URL da thumbnail
                                    </EmptyInput>
                                </MessageContainer>
                                <VideoTitle
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Título do vídeo"
                                    maxLength={100}
                                    ref={titleRef}
                                    valid={titleValid}
                                />
                                <MessageContainer>
                                    <EmptyInput valid={titleValid}>
                                        Digite o título do vídeo
                                    </EmptyInput>
                                </MessageContainer>
                                <VideoDescription
                                    type="text"
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Descrição do vídeo"
                                    maxLength={200}
                                    ref={descriptionRef}
                                    valid={descriptionValid}
                                />
                                <MessageContainer>
                                    <EmptyInput valid={descriptionValid}>
                                        Digite a descrição do vídeo
                                    </EmptyInput>
                                </MessageContainer>

                                <AddVideoButton onClick={sendVideo}>Adicionar um vídeo</AddVideoButton>
                                <ClearButton onClick={clearInputs}>Limpar</ClearButton>
                            </ModalContent>
                        </Modal>
                    </UserContainer>
                    {Array.isArray(userVideos) ? (
                        userVideos.map((video: Videos) =>
                            <YourVideosCards
                                title={video.title}
                                thumbnail={video.thumbnail}
                                channelImage={user && user.name ? user.name.charAt(0).toUpperCase() : ''}
                                details={video.description}
                                publishedAt={getTimeDifference(video.publishedAt)}
                                key={video.id}
                            />)
                    )
                        :
                        (
                            <h1>Esse canal não possui vídeos</h1>
                        )}
                </Container>


            </YourVideosContainer>
        </>
    )
}