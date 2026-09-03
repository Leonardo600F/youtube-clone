import styled from "styled-components";

interface ContainerProps {
  openMenu?: boolean;
  hideModal?: boolean;
}

interface ValidInput { valid: boolean }

export const Container = styled.div<ContainerProps>`
display: flex;
flex-wrap: wrap;
box-sizing: border-box;
width: 100%;
padding: ${({ openMenu }) => openMenu ? '70px 50px 0 330px' : '70px 10px 0 100px'};
column-gap: 25px;
row-gap: 20px;

@media(max-width: 1312px) {padding: 70px 0px 0 100px;}

@media(max-width: 1070px) {
column-gap: 0px;
padding: 60px 0px 0 90px;}

@media(max-width: 963px) {flex-direction: column;}

@media(max-width: 791px) {padding-top: 50px;}

@media(max-width: 423px) {padding-top: 25px;}`;

export const YourVideosContainer = styled.div`width: 100%`;

export const UserContainer = styled.div`
width: 100%;
height: 90px;
background-color: purple;

@media(max-width: 791px) {margin-left: -65px;}

@media(max-width: 700px) {
width: 613px;
margin-left: -85px;}

@media(max-width: 620px) {width: 510px;}

@media(max-width: 590px) {height: 50px;}

@media(max-width: 520px) {width: 475px;}

@media(max-width: 485px) {width: 417px;}

@media(max-width: 425px) {width: 387px;}

@media(max-width: 395px) {width: 352px;}

@media(max-width: 360px) {width: 326px;}

@media(max-width: 330px) {width: 306px;}

`;

export const UserProfile = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
margin-left: 30px;
min-width: 65px;
max-width: 65px;
min-height: 65px;
max-height: 65px;
font-size: 35px;
cursor: pointer;
background-color: beige;

@media(max-width: 963px) {margin-left: 20px}

@media(max-width: 590px) {
min-width: 45px;
max-width: 45px;
min-height: 45px;
max-height: 45px;
font-size: 25px;}

@media(max-width: 485px) {margin-left: 6px;}

@media(max-width: 425px) {
min-width: 40px;
max-width: 40px;
min-height: 40px;
max-height: 40px;
font-size: 20px;}

@media(max-width: 395px) {
min-width: 35px;
max-width: 35px;
min-height: 35px;
max-height: 35px;
font-size: 15px;}`;

export const UserName = styled.h1`
display: flex;
margin-top: -65px;
margin-left: 110px;
cursor: default;

@media(max-width: 630px) {font-size: 25px}

@media(max-width: 590px) {
margin-top: -45px;
margin-left: 80px;
font-size: 20px;}

@media(max-width: 485px) {margin-left: 60px;}

@media(max-width: 452px) {
margin-top: -40px;
margin-left: 55px;}

@media(max-width: 425px) {font-size: 17px;}

@media(max-width: 395px) {
margin-top: -35px;
margin-left: 50px;
font-size: 15px;}`;

export const UserNickname = styled.h2`
margin-top: -30px;
margin-left: 112px;
cursor: default;

@media(max-width: 630px) {
font-size: 20px;
margin-top: -20px;}

@media(max-width: 590px) {
margin-top: -17px;
margin-left: 83px;
font-size: 16px;}

@media(max-width: 485px) {margin-left: 62px;}

@media(max-width: 425px) {
margin-top: -10px;
margin-left: 58px;}

@media(max-width: 395px) {
margin-top: -8px;
margin-left: 52px;
font-size: 13px;}`;

export const Modal = styled.div<ContainerProps>`
display: ${({ hideModal }) => hideModal ? 'none' : 'flex'};
align-items: center;
justify-content: center;
position: fixed;
width: 100vw;
height: 100vh;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 5;
background-color: rgba(0,0,0,0.5);`;

export const ModalContent = styled.div`
display: flex;
flex-direction: column;
width: 1200px;
height: 900px;
padding: 20px 45px;
margin-top: -10px;
border-radius: 12px;
box-sizing: border-box;
background-color: #fff;

@media(max-width: 1580px) {width: 1050px;}

@media(max-width: 1280px) {width: 950px;}

@media(max-width: 1150px) {width: 850px;}

@media(max-width: 1050px) {width: 750px;}

@media(max-width: 900px) {
width: 650px;
margin-left: 50px;}

@media(max-width: 800px) {width: 600px;}

@media(max-width: 700px) {
width: 550px;
margin-left: -10px;}

@media(max-width: 600px) {
width: 500px;
padding: 20px 12px;}

@media(max-width: 540px) {
width: 450px;
margin-left: 0;}

@media(max-width: 490px) {width: 410px;}

@media(max-width: 430px) {width: 360px;}

@media(max-width: 380px) {width: 330px;}

@media(max-width: 350px) {width: 300px;}


@media(max-height: 1010px) {height: 830px;}

@media(max-height: 944px) {height: 750px;}

@media(max-height: 860px) {height: 700px;}

@media(max-height: 810px) {height: 650px;}

@media(max-height: 750px) {height: 600px;}

@media(max-height: 700px) {height: 550px;}

@media(max-height: 650px) {height: 500px;}

@media(max-height: 600px) {height: 450px;}

@media(max-height: 550px) {height: 400px;}`;

export const ModalTitle = styled.h1`
text-align: center;
margin: 0;
font-size: 30px;

@media(max-width: 800px) {font-size: 28px;}

@media(max-width: 600px) {font-size: 26px;}

@media(max-width: 540px) {margin-left: -20px;}

@media(max-width: 490px) {font-size: 23px;}

@media(max-width: 430px) {font-size: 22px;}

