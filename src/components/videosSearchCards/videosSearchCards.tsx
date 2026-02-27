import { useContext } from "react";
import { Container, Banner, TitleContainer, TextContainer, Title, TextCard, ChannelContainer, ChannelImage, ResponsiveChannelTitle, ChannelDetails, ResponsiveChannelDetails, DescriptionContainer, ResponsiveTextCard } from "./videosSearchCards-styles";
import { ComponentContext } from "../../context/componentContext";

interface Props {
    title: string;
    thumbnail: string;
    channelImage: string;
    channelName: string;
    details: string;
    description: string;
}


export default function VideosSearchCards(props: Props) {

    const { openMenu } = useContext(ComponentContext);

    return (
        <Container openMenu={openMenu}>

            <Banner openMenu={openMenu} style={{ backgroundImage: `url(${props.thumbnail})` }}></Banner>

            <TitleContainer>
                <TextContainer>
                    <Title openMenu={openMenu}>{props.title}</Title>
                    <TextCard>{props.details}</TextCard>
                </TextContainer>

                <ChannelContainer>
                    <ChannelImage>{props.channelImage}</ChannelImage>
                    <ResponsiveChannelTitle>{props.title}</ResponsiveChannelTitle>
                    <ChannelDetails>{props.channelName}</ChannelDetails>
                    <ResponsiveChannelDetails>{props.channelName} • {props.details} </ResponsiveChannelDetails>
                </ChannelContainer>

                <DescriptionContainer>
                    <TextCard>{props.description}</TextCard>
                    <ResponsiveTextCard>{props.description}</ResponsiveTextCard>
                </DescriptionContainer>

            </TitleContainer>

        </Container>
    )
}