import styled from "styled-components";

interface OpenMenu { openMenu: boolean }
interface OpenButton { openButton: boolean }
interface OpenShorts { openShorts: boolean }

export const ShortsContainer = styled.div<OpenMenu>`
height: fit-content;
width: 100%;
margin-top: 40px;
background-color: #fff`;

export const ShortsSpanContainer = styled.div<OpenButton>`
display: ${({ openButton }) => openButton ? 'flex' : 'none'};
width: 100%;
align-items: center;
font-weight: 700;
font-size: 20px;
cursor: default;`;

export const ShortsIconImage = styled.img<OpenButton>`
width: 40px;
margin-left: 10px;
border-radius: 50px;

@media(max-width: 1559px) {width: 35px}`;

export const Container = styled.div<OpenButton>`
display: ${({ openButton }) => openButton ? 'grid' : 'none'};
grid-template-columns: repeat(9, 1fr);
column-gap: 3px;
width: 100%;

@media(max-width: 1920px) {column-gap: 8px}

@media(max-width: 976px) {column-gap: 6px}`;

export const ShortsLine = styled.div<OpenShorts>`
width: ${({ openShorts }) => openShorts ? '100%' : '0'};
background-color: #989898;
height: 1px;
margin-top: 1.5%`;

export const CloseButtonContainer = styled.div<OpenMenu>`
display: flex;
width: 35px;
height: 35px;
border-radius: 50%;
margin-left: ${({ openMenu }) => openMenu ? '93%' : '93.5%'};
cursor: pointer;

&:hover {background-color: #d3d3d3}

@media (max-width: 2240px) {margin-left: 92.5%}

@media (max-width: 2060px) {margin-left: 91.5%}

@media (max-width: 1800px) {margin-left: 90.5%}

@media (max-width: 1630px) {margin-left: ${({ openMenu }) => openMenu ? '88%' : '89.5%'}}

@media (max-width: 1430px) {margin-left: ${({ openMenu }) => openMenu ? '86.5%' : '88.5%'}}

@media (max-width: 1300px) {margin-left: 87.5%}

@media (max-width: 1210px) {margin-left: 86.3%}

@media (max-width: 1120px) {margin-left: 85%}

@media (max-width: 1046px) {margin-left: 84%}

@media (max-width: 970px) {margin-left: 82.5%}

@media (max-width: 895px) {margin-left: 80%}

@media (max-width: 800px) {margin-left: 78.5%}

@media (max-width: 680px) {margin-left: 77%}

@media (max-width: 605px) {margin-left: 74%}

@media (max-width: 535px) {margin-left: 71%}

@media (max-width: 500px) {margin-left: 68%}

@media (max-width: 465px) {margin-left: 65%}

@media (max-width: 406px) {margin-left: 62%}

@media (max-width: 395px) {margin-left: 60%}

@media (max-width: 373px) {margin-left: 57%}

@media (max-width: 340px) {margin-left: 54%}

@media (max-width: 320px) {margin-left: 52%}`;

export const CloseButtonImage = styled.img<OpenShorts>`
display: flex;
width: 30px;
height: 30px;
margin: 4px 0 0 2px;
border-radius: 50%`;

export const SpanMessageContainer = styled.div`
height: 50px;
width: fit-content;
margin: 30px 0 0 25px;
cursor: default;

@media(max-width: 1920px) {margin: 50px 0 0 5px}`;

export const ReturnContainer = styled.div<OpenShorts>`
height: 35px;
width: 90px;
margin: -27px 0px 0px 260px;
border-radius: 20px;
transition: 0.5s;
cursor: pointer;
&:hover {background-color: #007FFF}

span {
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
font-size: 17px;
font-weight: 500;
border-radius: 20px;
color: grey;
&:hover {color: #fff}}

@media(max-width: 380px) {
width: 85px;
margin-left: 235px;
span{font-size: 16px}}

@media(max-width: 345px) {
width: 75px;
margin-left: 235px;
span{font-size: 14px}}

@media(max-width: 335px) {margin-left: 220px}`;

export const SpanMessage = styled.span`
display: flex;
width: fit-content;
margin-top: 15px;
color: grey;
font-size: 15px;

@media(max-width: 380px) {font-size: 14px}

@media(max-width: 335px) {font-size: 13px}`;