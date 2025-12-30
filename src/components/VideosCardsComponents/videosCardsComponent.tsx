import { useContext } from "react";
import { ComponentContext } from "../../context/componentContext";
import {
    Container,
    BannerContainer,
    ImageBanner,
    TitleContainer,
    ChannelImage,
    TextContainer,
    Title,
    ChannelName,
    DetailsCard
} from "./videosCardsComponent-style";

interface Props {
    thumbnail: string
    channelImage: string
    title: string
    channelName: string
    details: string
}

export default function VideosCardsComponent(props: Props) {

    const { openMenu } = useContext(ComponentContext);

    return (
        <Container openMenu={openMenu}>

            <BannerContainer>

                <ImageBanner alt="thumbnail" src={props.thumbnail} openMenu={openMenu} />

                <TitleContainer>

                    <ChannelImage openMenu={openMenu}>{props.channelImage}</ChannelImage>
                    <TextContainer>
                        <Title openMenu={openMenu}>{props.title}</Title>
                        <ChannelName>{props.channelName}</ChannelName>

                        <DetailsCard>{props.details}</DetailsCard>

                    </TextContainer>

                </TitleContainer>
            </BannerContainer>
        </Container>
    )
}