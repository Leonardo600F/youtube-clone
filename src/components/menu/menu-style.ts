import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
 width: ${({ openMenu }) => openMenu ? '270px' : '100px'};
 height: calc(100vh - 55px);
 box-sizing: border-box;
 padding: 10px;
 top: 55px;
 display: flex;
 align-items: center;
 flex-direction: column;
 position: sticky;
 overflow-y: auto;

 @media(max-width: 1559px) {
 width: ${({ openMenu }) => openMenu ? '260px' : '90px'};
 }
`;

export const MenuItemContainer = styled.div<{ openMenu: boolean }>`
height: ${({ openMenu }) => openMenu ? '100%' : 'none'};
width: 98%;
margin-left: -12px;
transition: 0.3s;
cursor: pointer;

:hover {
  background-color: #f2f2f2; 
}
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
 min-height: ${({ openMenu }) => openMenu ? '40px' : '80px'};
 flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
 justify-content: ${({ openMenu }) => openMenu ? 'none' : 'center'};
 display: flex;
 box-sizing: border-box;
 width: 98%;
 align-items: center;
 border-radius: 10px;
 padding: 2px 15px;
 margin-bottom: ${({ openMenu }) => openMenu ? '5px' : '2px'};
 cursor: pointer;

 span {
   font-weight: ${({ openMenu }) => openMenu ? '600' : '400'};
   margin-left: ${({ openMenu }) => openMenu ? '25px' : 'none'};
   font-size: ${({ openMenu }) => openMenu ? '14px' : '11px'};
 }

 @media(max-width: 1559px) {
 
 span {
   margin-left: ${({ openMenu }) => openMenu ? '20px' : 'none'};
   font-size: ${({ openMenu }) => openMenu ? '12px' : '9px'};
 }

 }
`;

export const SpanItemContainer = styled.div`
width: 80%;
`;


export const YouItem = styled.div<{ openMenu: boolean }>`
flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
justify-content: ${({ openMenu }) => openMenu ? 'none' : 'center'};
min-height: ${({ openMenu }) => openMenu ? '40px' : '5px'};
margin: ${({ openMenu }) => openMenu ? '10px 0 5px' : 'none'};
height: ${({ openMenu }) => openMenu ? '40px' : '80px'};
display: flex;
width: 98%;
padding: 2px 15px;
 border-radius: 10px;
 box-sizing: border-box;
 align-items: center;
 cursor: pointer;

 span {
   font-weight: ${({ openMenu }) => openMenu ? '600' : '400'};
   margin-left: ${({ openMenu }) => openMenu ? '0px' : 'none'};
   font-size: ${({ openMenu }) => openMenu ? '18px' : '11px'};
 }

  @media(max-width: 1559px) {
  span {
  font-size: ${({ openMenu }) => openMenu ? '16px' : '9px'};}
 }
`;

export const MenuItemSecondPart = styled.div<{ openMenu: boolean }>`
min-height: ${({ openMenu }) => openMenu ? '40px' : '0'};
flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'none'};
width: ${({ openMenu }) => openMenu ? '98%' : '0'};
border-radius: ${({ openMenu }) => openMenu ? '10px' : '0'};
padding: ${({ openMenu }) => openMenu ? '2px 15px' : '0'};;
box-sizing: ${({ openMenu }) => openMenu ? 'border-box' : 'none'};
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
align-items: ${({ openMenu }) => openMenu ? 'center' : 'none'};
cursor: ${({ openMenu }) => openMenu ? 'pointer' : 'none'};
margin-bottom: 7px;

span {
  font-weight: ${({ openMenu }) => openMenu ? '600' : '0'};
  margin-left: ${({ openMenu }) => openMenu ? '21px' : '0'};
  font-size: ${({ openMenu }) => openMenu ? '14px' : '0'};
}

  @media(max-width: 1559px) {
 span {

  font-size: ${({ openMenu }) => openMenu ? '12px' : '0'};
}
 }
`;

export const ButtonIcon = styled.img`
width: 23px;
margin-left: 10px;

@media(max-width: 1559px) {
  width: 19px;
}
`;

export const ContainerOneIcons = styled.img<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? '23px' : '22px'};
margin-left: ${({ openMenu }) => openMenu ? '10px' : '0px'};

@media(max-width: 1559px) {
width: ${({ openMenu }) => openMenu ? '19px' : '20px'};
}
`;

export const YouItemIcon = styled.img<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? '0' : '22px'};
margin-left: ${({ openMenu }) => openMenu ? '10px' : '0px'};
`;

export const YouIconContainer = styled.div<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? 'none' : '23px'};
`;

export const LogOutYouMenuItem = styled.div<{ openMenu: boolean }>`
 min-height: ${({ openMenu }) => openMenu ? '40px' : '80px'};
 flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
 justify-content: ${({ openMenu }) => openMenu ? 'none' : 'center'};
 display: flex;
 box-sizing: border-box;
 width: 98%;
 align-items: center;
 border-radius: 10px;
 padding: 2px 15px;
 margin: ${({ openMenu }) => openMenu ? '10px 0 5px 0' : '0 0 2px 0'};
 cursor: pointer;

 span {
   font-weight: ${({ openMenu }) => openMenu ? '600' : '400'};
   margin-left: ${({ openMenu }) => openMenu ? '25px' : 'none'};
   font-size: ${({ openMenu }) => openMenu ? '14px' : '11px'};
 }

  @media(max-width: 1559px) {

   span {
   margin-left: ${({ openMenu }) => openMenu ? '25px' : 'none'};
   font-size: ${({ openMenu }) => openMenu ? '12px' : '9px'};
 }

 }
`;

