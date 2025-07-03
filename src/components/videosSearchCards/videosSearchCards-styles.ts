import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 90%;
column-gap: 15px;
cursor: pointer;
margin: -45px 0 45px 30%;

@media(max-width: 600px) {
flex-direction: column;
width: 98%;
}
`;

export const Banner = styled.div`
min-width: 450px;
max-width: 450px;
height: 290px;
border-radius: 12px;
background-size: cover;
background-position: 50% 50%;

@media(max-width: 600px) {
min-width: 480px;
max-width: 480px;
height: 260px;
}

@media(max-width: 414px) {
    min-width: 100%;
    max-width: 100%;
    height: 190px;
}
`;

export const TitleContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;

@media(max-width: 600px) {
 margin-top: 5px;
}
`;

export const ChannelImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-width: 35px;
max-width: 35px;
min-height: 35px;
max-height: 35px;
font-size: 15px;
margin-right: 10px;
border-radius: 50%;
background-color: beige;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const ChannelContainer = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
`;

export const Title = styled.span`
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
font-weight: 500;
font-size: 20px;
text-align: justify;
overflow: hidden;
text-overflow: ellipsis;
color: #0f0f0f;
`;

export const TextCard = styled.span`
font-size: 15px;
color: #8c8c8c;
`;

export const DescriptionContainer = styled.div`
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
text-overflow: ellipsis;
text-align: justify;
margin-top: 20px;

@media(max-width: 600px) {
margin-top: 0px;
}
`;