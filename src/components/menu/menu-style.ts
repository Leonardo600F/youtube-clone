import styled from "styled-components";

interface OpenMenu { openMenu: boolean;}

export const Container = styled.div<OpenMenu>`
 width: ${({ openMenu }) => openMenu ? '270px' : '100px'};
 height: 100vh;
 box-sizing: border-box;
 top: 55px;
 display: flex;
 align-items: center;
 flex-direction: column;
 position: fixed;
 overflow-y: auto;
 background-color: #fff;

@media(max-width: 1920px) {
width: ${({ openMenu }) => openMenu ? '260px' : '80px'};
}

@media(max-width: 1152px) {
display: none;
}
`;

export const MenuItemContainer = styled.div<OpenMenu>`
height: ${({ openMenu }) => openMenu ? '100%' : 'none'};
width: 98%;
margin-left: -12px;
margin-bottom: ${({ openMenu }) => openMenu ? '0px' : '6px'};
cursor: default;

:hover {
background-color: #f2f2f2; 
}
`;

export const MenuItem = styled.div<OpenMenu>`
width: ${({ openMenu }) => openMenu ? '90%' : '70px'};
min-height: ${({ openMenu }) => openMenu ? '40px' : '80px'};
flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
justify-content: ${({ openMenu }) => openMenu ? 'none' : 'center'};
margin-left: ${({ openMenu }) => openMenu ? '17px' : '10px'};
margin-bottom: ${({ openMenu }) => openMenu ? '10px' : '2px'};
display: flex;
box-sizing: border-box;
align-items: center;
border-radius: 10px;
padding: 2px 15px;
cursor: pointer;

span {
font-weight: ${({ openMenu }) => openMenu ? '600' : '400'};
margin-left: ${({ openMenu }) => openMenu ? '19px' : '0px'};
font-size: ${({ openMenu }) => openMenu ? '14px' : '11px'};
}

@media(max-width: 1920px) {
min-height: ${({ openMenu }) => openMenu ? '40px' : '70px'};
margin-left: ${({ openMenu }) => openMenu ? '16px' : '10px'};
}
`;

export const YouItem = styled.div<OpenMenu>`
width: ${({ openMenu }) => openMenu ? '90%' : '70px'};
flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
justify-content: ${({ openMenu }) => openMenu ? 'none' : 'center'};
margin: ${({ openMenu }) => openMenu ? '10px 0 10px 17px' : '0px 0px 0px 10px'};
min-height: ${({ openMenu }) => openMenu ? '40px' : '80px'};
display: flex;
border-radius: 10px;
align-items: center;
cursor: pointer;

span {
font-weight: ${({ openMenu }) => openMenu ? '600' : '400'};
margin-left:  ${({ openMenu }) => openMenu ? '10px' : '0'};
font-size: ${({ openMenu }) => openMenu ? '18px' : '11px'};
}

@media(max-width: 1920px) {
min-height: ${({ openMenu }) => openMenu ? '40px' : '70px'};
margin-left: ${({ openMenu }) => openMenu ? '16px' : '10px'};
}


`;

export const MenuItemSecondPart = styled.div<OpenMenu>`
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
width: ${({ openMenu }) => openMenu ? '90%' : '70px'};
align-items: center;
box-sizing: border-box;
flex-direction: row;
min-height: 40px;
margin-left: 17px;
margin-bottom: 10px;
padding: 2px 15px;
border-radius: 10px;
cursor: pointer;

span {
font-weight: 600;
margin-left: 19px;
font-size: 14px;
}

@media(max-width: 1920px) {
width: 90%;
margin-left: 16px;
margin-bottom: 10px;
}
`;

export const ButtonIcon = styled.img`
width: 23px;
`;

export const ContainerOneIcons = styled.img`
width: 23px;
`;

export const YouItemIcon = styled.img<OpenMenu>`
width: ${({ openMenu }) => openMenu ? '0' : '22px'};
margin-left: ${({ openMenu }) => openMenu ? '10px' : '0px'};
`;