export const LogOutYouIconContainer = styled.div<{ openMenu: boolean }>`
margin-left: ${({ openMenu }) => openMenu ? '10px' : '0px'};
height: 23px;
width: 23px;
`;

export const LogOutYouItemIcon = styled.img<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? '23px' : '22px'};

@media(max-width: 1559px) {
width: ${({ openMenu }) => openMenu ? '19px' : '20px'};
}
`;


export const LineContainer = styled.div<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? '100%' : '0'};
height: ${({ openMenu }) => openMenu ? '10px' : '0'};
`;

export const Line = styled.div`
width: 98%;
height: 1px;
background-color: #D3D3D3;
`;

export const SpanContainer = styled.div<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? '90%' : '0'};
height: ${({ openMenu }) => openMenu ? '15px' : '0'};
box-sizing: border-box;
align-items: center;
justify-content: center;
display: flex;
margin-bottom: 15px;
margin-right: 20px;
`;

export const LoginContainer = styled.div<{ openMenu: boolean }>`
display: ${({ openMenu }) => openMenu ? 'flex' : 'none'};
height: 100%;
width: 100%;
`;

export const LoginRequestSpan = styled.span`
width: 66%;
height: 60px;
padding-left: 25px;
font-size: 15px;
font-weight: 500;
color: black;

@media(max-width: 1559px) {
font-size: 13px;
}
`;

export const MenuLoginContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 32px;
width: 130px;
margin: 70px 0 15px -67%;
border-radius: 20px;
border: 1px solid;
color: #DCDCDC;
transition: 0.5s;
cursor: pointer;
border-color: #DCDCDC;
background-color: #f2f2f2;

font-size: 15px;
font-weight: 600;
color: #5353ec;

&:hover {
   background-color: #00FFFF;
}

@media(max-width: 1559px) {
   width: 110px;
   height: 29px;
   font-size: 13px;
}
`;

export const SpanButton = styled.span`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 100%;
width: 100%;
font-size: 15px;
font-weight: 600;
border-radius: 20px;
color: #5353ec;
`;

export const LoginButtonIcon = styled.img`
width: 22px;

@media(max-width: 1559px) {
   width: 19px;
}
`;

export const PlusYouTubeContainer = styled.div<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? '100%' : '0'};
height: ${({ openMenu }) => openMenu ? '15px' : '0'};
box-sizing: border-box;
align-items: center;
justify-content: center;
display: flex;
margin-bottom: 10px;
margin-top: 20px;
`;

export const PlusYouTubeInfo = styled.span<{ openMenu: boolean }>`
font-size: ${({ openMenu }) => openMenu ? '16px' : '0'};
font-weight: ${({ openMenu }) => openMenu ? '700' : '0'};
margin-right: ${({ openMenu }) => openMenu ? '26px' : '0'};

@media(max-width: 1559px) {
font-size: ${({ openMenu }) => openMenu ? '14px' : '0'};
margin-right: ${({ openMenu }) => openMenu ? '55px' : '0'};
}
`;

export const SpanInfo = styled.span<{ openMenu: boolean }>`
font-weight: ${({ openMenu }) => openMenu ? '700' : '0'};
font-size: ${({ openMenu }) => openMenu ? '16px' : '0'};
margin-top: ${({ openMenu }) => openMenu ? '15px' : '0'};
margin-right: ${({ openMenu }) => openMenu ? '110px' : '0'};

@media(max-width: 1559px) {
font-size: ${({ openMenu }) => openMenu ? '14px' : '0'};
margin-left: ${({ openMenu }) => openMenu ? '0px' : '0px'};
margin-right: ${({ openMenu }) => openMenu ? '90px' : '0'};
}
`;

export const ChannelIcon = styled.img`
width: 24px;
height: 24px;
border-radius: 50%;
margin-right: 2px;
`;

export const CreditsContainer = styled.div<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? '98%' : '0'};
height: ${({ openMenu }) => openMenu ? '18px' : '0'};
margin-top: 10px;
`;

export const CreditsSpan = styled.span<{ openMenu: boolean }>`
font-size: ${({ openMenu }) => openMenu ? '11px' : '0'};
font-weight: ${({ openMenu }) => openMenu ? '500' : '0'};
color: ${({ openMenu }) => openMenu ? '#666666' : 'none'};
`;

export const YouItemArrow = styled.img<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? '13px' : '0'};
display: flex;
justify-content: center;
alignt-items: center;
margin-left: 8px;
margin-top: 3px;

@media(max-width: 1559px) {
width: ${({ openMenu }) => openMenu ? '11px' : '0'};
}
`;

export const MusicIconContainer = styled.img`
width: 10px;
margin-left: 5px;
color: grey;
`;

export const SocialMedia = styled.div<{ openMenu: boolean }>`
height: ${({ openMenu }) => openMenu ? '50px' : '0'};
width: ${({ openMenu }) => openMenu ? '98%' : '0'};
`;

export const SocialMediaContainer = styled.div<{ openMenu: boolean }>`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`;

export const SocialMediaIcons = styled.img<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? '25px' : '0'};
`;

