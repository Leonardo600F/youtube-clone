import styled from "styled-components";

export const Container = styled.div`
height: 245px;
width: 100%;
margin-top: 20px;
transition: 0.5s;

@media(max-width: 1559px) {
height: 275px;
width: 424px;
}
`;

export const PostBannerContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
border-radius: 15px;
transition: 0.5s;
&:hover {
   background-color: #ececec;
}
`;

export const PostBanner = styled.div`
width: 96%;
height: 92%;
margin: 8px 0 0 7px;
border-radius: 15px;
border-style: solid;
border-color: #D8D8D8;
border-width: 1px;
cursor: pointer;
background-color: #fff;
`;

export const ChannelImage = styled.div`
display: flex;
margin: 12px 0 0 20px;
width: 90%;
cursor: pointer;
`;

export const ChannelName = styled.span`
display: flex;
align-items: center;
color: #8c8c8c;
cursor: pointer;
font-size: 13px;
margin-left: 10px;
transition: 0.3s;

&:hover {
 color: black;
}

@media(max-width: 1559px) {
font-size: 15px;
}
`;

export const PostTime = styled.span`
display: flex;
align-items: center;
margin-left: 5px;
color: #8c8c8c;
font-size: 12px;
cursor: pointer;
transition: 0.3s;

&:hover {
 color: black;
}

@media(max-width: 1559px) {
font-size: 15px;
}
`;

export const PostText = styled.span`
display: flex;
width: 200px;
height: 120px;
color: #8c8c8c;
font-size: 14px;
margin: 10px 0 0 25px;
cursor: pointer;

@media(max-width: 1559px) {
   width: 207px;   
   height: 130px;
   font-size: 15px;
}
`;

export const PostImage = styled.img`
display: flex;
border-radius: 15px;
width: 125px;
height: 120px;
margin: -125px 0 0 235px;

@media(max-width: 1559px) {
width: 145px;
height: 145px;
margin: -140px 0 0 250px;
}
`;

export const ButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: fit-content;
width: 100%;
margin-top: 13px;
`;

export const PrimaryButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: fit-content;
width: fit-content;
margin-left: 25px;

`;

export const SecondButtonsContainer = styled.div`
display: flex;
align-items: center;
height: fit-content;
width: fit-content;
`;

export const LikeButtonContainer = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
transition: 0.3s;

&:hover {
 background-color: #C8C8C8;
}

@media(max-width: 1559px) {
width: 35px;
height: 35px;
}
`;

export const LikeViewerContainer = styled.div`
display: flex;
width: fit-content;
height: fit-content;
margin: 0 6px 0 6px;

@media(max-width: 1559px) {
margin: 0 10px 0 10px;
}
`;

export const DeslikeButtonContainer = styled.div`
display: flex;
width: 30px;
height: 30px;
border-radius: 50%;
transition: 0.3s;
cursor: pointer;

&:hover {
 background-color: #C8C8C8;
}

@media(max-width: 1559px) {
width: 35px;
height: 35px;
}
`;

export const ShareButtonContainer = styled.div`
display: flex;
width: 40px;
height: 40px;
margin-right: 26px;
border-radius: 50%;
cursor: pointer;
transition: 0.3s;

&:hover {
 background-color: #C8C8C8;
}

@media(max-width: 1559px) {
margin-right: 23px;
}
`;

export const CommentsButtonContainer = styled.div`
display: flex;
width: 65px;
height: 30px;
margin-right: 25px;
border-radius: 20px;
cursor: pointer;
transition: 0.3s;

&:hover {
 background-color: #C8C8C8;
}

@media(max-width: 1559px) {
width: 75px;
height: 30px;
margin-right: 20px;
}
`;

export const OptionsButtonContainer = styled.div`
display: flex;
width: 35px;
height: 35px;
margin-right: 5px;
border-radius: 50%;
cursor: pointer;
transition: 0.3s;

@media(max-width: 1559px) {
margin-right: 10px;
}
`;