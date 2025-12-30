import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface MenuProps {
    openMenu: boolean;
}

export const Overlay = styled.div<MenuProps>`
display: ${({ openMenu }) => openMenu ? 'block' : 'none'};
opacity: ${({ openMenu }) => openMenu ? '1' : '0'};
position: fixed;
width: 100%;
height: 100%;
top: 0;
z-index: 2;
background-color: rgba(0, 0, 0, 0.5);
`;

export const Menu = styled.div<MenuProps>`
display: flex;
position: fixed;
align-items: center;
flex-direction: column;
box-sizing: border-box;
overflow-y: auto;
width: 80px;
height: 100vh;
top: 55px;
background-color: grey;

@media(max-width: 791px) {
display: none;
}
`;

export const MenuItemContainer = styled.div`
width: 98%;
background-color: green;

:hover {background-color: #f2f2f2; }
`;

export const MenuItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
width: 70px;
height: 75px;
margin-left: 0px;
margin-bottom: 2px;
border-radius: 10px;
padding: 2px 15px;
cursor: pointer;
background-color: purple;

span {
font-weight: 400;
font-size: 11px;
}
`;

export const ContainerOneIcons = styled.img`
width: 23px;
`;

export const GeneralButtonIcon = styled.img`
width: 23px;
`;

export const ChannelIcon = styled.img`
width: 24px;
height: 24px;
border-radius: 50%;
margin-right: 2px;
`;

export const MusicIconContainer = styled.img`
width: 10px;
margin-left: 5px;
`;

/*LEMBRETE: Todas as constantes abaixo são do "OpenedMenu" */

export const OpenMenuButtonContainer = styled.div`
display: flex; 
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
margin-left: 25px;
border-radius: 50%;
transition: 0.7s;
cursor: pointer;
`;

export const MenuButtonIcon = styled.img`
width: 20px;
height: 20px;
`;

export const OpenedMenu = styled.div<MenuProps>`
position: fixed;
width: 245px;
height: 100vh;
box-sizing: border-box;
overflow-y: auto;
top: 0;
left: ${({ openMenu }) => openMenu ? '0' : '-100%'};
background-color: #5f9ea0;
z-index: 3;
transition: 0.2s;
`;

export const LogoContainer = styled.div`
display: flex;
height: fit-content;
width: fit-content;
align-items: center;
`;

export const LinkLogo = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
width: fit-content;
margin-left: 20px;
`;

export const Logo = styled.img`
width: 105px;
`;

export const ResponsiveMenuItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;
box-sizing: border-box;
width: 90%;
height: 42px;
margin-left: 13px;
margin-bottom: 5px;
border-radius: 10px;
padding: 2px 15px;
cursor: pointer;
background-color: purple;

:hover {background-color: #fff;}

span {
margin-left: 23px;
font-weight: 500;
font-size: 14px;
}
}
`;

export const ItemsIcon = styled.img`
width: 26px;
`;

export const LineContainer = styled.div`
display: flex;
width: 100%;
height: 10px;
margin-top: 10px;
`;

export const Line = styled.div`
width: 98%;
height: 1px;
background-color: #D3D3D3;
`;

export const SubscribeSpan = styled.span`
display: flex;
width: fit-content;
height: fit-content;
margin: 10px 130px 10px 0;
font-weight: 700;
font-size: 16px;
cursor: default;
`;

export const LoginContainer = styled.div`
display: flex;
height: fit-content;
width: 100%;
background-color: purple;
`;

export const LoginRequestSpan = styled.span`
width: 66%;
height: 60px;
margin-top: 10px;
margin-left: 30px;
font-size: 14.5px;
font-weight: 500;
color: black;
cursor: default;
`;

export const MenuLoginContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 30px;
width: 115px;
margin: 80px 0 15px -67%;
border-radius: 20px;
border: 1px solid;
transition: 0.5s;
cursor: pointer;
border-color: #DCDCDC;
color: #DCDCDC;
background-color: #f2f2f2;

span {
font-size: 14px;
font-weight: 600;
color: #5353ec;
}

&:hover {background-color: #00FFFF;}
`;

export const LoginButtonIcon = styled.img`
width: 22px;
`;

export const OpenedMenuSpan = styled.span`
display: flex;
width: fit-content;
height: fit-content;
margin: 10px 0 10px 25px;
font-weight: 700;
font-size: 16px;
cursor: default;
`;

export const SocialMedia = styled.div`
width: 100%;
height: fit-content;
`;

export const SocialMediaContainer = styled.div`
display: flex;
width: fit-content;
align-items: center;
margin: 10px 0 10px 30px;
cursor: default;
`;

export const SocialMediaIcons = styled.img`
width: 25px;
cursor: pointer;
`;

export const CreditsContainer = styled.div`
display: flex;
width: 100%;
height: fit-content;
margin-top: 10px;
margin-bottom: 20px;
cursor: default;

span {
font-size: 11px;
font-weight: 700;
color: #666666;
}

span:first-child {
width: fit-content;
height: fit-content;
margin-left: 20px;
}

span:last-child {
width: fit-content;
height: fit-content;
margin-top: 20px;
margin-left: -160px;
}
`;