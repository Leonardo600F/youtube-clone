import { useContext } from 'react';
import { ComponentContext } from '../../context/componentContext';
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
} from './posts-style';

export default function PostsComponents({ post }: any) {

    const { openMenu } = useContext(ComponentContext);

    return (
        <Container>
            <PostBannerContainer>
                <PostBanner>
                    <ChannelImage>{post.icone}

                        <ChannelName>{post.name}</ChannelName>
                        <PostTime>há {post.time} atrás</PostTime>

                    </ChannelImage>


                    <PostText openMenu={openMenu}>{post.text}</PostText>
                    <PostImage openMenu={openMenu} src={post.image} />

                    <ButtonsContainer>

                        <PrimaryButtonsContainer>
                            <LikeButtonContainer>{post.like}</LikeButtonContainer>
                            <LikeViewerContainer>{post.viewer} {post.count}</LikeViewerContainer>
                            <DeslikeButtonContainer>{post.deslike}</DeslikeButtonContainer>
                        </PrimaryButtonsContainer>

                        <SecondButtonsContainer>
                            <ShareButtonContainer>{post.share}</ShareButtonContainer>
                            <CommentsButtonContainer>{post.comments} {post.numbers}</CommentsButtonContainer>
                            <OptionsButtonContainer>{post.options}</OptionsButtonContainer>
                        </SecondButtonsContainer>

                    </ButtonsContainer>
                </PostBanner>
            </PostBannerContainer>
        </Container>
    )
} 