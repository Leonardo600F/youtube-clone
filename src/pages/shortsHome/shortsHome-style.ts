import styled from "styled-components";

export const ShortsContainer = styled.div<{ openMenu: boolean }>`
height: fit-content;
width: 100%;
margin-top: 40px;
background-color: #fff;

@media(max-width: 1920px) {
height: 605px;
width: 100%;
}
`;

export const ShortsSpanContainer = styled.div<{ openButton: boolean }>`
display: ${({ openButton }) => openButton ? 'flex' : 'none'};
width: fit-content;
align-items: center;
font-weight: 700;
font-size: 20px;
cursor: default;

@media(max-width: 1559px) {
font-size: 18px;
}
`;

export const ShortsIconImage = styled.img<{ openButton: boolean }>`
width: ${({ openButton }) => openButton ? '40px' : '0'};
margin-left: ${({ openButton }) => openButton ? '10px' : '0'};
border-radius: 50px;

@media(max-width: 1559px) {
width: ${({ openButton }) => openButton ? '35px' : '0'};
}
`;

export const Container = styled.div<{ openButton: boolean }>`
display: ${({ openButton }) => openButton ? 'grid' : 'none'};
grid-template-columns: repeat(9, 1fr);
column-gap: 3px;
width: 100%;
max-width: 97%;

@media(max-width: 1920px) {
column-gap: 8px;
}

@media(max-width: 1559px) {
grid-template-columns: repeat(5, 1fr);
}
`;

export const ShortsLine = styled.div<{ openShorts: boolean }>`
width: ${({ openShorts }) => openShorts ? '98%' : '0'};
background-color: #989898;
height: 1px;
margin-top: 5px;
`;

export const CloseButtonContainer = styled.div<{ openMenu: boolean }>`
display: flex;
width: 35px;
height: 35px;
border-radius: 50%;
margin-left: 2200px;
transition: 0.3s;
cursor: pointer;

&:hover {
background-color: #d3d3d3;
}

@media(max-width: 1920px) {
right: 30px;
}

@media(max-width: 1559px) {
right: 100px;
}
`;

export const CloseButtonImage = styled.img<{ openShorts: boolean }>`
display: flex;
width: 30px;
height: 30px;
margin: 4px 0 0 2px;
border-radius: 50%;
`;

export const SpanMessageContainer = styled.div`
height: 50px;
width: 98%;
margin: 30px 0 0 25px;
cursor: default;

span {
color: grey;
font-size: 15px;
}
`;

export const ReturnContainer = styled.div<{ openShorts: boolean }>`
height: 35px;
width: 90px;
margin: -28px 0px 0px 260px;
border-radius: 20px;
transition: 0.5s;
cursor: pointer;

&:hover {
   background-color: #007FFF;
}

span {
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
font-size: 17px;
font-weight: 500;
border-radius: 20px;

&:hover {color: white;}
}
`;