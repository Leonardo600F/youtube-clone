import styled from "styled-components";

interface OpenMenu {openMenu: boolean;}

export const Container = styled.div<OpenMenu>`
display: flex;
align-items: center;
position: fixed;
width: ${({ openMenu }) => openMenu ? '88.4%' : '95%'};
height: 55px;
top: 55px; 
left: ${({ openMenu }) => openMenu ? '270px' : '100px'}; 
z-index: 1px;
background-color: purple;

@media(max-width: 1920px) {
width: ${({ openMenu }) => openMenu ? '85.4%' : '94.8%'};
left: ${({ openMenu }) => openMenu ? '260px' : '80px'}; 
}

@media(max-width: 1760px) {
width: ${({ openMenu }) => openMenu ? '84.2%' : '94.4%'};
}

@media(max-width: 1680px) {
width: ${({ openMenu }) => openMenu ? '83.5%' : '94.2%'};
}

@media(max-width: 1559px) {
width: ${({ openMenu }) => openMenu ? '82.2%' : '93.8%'};
height: 45px;
}

@media(max-width: 1440px) {
width: ${({ openMenu }) => openMenu ? '81%' : '93.4%'};
}

@media(max-width: 1400px) {
width: ${({ openMenu }) => openMenu ? '80.4%' : '93.2%'};
}

@media(max-width: 1366px) {
width: ${({ openMenu }) => openMenu ? '79.9%' : '93.1%'};
}

@media(max-width: 1280px) {
width: ${({ openMenu }) => openMenu ? '78.6%' : '92.7%'};
}

@media(max-width: 1152px) {
width: 92%;
left: 80px;
}

@media(max-width: 1102px) {
width: 91.7%;
}

@media(max-width: 1070px) {
width: 91.4%;
}

@media(max-width: 1010px) {
width: 91%;
}

@media(max-width: 990px) {
width: 90.8%;
}

@media(max-width: 980px) {
width: 90.7%;
}

@media(max-width: 950px) {
width: 90.5%;
}

@media(max-width: 930px) {
width: 90.2%;
}

@media(max-width: 900px) {
width: 90%;
}

@media(max-width: 880px) {
width: 89.8%;
}

@media(max-width: 850px) {
width: 89.5%;
}

@media(max-width: 820px) {
width: 89%;
}

@media(max-width: 791px) {
width: 99%;
left: 0%;
}
`;

export const Button = styled.button<OpenMenu>`
height: 35px;
display: inline-block;
white-space: nowrap;
align-items: center;
box-sizing: border-box;
border: none;
outline: none;
padding: 10px;
border-radius: 7px;
font-size: 14px;
font-weight: 700;
color: black;
z-index: 1px;
cursor: pointer;
background-color: #e9e9e9;

&:hover{
background-color: #d3d3d3;
}

&:focus {
font-weight: 700;
outline: none;
color: white;
background-color: black;
}

@media(max-width: 1559px) {
padding: ${({ openMenu }) => openMenu ? '6.4px' : '10px'};
}

@media(max-width: 1440px) {
padding: ${({ openMenu }) => openMenu ? '3.4px' : '10.3px'};
font-size: 13.5px;
}

@media(max-width: 1400px) {
padding: ${({ openMenu }) => openMenu ? '1.9px' : '8.8px'};
}

@media(max-width: 1366px) {
font-size: 13px;
}

@media(max-width: 1280px) {
font-size: 11.8px;
}

@media(max-width: 1152px) {
height: 30px;
font-size: 11.2px;
padding: 5.5px;
}

@media(max-width: 1128px) {
font-size: 10.9px;
}

@media(max-width: 1115px) {
font-size: 10.7px;
}

@media(max-width: 1102px) {
font-size: 10.5px;
}

@media(max-width: 1090px) {
font-size: 10.35px;
}

@media(max-width: 1080px) {
font-size: 10.2px;
}

@media(max-width: 1070px) {
padding: 5.1px;
}

@media(max-width: 1060px) {
padding: 4.6px;
}

@media(max-width: 1050px) {
padding: 4.3px;
}

@media(max-width: 1040px) {
padding: 4px;
}

@media(max-width: 1030px) {
padding: 3.5px;
}

@media(max-width: 1020px) {
padding: 3.1px;
}

@media(max-width: 1010px) {
padding: 8px;
font-size: 12px;
}

@media(max-width: 1000px) {
padding: 7.5px;
}

@media(max-width: 990px) {
padding: 7px;
}

@media(max-width: 980px) {
padding: 8.5px;
font-size: 12.5px;
}

@media(max-width: 969px) {
padding: 8.3px;
font-size: 12.3px;
}

@media(max-width: 950px) {
padding: 9.7px;
font-size: 11.5px;
}

@media(max-width: 940px) {
font-size: 11.3px;
}

@media(max-width: 930px) {
padding: 8.8px;
font-size: 13px;
}

@media(max-width: 920px) {
padding: 9.4px;
font-size: 12px;
}

@media(max-width: 880px) {
font-size: 11.5px;
}

@media(max-width: 850px) {
padding: 10px;
font-size: 11px;
}

@media(max-width: 840px) {
padding: 9px;
}

@media(max-width: 830px) {
padding: 8.2px;
}

@media(max-width: 820px) {
padding: 9.2px;
font-size: 13.5px;
}

@media(max-width: 810px) {
padding: 9px;
font-size: 13px;
}

@media(max-width: 791px) {
font-size: 13.5px;
}

@media(max-width: 780px) {
padding: 9.7px;
font-size: 12.3px;
}

@media(max-width: 760px) {
font-size: 13.4px;
}

@media(max-width: 720px) {
padding: 9px;
}

@media(max-width: 710px) {
padding: 8px;
}

@media(max-width: 700px) {
font-size: 12.5px;
}

@media(max-width: 670px) {
font-size: 12px;
}

@media(max-width: 640px) {
font-size: 11.7px;
}

@media(max-width: 635px) {
font-size: 14px;
}

@media(max-width: 595px) {
padding: 7px;
}

@media(max-width: 590px) {
font-size: 13.5px;
}

@media(max-width: 570px) {
font-size: 13.2px;
}

@media(max-width: 563px) {
padding: 6.5px;
font-size: 13px;
}

@media(max-width: 543px) {
padding: 6px;
font-size: 12.5px;
}

@media(max-width: 523px) {
padding: 7px;
font-size: 11.6px;
}

@media(max-width: 513px) {
padding: 7.5px;
font-size: 11px;
}

@media(max-width: 503px) {
padding: 7px;
font-size: 11px;
}

@media(max-width: 493px) {
padding: 6.4px;
}

@media(max-width: 483px) {
padding: 8.5px;
font-size: 14px;
}

@media(max-width: 423px) {
padding: 8px;
font-size: 13.5px;
}

@media(max-width: 413px) {
font-size: 13px;
}

@media(max-width: 403px) {
font-size: 12.5px;
}

@media(max-width: 393px) {
padding: 8.5px;
font-size: 14px;
}

@media(max-width: 353px) {
padding: 8px;
font-size: 13.5px;
}

@media(max-width: 343px) {
font-size: 13.3px;
}

@media(max-width: 333px) {
font-size: 12.6px;
}

@media(max-width: 323px) {
padding: 8px;
font-size: 12px;
}
`;


export const SliderContent = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
height: 100%;
margin-left: 15px;
z-index: 1px;
column-gap: 10px;
`;