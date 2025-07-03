import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
 width: 100%;
 height: ${({ openMenu }) => openMenu ? '420px' : '400px'};
 border-radius: 12px;
 cursor: pointer;
 background-color: #fff;

   @media(max-width: 1920px) {
 height: ${({ openMenu }) => openMenu ? '430px' : '370px'};
 }

  @media(max-width: 1559px) {
 height: ${({ openMenu }) => openMenu ? '340px' : '345px'};
 }
`;

export const BannerContainer = styled.div`
height: 100%;
width: 100%;
border-radius: 12px;
transition: 0.5s;

&:hover {
   background-color: #ececec;
}
`;

export const ImageBanner = styled.img<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? '97%' : '96%'};
height: ${({ openMenu }) => openMenu ? '290px' : '270px'};
margin-left: ${({ openMenu }) => openMenu ? '8px' : '10px'};
margin-top: 6px;
border-radius: 12px;
object-fit: cover;

@media(max-width: 1920px) {
width: ${({ openMenu }) => openMenu ? '97%' : '96%'};
height: ${({ openMenu }) => openMenu ? '300px' : '230px'};
margin-left: ${({ openMenu }) => openMenu ? '10px' : '10px'};
}

@media(max-width: 1559px) {
width: 96%;
height: ${({ openMenu }) => openMenu ? '215px' : '220px'};
margin-left: 9px;
}
`;

export const TitleContainer = styled.div`
display: flex;
height: 100px;
width: 92%;
margin-left: 19px;
border-radius: 20px;
`;

export const ChannelImage = styled.div<{ openMenu: boolean }>`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;
margin-right: 10px;
min-width: 40px;
max-width: 40px;
min-height: 40px;
max-height: 40px;
border-radius: 50%;
background-color: beige;
`;

export const TextContainer = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  margin-top: 5px;
`;

export const Title = styled.span<{ openMenu: boolean }>`
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
width: 100%;
text-overflow: ellipsis;
font-size: 16px;
font-weight: 600;
color: #0f0f0f;
overflow: hidden;

@media(max-width: 1559px) {
-webkit-line-clamp: ${({ openMenu }) => openMenu ? '1' : '2'};
margin-top: 6px;
}
`;

export const ChannelName = styled.span`
display: flex;
width: fit-content;
margin-top: 5px;
font-size: 15px;
color: #8c8c8c;
`;

export const DetailsCard = styled.span`
display: flex;
width: fit-content;
margin-top: 5px;
font-size: 15px;
color: #8c8c8c;
`;