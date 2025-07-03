import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
height: ${({ openMenu }) => openMenu ? '525px' : '600px'};
width: 100%;

@media(max-width: 1559px) {
height: ${({ openMenu }) => openMenu ? '525px' : '540px'};
}
`;

export const BannerContainer = styled.div<{ openMenu: boolean }>`
height: ${({ openMenu }) => openMenu ? '500px' : '550px'};
width: ${({ openMenu }) => openMenu ? '245px' : '260px'};
margin-top: 18px;
border-radius: 15px;
cursor: pointer;
background-color: #fff;

&:hover {
   background-color: #ececec;
}

@media(max-width: 1920px) {
height: ${({ openMenu }) => openMenu ? '525px' : '550px'};
width: ${({ openMenu }) => openMenu ? '270px' : '295px'};
}

@media(max-width: 1559px) {
height: ${({ openMenu }) => openMenu ? '500px' : '520px'};
width: ${({ openMenu }) => openMenu ? '245px' : '240px'};
border-radius: 20px;
}
`;

export const ImageBanner = styled.img<{ openMenu: boolean }>`
height: ${({ openMenu }) => openMenu ? '400px' : '450px'};
width: ${({ openMenu }) => openMenu ? '225px' : '240px'};
object-fit: cover;
border-radius: 15px;
margin-top: 8px;
margin-left: 10px;

@media(max-width: 1920px) {
height: ${({ openMenu }) => openMenu ? '415px' : '440px'};
width: 96%;
margin-top: 5px;
margin-left: 5px;
}

@media(max-width: 1559px) {
height: ${({ openMenu }) => openMenu ? '400px' : '420px'};
width: ${({ openMenu }) => openMenu ? '225px' : '220px'};
object-fit: cover;
border-radius: 20px;
margin-top: 8px;
margin-left: 10px;
}
`;

export const TitleContainer = styled.div`
width: 90%;
margin-left: 9px;
margin-top: 5px;

@media(max-width: 1920px) {
width: 88%;
margin-left: 20px;
}

@media(max-width: 1559px) {
width: 84%;
margin-left: 20px;
}
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-left: 10px;
`;

export const Title = styled.span<{ openMenu: boolean }>`
display: flex;
font-weight: 700;
width: fit-content;
font-size: 15px;
color: #0f0f0f;

@media(max-width: 1920px) {
   font-size: ${({ openMenu }) => openMenu ? '16px' : '17px'};
}

@media(max-width: 1559px) {
   font-size: 14px;
}
`;

export const TextCard = styled.div<{ openMenu: boolean }>`
font-size: ${({ openMenu }) => openMenu ? '13px' : '16px'};
width: fit-content;
margin-top: 10px;
color: #8c8c8c;
cursor: pointer;

@media(max - width: 1920px) {
   font-size: ${({ openMenu }) => openMenu ? '15px' : '16px'};
}

@media(max - width: 1559px) {
   font-size: ${({ openMenu }) => openMenu ? '13px' : '14px'};
}
`;