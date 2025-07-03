import { Container, Banner, TitleContainer, TextContainer, Title, TextCard, ChannelContainer, ChannelImage, DescriptionContainer } from "./videosSearchCards-styles";

interface Props {
    title: string;
    thumbnail: string;
    channelImage: string;
    channelName: string;
    details: string;
    description: string;
}


export default function VideosSearchCards(props: Props) {
    return (
        <Container>

            <Banner style={{ backgroundImage: `url(${props.thumbnail})` }}></Banner>

            <TitleContainer>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.details}</TextCard>
                </TextContainer>

                <ChannelContainer>
                    <ChannelImage>
                        {props.channelImage}
                    </ChannelImage>
                    <TextCard>{props.channelName}</TextCard>
                </ChannelContainer>

                <DescriptionContainer>
                    <TextCard>{props.description}</TextCard>
                </DescriptionContainer>

            </TitleContainer>

        </Container>
    )
}