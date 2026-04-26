import styled from "styled-components";

interface InputValid { valid: boolean }

interface IsFocused { isFocused: boolean }

interface PasswordFocused { passwordFocused: boolean }

export const MainContainer = styled.div`
display: flex;
height: 100vh;
width: 100vw;
background-color: #d2d2d2`;

export const LoginContainer = styled.div`
position: absolute;
width: 1075px;
height: 470px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 30px;
background-color: #fff;

@media(max-width: 1760px) {width: 925px}

@media(max-width: 1200px) {
width: 785px;
height: 440px}

@media(max-width: 1090px) {
width: 79%;
height: 430px}

@media(max-width: 1045px) {width: 85%}

@media(max-width: 976px) {width: 830px}

@media(max-width: 830px) {
width: 710px;
height: 450px}

@media(max-width: 730px) {
width: 620px;
height: 440px}

@media(max-width: 630px) {
width: 550px;
height: 430px}

@media(max-width: 599px) {
height: 100vh;
width: 100vw;
border-radius: 0px}`;

export const GoogleIconContainer = styled.img`
height: 50px;
width: 50px;
margin: 40px 0 0 40px;
border-radius: 50%;

@media(max-width: 1200px) {
width: 45px;
height: 45px;
margin-top: 35px}

@media(max-width: 730px) {
height: 43px;
width: 43px}

@media(max-width: 599px) {
height: 53px;
width: 53px;
margin: 20px 0 0 30px}

@media(max-width: 550px) {margin-left: 15px}

@media(max-width: 400px) {margin-left: 4%}

@media(max-width: 400px) {margin-left: 4%}`;

export const LoginSpanContainer = styled.div`
span {
display: flex;
width: fit-content;
cursor: default}

span:first-child {
font-size: 45px;
margin: 1% 0 0 4%;

@media(max-width: 976px) {
font-size: 42px;
font-weight: 600;
margin: 2% 0 0 4%;}

@media(max-width: 500px) {margin-left: 5%}

@media(max-width: 400px) {margin-left: 6%}

@media(max-width: 350px) {margin-left: 7%}

@media(max-width: 730px) {font-size: 38px}

@media(max-width: 599px) {font-size: 30px}

@media(max-width: 560px) {font-size: 33px}}

span:last-child {
font-size: 16px;
margin: 1% 0 0 4%;

@media(max-width: 976px) {
font-weight: 500;
margin-left: 4.3%;}

@media(max-width: 500px) {margin-left: 5%}

@media(max-width: 400px) {margin-left: 6%}

@media(max-width: 350px) {margin-left: 7%}

@media(max-width: 730px) {font-size: 15px}

@media(max-width: 560px) {font-size: 13px}}`;

export const EmailInfoContainer = styled.div<InputValid>`
display: flex;
height: ${({ valid }) => valid ? '180px' : '205px'};
width: 537px;
margin: -195px 0 0 537px;
border-top-right-radius: 30px;
background-color: green;

@media(max-width: 1760px) {margin-left: 387px}

@media(max-width: 1680px) {
height: ${({ valid }) => valid ? '170px' : '197px'};
width: 490px;
margin: -192px 0 0 435px}

@media(max-width: 1200px) {
height: ${({ valid }) => valid ? '33%' : '38.5%'};
width: 53.9%;
margin: -190.4px 0 0 46%}

@media(max-width: 1152px) {height: ${({ valid }) => valid ? '37%' : '42.5%'}}

@media(max-width: 1115px) {height: ${({ valid }) => valid ? '37%' : '41.5%'}}

@media(max-width: 1090px) {height: ${({ valid }) => valid ? '38%' : '43.5%'}}

@media(max-width: 1060px) {height: ${({ valid }) => valid ? '37%' : '42.5%'}}

@media(max-width: 1040px) {height: ${({ valid }) => valid ? '38.5%' : '44%'}}

@media(max-width: 980px) {height: ${({ valid }) => valid ? '37%' : '42.5%'}}

@media(max-width: 976px) {
width: 56.4%;
height: ${({ valid }) => valid ? '38%' : '43.6%'};
margin-top: -195.4px;
margin-left: 43.5%}

@media(max-width: 830px) {
height: ${({ valid }) => valid ? '33%' : '38.6%'};
margin-top: -191.8px}

@media(max-width: 730px) {
height: ${({ valid }) => valid ? '37.6%' : '43%'};
margin-top: -176px}

@media(max-width: 630px) {
height: ${({ valid }) => valid ? '36%' : '41%'};
margin-top: -176px}

@media(max-width: 599px) {
width: 100%;
height: ${({ valid }) => valid ? '85px' : '110px'};
border-radius: 0px;
margin: 0px}`;

