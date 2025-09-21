import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface ContainerProps {
   openDropDownMenu: boolean;
}

interface ClearButtonProps {
   clearButton: boolean;
}

interface Responsive {
   openSearch: boolean;
}

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
box-sizing: border box;
position: sticky; 
height: 55px;
width: 100%;
top: 0%;
background-color: #fff;
`;

export const LogoContainer = styled.div`
display: flex;
width: fit-content;
align-items: center;
`;

export const MenuButtonContainer = styled.div`
display: flex; 
justify-content: center;
align-items: center;
margin-left: 20px;
width: 40px;
height: 40px;
cursor: pointer;
border-radius: 50%;
transition: 0.7s;

&:hover {
background-color: #9fd3c7;
}

@media(max-width: 1920px) {
margin-left: 20px;
}

@media(max-width: 1559px) {
margin-left: 20px;
}
`;

export const CreateVideoButtonContainer = styled.div`
display: flex; 
justify-content: center;
align-items: center;
width: 90px;
height: 35px;
margin: 0px 20px 0 0px;
cursor: pointer;
border-radius: 20px;
transition: 0.7s;
background-color: #F0F0F0;

&:hover {
   background-color: #9fd3c7;
}

span {
   font-size: 13px;
   font-weight: 600;
   margin-left: 10px;
   color: #000;
}

@media(max-width: 1559px) {
   margin-top: 7px;
   margin-left: -5px;
   width: 80px;
   height: 30px;
}
`;

export const PlusIconContainer = styled.img`
margin-left: -10px;
height: 25px;
width: 25px;
border-radius: 50%;

@media(max-width: 1559px) {
height: 20px;
width: 20px;
}
`;

export const NotificationIconContainer = styled.div`
display: flex; 
justify-content: center;
align-items: center;
width: 35px;
height: 35px;
border-radius: 50%;
cursor: pointer;
margin: 2px 20px 0 0;

 &:hover {
    background-color: #9fd3c7;
 }

 @media(max-width: 1559px) {
 width: 35px;
 height: 35px;
 }
`;

export const ProfileImageContainer = styled.div`
display: flex; 
justify-content: center;
align-items: center;
width: 35px;
height: 35px;
margin-top: 2px;
border-radius: 50%;
cursor: pointer;

 &:hover {
    background-color: #9fd3c7;
 }

  @media(max-width: 1559px) {
 width: 35px;
 height: 35px;
 }
`;

export const DropDownMenuProfileImageContainer = styled.div`
display: flex; 
justify-content: center;
align-items: center;
width: 42px;
height: 42px;
margin-left: 10px;
border-radius: 50%;
cursor: pointer;
background-color: #f2f2f2;

span {font-size: 24px;}

