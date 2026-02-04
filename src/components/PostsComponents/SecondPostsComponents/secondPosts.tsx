import { useContext } from "react";
import { ComponentContext } from "../../../context/componentContext";
import {
    Container,
    PostBannerContainer,
    PostBanner,
    ChannelImage,
    ChannelName,
    PostTime,
    PostText,
    PostImage,
    ButtonsContainer,
    PrimaryButtonsContainer,
    SecondButtonsContainer,
    LikeButtonContainer,
    LikeViewerContainer,
    DeslikeButtonContainer,
    ShareButtonContainer,
    CommentsButtonContainer,
    OptionsButtonContainer
} from "./secondPosts-style";

export default function SecondPostsComponents({ secondPosts }: any) {
    const { openMenu, openPosts } = useContext(ComponentContext);

    return (
        <Container openMenu={openMenu}>
            <PostBannerContainer>
                <PostBanner openMenu={openMenu}>
                    <ChannelImage openMenu={openMenu}>
                        {secondPosts.icone}
                        <ChannelName>{secondPosts.name}</ChannelName>
                        <PostTime>há {secondPosts.time} atrás</PostTime>
                    </ChannelImage>

                    <PostText openMenu={openMenu}>{secondPosts.text}</PostText>
                    <PostImage openMenu={openMenu} src={secondPosts.image} />

                    <ButtonsContainer>
                        <PrimaryButtonsContainer openMenu={openMenu}>
                            <LikeButtonContainer>{secondPosts.like}</LikeButtonContainer>
                            <LikeViewerContainer>{secondPosts.viewer} {secondPosts.count}</LikeViewerContainer>
                            <DeslikeButtonContainer >{secondPosts.deslike}</DeslikeButtonContainer>
                        </PrimaryButtonsContainer>

                        <SecondButtonsContainer>
                            <ShareButtonContainer>{secondPosts.share}</ShareButtonContainer>
                            <CommentsButtonContainer>
                                {secondPosts.comments} {secondPosts.numbers} {secondPosts.secondCount}
                            </CommentsButtonContainer>
                            <OptionsButtonContainer>{secondPosts.options}</OptionsButtonContainer>
                        </SecondButtonsContainer>
                    </ButtonsContainer>
                </PostBanner>
            </PostBannerContainer>
        </Container>
    );
}