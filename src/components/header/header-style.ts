import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface ContainerProps { openDropDownMenu: boolean }

interface ClearButtonProps { clearButton: boolean }

interface Responsive { openSearch: boolean }

interface OpenBar { openBar: boolean }

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
box-sizing: border box;
position: sticky; 
height: 55px;
width: 100%;
top: 0%;
background-color: #fff`;

export const LogoContainer = styled.div`
display: flex;
width: fit-content;
align-items: center`;

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

&:hover {background-color: #9fd3c7}

@media(max-width: 1312px) {margin-left: 16px}

@media(max-width: 363px) {margin-left: 3px}`;

export const CreateVideoButtonContainer = styled.div`
display: flex; 
justify-content: center;
align-items: center;
width: 90px;
height: 35px;
margin-right: 20px;
cursor: pointer;
border-radius: 20px;
transition: 0.7s;
background-color: #F0F0F0;

&:hover {background-color: #9fd3c7}

span {
font-size: 13px;
font-weight: 600;
margin-left: 10px;
color: #000

@media(max-width: 1312px) {font-size: 14px}

@media(max-width: 640px) {font-size: 13.4px}

@media(max-width: 380px) {margin-left: 5px}

@media(max-width: 353px) {font-size: 12.5px}}

@media(max-width: 1559px) {
margin-top: 7px;
margin-left: -5px;
width: 80px}

@media(max-width: 1440px) {margin-top: 4px}

@media(max-width: 1312px) {
width: 95px;
height: 38px;
margin-right: 10px}

@media(max-width: 1128px) {margin-right: 10px}

@media(max-width: 1060px) {
height: 37px;
margin-top: 2px}

@media(max-width: 976px) {width: 93px}

@media(max-width: 905px) {margin-right: 20px}

@media(max-width: 870px) {margin-right: 15px}

@media(max-width: 640px) {width: 80px}

@media(max-width: 570px) {margin-right: 7px}

@media(max-width: 483px) {margin-right: 2px}

@media(max-width: 380px) {width: 70px}

@media(max-width: 353px) {width: 70px}`;

export const PlusIconContainer = styled.img`
margin-left: -10px;
height: 25px;
width: 25px;
border-radius: 50%;

@media(max-width: 1559px) {
height: 20px;
width: 20px}

@media(max-width: 1312px) {
height: 25px;
width: 25px}

@media(max-width: 640px) {
height: 22px;
width: 22px}

@media(max-width: 380px) {
height: 19px;
width: 19px;
margin-left: -5px}`;

export const NotificationIconContainer = styled.div`
display: flex; 
justify-content: center;
align-items: center;
width: 35px;
height: 35px;
border-radius: 50%;
cursor: pointer;
margin: 2px 20px 0 0;

&:hover {background-color: #9fd3c7}

@media(max-width: 1440px) {margin-top: 2px}

@media(max-width: 1312px) {
width: 40px;
height: 40px;
margin-right: 7px}

@media(max-width: 990px) {margin-right: 12px}

@media(max-width: 523px) {margin-right: 5px}

@media(max-width: 483px) {margin-right: 2px}

@media(max-width: 383px) {margin-right: 1px}

@media(max-width: 345px) {display: none}`;

export const ProfileImageContainer = styled.div`
display: flex; 
justify-content: center;
align-items: center;
width: 35px;
height: 35px;
margin-top: 2px;
border-radius: 50%;
cursor: pointer;

&:hover {background-color: #9fd3c7}

@media(max-width: 1440px) {margin-top: 2px}

@media(max-width: 1312px) {
width: 40px;
height: 40px;
span {font-size: 20px}}

@media(max-width: 383px) {margin-right: -12px}

@media(max-width: 323px) {
width: 35px;
height: 35px}`;

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

span {font-size: 24px}

&:hover {background-color: #9fd3c7}

@media(max-width: 1559px) {
width: 35px;
height: 35px}`;

export const ButtonIcon = styled.img`
width: 20px;

@media(max-width: 1312px) {width: 23px}

@media(max-width: 1060px) {width: 19px}

@media(max-width: 976px) {width: 22px}

@media(max-width: 423px) {width: 20px}`;

export const DropDownMenuButtonIcon = styled.img`
width: 24px;
height: 24px;
margin-left: 6px`;

export const HiddenIcon = styled.img<OpenBar>`
display: ${({ openBar }) => openBar ? 'flex' : 'none'};
width: 15px;
height: 15px;
margin: 10px 0 0 16px;
background-color: #fff;

@media(max-width: 1312px) {
width: 18px;
height: 18px;
margin-top: 12px}

@media(max-width: 1060px) {
width: 16px;
height: 16px;
margin-top: 10px}

@media(max-width: 740px) {
width: 18px;
height: 18px}`;

export const KeyboardContainer = styled.img`
height: 20px;
width: 23px;
margin: 7px 10px 0 0;
cursor: pointer;
background-color: #fff;

@media(max-width: 1312px) {
height: 25px;
width: 27px;
margin: 8px 15px 0 0}

@media(max-width: 976px) {
height: 22px;
width: 21px;
margin: 9px 10px 0 0}`;

export const Logo = styled.img`
width: 100px;
cursor: pointer;

@media(max-width: 433px) {width: 90px}`;

export const LinkLogo = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
width: fit-content;
margin-left: 20px;

@media(max-width: 443px) {
margin-left: 10px;
margin-top: 3px}

@media(max-width: 353px) {margin-left: 4px}`;

export const SearchContainer = styled.div<Responsive>`
display: flex;
justify-content: center;
width: 535px;
background-color: #fff;

@media(max-width: 1559px) {width: 500px}

@media(max-width: 1312px) {width: 600px}

@media(max-width: 1128px) {
width: 550px;
margin-left: 83px}

@media(max-width: 1112px) {margin-left: 63px}

@media(max-width: 1062px) {
width: 485px;
margin-left: 45px}

@media(max-width: 1002px) {width: 455px}

@media(max-width: 976px) {
width: 410px;
margin-left: 35px}

@media(max-width: 932px) {
width: 395px;
margin-left: 22px}

@media(max-width: 905px) {
width: 350px;
margin-left: 55px}

@media(max-width: 905px) {width: 335px}

@media(max-width: 872px) {width: 320px}

@media(max-width: 852px) {
width: 310px;
margin-left: 45px}

@media(max-width: 822px) {
width: 260px;
margin-left: 55px}

@media(max-width: 802px) {margin-left: 25px}

@media(max-width: 780px) {
width: 240px;
margin-left: 45px}

@media(max-width: 772px) {width: 230px}

@media(max-width: 760px) {width: 217px}

@media(max-width: 750px) {width: 200px}

@media(max-width: 740px) {display: none}

@media(max-width: 730px) {width: 190px}

@media(max-width: 720px) {width: 180px}

@media(max-width: 700px) {width: 160px}

@media(max-width: 685px) {width: 146px}

@media(max-width: 660px) {width: 130px}`;

export const SearchInputContainer = styled.div<{ openBar: boolean }>`
display: flex;
width: ${({ openBar }) => openBar ? '460px' : '470px'};
border: ${({ openBar }) => openBar ? '1px solid #00308F ' : '1px solid #d3d3d3'};                                   
border-radius: 40px 0 0 40px;
height: 36px;

@media(max-width: 1559px) {width: 410px}

@media(max-width: 1312px) {
width: 600px;
height: 40px}

@media(max-width: 1060px) {
width: 500px;
height: 37px}

@media(max-width: 976px) {width: 400px}`;

export const SearchInput = styled.input<{ openBar: boolean }>`
height: 95%;
width: 100%;
padding-left: ${({ openBar }) => openBar ? '10px' : '17px'};
border: none;
outline: none;
border-radius: 40px 0 0 40px;
font-size: 16px`;

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

@media(max-width: 1312px) {height: 40px}

@media(max-width: 1112px) {width: 85px}

@media(max-width: 1060px) {height: 37px}

@media(max-width: 902px) {width: 95px}

@media(max-width: 852px) {width: 110px}

@media(max-width: 802px) {width: 120px}

@media(max-width: 760px) {width: 140px}

@media(max-width: 710px) {width: 200px}

@media(max-width: 660px) {width: 230px}`;

export const ResponsiveSearchButton = styled.div`
display: none;

@media(max-width: 740px) {
display: flex;
justify-content: center;
align-items: center;
margin-left: 220px;
border-radius: 50px;
height: 42px;
width: 42px;
cursor: pointer;
background-color: #f8f8f8;
&:hover {background-color: #9fd3c7}

@media(max-width: 720px) {margin-left: 200px}

@media(max-width: 700px) {margin-left: 185px}

@media(max-width: 690px) {margin-left: 165px}

@media(max-width: 667px) {margin-left: 150px}

@media(max-width: 630px) {margin-left: 145px}

@media(max-width: 640px) {margin-left: 130px}

@media(max-width: 650px) {margin-left: 120px}

@media(max-width: 615px) {margin-left: 105px}

@media(max-width: 610px) {margin-left: 95px}

@media(max-width: 595px) {margin-left: 85px}

@media(max-width: 580px) {margin-left: 75px}

@media(max-width: 570px) {margin-left: 65px}

@media(max-width: 560px) {margin-left: 55px}

@media(max-width: 550px) {margin-left: 45px}

@media(max-width: 543px) {margin-left: 35px}

@media(max-width: 513px) {margin-left: 25px}

@media(max-width: 503px) {margin-left: 15px}

@media(max-width: 490px) {margin-left: 20px}

@media(max-width: 474px) {margin-left: 11px}

@media(max-width: 464px) {margin-left: 7px}

@media(max-width: 454px) {margin-left: 3px}

@media(max-width: 450px) {margin-left: 33px}

@media(max-width: 423px) {margin-left: 24px}

@media(max-width: 413px) {margin-left: 15px}

@media(max-width: 405px) {margin-left: 10px}

@media(max-width: 396px) {margin-left: 0px}

@media(max-width: 380px) {margin-left: 6px}

@media(max-width: 370px) {margin-left: 3px}

@media(max-width: 345px) {
width: 35px;
height: 35px;
margin-left: 30px}

@media(max-width: 333px) {margin-left: 20px}

@media(max-width: 323px) {margin-left: 5px}`;

export const ResponsiveSearchGeneralContainer = styled.div<Responsive>`
display: none;

@media(max-width: 740px) {
display: ${({ openSearch }) => openSearch ? 'flex' : 'none'};
position: absolute;
align-items: center;
top: 0px;
width: 100vw;
height: 54.5px;
background-color: #fff}`;

export const ResponsiveSearchContainer = styled.div`
display: flex;
justify-content: center;
width: 511px;
margin-left: 40px;
background-color: #fff;

@media(max-width: 720px) {width: 500px}

@media(max-width: 710px) {width: 488px}

@media(max-width: 700px) {width: 478px}

@media(max-width: 690px) {width: 468px}

@media(max-width: 680px) {width: 458px}

@media(max-width: 670px) {width: 448px}

@media(max-width: 660px) {width: 438px}

@media(max-width: 650px) {width: 428px}

@media(max-width: 640px) {width: 418px}

@media(max-width: 630px) {width: 408px}

@media(max-width: 620px) {width: 398px}

@media(max-width: 610px) {width: 388px}

@media(max-width: 601px) {width: 378px}

@media(max-width: 590px) {width: 368px}

@media(max-width: 580px) {width: 358px}

@media(max-width: 570px) {width: 348px}

@media(max-width: 560px) {width: 338px}

@media(max-width: 550px) {width: 328px}

@media(max-width: 543px) {width: 318px}

@media(max-width: 530px) {width: 310px}

@media(max-width: 523px) {width: 300px}

@media(max-width: 513px) {width: 290px}

@media(max-width: 503px) {width: 278px}

@media(max-width: 493px) {width: 278px}

@media(max-width: 483px) {width: 268px}

@media(max-width: 473px) {width: 258px}

@media(max-width: 463px) {width: 248px}

@media(max-width: 453px) {width: 238px}

@media(max-width: 443px) {width: 226px}

@media(max-width: 433px) {width: 216px}

@media(max-width: 423px) {
width: 253px;
margin-left: 30px}

@media(max-width: 413px) {width: 243px}

@media(max-width: 403px) {width: 233px}

@media(max-width: 393px) {width: 220px}

@media(max-width: 383px) {width: 210px}

@media(max-width: 373px) {width: 200px}

@media(max-width: 363px) {width: 190px}

@media(max-width: 353px) {width: 185px}

@media(max-width: 343px) {width: 180px}

@media(max-width: 333px) {width: 175px}`;

export const ResponsiveSearchInputContainer = styled.div<OpenBar>`
display: flex;
width: ${({ openBar }) => openBar ? '520px' : '510px'};
border: ${({ openBar }) => openBar ? '1px solid #00308F ' : '1px solid #d3d3d3'};                                 
border-radius: 40px 0 0 40px;
height: 40px;
background-color: #fff;`;

export const ResponsiveSecondSearchButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 40px;
width: 70px;
border-radius: 0 40px 40px 0;
border: 1px solid #d3d3d3;
background-color: #f8f8f8;
cursor: pointer;

@media(max-width: 353px) {width: 60px;}

@media(max-width: 323px) {width: 50px;}`;

export const ResponsiveBackButton = styled.div`
display: flex;
width: 40px;
height: 40px;
border-radius: 20px;
margin-left: 10px;
cursor: pointer;

&:hover {background-color: #9fd3c7;}`;

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
cursor: pointer;`;

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

&:hover{backgound-color: #D3D3D3}

@media(max-width: 740px) {margin-top: 2px}`;

export const CloseImg = styled.img`width: 25px`;

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

&:hover {background-color: #9fd3c7}

@media(max-width: 2500px) {margin-left: -730px}

@media(max-width: 2464px) {margin-left: -715px}

@media(max-width: 2430px) {margin-left: -700px}

@media(max-width: 2400px) {margin-left: -680px}

@media(max-width: 2365px) {margin-left: -655px}

@media(max-width: 2310px) {margin-left: -635px}

@media(max-width: 2272px) {margin-left: -615px}

@media(max-width: 2235px) {margin-left: -596px}

@media(max-width: 2193px) {margin-left: -576px}

@media(max-width: 2160px) {margin-left: -556px}

@media(max-width: 2111px) {margin-left: -536px}

@media(max-width: 2090px) {margin-left: -526px}

@media(max-width: 2060px) {margin-left: -510px}

@media(max-width: 2030px) {margin-left: -490px}

@media(max-width: 1995px) {margin-left: -470px}

@media(max-width: 1943px) {margin-left: -450px}

@media(max-width: 1920px) {margin-left: -430px}

@media(max-width: 1860px) {margin-left: -410px}

@media(max-width: 1830px) {margin-left: -390px}

@media(max-width: 1800px) {margin-left: -370px}

@media(max-width: 1770px) {margin-left: -350px}

@media(max-width: 1760px) {margin-left: -350px}

@media(max-width: 1680px) {margin-left: -320px}

@media(max-width: 1620px) {margin-left: -300px}

@media(max-width: 1587px) {margin-left: -280px}

@media(max-width: 1559px) {margin-left: -290px}

@media(max-width: 1510px) {margin-left: -270px}

@media(max-width: 1466px) {margin-left: -250px}

@media(max-width: 1440px) {margin-left: -235px}

@media(max-width: 1400px) {margin-left: -225px}

@media(max-width: 1370px) {margin-left: -210px}

@media(max-width: 1340px) {margin-left: -195px}

@media(max-width: 1312px) {margin-left: -120px}

@media(max-width: 1290px) {margin-left: -100px}

@media(max-width: 1262px) {margin-left: -85px}

@media(max-width: 1222px) {margin-left: -75px}

@media(max-width: 1192px) {margin-left: -60px}

@media(max-width: 1172px) {margin-left: -45px}

@media(max-width: 1140px) {margin-left: -35px}

@media(max-width: 1112px) {margin-left: -20px}

@media(max-width: 1090px) {margin-left: 3px}

@media(max-width: 1082px) {margin-left: -7px}

@media(max-width: 1062px) {margin-left: -30px}

@media(max-width: 1052px) {margin-left: -35px}

@media(max-width: 1042px) {margin-left: -25px}

@media(max-width: 1012px) {margin-left: -15px}

@media(max-width: 1002px) {margin-left: -30px}

@media(max-width: 992px) {margin-left: -25px}

@media(max-width: 982px) {margin-left: -17px}

@media(max-width: 976px) {
height: 43px;
width: 43px;
margin-left: -35px}

@media(max-width: 956px) {margin-left: -25px}

@media(max-width: 940px) {margin-left: -20px}

@media(max-width: 932px) {margin-left: -26px}

@media(max-width: 920px) {margin-left: -22px}

@media(max-width: 910px) {margin-left: -15px}

@media(max-width: 902px) {margin-left: -20px}

@media(max-width: 872px) {margin-left: -10px}

@media(max-width: 840px) {margin-left: -14px}

@media(max-width: 810px) {margin-left: -20px}

@media(max-width: 772px) {margin-left: -13px}

@media(max-width: 740px) {margin-left: -5px}

@media(max-width: 720px) {margin-left: -10px}

@media(max-width: 620px) {margin-left: -15px}

@media(max-width: 578px) {margin-left: -5px}

@media(max-width: 523px) {margin-right: 5px}

@media(max-width: 495px) {margin-right: 2px}

@media(max-width: 490px) {margin-right: 5px}

@media(max-width: 474px) {margin-right: 2px}

@media(max-width: 450px) {display: none}`;

export const HeaderButton = styled.div`
display: flex;
width: fit-content;
margin-right: 55px;

@media(max-width: 1760px) {margin-right: 20px;}

@media(max-width: 1400px) {margin-right: 15px;}`;

export const OptionsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 35px;
width: 35px;
border-radius: 50%;
margin-top: 5px;
margin-right: 10px;
cursor: pointer;
background-color: #fff;

@media(max-width: 1312px) {
margin-top: 0px;
margin-right: 0px;}

@media(max-width: 400px) {
height: 25px;
width: 25px;
margin-top: 5px;
margin-right: 0px;}

@media(max-width: 334px) {display: none;}`;

export const LoginContainer = styled.div`
width: 120px;
margin: 5px 5px 1px 10px;
border-radius: 20px;
border: 1px solid;
border-color: #DCDCDC;
color: #DCDCDC;
background-color: #f2f2f2;
transition: 0.5s;
cursor: pointer;

@media(max-width: 1312px) {margin-top: 1px;}

@media(max-width: 400px) {
margin-right: -10px;
height: 30px;}

@media(max-width: 345px) {
width: 115px;
height: 30px;
margin-right: -6px;}`;

export const SpanButton = styled.span`
display: flex;
align-items: center;
justify-content: space-evenly;
height: 100%;
width: 100%;
font-size: 15px;
font-weight: 600;
border-radius: 20px 20px 20px 20px;
color: #5353ec;`;

export const LoginButtonIcon = styled.img`width: 22px`;

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

@media(max-width: 1128px) {
margin-top: -50px;
margin-right: 50px}
  
@media(max-width: 375px) {width: 250px}`;


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
font-weight: 500}

&:hover {background-color: #e5e5e5}`;

export const UserInfoContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
height: fit-content;
border-radius: 10px;

@media(max-width: 1128px) {margin-top: 15px}`;

export const UserName = styled.span`
width: fit-content;
margin-left: 12px;
font-size: 19px;
font-weight: 500;
cursor: default;`;