export const EmailContainer = styled.div<IsFocused>`
display: flex;
height: 55px;
width: 470px;
margin: 22% 0 0 10px;
border: solid;
border-radius: 5px;
border-width: ${({ isFocused }) => isFocused ? '2px' : '1px'};
border-color: ${({ isFocused }) => isFocused ? '#4169E1' : 'grey'};

@media(max-width: 1680px) {width: 440px}

@media(max-width: 1200px) {width: 370px}

@media(max-width: 976px) {width: 380px}

@media(max-width: 830px) {width: 345px}

@media(max-width: 730px) {
width: 320px;
margin: 30% 0 0 0px}

@media(max-width: 630px) {width: 285px;}

@media(max-width: 599px) {
height: 55px;
width: 510px;
margin: 20px 0 0 20px}

@media(max-width: 535px) {width: 445px}

@media(max-width: 480px) {width: 415px}

@media(max-width: 450px) {width: 385px}

@media(max-width: 413px) {width: 330px}

@media(max-width: 360px) {width: 300px}

@media(max-width: 330px) {width: 280px}`;

export const EmailInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '458px' : '462px'};
max-height: 53px;
margin: ${({ valid }) => valid ? 'none' : '-2px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

@media(max-width: 1680px) {max-width: 427px}

@media(max-width: 1200px) {max-width: ${({ valid }) => valid ? '358px' : '98%'}}

@media(max-width: 976px) {max-width: ${({ valid }) => valid ? '368px' : '98%'}}

@media(max-width: 830px) {
max-width: 96.5%;
max-height: 96.3%}

@media(max-width: 631px) {max-width: 96.2%}

@media(max-width: 630px) {max-width: ${({ valid }) => valid ? '95.5%' : '96%'}}

@media(max-width: 599px) {max-width: 97.7%}

@media(max-width: 535px) {max-width: ${({ valid }) => valid ? '97.4%' : '98%'}}

@media(max-width: 480px) {max-width: 97.2%}

@media(max-width: 450px) {
max-width: 97%;
max-height: ${({ valid }) => valid ? '96%' : '98%'}}

@media(max-width: 413px) {max-width: ${({ valid }) => valid ? '96.5%' : '97%'}}

@media(max-width: 360px) {max-width: 96%}

@media(max-width: 330px) {max-width: 95.8%}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 115px;
font-size: 12px;
transform: translateY(-27px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 976px) {transform: translateY(-28px)}}`;

export const EmailLabel = styled.label<InputValid>`
height: 21px;
width: 130px;
margin: ${({ valid }) => valid ? '16px 0px 0px -455px' : '18px 0 0 -462px'};
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media(max-width: 1680px) {margin: ${({ valid }) => valid ? '18px 0px 0px -427px' : '20px 0 0 -430px'}}

@media(max-width: 1200px) {margin: 15px 0 0 -355px}

@media(max-width: 1102px) {margin-left: -365px}

@media(max-width: 1090px) {margin-left: -355px}

@media(max-width: 1080px) {margin-left: -365px}

@media(max-width: 1060px) {margin-left: -355px}

@media(max-width: 976px) {margin-left: -370px}

@media(max-width: 830px) {margin: 19px 0px 0px -330px}

@media(max-width: 730px) {margin-left: -310px}

@media(max-width: 630px) {margin-left: -275px}

@media(max-width: 599px) {margin-left: -500px}

@media(max-width: 535px) {margin-left: -430px}

@media(max-width: 480px) {margin-left: -405px}

@media(max-width: 450px) {margin-left: -375px}