@media(max-width: 350px) {
margin-left: -30px;
font-size: 20px;}`;

export const CloseButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
width: 40px;
height: 40px;
margin-left: 1070px;
padding-left: 7px;
font-weight: 700;
border-radius: 50%;
border: none;
outline: none;
cursor: pointer;

&:hover {background-color: #C0C0C0;}

@media(max-width: 1580px) {margin-left: 920px;}

@media(max-width: 1280px) {margin-left: 820px;}

@media(max-width: 1150px) {margin-left: 720px;}

@media(max-width: 1050px) {margin-left: 620px;}

@media(max-width: 900px) {margin-left: 520px;}

@media(max-width: 800px) {margin-left: 470px;}

@media(max-width: 700px) {margin-left: 425px;}

@media(max-width: 600px) {margin-left: 435px;}

@media(max-width: 540px) {margin-left: 385px;}

@media(max-width: 490px) {
width: 35px;
height: 35px;
margin-left: 345px;}

@media(max-width: 430px) {margin-left: 295px;}

@media(max-width: 380px) {
margin-top: -3px;
margin-left: 270px;}

@media(max-width: 350px) {margin-left: 240px;}`;

export const CloseImg = styled.img`
width: 25px;

@media(max-width: 490px) {width: 20px;}`;

export const ModalLine = styled.div`
width: 1200px;
height: 1px;
margin-top: 10px;
margin-left: -45px;
background-color: #B0B0B0;

@media(max-width: 1580px) {
width: 1050px;
margin-left: -45px;}

@media(max-width: 1280px) {width: 950px;}

@media(max-width: 1150px) {width: 850px;}

@media(max-width: 1050px) {width: 750px;}

@media(max-width: 900px) {width: 650px;}

@media(max-width: 800px) {width: 600px;}

@media(max-width: 700px) {width: 550px;}

@media(max-width: 600px) {
width: 500px;
margin-left: -12px;}

@media(max-width: 540px) {width: 450px;}

@media(max-width: 490px) {width: 410px;}

@media(max-width: 430px) {width: 360px;}

@media(max-width: 380px) {width: 330px;}

@media(max-width: 350px) {width: 300px;}`;

export const ThumbnailURL = styled.input<ValidInput>`
width: 100%;
height: 50px;
box-sizing: border-box;
border: ${({ valid }) => valid ? "1px solid #d3d3d3" : "1px solid red"};
border-radius: 5px;
margin-top: 20px;
padding: 0 10px;
font-size: 17px;

&:focus {
border-color: ${({ valid }) => valid ? "#1a75ff" : "red"};
border-width: 2px;
outline: none;}`;

export const VideoTitle = styled.input<ValidInput>`
width: 100%;
height: 50px;
box-sizing: border-box;
border: ${({ valid }) => valid ? "1px solid #d3d3d3" : "1px solid red"};
border-radius: 5px;
padding: 0 10px;
margin-top: 10px;
font-size: 17px;

&:focus {
border-color: ${({ valid }) => valid ? "#1a75ff" : "red"};
border-width: 2px;
outline: none;}`;

export const VideoDescription = styled.input<ValidInput>`
width: 100%;
height: 50px;
box-sizing: border-box;
border: ${({ valid }) => valid ? "1px solid #d3d3d3" : "1px solid red"};
border-radius: 5px;
padding: 0 10px;
margin-top: 10px;
font-size: 17px;

&:focus {
border-color: ${({ valid }) => valid ? "#1a75ff" : "red"};
border-width: 2px;
outline: none;}`;

export const AddVideoButton = styled.button`
display: flex;
width: 130px;
height: 45px;
border: none;
border-radius: 5px;
margin-top: -87px;
margin-left: 480px;
padding-top: 16px;
padding-left: 15px;
font-weight: 600;
font-size: 0.8rem;
transition: .5s;
cursor: pointer;
color: #fff;
background-color: #1a75ff;

&:hover {background-color: #005ce6;}

@media(max-width: 630px) {
width: 115px;
height: 37px;
margin-top: -72px;
margin-left: 390px;
padding-top: 14px;
font-size: 0.7rem;}

@media(max-width: 590px) {
margin-top: -57px;
margin-left: 380px;}

@media(max-width: 520px) {margin-left: 355px;}

@media(max-width: 485px) {margin-left: 300px;}

@media(max-width: 425px) {
width: 95px;
margin-left: 290px;
margin-top: -57px;
padding-left: 12px;
font-size: 0.6rem;}

@media(max-width: 395px) {
height: 30px;
margin-left: 255px;
margin-top: -48px;
padding-top: 10px;}

@media(max-width: 360px) {
width: 85px;
margin-left: 240px;
padding-left: 6px;}

@media(max-width: 330px) {
width: 75px;
margin-left: 230px;
padding-top: 12px;
padding-left: 7px;
font-size: 0.5rem;}`;

export const ModalAddVideoButton = styled.button`
width: 140px;
height: 45px;
border: none;
border-radius: 5px;
margin-top: 25px;
font-weight: 600;
font-size: 0.8rem;
transition: .5s;
cursor: pointer;
color: #fff;
background-color: #1a75ff;

&:hover {background-color: #005ce6;}`;

export const ClearButton = styled.button`
width: 140px;
height: 45px;
border: none;
border-radius: 5px;
font-weight: 600;
font-size: 0.8rem;
margin-top: 10px;
transition: .5s;
cursor: pointer;
color: #fff;
background-color: #1a75ff;

&:hover {background-color: #005ce6;}`;

export const MessageContainer = styled.div`width: 100%`;

export const EmptyInput = styled.span<ValidInput>`
display: ${({ valid }) => valid ? 'none' : 'block'};
font-size: 14px;
color: red;`;