import styled from "styled-components";

interface ContainerProps {
  openMenu?: boolean;
  hideModal?: boolean
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
background-color: #fff;

@media(max-width: 1312px) {padding: 70px 0px 0 100px}

@media(max-width: 834px) {
justify-content: center;
padding: 70px 10px 0 100px}

@media(max-width: 414px) {padding: 70px 10px 0 10px}`;

export const YourVideosContainer = styled.div`width: 100%`;

export const UserContainer = styled.div`
display: flex;
width: 100%;
height: 90px;

@media(max-width: 834px) {
height: 150px;
justify-content: center}`;

export const UserProfile = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
margin-left: 30px;
min-width: 50px;
max-width: 50px;
min-height: 50px;
max-height: 50px;
font-size: 30px;
cursor: pointer;
background-color: beige`;

export const UserName = styled.h1`
margin-top: 4px;
margin-left: 20px;
cursor: default`;

export const Modal = styled.div<ContainerProps>`
visibility: ${({ hideModal }) => hideModal ? 'hidden' : 'visible'};
display: flex;
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
width: 50vw;
height: 80vh;
padding: 20px 45px;
border-radius: 12px;
box-sizing: border-box;
background-color: #fff;

@media(max-width: 834px) {
width: 80vw;
height: 50vh;
padding: 20px 10px}

@media(max-width: 600px) {
width: 98vw;
height: 60vh;
padding: 20px 10px}`;

export const ModalTitle = styled.h1`
text-align: center;
font-size: 30px;
margin: 0;`;

export const CloseButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
width: 40px;
height: 40px;
top: 12vh;
right: 27vw;
padding-left: 7px;
font-weight: 700;
border-radius: 50%;
border: none;
outline: none;
cursor: pointer;

&:hover {background-color: #C8C8C8}

@media(max-width: 834px) {
right: 8vw;
top: 23vh}

@media(max-width: 600px) {
right: 0;
top: 18vh}`;

export const CloseImg = styled.img`width: 25px`;

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
outline: none}`;

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
outline: none}`;

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
outline: none}`;

export const AddVideoButton = styled.button`
width: 130px;
height: 45px;
border: none;
border-radius: 5px;
margin-top: 5px;
margin-left: 40px;
font-weight: 600;
font-size: 0.8rem;
transition: .5s;
cursor: pointer;
color: #fff;
background-color: #1a75ff;

&:hover {background-color: #005ce6}`;

export const ModalAddVideoButton = styled.button`
width: 130px;
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

&:hover {background-color: #005ce6}`;

export const ClearButton = styled.button`
width: 130px;
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

&:hover {background-color: #005ce6}`;

export const MessageContainer = styled.div`width: 100%`;

export const EmptyInput = styled.span<ValidInput>`
display: ${({ valid }) => valid ? 'none' : 'block'};
font-size: 14px;
color: red`;