@media(max-width: 413px) {margin-left: -320px}

@media(max-width: 360px) {margin-left: -290px}

@media(max-width: 330px) {margin-left: -270px}`;

export const ExclamationIconContainer = styled.img`
width: 20px;
height: 20px;
border-radius: 50px`;

export const PasswordInfoContainer = styled.div<InputValid>`
display: flex;
width: 537px;
height: ${({ valid }) => valid ? '73px' : '98px'};
margin-left: 537px;
background-color: grey;

@media(max-width: 1760px) {margin-left: 387px}

@media(max-width: 1680px) {
width: 490px;
margin-left: 435px}

@media(max-width: 1200px) {
width: 53.9%;
margin-left: 46%}

@media(max-width: 1152px) {
height: ${({ valid }) => valid ? '16%' : '22%'};
margin-left: 46%}

@media(max-width: 976px) {
width: 56.4%;
margin-left: 43.5%}

@media(max-width: 830px) {margin-left: 43.5%}

@media(max-width: 599px) {
width: 100%;
height: ${({ valid }) => valid ? '85px' : '102px'};
margin: 0}`;

export const PasswordContainer = styled.div<PasswordFocused>`
display: flex;
height: 55px;
width: 470px;
margin: 10px 0 0 10px;
border: solid;
border-radius: 5px;
border-width: ${({ passwordFocused }) => passwordFocused ? '2px' : '1px'};
border-color: ${({ passwordFocused }) => passwordFocused ? '#4169E1' : 'grey'};

@media(max-width: 1680px) {width: 440px}

@media(max-width: 1200px) {width: 370px}

@media(max-width: 976px) {width: 380px}

@media(max-width: 830px) {width: 345px}

@media(max-width: 730px) {
width: 320px;
margin-left: 0}

@media(max-width: 630px) {width: 285px;}

@media(max-width: 599px) {
height: 55px;
width: 510px;
margin: 10px 0 0 20px}

@media(max-width: 535px) {width: 445px;}

@media(max-width: 480px) {width: 415px;}

@media(max-width: 450px) {width: 385px;}

@media(max-width: 413px) {width: 330px;}

@media(max-width: 360px) {width: 300px;}

@media(max-width: 330px) {width: 280px;}
`;

export const PasswordInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '458px' : '462px'};
max-height: 53px;
margin: ${({ valid }) => valid ? 'none' : '-2px 0px 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

@media(max-width: 1680px) {max-width: 427px}

@media(max-width: 1200px) {max-width: ${({ valid }) => valid ? '358px' : '98%'}}

@media(max-width: 976px) {max-width: ${({ valid }) => valid ? '368.2px' : '98%'}}

@media(max-width: 830px) {
max-width: 96.5%;
max-height: 96.3%}

@media(max-width: 631px) {max-width: 96.2%}

@media(max-width: 630px) {max-width: ${({ valid }) => valid ? '95.7%' : '96%'}}

@media(max-width: 599px) {max-width: 97.7%}

@media(max-width: 535px) {max-width: ${({ valid }) => valid ? '97.4%' : '98%'}}

@media(max-width: 480px) {max-width: 97.2%}

@media(max-width: 450px) {max-width: 97%}

@media(max-width: 413px) {max-width: ${({ valid }) => valid ? '96.5%' : '97%'}}

@media(max-width: 360px) {max-width: 96%}

@media(max-width: 330px) {max-width: 95.8%}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 102px;
padding-left: 0px;
font-size: 12px;
transform: translateY(-27px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 976px) {transform: translateY(-28px)}

@media(max-width: 480px) {transform: translateY(-28px)}}`;

