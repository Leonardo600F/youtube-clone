import {
    Banner,
    ChannelImage,
    Container,
    TextCard,
    TextContainer,
    Title,
    TitleContainer
} from './yourVideosCards-style'

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    details: string
    publishedAt: string
}

export default function YourVideosCards(props: Props) {

    return (
        <Container>
            <Banner alt="thumbnail" src={props.thumbnail} />
            <TitleContainer>
                <ChannelImage>
                    {props.channelImage}
                </ChannelImage>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.details}</TextCard>
                    <TextCard style={{ fontSize: '13px', marginTop: '5px' }}>{props.publishedAt}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}