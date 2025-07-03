import styled from "styled-components";

export const Container = styled.div`
width: 340px;
height: 310px;
border-radius: 12px;
margin-left: 20px;
cursor: pointer;

&:hover {
background-color: #ececec;;
}
`;

export const Banner = styled.img`
width: 95%;
height: 200px;
margin-top: 7px;
margin-left: 8px;
border-radius: 12px;
`;

export const TitleContainer = styled.div`
display: flex;
  width: 100%;
  margin-top: 7px;
`;

export const ChannelImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 5px;
margin-right: 10px;
border-radius: 50%;
min-width: 35px;
max-width: 35px;
min-height: 35px;
max-height: 35px;
background-color: beige;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const Title = styled.span`
display: -webkit-box;
font-weight: 600;
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 2; 
-webkit-box-orient: vertical;
color: #0f0f0f;
`;

export const TextCard = styled.span`
display: -webkit-box;
-webkit-line-clamp: 2; 
-webkit-box-orient: vertical;
font-size: 15px;
overflow: hidden;
text-overflow: ellipsis;
color: #8c8c8c;
`;