&:hover {background-color: #9fd3c7}

@media(max-width: 1559px) {
width: 35px;
height: 35px;
}
`;

export const ButtonIcon = styled.img`
width: 20px;
`;

export const DropDownMenuButtonIcon = styled.img`
width: 24px;
height: 24px;
margin-left: 6px;
`;

export const HiddenIcon = styled.img<{ openBar: boolean }>`
display: ${({ openBar }) => openBar ? 'flex' : 'none'};
width: 15px;
height: 15px;
margin: 10px 0 0 16px;
background-color: #fff;
`;

export const KeyboardContainer = styled.img`
height: 20px;
width: 23px;
margin: 7px 10px 0 0;
cursor: pointer;
background-color: #fff;
`;

export const Logo = styled.img`
width: 100px;
cursor: pointer;

@media(max-width: 414px) {
width: 80px;
}
`;

export const LinkLogo = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
width: fit-content;
margin-left: 20px;
`;

export const SearchContainer = styled.div<Responsive>`
display: flex;
justify-content: center;
width: 535px;
background-color: none;

   @media (max-width: 1559px) {
   width: 500px;
   }
`

export const SearchInputContainer = styled.div<{ openBar: boolean }>`
display: flex;
width: ${({ openBar }) => openBar ? '460px' : '470px'};
border: ${({ openBar }) => openBar ? '1px solid #00308F ' : '1px solid #d3d3d3'};                                   
border-radius: 40px 0 0 40px;
height: 36px;
background-color: #fff;

@media (max-width: 1559px) {
   width: 410px;
}
`;

export const SearchInput = styled.input<{ openBar: boolean }>`
height: 95%;
width: 100%;
padding-left: ${({ openBar }) => openBar ? '10px' : '17px'};
border: none;
outline: none;
border-radius: 40px 0 0 40px;
font-size: 16px;
background-color: #fff;
`

export const SearchButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 36px;
width: 70px;
border-radius: 0 40px 40px 0;
border: 1px solid #d3d3d3;
background-color: #f8f8f8;
cursor: pointer;
`;

export const SearchButtonResponsive = styled.div`
display: none;
justify-content: center;
align-items: center;
background-color: #f8f8f8;
border: 1px solid;
cursor: pointer;

@media(max-width: 414px) {
display: flex;
border-radius: 50%;
min-height: 40px;
min-width: 40px;
max-height: 40px;
max-width: 40px;
}
`;

export const BackButton = styled.div<Responsive>`
display: ${({ openSearch }) => openSearch ? 'flex' : 'none'};
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
margin-left: 10px;
border-radius: 50%;
border: none;
outline: none;
transition: .4s;
cursor: pointer;
`;

export const ClearButton = styled.button<ClearButtonProps>`
display: ${({ clearButton }) => clearButton ? 'flex' : 'none'};
justify-content: center;
align-items: center;
width: 40px;
height: 35px;
border-radius: 50%;
border: none;
transition: .4s;
cursor: pointer;
background-color: #fff;

&:hover{
backgound-color: #D3D3D3;
`;

export const CloseImg = styled.img`
width: 25px;
`;

export const MicButton = styled.div`
display: flex;
height: 40px;
width: 40px;
margin-left: -750px;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: #F0F0F0;
transition: 0.5s;
cursor: pointer;

&:hover {
   background-color: #9fd3c7;
}

@media(max-width: 1920px) {
margin-left: -430px;
}

@media(max-width: 1559px) {
margin-left: -290px;
}
`

export const HeaderButton = styled.div`
display: flex;
width: fit-content;
margin-right: 55px;
`;

export const OptionsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 35px;
width: 35px;
border-radius: 50%;
margin-top: 5px;
margin-right: 20px;
cursor: pointer;
background-color: #fff;
`;

export const LoginContainer = styled.div`
margin: 5px 5px 1px 10px;
background-color: #f2f2f2;
width: 120px;
border-radius: 20px;
border-color: #DCDCDC;
border: 1px solid;
color: #DCDCDC;
transition: 0.5s;
cursor: pointer;
`;

export const SpanButton = styled.span`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 100%;
width: 100%;
font-size: 15px;
font-weight: 600;
border-radius: 20px 20px 20px 20px;
color: #5353ec;
`;

export const LoginButtonIcon = styled.img`
width: 22px;
`;

export const DropDownMenu = styled.div<ContainerProps>`
display: ${({ openDropDownMenu }) => openDropDownMenu ? 'flex' : 'none'};
flex-direction: column;
box-sizing: border-box;
position: fixed;
width: 275px;
border-radius: 10px;
box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.1);
background-color: #f8f8f8;
transition: 0.5s;
  
@media(max-width: 375px) {
width: 250px;
}
`;


export const DropDownMenuContent = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
width: 100%;
height: 40px;
border-radius: 10px;
margin-top: 15px;
padding: 0 10px;
cursor: pointer;

span {
margin-left: 23px;
font-size: 16px;
font-weight: 500;
}

&:hover {
background-color: #e5e5e5;
}
`;

export const UserInfoContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
height: fit-content;
border-radius: 10px;
`;

export const UserName = styled.span`
  width: fit-content;
  margin-left: 12px;
  font-size: 19px;
  font-weight: 500;
  cursor: default;
  background-color: none;
`;