import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from '../../context/userContext'
import { ComponentContext } from "../../context/componentContext";
import { getTimeDifference } from "../../utils/getTimeDifference";
import YourVideosCards from "../../components/yourVideosCards/yourVideosCards";
import Menu from "../../components/menu/menu";
import ResponsiveMenu from "../../components/responsiveMenu/responsiveMenu";

import {

    Container,
    YourVideosContainer,
    UserContainer,
    UserProfile,
    UserName,
    UserNickname,
    Modal,
    ModalContent,
    ModalTitle,
    CloseButton,
    CloseImg,
    ThumbnailURL,
    VideoTitle,
    VideoDescription,
    AddVideoButton,
    ModalAddVideoButton,
    ClearButton,
    MessageContainer,
    EmptyInput,
    ModalLine

} from './yourVideos-style';

import CloseIcon from "../../assets/icon-close.png";

export default function YourVideos() {

    interface Videos {
        id?: string;
        video_id?: string;
        title: string;
        thumbnail: string;
        description: string;
        publishedAt: string;
    }

    const { openMenu } = useContext(ComponentContext);
    const { user, userVideos, createVideos } = useContext(UserContext);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const USER_ID = user?.user_id;

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
        if (!USER_ID) {
            alert('Erro: ID do usuário não encontrado. Por favor, faça login novamente.');
            return;
        }

        let isValid = true;

        if (thumbnail.trim() === '') {
            setThumbnailValid(false);
            isValid = false;
        } else {
            setThumbnailValid(true);
        }

        if (title.trim() === '') {
            setTitleValid(false);
            isValid = false;
        } else {
            setTitleValid(true);
        }

        if (description.trim() === '') {
            setDescriptionValid(false);
            isValid = false;
        } else {
            setDescriptionValid(true);
        }

        if (!isValid) {
            if (thumbnail.trim() === '') {
                thumbnailRef.current?.focus();
            } else if (title.trim() === '') {
                titleRef.current?.focus();
            } else if (description.trim() === '') {
                descriptionRef.current?.focus();
            }

            return;
        }

        const date = new Date();

        createVideos(USER_ID, thumbnail, title, description, date);
        clearInputs();
        setHideModal(true);
    };


    const clearInputs = () => {
        setThumbnail('');
        setTitle('');
        setDescription('');

        thumbnailRef.current?.focus();
    };


    const closeModal = () => {
        clearInputs();
        setThumbnailValid(true);
        setTitleValid(true);
        setDescriptionValid(true);
        setHideModal(true)
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const ResponsiveMenuApplication =
        windowWidth >= 1313 ? <Menu /> : <ResponsiveMenu />;

    return (
        <>
            {ResponsiveMenuApplication}
            <YourVideosContainer>

                <Container openMenu={openMenu}>
                    <UserContainer>
                        <UserProfile>{user && user.name ? user.name.charAt(0).toUpperCase() : ''}</UserProfile>
                        <UserName>{user && user.name ? user.name : ''} {user && user.surname ? user.surname : ''}</UserName>
                        <UserNickname>{user && user.nickname ? user.nickname : ''}</UserNickname>
                        <AddVideoButton onClick={() => setHideModal(false)}>Cadastrar vídeo</AddVideoButton>

                        <Modal hideModal={hideModal}>
                            <ModalContent>

                                <ModalTitle>Enviar um vídeo</ModalTitle>

                                <CloseButton onClick={closeModal}>
                                    <CloseImg src={CloseIcon} />
                                </CloseButton>

                                <ModalLine />

                                <ThumbnailURL
                                    type="text"
                                    value={thumbnail}
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
                                    value={title}
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
                                    value={description}
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

                                <ModalAddVideoButton onClick={sendVideo}>Adicionar um vídeo</ModalAddVideoButton>
                                <ClearButton onClick={clearInputs}>Limpar</ClearButton>
                            </ModalContent>
                        </Modal>
                    </UserContainer>
                    {Array.isArray(userVideos) && userVideos.length > 0 ? (
                        userVideos.map((video: Videos) =>
                            <YourVideosCards
                                videoId={video.video_id || video.id || ''}
                                title={video.title}
                                thumbnail={video.thumbnail}
                                channelImage={user && user.nickname ? user.nickname.charAt(0).toUpperCase() : ''}
                                channelName={user && user.nickname ? user.nickname : ''}
                                details={video.description}
                                publishedAt={getTimeDifference(video.publishedAt)}
                                key={video.video_id || video.id}
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