export const PasswordLabel = styled.label<InputValid>`
height: 21px;
width: 140px;
margin: ${({ valid }) => valid ? '16px 0px 0px -455px' : '18px 0 0 -462px'};
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media(max-width: 1680px) {margin: ${({ valid }) => valid ? '18px 0px 0px -427px' : '20px 0 0 -430px'}}

@media(max-width: 1200px) {margin: 15px 0 0 -355px}

@media(max-width: 1102px) {margin-left: -365px}

@media(max-width: 1090px) {margin-left: -355px}

@media(max-width: 1080px) {margin-left: -365px}

@media(max-width: 1060px) {margin-left: -355px}

@media(max-width: 976px) {margin-left: -370px}

@media(max-width: 830px) {margin: 19px 0px 0px -330px}

@media(max-width: 730px) {margin-left: -310px}

@media(max-width: 630px) {margin-left: -275px}

@media(max-width: 599px) {margin-left: -500px}

@media(max-width: 535px) {margin-left: -430px}

@media(max-width: 480px) {margin-left: -405px}

@media(max-width: 450px) {margin-left: -375px}

@media(max-width: 413px) {margin-left: -320px}

@media(max-width: 360px) {margin-left: -290px}

@media(max-width: 330px) {margin-left: -270px}`;

export const InvalidPasswordMessage = styled.span`
display: block;
width: 43%;
height: 20px;
margin-left: 5px;
font-size: 13px;
color: red;
cursor: default;`;

export const ShowPasswordContainer = styled.div`
display: flex;
width: fit-content;
height: fit-content;
margin: 4px 0 0 548px;

span {
display: flex;
width: fit-content;
height: fit-content;
margin: 2px 0 0 10px;
font-size: 14px;
font-weight: 600;
cursor: pointer}

@media(max-width: 1760px) {margin-left: 400px}

@media(max-width: 1680px) {margin-left: 445px}

@media(max-width: 1152px) {margin-left: 410px}

@media(max-width: 1115px) {margin-left: 396px}

@media(max-width: 1090px) {margin-left: 408px}

@media(max-width: 1080px) {margin-left: 410px}

@media(max-width: 1070px) {margin-left: 402px}

@media(max-width: 1060px) {margin-left: 395px}

@media(max-width: 1040px) {margin-left: 420px}

@media(max-width: 1030px) {margin-left: 415px}

@media(max-width: 1020px) {margin-left: 412px}

@media(max-width: 1010px) {margin-left: 408px}

@media(max-width: 1000px) {margin-left: 405px}

@media(max-width: 990px) {margin-left: 395px}

@media(max-width: 976px) {margin-left: 371px}

@media(max-width: 830px) {margin-left: 324px}

@media(max-width: 730px) {margin-left: 270px}

@media(max-width: 630px) {margin-left: 242px}

@media(max-width: 599px) {margin-left: 20px}`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
display: flex;
width: 18px;
height: 18px;
background-color: #7CB9E8; 
cursor: pointer`;

export const ButtonsContainer = styled.div`
display: flex;
height: 67px;
width: 50%;
margin: 50px 0 0 520px;

@media(max-width: 1760px) {margin-left: 430px}

@media(max-width: 1680px) {margin-left: 450px}

@media(max-width: 976px) {
height: 60px;
margin-top: 30px;
margin-left: 49.7%}

@media(max-width: 830px) {margin-top: 50px}

@media(max-width: 599px) {
margin-top: 37px;
margin-left: 46%}

@media(max-width: 559px) {margin-left: 49.5%}

@media(max-width: 535px) {margin-left: 41.5%}

@media(max-width: 485px) {margin-left: 44%}

@media(max-width: 480px) {
width: 290px;
margin-left: 37%}

@media(max-width: 460px) {
width: 270px;
margin-left: 34%}

@media(max-width: 413px) {margin-left: 27%}

@media(max-width: 370px) {margin-left: 23%}

@media(max-width: 360px) {
width: 260px;
margin-left: 20%}

@media(max-width: 330px) {margin-left: 15%}`;

export const SignUpContainer = styled.div`
display: flex;
height: 40px;
width: 105px;
margin: 15px 0 0 260px;
border-radius: 50px;
cursor: pointer;
background-color: #fff;

