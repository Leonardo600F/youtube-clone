import { useContext } from "react"
import { ComponentContext } from "../../context/componentContext";
import { BannerContainer, Container, ImageBanner, TitleContainer, TextContainer, Title, TextCard } from "./shortsComponent-style";


export default function ShortsComponent({ shortsVideo }: any) {

    const { openMenu } = useContext(ComponentContext);

    return (
        <Container openMenu={openMenu}>
            <BannerContainer openMenu={openMenu}>
                <ImageBanner src={shortsVideo.banner} openMenu={openMenu} />
                <TitleContainer>
                    <TextContainer>
                        <Title openMenu={openMenu}>{shortsVideo.title}</Title>
                        <TextCard openMenu={openMenu}>{shortsVideo.views} de visualizações</TextCard>
                    </TextContainer>
                </TitleContainer>
            </BannerContainer>
        </Container>
    )
}