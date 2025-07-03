import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface ClearButtonProps {
   clearButton: boolean;
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
 align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string}>`
display: flex;
 width: 40px;
 height: 40px;
 margin: ${( {margin} ) => margin? margin : 0};
 justify-content: center;
 align-items: center;
 cursor: pointer;
 border-radius: 50% 50% 50% 50%;
 transition: 0.7s;

 &:hover {
    background-color: #9fd3c7;
 }
`;

export const YoutubeLogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
cursor: pointer;
`;

export const OptionsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 35px;
width: 40px;
border-radius: 50%;
margin-top: 5px;
margin-left: 60px;
cursor: pointer;
background-color: #fff;
`;

export const ButtonIcon = styled.img`
width: 20px;
`;

export const SearchIconContainer = styled.img`
width: 20px;
background-color: #fff;
`;

export const SearchContainer = styled.div<{openSearch: boolean}>`
display: flex;
justify-content: center;
width: 535px;
background-color: #fff;
`;

export const SearchInputContainer = styled.div<{openBar: boolean}>`
display: flex;
width: ${( { openBar } ) => openBar? '460px' : '470px'};
border: ${( { openBar } ) => openBar? '1px solid #00308F ' : '1px solid #d3d3d3'};                                   
border-radius: 40px 0 0 40px;
height: 36px;
background-color: #fff;
`;

export const SearchInput = styled.input<{openBar: boolean}>`
height: 95%;
width: 100%;
padding-left: ${( { openBar } ) => openBar? '10px' : '17px'};
border: none;
outline: none;
border-radius: 40px 0 0 40px;
font-size: 16px;
background-color: #fff;
`;

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

export const HeaderButton = styled.div`
display: flex;
width: 230px;
margin-right: 5px;
background-color: white;
`;

export const YoutubeIcon = styled.img`
width: 100px;
height: 54px;
margin: 0 0 0 50px;
background-color: white;
cursor: pointer;
`;

export const LoginContainer = styled.div`
margin: 5px 5px 1px 10px;
background-color: #f2f2f2;
width: 150px;
border-radius: 20px 20px 20px 20px;
border-color: #DCDCDC;
border: 1px solid;
color: #DCDCDC;
transition: 0.5s;
cursor: pointer;

&:hover {
   background-color: #00FFFF;
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
border-radius: 20px 20px 20px 20px;
color: #5353ec;
`;

export const LoginButtonIcon = styled.img`
width: 22px;
`;

export const MicButton = styled.div`
display: flex;
height: 40px;
width: 40px;
margin-left: -800px;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: #F0F0F0;
transition: 0.5s;
cursor: pointer;

&:hover {
   background-color: #9fd3c7;
}
`;

export const BurguerIcon = styled.img`
width: 20px; 
`;

export const HiddenIcon = styled.img<{openBar: boolean}>`
display: ${( { openBar} ) => openBar? 'flex' : 'none'};
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

export const ClearButton = styled.button<ClearButtonProps>`
display: ${({clearButton}) => clearButton? 'flex' : 'none'};
justify-content: center;
align-items: center;
width: 40px;
height: 35px;
border: none;
border-radius: 50%;
cursor: pointer;
transition: 4s;
background-color: #fff;

&:hover{
backgound-color: #D3D3D3;
}
`;

export const CloseImg = styled.img`
  width: 25px;
`;

interface ClearButtonProps {
   clearButton: boolean;
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
 align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string}>`
display: flex;
 width: 40px;
 height: 40px;
 margin: ${( {margin} ) => margin? margin : 0};
 justify-content: center;
 align-items: center;
 cursor: pointer;
 border-radius: 50% 50% 50% 50%;
 transition: 0.7s;

 &:hover {
    background-color: #9fd3c7;
 }
`;

export const YoutubeLogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
cursor: pointer;
`;

export const OptionsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 35px;
width: 40px;
border-radius: 50%;
margin-top: 5px;
margin-left: 60px;
cursor: pointer;
background-color: #fff;
`;

export const ButtonIcon = styled.img`
width: 20px;
`;

export const SearchIconContainer = styled.img`
width: 20px;
background-color: #fff;
`;

export const SearchContainer = styled.div<{openSearch: boolean}>`
display: flex;
justify-content: center;
width: 535px;
background-color: #fff;
`;

export const SearchInputContainer = styled.div<{openBar: boolean}>`
display: flex;
width: ${( { openBar } ) => openBar? '460px' : '470px'};
border: ${( { openBar } ) => openBar? '1px solid #00308F ' : '1px solid #d3d3d3'};                                   
border-radius: 40px 0 0 40px;
height: 36px;
background-color: #fff;
`;

export const SearchInput = styled.input<{openBar: boolean}>`
height: 95%;
width: 100%;
padding-left: ${( { openBar } ) => openBar? '10px' : '17px'};
border: none;
outline: none;
border-radius: 40px 0 0 40px;
font-size: 16px;
background-color: #fff;
`;

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

export const HeaderButton = styled.div`
display: flex;
width: 230px;
margin-right: 5px;
background-color: white;
`;

export const YoutubeIcon = styled.img`
width: 100px;
height: 54px;
margin: 0 0 0 50px;
background-color: white;
cursor: pointer;
`;

export const LoginContainer = styled.div`
margin: 5px 5px 1px 10px;
background-color: #f2f2f2;
width: 150px;
border-radius: 20px 20px 20px 20px;
border-color: #DCDCDC;
border: 1px solid;
color: #DCDCDC;
transition: 0.5s;
cursor: pointer;

&:hover {
   background-color: #00FFFF;
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
border-radius: 20px 20px 20px 20px;
color: #5353ec;
`;

export const LoginButtonIcon = styled.img`
width: 22px;
`;

export const MicButton = styled.div`
display: flex;
height: 40px;
width: 40px;
margin-left: -800px;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: #F0F0F0;
transition: 0.5s;
cursor: pointer;

&:hover {
   background-color: #9fd3c7;
}
`;

export const BurguerIcon = styled.img`
width: 20px; 
`;

export const HiddenIcon = styled.img<{openBar: boolean}>`
display: ${( { openBar} ) => openBar? 'flex' : 'none'};
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

export const ClearButton = styled.button<ClearButtonProps>`
display: ${({clearButton}) => clearButton? 'flex' : 'none'};
justify-content: center;
align-items: center;
width: 40px;
height: 35px;
border: none;
border-radius: 50%;
cursor: pointer;
transition: 4s;
background-color: #fff;

&:hover{
backgound-color: #D3D3D3;
}
`;

export const CloseImg = styled.img`
  width: 25px;
`;