export const LogOutYouMenuItem = styled.div<OpenMenu>`
min-height: ${({ openMenu }) => openMenu ? '40px' : '80px'};
width: ${({ openMenu }) => openMenu ? '90%' : '70px'};
flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
justify-content: ${({ openMenu }) => openMenu ? 'none' : 'center'};
margin: ${({ openMenu }) => openMenu ? '10px 0 5px 17px' : '0 0 2px 10px'};
display: flex;
box-sizing: border-box;
align-items: center;
border-radius: 10px;
padding: 2px 15px;
cursor: pointer;

span {
font-weight: ${({ openMenu }) => openMenu ? '600' : '400'};
margin-left: ${({ openMenu }) => openMenu ? '19px' : 'none'};
font-size: ${({ openMenu }) => openMenu ? '14px' : '11px'};
}

@media(max-width: 1920px) {
min-height: ${({ openMenu }) => openMenu ? '40px' : '70px'};
width: ${({ openMenu }) => openMenu ? '90%' : '70px'};
margin-left: ${({ openMenu }) => openMenu ? '16px' : '10px'};
margin-bottom: 10px;
}
`;

export const LogOutYouIconContainer = styled.div<OpenMenu>`
margin-left: 0;
height: 23px;
width: 23px;
`;

export const LogOutYouItemIcon = styled.img<OpenMenu>`
width: ${({ openMenu }) => openMenu ? '23px' : '22px'};
background-color: none;
`;


export const LineContainer = styled.div<OpenMenu>`
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
width: 100%;
height: 10px;
`;

export const Line = styled.div`
width: 98%;
height: 1px;
background-color: #D3D3D3;
`;

export const LoginContainer = styled.div<OpenMenu>`
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
height: 100%;
width: 100%;
`;

export const LoginRequestSpan = styled.span`
width: 66%;
height: 60px;
margin-top: 10px;
margin-left: 25px;
font-size: 15px;
font-weight: 500;
color: black;
cursor: default;
`;

export const MenuLoginContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 32px;
width: 130px;
margin: 80px 0 15px -67%;
border-radius: 20px;
border: 1px solid;
transition: 0.5s;
cursor: pointer;
border-color: #DCDCDC;
color: #DCDCDC;
background-color: #f2f2f2;

span {
font-size: 15px;
font-weight: 600;
color: #5353ec;
}

&:hover {
background-color: #00FFFF;
}
`;

export const LoginButtonIcon = styled.img`
width: 22px;
`;

export const PlusYouTubeContainer = styled.div<OpenMenu>`
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
width: fit-content;
height: fit-content;
margin: 10px 70px 10px 0;
cursor: default;

span {
font-weight: 700;
font-size: 16px;
}
`;

export const ChannelIcon = styled.img`
width: 24px;
height: 24px;
border-radius: 50%;
margin-right: 2px;
`;

export const CreditsContainer = styled.div<OpenMenu>`
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
width: 80%;
height: fit-content;
margin: 20px 0px 80px 0px;
cursor: default;

span {
font-size: 11px;
font-weight: 700;
color: #666666;
}

span:first-child {
width: fit-content;
height: fit-content;
}

span:last-child {
width: fit-content;
height: fit-content;
margin-top: 25px;
margin-left: -159px;
}

@media(max-width: 1920px) {

span:last-child {
margin-top: 20px;
margin-left: -76%;
}}
`;

export const YouItemArrow = styled.img<OpenMenu>`
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
width: 12px;
margin-top: 3px;
margin-left: 15px;
`;

export const MusicIconContainer = styled.img`
width: 10px;
margin-left: 5px;
`;

export const SocialMedia = styled.div<OpenMenu>`
height: ${({ openMenu }) => openMenu ? 'fit-content' : '0'};
width: ${({ openMenu }) => openMenu ? '98%' : '0'};
`;

export const SocialMediaContainer = styled.div<OpenMenu>`
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
width: fit-content;
align-items: center;
margin: 10px 0 10px 30px;
cursor: default;
`;

export const SocialMediaIcons = styled.img<OpenMenu>`
width: 25px;
cursor: pointer;
`;

export const ExplorerSpan = styled.span<OpenMenu>`
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
width: fit-content;
height: fit-content;
margin: 10px 130px 10px 0;
cursor: default;

span {
font-weight: 700;
font-size: 16px;
}
`;

export const SubscribeSpan = styled.span<OpenMenu>`
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
width: fit-content;
height: fit-content;
margin: 10px 130px 10px 0;
cursor: default;

span {
font-weight: 700;
font-size: 16px;
}
`;

export const ContactsSpan = styled.span<OpenMenu>`
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
width: fit-content;
height: fit-content;
margin-top: 10px;
margin-left: 30px;
cursor: default;

span {
font-weight: 700;
font-size: 16px;
}

@media(max-width: 1920px) {
margin-right: 10px;
}
`;