span {
width: fit-content;
height: fit-content;
margin: 11px 0 0 18px;
border-radius: 50px;
font-weight: 500;
font-size: 14px;
color: #4169E1}

&:hover {background-color: #F8F8FF}

@media(max-width: 1760px) {margin-left: 194px}

@media(max-width: 830px) {margin-left: 22%}

@media(max-width: 630px) {margin-left: 8%}`;

export const ButtonsContainerSpans = styled.span`
width: 100%;
font-weight: 500;
font-size: 91%;
border-radius: 50px;
padding: 9px 0 0 15px;
`;

export const NextButtonContainer = styled.div`
display: flex;
height: 40px;
width: 105px;
margin: 15px 0 0 25px;
border-radius: 50px;
cursor: pointer;
background-color:rgb(150, 193, 233);

span {
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
border-radius: 50px;
font-weight: 500;
font-size: 14px;
color:rgb(52, 93, 214)}

&:hover {background-color: #6495ED}`;

export const EmailEmptyContainer = styled.div<InputValid>`
display: ${({ valid }) => valid ? 'none' : 'flex'};
height: 21px;
margin: 180px 0 0 -91%;
background-color: #fff;

span {
display: block;
height: 21px;
font-size: 13px;
margin-left: 5px;
color: red;
cursor: default}

@media(max-width: 1760px) {margin: 179px 0 0 -495px}

@media(max-width: 1680px) {margin: 171px 0 0 -462px}

@media(max-width: 1200px) {
margin: 154px 0 0 -92%;
}

@media(max-width: 1152px) {
margin: 164px 0 0 -84%;
}

@media(max-width: 1115px) {
margin: 160px 0 0 -88%;
}

@media(max-width: 1090px) {
margin: 163px 0 0 -84%;
}

@media(max-width: 1060px) {
margin: 160px 0 0 -87%;
}

@media(max-width: 1040px) {
margin: 166px 0 0 -83%;
}

@media(max-width: 1010px) {
margin: 162px 0 0 -85%;
}

@media(max-width: 980px) {
margin: 160px 0 0 -87%;
}

@media(max-width: 976px) {
margin: 162px 0 0 -87%;
}

@media(max-width: 830px) {
margin: 150px 0 0 -89%;
}

@media(max-width: 820px) {
margin-left: -92%;
}

@media(max-width: 730px) {
margin: 165px 0 0 -98%;
}

@media(max-width: 630px) {
margin-top: 153px;
}

@media(max-width: 599px) {
margin: 83px 0 0 -530px;
span {font-size: 14px}}

@media(max-width: 535px) {margin-left: -465px}

@media(max-width: 480px) {margin-left: -435px}

@media(max-width: 450px) {margin-left: -405px}

@media(max-width: 413px) {margin-left: -350px}

@media(max-width: 360px) {margin-left: -320px}

@media(max-width: 330px) {
margin-left: -300px;
span {font-size: 13px}}`;

export const PasswordEmptyContainer = styled.div<InputValid>`
display: ${({ valid }) => valid ? 'none' : 'flex'};
height: 21px;
margin: 73px 0 0 -91%;
background-color: #fff;

span {
display: block;
height: 21px;
font-size: 13px;
margin-left: 5px;
color: red;
cursor: default}

@media(max-width: 1760px) {margin: 72px 0 0 -495px}

@media(max-width: 1680px) {margin: 73px 0 0 -462px}

@media(max-width: 1200px) {margin-left: -92%}

@media(max-width: 1156px) {margin-left: -84%}

@media(max-width: 1115px) {margin-left: -88%}

@media(max-width: 1090px) {margin-left: -84%}

@media(max-width: 1060px) {margin-left: -87%}

@media(max-width: 1040px) {margin-left: -83%}

@media(max-width: 1020px) {margin-left: -85%}

@media(max-width: 980px) {
margin-left: -87%;
}

@media(max-width: 830px) {
margin: 70px 0 0 -89%;
}

@media(max-width: 820px) {
margin-left: -92%;
}

@media(max-width: 730px) {
margin-left: -98%;
}

@media(max-width: 599px) {
margin: 73px 0 0 -530px;
span {font-size: 14px}}

@media(max-width: 535px) {margin-left: -465px}

@media(max-width: 480px) {margin-left: -435px}

@media(max-width: 450px) {margin-left: -405px}

@media(max-width: 413px) {margin-left: -350px}

@media(max-width: 360px) {margin-left: -320px}

@media(max-width: 330px) {
margin-left: -300px;
span {font-size: 13px}}`;