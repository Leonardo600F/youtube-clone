import styled from "styled-components";

interface InputValid { valid: boolean; }

interface FirstNameFocused { firstNameFocus: boolean }
interface SurnameFocused { surnameFocus: boolean }
interface EmailFocused { emailFocus: boolean }
interface PasswordFocused { passwordFocus: boolean }
interface ComparePasswordFocused { comparePasswordFocus: boolean }

export const MainContainer = styled.div`
display: flex;
height: 100vh;
width: 100vw;
background-color: #d2d2d2;`;

export const SignUpContainer = styled.div`
position: absolute;
box-sizing: border-box;
width: 650px;
height: 900px;
top: 50%;
left: 50%;
border-radius: 10px;
transform: translate(-50%, -50%);
background-color: #fff;

@media(max-width: 1559px) {
width: 600px;
height: 800px}  

@media(max-width: 1280px) {
width: 600px;
height: 710px}

@media(max-width: 630px) {
width: 525px;
height: 690px}

@media(max-width: 599px) {
width: 100%;
height: 100%;
border-radius: 0}

/* Responsividade de altura */
@media (max-height: 915px) {height: 800px}

@media (max-height: 915px) {@media (max-width: 599px) {height: 100vh}}

@media (max-height: 825px) {height: 700px}

@media (max-height: 825px) {@media (max-width: 599px) {height: 100vh}}

@media (max-height: 725px) {height: 600px}

@media (max-height: 725px) {@media (max-width: 599px) {height: 100vh}}

@media (max-height: 625px) {height: 550px}

@media(max-height: 625px) {@media(max-width: 599px) {height: 100vh}}

@media (max-height: 580px) {height: 525px}

@media (max-height: 580px) {@media(max-width: 599px) {height: 100vh}}`;

export const GoogleIconContainer = styled.img`
width: 50px;
height: 50px;
margin: 45px 0px 0 300px;
border-radius: 50%;

@media(max-width: 1559px) {
width: 40px;
height: 40px;
margin-left: 280px}

@media(max-width: 630px) {margin-left: 240px}

@media(max-width: 599px) {
width: 55px;
height: 55px;
margin: 20px 0 0 20px}

@media(max-width: 349px) {
width: 50px;
height: 50px}

/* Responsividade de altura */
@media (max-height: 825px) {margin-top: 0px}

@media(max-height: 725px) {margin-top: 10px}

@media(max-height: 725px) {
@media(max-width: 599px) {
width: 40px;
height: 40px}}

@media (max-height: 700px) {
@media (max-width: 599px) {
width: 45px;
height: 45px}}

@media(max-height: 625px) {
width: 40px;
height: 40px}

@media (max-height: 600px) {
@media (max-width: 599px) {
width: 40px;
height: 40px}}

@media (max-height: 580px) {
@media (max-width: 599px) {
width: 32px;
height: 32px}}`;

export const Title = styled.h2`
display: flex;
height: fit-content;
width: fit-content;
margin-left: 155px;
font-weight: 500;
font-size: 30px;
cursor: default;

@media(max-width: 1559px) {font-size: 23px}

@media(max-width: 630px) {margin-left: 125px}

@media(max-width: 599px) {
font-weight: 400;
font-size: 30px;
margin: 20px 0 0 26px}

@media(max-width: 409px) {font-size: 25px}

@media(max-width: 349px) {font-size: 20px}

/* Responsividade de altura */
@media(max-height: 725px) {margin-top: 5px}

@media(max-height: 725px) {
@media(max-width: 599px) {
margin-top: 0px;
font-size: 23px}}

@media (max-height: 700px) {@media (max-width: 599px) {font-size: 26px}}

@media (max-height: 700px) {@media (max-width: 362px) {font-size: 24px}}

@media (max-height: 700px) {@media (max-width: 329px) {font-size: 21px}}

@media (max-height: 625px) {margin: 1px 0 0 113px}

@media (max-height: 625px) {@media (max-width: 599px) {margin-left: 25px}}

@media (max-height: 625px) {@media (max-width: 348px) {font-size: 22.5px}}

@media (max-height: 625px) {@media (max-width: 329px) {font-size: 20.5px}}

@media (max-height: 600px) {
@media (max-width: 599px) {
margin-top: 2px;
font-size: 23px}}

@media (max-height: 600px) {@media (max-width: 329px) {font-size: 21.5px}}

@media (max-height: 580px) {
@media (max-width: 599px) {
margin: -3px 0 0 26px;
font-size: 20px}}`;

export const FirstNameContainer = styled.div`
display: flex;
height: 100px;
width: 255px;
margin: 50px 0px 0 60px;
background-color: #fff;

@media(max-width: 1559px) {margin: 50px 0px 0 40px}

@media(max-width: 630px) {
width: 226px;
margin-left: 20px}

@media(max-width: 599px) {
width: 560px;
margin: 0 0 0 26px}

@media(max-width: 589px) {width: 520px}

@media(max-width: 559px) {width: 485px}

@media(max-width: 529px) {width: 465px}

@media(max-width: 509px) {width: 455px}

@media(max-width: 489px) {width: 435px}

@media(max-width: 469px) {width: 415px}

@media(max-width: 449px) {width: 395px}

@media(max-width: 429px) {width: 375px}

@media(max-width: 409px) {width: 355px}

@media(max-width: 389px) {width: 335px}

@media(max-width: 369px) {width: 315px}

@media(max-width: 349px) {width: 295px}

@media(max-width: 329px) {width: 275px}

/* Responsividade de altura */
@media(max-height: 825px) {margin-top: 6%}

@media (max-height: 783px) {@media (max-width: 599px) {margin-top: 8px}}

@media(max-height: 725px) {margin-top: 3%}

@media(max-height: 725px) {
@media(max-width: 599px) {
height: 86px;
margin-top: 10px}}

@media (max-height: 700px) {@media (max-width: 599px) {margin-top: 6px}}

@media (max-height: 674px) {@media (max-width: 599px) {height: 85px}}

@media (max-height: 625px) and (min-width: 600px) {height: 88px}

@media (max-height: 600px) {@media (max-width: 599px) {height: 77px}}

@media (max-height: 580px) and (min-width: 600px) {height: 82px}

@media (max-height: 580px) { @media (max-width: 599px) {height: 74px}}`;

export const FirstNameUserContainer = styled.div<FirstNameFocused>`
display: flex;
height: 55px;
width: 250px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ firstNameFocus }) => firstNameFocus ? '2px' : '1px'};
border-color: ${({ firstNameFocus }) => firstNameFocus ? '#4169E1' : 'grey'};
background-color: grey;

@media(max-width: 630px) {width: 220px}

@media(max-width: 599px) {width: 554px}

@media(max-width: 589px) {width: 516px}

@media(max-width: 559px) {width: 480px}

@media(max-width: 529px) {width: 460px}

@media(max-width: 509px) {width: 450px}

@media(max-width: 489px) {width: 430px}

@media(max-width: 469px) {width: 410px}

@media(max-width: 449px) {width: 390px}

@media(max-width: 429px) {width: 370px}

@media(max-width: 409px) {width: 350px}

@media(max-width: 389px) {width: 330px}

@media(max-width: 369px) {width: 310px}

/* Responsividade de altura */
@media(max-height: 725px) {@media(max-width: 599px) {margin-top: 3px}}

@media (max-height: 674px) {@media (max-width: 599px) {margin-top: 0px}}

@media (max-height: 625px) {margin-top: 3px}

@media (max-height: 600px) {@media (max-width: 599px) {height: 49px}}

@media (max-height: 580px) and (min-width: 600px) {height: 50px}

@media (max-height: 580px) {@media (max-width: 599px) {height: 45px}}`;

export const FirstNameUserInput = styled.input<InputValid>`
width: 238px;
height: 53px;
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-radius: 5px;
border-color: red;
padding-left: 10px;
font-size: 16px;    
outline: none;
background-color: #fff;

@media(max-width: 630px) {width: 208px}

@media(max-width: 599px) {width: 542px}

@media(max-width: 589px) {width: 504px}

@media(max-width: 559px) {width: 468px}

@media(max-width: 529px) {width: 448px}

@media(max-width: 509px) {width: 437px}

@media(max-width: 489px) {width: 417px}

@media(max-width: 469px) {width: 397px}

@media(max-width: 449px) {width: 377px}

@media(max-width: 429px) {width: 357px}

@media(max-width: 409px) {width: 337px}

@media(max-width: 389px) {width: 317px}

@media(max-width: 369px) {width: 297px}

@media(max-width: 349px) {width: 279px}

@media(max-width: 329px) {width: 259px}

/* Responsividade de altura */
@media (max-height: 625px) {@media (max-width: 529px) {max-width: ${({ valid }) => valid ? '457.4px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 509px) {max-width: ${({ valid }) => valid ? '438px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 489px) {max-width: ${({ valid }) => valid ? '417px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 469px) {max-width: ${({ valid }) => valid ? '397.5px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 449px) {max-width: ${({ valid }) => valid ? '379px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 429px) {max-width: ${({ valid }) => valid ? '359px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 409px) {max-width: ${({ valid }) => valid ? '339px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 389px) {max-width: ${({ valid }) => valid ? '319px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 369px) {max-width: ${({ valid }) => valid ? '299px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 349px) {max-width: ${({ valid }) => valid ? '279px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 329px) {max-width: ${({ valid }) => valid ? '259px' : '97.5%'}}}

@media (max-height: 600px) {@media (max-width: 599px) {max-height: ${({ valid }) => valid ? '46px' : '100%'}}}

@media (max-height: 600px) {@media (max-width: 549px) {max-height: ${({ valid }) => valid ? '47px' : '100%'}}}

@media (max-height: 580px) {@media (max-width: 599px) {max-height: ${({ valid }) => valid ? '43px' : '100%'}}}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 50px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

/* Responsividade de altura */
@media (max-height: 580px) {@media (max-width: 599px) {transform: translateY(-26px)}}}`;

export const FirstNameLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 50px;
margin: ${({ valid }) => valid ? '19px 0 0 -234px' : '17px 0 0 -240px'};
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media (max-width: 630px) {margin-left: ${({ valid }) => valid ? '-207px' : '-210px'}}

@media (max-width: 599px) {
margin-top: 18px;
margin-left: ${({ valid }) => valid ? '-97.5%' : '-98%'}}

@media (max-width: 369px) {margin-left: ${({ valid }) => valid ? '-295px' : '-297px'}}

@media (max-width: 349px) {margin-left: ${({ valid }) => valid ? '-280px' : '-282px'}}

@media (max-width: 329px) {margin-left: ${({ valid }) => valid ? '-260px' : '-262px'}}

/* Responsividade de altura */
@media (max-height: 600px) {@media (max-width: 599px) {font-size: 14.5px}}

@media (max-height: 600px) {@media (max-width: 349px) {margin-top: 16px}}

@media (max-height: 580px) {
@media (max-width: 599px) {
margin-top: 14px;
font-size: 14px}}`;

export const SurnameContainer = styled.div`
display: flex;
height: 100px;
width: 255px;
margin: -99.5px 0 0px 335px;
background-color: red;

@media(max-width: 1559px) {margin: -99.7px 0 0 310px}

@media(max-width: 630px) {
width: 226px;
margin: -99px 0 0 276px}

@media(max-width: 599px) {
width: 560px;
margin: 15px 0 0 26px}

@media(max-width: 589px) {width: 520px}

@media(max-width: 559px) {width: 485px}

@media(max-width: 529px) {width: 465px}

@media(max-width: 509px) {width: 455px}

@media(max-width: 489px) {width: 435px}

@media(max-width: 469px) {width: 415px}

@media(max-width: 449px) {width: 395px}

@media(max-width: 429px) {width: 375px}

@media(max-width: 409px) {width: 355px}

@media(max-width: 389px) {width: 335px}

@media(max-width: 369px) {width: 315px}

@media(max-width: 349px) {width: 295px}

@media(max-width: 329px) {width: 275px}

/* Responsividade de altura */
@media (max-height: 825px) {@media (max-width: 599px) {margin-top: 10px}}

@media(max-height: 725px) {@media (max-width: 599px) {height: 86px}}

@media (max-height: 783px) {@media (max-width: 599px) {margin-top: 8px}}

@media (max-height: 674px) {@media (max-width: 599px) {height: 85px}}

@media (max-height: 625px) and (min-width: 600px) {
height: 88px;
margin-top: -88px}

@media (max-height: 625px) {@media (max-width: 599px) {margin-top: 10px}}

@media (max-height: 600px) {@media (max-width: 599px) {height: 77px}}

@media (max-height: 580px) and (min-width: 600px) {
height: 82px;
margin-top: -81px}

@media (max-height: 580px) {
@media (max-width: 599px) {
height: 74px;
margin-top: 10px}}`;

export const SurnameUserContainer = styled.div<SurnameFocused>`
display: flex;
height: 55px;
width: 250px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ surnameFocus }) => surnameFocus ? '2px' : '1px'};
border-color: ${({ surnameFocus }) => surnameFocus ? '#4169E1' : 'grey'};
background-color: grey;

@media(max-width: 630px) {width: 220px}

@media(max-width: 599px) {width: 554px}

@media(max-width: 589px) {width: 516px}

@media(max-width: 559px) {width: 480px}

@media(max-width: 529px) {width: 460px}

@media(max-width: 509px) {width: 450px}

@media(max-width: 489px) {width: 430px}

@media(max-width: 469px) {width: 410px}

@media(max-width: 449px) {width: 390px}

@media(max-width: 429px) {width: 370px}

@media(max-width: 409px) {width: 350px}

@media(max-width: 389px) {width: 330px}

@media(max-width: 369px) {width: 310px}

/* Responsividade de altura */
@media(max-height: 725px) {@media(max-width: 599px) {margin-top: 3px}}

@media (max-height: 674px) {@media (max-width: 599px) {margin-top: 0px}}

@media (max-height: 625px) {margin-top: 3px}

@media (max-height: 600px) {@media (max-width: 599px) {height: 49px}}

@media (max-height: 580px) and (min-width: 600px) {height: 50px}

@media (max-height: 580px) {@media (max-width: 599px) {height: 45px}}`;

export const SurnameUserInput = styled.input<InputValid>`
width: 238px;
height: 53px;
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

@media(max-width: 630px) {width: 208px}

@media(max-width: 599px) {width: 542px}

@media(max-width: 589px) {width: 504px}

@media(max-width: 559px) {width: 468px}

@media(max-width: 529px) {width: 448px}

@media(max-width: 509px) {width: 437px}

@media(max-width: 489px) {width: 417px}

@media(max-width: 469px) {width: 397px}

@media(max-width: 449px) {width: 377px}

@media(max-width: 429px) {width: 357px}

@media(max-width: 409px) {width: 337px}

@media(max-width: 389px) {width: 317px}

@media(max-width: 369px) {width: 297px}

@media(max-width: 349px) {width: 279px}

@media(max-width: 329px) {width: 259px}

/* Responsividade de altura */
@media (max-height: 625px) and (max-width: 625px) {
max-width: ${({ valid }) => valid ? '208px' : '97.5%'};
max-height: ${({ valid }) => valid ? '53px' : '100%'}}

@media (max-height: 625px) and (max-width: 599px) {max-width: ${({ valid }) => valid ? '542px' : '97.5%'}}

@media (max-height: 625px) and (max-width: 589px) {max-width: ${({ valid }) => valid ? '502px' : '97.5%'}}

@media (max-height: 625px) and (max-width: 559px) {max-width: ${({ valid }) => valid ? '97.6%' : '97.5%'}}

@media (max-height: 625px) and (max-width: 529px) {max-width: ${({ valid }) => valid ? '457.4px' : '97.5%'}}

@media (max-height: 625px) and (max-width: 516px) {max-width: ${({ valid }) => valid ? '97.3%' : '97.5%'}}

@media (max-height: 625px) and (max-width: 509px) {max-width: ${({ valid }) => valid ? '437px' : '97.5%'}}

@media (max-height: 625px) and (max-width: 489px) {max-width: ${({ valid }) => valid ? '417px' : '97.5%'}}

@media (max-height: 625px) and (max-width: 479px) {max-width: ${({ valid }) => valid ? '97.1%' : '97.5%'}}

@media (max-height: 625px) and (max-width: 447px) {max-width: ${({ valid }) => valid ? '96.9%' : '97.5%'}}

@media (max-height: 625px) and (max-width: 428px) {max-width: ${({ valid }) => valid ? '358px' : '97.5%'}}

@media (max-height: 625px) and (max-width: 422px) {max-width: ${({ valid }) => valid ? '96.7%' : '97.5%'}}

@media (max-height: 625px) and (max-width: 408px) {max-width: ${({ valid }) => valid ? '96.6%' : '97.5%'}}

@media (max-height: 625px) and (max-width: 389px) {max-width: ${({ valid }) => valid ? '319px' : '97.5%'}}

@media (max-height: 625px) and (max-width: 369px) {max-width: ${({ valid }) => valid ? '96.2%' : '97.5%'}}

@media (max-height: 625px) and (max-width: 348px) {max-width: ${({ valid }) => valid ? '95.9%' : '97.5%'}}

@media (max-height: 625px) and (max-width: 329px) {max-width: ${({ valid }) => valid ? '259px' : '97.5%'}}

@media (max-height: 600px) and (max-width: 599px) {max-height: ${({ valid }) => valid ? '47px' : '100%'}}

@media (max-height: 600px) and (max-width: 448px) {max-width: ${({ valid }) => valid ? '378.5px' : '100%'}}

@media (max-height: 600px) and (max-width: 429px) {max-width: ${({ valid }) => valid ? '358.5px' : '100%'}}

@media (max-height: 600px) and (max-width: 409px) {max-width: ${({ valid }) => valid ? '338.5px' : '100%'}}

@media (max-height: 600px) and (max-width: 389px) {max-width: ${({ valid }) => valid ? '318.5px' : '100%'}}

@media (max-height: 600px) and (max-width: 369px) {max-width: ${({ valid }) => valid ? '298.5px' : '100%'}}

@media (max-height: 600px) and (max-width: 349px) {max-width: ${({ valid }) => valid ? '279px' : '100%'}}

@media (max-height: 600px) and (max-width: 329px) {max-width: ${({ valid }) => valid ? '259px' : '100%'}}

@media (max-height: 580px) and (max-width: 599px) {max-height: ${({ valid }) => valid ? '43px' : '100%'}}


&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 80px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

/* Responsividade de altura */
@media (max-height: 580px) and (max-width: 599px) {transform: translateY(-25px)}}`;

export const SurnameLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 80px;
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
margin: ${({ valid }) => valid ? '19px 0 0 -234px' : '17px 0 0 -240px'};
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media (max-width: 630px) {margin-left: ${({ valid }) => valid ? '-207px' : '-210px'}}

@media(max-width: 599px) {
margin-top: 18px;
margin-left: ${({ valid }) => valid ? '-97.5%' : '-98%'}}

@media (max-width: 369px) {margin-left: ${({ valid }) => valid ? '-295px' : '-297px'}}

@media (max-width: 349px) {margin-left: ${({ valid }) => valid ? '-280px' : '-282px'}}

@media (max-width: 329px) {margin-left: ${({ valid }) => valid ? '-260px' : '-262px'}}

/* Responsividade de altura */
@media (max-height: 600px) {@media (max-width: 599px) {font-size: 14.5px}}

@media (max-height: 600px) {@media (max-width: 349px) {margin-top: 16px}}

@media (max-height: 580px) {
@media (max-width: 599px) {
margin-top: 14px;
font-size: 14px}}`;

export const EmailContainer = styled.div`
display: flex;
height: 100px;
width: 530px;
margin: 40px 0 0 60px;
background-color: red;

@media(max-width: 1559px) {margin-left: 39px}

@media(max-width: 1280px) {
width: 530px;
margin-top: 10px}

@media(max-width: 630px) {
width: 482px;
margin-left: 20px}

@media(max-width: 599px) {
width: 560px;
margin: 15px 0 0 26px}

@media(max-width: 589px) {width: 520px}

@media(max-width: 559px) {width: 485px}

@media(max-width: 529px) {width: 465px}

@media(max-width: 509px) {width: 455px}

@media(max-width: 489px) {width: 435px}

@media(max-width: 469px) {width: 415px}

@media(max-width: 449px) {width: 395px}

@media(max-width: 429px) {width: 375px}

@media(max-width: 409px) {width: 355px}

@media(max-width: 389px) {width: 335px}

@media(max-width: 369px) {width: 315px}

@media(max-width: 349px) {width: 295px}

@media(max-width: 329px) {width: 275px}

/* Responsividade de altura */
@media(max-height: 825px) {margin-top: 30px}

@media(max-height: 825px) {@media (max-width: 599px) {margin-top: 10px}}

@media (max-height: 783px) {@media (max-width: 599px) {margin-top: 8px}}

@media(max-height: 725px) {margin-top: 10px}

@media(max-height: 725px) {@media(max-width: 599px) {height: 86px}}

@media (max-height: 674px) {@media (max-width: 599px) {height: 85px}}

@media (max-height: 625px) and (min-width: 600px) {height: 88px}

@media (max-height: 600px) {@media (max-width: 599px) {height: 77px}}

@media (max-height: 580px) and (min-width: 600px) {height: 82px}

@media (max-height: 580px) {@media (max-width: 599px) {height: 74px}}`;

export const EmailUserContainer = styled.div<EmailFocused>`
display: flex;
height: 55px;
width: 525px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ emailFocus }) => emailFocus ? '2px' : '1px'};
border-color: ${({ emailFocus }) => emailFocus ? '#4169E1' : 'grey'};
background-color: #fff;

@media(max-width: 1280px) {width: 520px}

@media(max-width: 630px) {width: 477px}

@media(max-width: 599px) {width: 554px}

@media(max-width: 589px) {width: 516px}

@media(max-width: 559px) {width: 480px}

@media(max-width: 529px) {width: 460px}

@media(max-width: 509px) {width: 450px}

@media(max-width: 489px) {width: 430px}

@media(max-width: 469px) {width: 410px}

@media(max-width: 449px) {width: 390px}

@media(max-width: 429px) {width: 370px}

@media(max-width: 409px) {width: 350px}

@media(max-width: 389px) {width: 330px}

@media(max-width: 369px) {width: 310px}

/* Responsividade de altura */
@media(max-height: 725px) {@media(max-width: 599px) {margin-top: 3px}}

@media (max-height: 674px) {@media (max-width: 599px) {margin-top: 0px}}

@media (max-height: 625px) {margin-top: 3px}

@media (max-height: 600px) {@media (max-width: 599px) {height: 49px}}

@media (max-height: 580px) and (min-width: 600px) {height: 50px}

@media (max-height: 580px) {@media (max-width: 599px) {height: 45px}}`;

export const EmailUserInput = styled.input<InputValid>`
width: 513px;
height: 53px;
margin: ${({ valid }) => valid ? 'none' : '-4px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

@media(max-width: 1280px) {width: 508px}

@media(max-width: 630px) {width: 465px}

@media(max-width: 599px) {width: 542px}

@media(max-width: 589px) {width: 504px}

@media(max-width: 559px) {width: 468px}

@media(max-width: 529px) {width: 448px}

@media(max-width: 509px) {width: 437px}

@media(max-width: 489px) {width: 417px}

@media(max-width: 469px) {width: 397px}

@media(max-width: 449px) {width: 377px}

@media(max-width: 429px) {width: 357px}

@media(max-width: 409px) {width: 337px}

@media(max-width: 389px) {width: 317px}

@media(max-width: 369px) {width: 297px}

@media(max-width: 349px) {width: 279px}

@media(max-width: 329px) {width: 259px}

/* Responsividade de altura */
@media (max-height: 625px) {@media (max-width: 529px) {max-width: ${({ valid }) => valid ? '457.4px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 509px) {max-width: ${({ valid }) => valid ? '438px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 489px) {max-width: ${({ valid }) => valid ? '417px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 469px) {max-width: ${({ valid }) => valid ? '397.5px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 449px) {max-width: ${({ valid }) => valid ? '379px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 429px) {max-width: ${({ valid }) => valid ? '359px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 409px) {max-width: ${({ valid }) => valid ? '339px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 389px) {max-width: ${({ valid }) => valid ? '319px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 369px) {max-width: ${({ valid }) => valid ? '299px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 349px) {max-width: ${({ valid }) => valid ? '279px' : '97.5%'}}}

@media (max-height: 625px) {@media (max-width: 329px) {max-width: ${({ valid }) => valid ? '259px' : '97.5%'}}}

@media (max-height: 600px) {@media (max-width: 599px) {max-height: ${({ valid }) => valid ? '46px' : '100%'}}}

@media (max-height: 600px) {@media (max-width: 549px) {max-height: ${({ valid }) => valid ? '47px' : '100%'}}}

@media (max-height: 580px) {@media (max-width: 599px) {max-height: ${({ valid }) => valid ? '43px' : '100%'}}}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 53px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};
background-color: #fff;

/* Responsividade de altura */
@media (max-height: 580px) {@media (max-width: 599px) {transform: translateY(-25px)}}}`;

export const EmailUserLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 50px;
margin: ${({ valid }) => valid ? '19px 0 0 -503px' : '17px 0 0 -510px'};
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media (max-width: 630px) {margin-left: ${({ valid }) => valid ? '-463px' : '-473px'}}

@media (max-width: 599px) {margin-left: ${({ valid }) => valid ? '-97.5%' : '-98%'}}

@media (max-width: 369px) {margin-left: ${({ valid }) => valid ? '-295px' : '-297px'}}

@media (max-width: 349px) {margin-left: ${({ valid }) => valid ? '-280px' : '-282px'}}

@media (max-width: 329px) {margin-left: ${({ valid }) => valid ? '-260px' : '-262px'}}

/* Responsividade de altura */
@media (max-height: 600px) {@media (max-width: 599px) {font-size: 14.5px}}

@media (max-height: 600px) {@media (max-width: 349px) {margin-top: 16px}}

@media (max-height: 580px) {
@media (max-width: 599px) {
margin-top: 14px;
font-size: 14px}}`;

export const PasswordContainer = styled.div`
display: flex;
height: 100px;
width: 255px;
margin: 40px 0 0 60px;
background-color: red;

@media(max-width: 1559px) {margin: 40px 0 0 40px}

@media(max-width: 1280px) {margin-top: 10px}

@media(max-width: 630px) {
width: 226px;
margin-left: 20px}

@media(max-width: 599px) {
width: 275px;
margin: 18px 0 0 26px}

@media(max-width: 589px) {width: 245px}

@media(max-width: 559px) {width: 225px}

@media(max-width: 529px) {width: 205px}

@media(max-width: 509px) {width: 222px}

@media(max-width: 489px) {width: 212px}

@media(max-width: 469px) {width: 202px}

@media(max-width: 449px) {width: 192px}

@media(max-width: 429px) {width: 182px}

@media(max-width: 409px) {width: 172px}

@media(max-width: 389px) {width: 162px}

@media(max-width: 369px) {width: 152px}

@media(max-width: 349px) {width: 142px}

@media(max-width: 329px) {width: 135px}

/* Responsividade de altura */
@media(max-height: 825px) {margin-top: 30px}

@media(max-height: 825px) {@media (max-width: 599px) {margin-top: 10px}}

@media (max-height: 783px) {@media (max-width: 599px) {margin-top: 8px;}}

@media(max-height: 725px) {margin-top: 10px}

@media(max-height: 725px) {@media(max-width: 599px) {height: 86px}}

@media (max-height: 674px) {@media (max-width: 599px) {height: 85px}}

@media (max-height: 625px) and (min-width: 600px) {height: 88px}

@media (max-height: 600px) {@media (max-width: 599px) {height: 77px}}

@media (max-height: 580px) and (min-width: 600px) {height: 82px}

@media (max-height: 580px) {@media (max-width: 599px) {height: 74px}}`;

export const PasswordUserContainer = styled.div<PasswordFocused>`
display: flex;
height: 55px;
width: 250px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ passwordFocus }) => passwordFocus ? '2px' : '1px'};
border-color: ${({ passwordFocus }) => passwordFocus ? '#4169E1' : 'grey'};
background-color: grey;

@media(max-width: 630px) {width: 220px}

@media(max-width: 599px) {width: 269px}

@media(max-width: 589px) {width: 239px}

@media(max-width: 559px) {width: 220px}

@media(max-width: 529px) {width: 201px}

@media(max-width: 509px) {width: 216px}

@media(max-width: 489px) {width: 208px}

@media(max-width: 469px) {width: 197px}

@media(max-width: 449px) {width: 186px}

@media(max-width: 429px) {width: 176px}

@media(max-width: 409px) {width: 166px}

@media(max-width: 389px) {width: 156px}

@media(max-width: 369px) {width: 146px}

@media(max-width: 349px) {width: 142px}

@media(max-width: 329px) {width: 129px}

/* Responsividade de altura */
@media(max-height: 725px) {@media(max-width: 599px) {margin-top: 3px}}

@media (max-height: 674px) {@media (max-width: 599px) {margin-top: 0px}}

@media (max-height: 625px) {margin-top: 3px}

@media (max-height: 600px) {@media (max-width: 599px) {height: 49px}}

@media (max-height: 580px) and (min-width: 600px) {height: 50px}

@media (max-height: 580px) {@media (max-width: 599px) {height: 45px}}`;

export const PasswordUserInput = styled.input<InputValid>`
width: 238px;
height: 53px;
margin: ${({ valid }) => valid ? 'none' : '-4px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

@media(max-width: 890px) {width: 238px}

@media(max-width: 630px) {width: 208px}

@media(max-width: 599px) {width: 257px}

@media(max-width: 589px) {width: 227px}

@media(max-width: 559px) {width: 207px}

@media(max-width: 529px) {width: 189px}

@media(max-width: 509px) {width: 203px}

@media(max-width: 489px) {width: 195px}

@media(max-width: 469px) {width: 185px}

@media(max-width: 449px) {width: 174px}

@media(max-width: 429px) {width: 164px}

@media(max-width: 409px) {width: 154px}

@media(max-width: 389px) {width: 144px}

@media(max-width: 369px) {width: 134px}

@media(max-width: 349px) {width: 126px}

@media(max-width: 329px) {width: 116px}


/* Responsividade de altura */
@media (max-height: 625px) {@media (max-width: 473px) {max-width: ${({ valid }) => valid ? '194px' : '94%'}}}

@media (max-height: 625px) {@media (max-width: 470px) {max-height: ${({ valid }) => valid ? '53px' : '94%'}}}

@media (max-height: 625px) {@media (max-width: 469px) {max-width: ${({ valid }) => valid ? '184px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 449px) {max-width: ${({ valid }) => valid ? '175px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 429px) {max-width: ${({ valid }) => valid ? '165px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 409px) {max-width: ${({ valid }) => valid ? '155px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 389px) {max-width: ${({ valid }) => valid ? '145px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 369px) {max-width: ${({ valid }) => valid ? '135px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 349px) {max-width: ${({ valid }) => valid ? '126px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 329px) {max-width: ${({ valid }) => valid ? '118px' : '94%'}}}

@media (max-height: 600px) {@media (max-width: 599px) {max-height: ${({ valid }) => valid ? '46px' : '100%'}}}

@media (max-height: 600px) {@media (max-width: 549px) {max-height: ${({ valid }) => valid ? '47px' : '100%'}}}

@media (max-height: 580px) {@media (max-width: 599px) {max-height: ${({ valid }) => valid ? '43px' : '100%'}}}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 53px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

/* Responsividade de altura */
@media (max-height: 580px) {@media (max-width: 599px) {transform: translateY(-25px)}}}`;

export const PasswordUserLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 50px;
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
margin: ${({ valid }) => valid ? '19px 0 0 -234px' : '17px 0 0 -240px'};
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media (max-width: 630px) {margin-left: ${({ valid }) => valid ? '-207px' : '-210px'}}

@media(max-width: 599px) {margin-left: ${({ valid }) => valid ? '-97%' : '-98%'}}

@media(max-width: 559px) {margin-left: ${({ valid }) => valid ? '-206px' : '-210px'}}

@media(max-width: 529px) {margin-left: ${({ valid }) => valid ? '-190px' : '-192px'}}

@media(max-width: 509px) {margin-left: ${({ valid }) => valid ? '-204px' : '-206px'}}

@media(max-width: 489px) {margin-left: ${({ valid }) => valid ? '-197px' : '-199px'}}

@media(max-width: 469px) {margin-left: ${({ valid }) => valid ? '-188px' : '-190px'}}

@media(max-width: 449px) {margin-left: ${({ valid }) => valid ? '-177px' : '-179px'}}

@media(max-width: 429px) {margin-left: ${({ valid }) => valid ? '-166px' : '-168px'}}

@media(max-width: 409px) {margin-left: ${({ valid }) => valid ? '-158px' : '-160px'}}

@media(max-width: 389px) {margin-left: ${({ valid }) => valid ? '-150px' : '-152px'}}

@media(max-width: 369px) {margin-left: ${({ valid }) => valid ? '-133px' : '-135px'}}

@media(max-width: 349px) {margin-left: ${({ valid }) => valid ? '-127px' : '-129px'}}

@media(max-width: 329px) {margin-left: ${({ valid }) => valid ? '-117px' : '-119px'}}

/* Responsividade de altura */
@media (max-height: 600px) {@media (max-width: 599px) {font-size: 14.5px}}

@media (max-height: 600px) {@media (max-width: 349px) {margin-top: 16px}}

@media (max-height: 580px) {
@media (max-width: 599px) {
margin-top: 14px;
font-size: 14px}}`;

export const ComparePasswordContainer = styled.div`
display: flex;
height: 100px;
width: 255px;
margin: -100px 0 0 335px;
background-color: red;

@media(max-width: 1559px) {margin-left: 310px}

@media(max-width: 630px) {
width: 230px;
margin-left: 273px}

@media(max-width: 599px) {
width: 280px;
margin-left: 310px}

@media(max-width: 589px) {
width: 244px;
margin-left: 302px}

@media(max-width: 559px) {
width: 225px;
margin-left: 287px}

@media(max-width: 529px) {width: 205px}

@media(max-width: 509px) {
width: 222px;
margin-left: 260px}

@media(max-width: 489px) {
width: 212px;
margin-left: 250px}

@media(max-width: 469px) {
width: 202px;
margin-left: 238px}

@media(max-width: 449px) {
width: 192px;
margin-left: 228px}

@media(max-width: 429px) {
width: 182px;
margin-left: 218px}

@media(max-width: 409px) {
width: 172px;
margin-left: 210px}

@media(max-width: 389px) {
width: 162px;
margin-left: 200px}

@media(max-width: 369px) {
width: 152px;
margin-left: 188px}

@media(max-width: 349px) {
width: 142px;
margin-left: 178px}

@media(max-width: 329px) {
width: 130px;
margin-left: 170px}

/* Responsividade de altura */
@media(max-height: 725px) {
@media(max-width: 599px) {
height: 86px;
margin-top: -86px}}

@media (max-height: 674px) {
@media (max-width: 599px) {
height: 85px;
margin-top: -85px}}

@media (max-height: 625px) and (min-width: 600px) {
height: 88px;
margin-top: -87px}

@media (max-height: 600px) {
@media (max-width: 599px) {
height: 77px;
margin-top: -76px}}

@media (max-height: 580px) and (min-width: 600px) {
height: 82px;
margin-top: -81px}

@media (max-height: 580px) {
@media (max-width: 599px) {
height: 74px;
margin-top: -74px}}`;

export const ComparePasswordUserContainer = styled.div<ComparePasswordFocused>`
display: flex;
height: 55px;
width: 250px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ comparePasswordFocus }) => comparePasswordFocus ? '2px' : '1px'};
border-color: ${({ comparePasswordFocus }) => comparePasswordFocus ? '#4169E1' : 'grey'};
background-color: grey;

@media(max-width: 630px) {width: 220px}

@media(max-width: 599px) {width: 269px}

@media(max-width: 589px) {width: 239px}

@media(max-width: 559px) {width: 220px}

@media(max-width: 529px) {width: 201px}

@media(max-width: 509px) {width: 216px}

@media(max-width: 489px) {width: 208px}

@media(max-width: 469px) {width: 197px}

@media(max-width: 449px) {width: 186px}

@media(max-width: 429px) {width: 176px}

@media(max-width: 409px) {width: 166px}

@media(max-width: 389px) {width: 156px}

@media(max-width: 369px) {width: 146px}

@media(max-width: 349px) {width: 142px}

@media(max-width: 329px) {width: 124px}

/* Responsividade de altura */
@media(max-height: 725px) {
@media(max-width: 599px) {margin-top: 3px}}

@media (max-height: 674px) {
@media (max-width: 599px) {margin-top: 0px}}

@media (max-height: 625px) {margin-top: 3px}

@media (max-height: 600px) {
@media (max-width: 599px) {height: 49px}}

@media (max-height: 580px) and (min-width: 600px) {height: 50px}

@media (max-height: 580px) {
@media (max-width: 599px) {height: 45px}}`;

export const ComparePasswordUserInput = styled.input<InputValid>`
width: 238px;
height: 53px;
margin: ${({ valid }) => valid ? 'none' : '-4px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

@media(max-width: 890px) {width: 238px}

@media(max-width: 630px) {width: 208px}

@media(max-width: 599px) {width: 257px}

@media(max-width: 589px) {width: 227px}

@media(max-width: 559px) {width: 207px}

@media(max-width: 529px) {width: 189px}

@media(max-width: 509px) {width: 203px}

@media(max-width: 489px) {width: 195px}

@media(max-width: 469px) {width: 185px}

@media(max-width: 449px) {width: 174px}

@media(max-width: 429px) {width: 164px}

@media(max-width: 409px) {width: 154px}

@media(max-width: 389px) {width: 144px}

@media(max-width: 369px) {width: 134px}

@media(max-width: 349px) {width: 126px}

@media(max-width: 329px) {width: 116px}

/* Responsividade de altura */
@media (max-height: 625px) {@media (max-width: 473px) {max-width: ${({ valid }) => valid ? '194px' : '94%'}}}

@media (max-height: 625px) {
@media (max-width: 470px) {
max-width: ${({ valid }) => valid ? '195.3px' : '96%'};
max-height: ${({ valid }) => valid ? '53px' : '94%'}}}

@media (max-height: 625px) {@media (max-width: 469px) {max-width: ${({ valid }) => valid ? '184px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 449px) {max-width: ${({ valid }) => valid ? '175px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 429px) {max-width: ${({ valid }) => valid ? '165px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 409px) {max-width: ${({ valid }) => valid ? '155px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 389px) {max-width: ${({ valid }) => valid ? '145px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 369px) {max-width: ${({ valid }) => valid ? '135px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 349px) {max-width: ${({ valid }) => valid ? '126px' : '96%'}}}

@media (max-height: 625px) {@media (max-width: 329px) {max-width: ${({ valid }) => valid ? '114px' : '94%'}}}

@media (max-height: 600px) {@media (max-width: 599px) {max-height: ${({ valid }) => valid ? '46px' : '100%'}}}

@media (max-height: 600px) {@media (max-width: 549px) {max-height: ${({ valid }) => valid ? '47px' : '100%'}}}

@media (max-height: 580px) {@media (max-width: 599px) {max-height: ${({ valid }) => valid ? '43px' : '100%'}}}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 100px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

/* Responsividade de altura */
@media (max-height: 580px) {@media (max-width: 599px) {transform: translateY(-25px)}}}`;

export const ComparePasswordUserLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 120px;
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
margin: ${({ valid }) => valid ? '19px 0 0 -234px' : '17px 0 0 -240px'};
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media (max-width: 630px) {margin-left: ${({ valid }) => valid ? '-207px' : '-210px'}}

@media(max-width: 599px) {margin-left: ${({ valid }) => valid ? '-97%' : '-98%'}}

@media(max-width: 559px) {margin-left: ${({ valid }) => valid ? '-206px' : '-210px'}}

@media(max-width: 529px) {margin-left: ${({ valid }) => valid ? '-190px' : '-192px'}}

@media(max-width: 509px) {margin-left: ${({ valid }) => valid ? '-204px' : '-206px'}}

@media(max-width: 489px) {margin-left: ${({ valid }) => valid ? '-197px' : '-199px'}}

@media(max-width: 469px) {margin-left: ${({ valid }) => valid ? '-188px' : '-190px'}}

@media(max-width: 449px) {margin-left: ${({ valid }) => valid ? '-177px' : '-179px'}}

@media(max-width: 429px) {margin-left: ${({ valid }) => valid ? '-167px' : '-169px'}}

@media(max-width: 409px) {margin-left: ${({ valid }) => valid ? '-158px' : '-160px'}}

@media(max-width: 389px) {margin-left: ${({ valid }) => valid ? '-150px' : '-152px'}}

@media(max-width: 369px) {margin-left: ${({ valid }) => valid ? '-133px' : '-135px'}}

@media(max-width: 349px) {margin-left: ${({ valid }) => valid ? '-127px' : '-129px'}}

@media(max-width: 329px) {width: 110px}

/* Responsividade de altura */
@media (max-height: 600px) {@media (max-width: 599px) {font-size: 14.5px}}

@media (max-height: 600px) {@media (max-width: 349px) {margin-top: 16px}}

@media (max-height: 580px) {
@media (max-width: 599px) {
margin-top: 14px;
font-size: 14px}}`;

export const PasswordMessageContainer = styled.div`
display: flex;
width: fit-content;
margin: 20px 0 0 60px;
cursor: default;

span {
color: #2F4F4F;

@media(max-width: 630px) {font-size: 15.4px}

@media(max-width: 599px) {font-size: 18px}

@media(max-width: 589px) {font-size: 16.6px}

@media(max-width: 559px) {font-size: 15.6px}

@media(max-width: 529px) {font-size: 15px}

@media(max-width: 509px) {font-size: 14.6px}

@media(max-width: 489px) {font-size: 14px}

@media(max-width: 469px) {font-size: 13px}

@media(max-width: 449px) {font-size: 12.5px}

@media(max-width: 429px) {font-size: 12px}

@media(max-width: 409px) {font-size: 11.2px}

@media(max-width: 389px) {font-size: 10.7px}

@media(max-width: 369px) {font-size: 14px}


/* Responsividade de altura */
@media(max-height: 725px) {@media(max-width: 599px) {font-size: 16px}}

@media (max-height: 600px) {@media (max-width: 599px) {font-size: 14px}}

@media (max-height: 625px) {@media (max-width: 519px) {font-size: 13px}}

@media (max-height: 625px) {@media (max-width: 387px) {font-size: 12.5px}}

@media (max-height: 625px) {@media (max-width: 360px) {font-size: 11.5px}}

@media (max-height: 625px) {@media (max-width: 340px) {font-size: 11px}}

@media (max-height: 580px) {@media (max-width: 329px) {font-size: 10px}}}

@media(max-width: 1559px) {margin: 10px 0 0 40px}

@media(max-width: 630px) {margin-left: 23px}

@media(max-width: 599px) {margin-left: 26px}

@media(max-width: 359px) {margin-top: 5px}

/* Responsividade de altura */
@media(max-height: 825px) {margin-top: 6px}

@media (max-height: 580px) {margin-top: 3px}`;

export const ShowPasswordContainer = styled.div`
display: flex;
width: fit-content;
height: fit-content;
margin: 15px 0px 0 60px;
cursor: pointer;
background-color: #fff;

span {
display: flex;
width: fit-content;
height: fit-content;
margin: 2px 0 0 10px;
font-size: 14px;
font-weight: 600;
cursor: pointer}

@media(max-width: 1559px) {margin-left: 40px}

@media(max-width: 630px) {margin-left: 25px}

/* Responsividade de altura */
@media(max-height: 825px) {margin-top: 10px}`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
dispay: flex;
width: 18px;
height: 18px;
background-color: #9400D3;
cursor: pointer;`;

export const LoginPageContainer = styled.div`
display: flex;
height: fit-content;
width: fit-content;
margin: 30px 0px 0 60px;

@media(max-width: 1559px) {margin-left: 30px}

@media(max-width: 630px) {margin-left: 20px}

/* Responsividade de altura */
@media (max-height: 674px) {
@media (max-width: 599px) {margin-top: 18px}}

@media (max-height: 625px) {margin-top: 19px}

@media (max-height: 619px) {
@media (max-width: 519px) {margin-top: 12px}}
`;

export const LoginPage = styled.div`
display: flex;
height: 50px;
width: 200px;
border-radius: 50px;
cursor: pointer;
background-color: #fff;

span {
width: fit-content;
padding: 15px 0 0 15px;
font-size: 16px;
font-weight: 500;
border-radius: 50px;
color: #4169E1}

&:hover {background-color: #00FFFF}

@media(max-width: 1559px) {
width: 170px;
height: 40px;

span {
padding-top: 10px;
font-size: 14px}}

@media(max-width: 389px) {
width: 150px;
height: 35px;

span {font-size: 12px}}

/* Responsividade de altura */
@media (max-height: 625px) {
height: 45px;
width: 195px;
span{font-size: 15px}}

@media (max-height: 625px) {
@media (max-width: 360px) {
width: 168px;
height: 40px;
span {font-size: 13px}}

@media (max-height: 625px) {
@media (max-width: 340px) {
width: 155px;
span {font-size: 12px}}}
`;

export const NextButtonContainer = styled.div`
display: flex;
height: fit-content;
width: fit-content;
margin: -48px 0 0 390px;

@media (max-width: 1559px) {margin: -39px 0 0 423px}

@media (max-width: 1280px) {margin-left: 432px}

@media (max-width: 630px) {margin-left: 370px}

@media (max-width: 599px) {margin-left: 458px}

@media (max-width: 589px) {margin-left: 423px}

@media (max-width: 559px) {margin-left: 385px}

@media (max-width: 509px) {margin-left: 355px}

@media (max-width: 489px) {margin-left: 335px}

@media (max-width: 469px) {margin-left: 315px}

@media (max-width: 449px) {margin-left: 295px}

@media (max-width: 429px) {margin-left: 275px}

@media (max-width: 409px) {margin-left: 225px}

@media (max-width: 389px) {margin: -34px 0 0 215px}

@media (max-width: 369px) {margin-left: 200px}

@media (max-width: 349px) {margin-left: 185px}

/* Responsividade de altura */
@media(max-height: 625px) {
@media (max-width: 549px) {margin-left: 325px}}

@media(max-height: 625px) {
@media (max-width: 529px) {margin-left: 305px}}

@media(max-height: 625px) {
@media (max-width: 501px) {margin-left: 285px}}

@media(max-height: 625px) {
@media (max-width: 463px) {margin-left: 265px}}

@media(max-height: 625px) {
@media (max-width: 440px) {margin-left: 245px}}

@media(max-height: 625px) {
@media (max-width: 416px) {margin-left: 225px}}

@media(max-height: 625px) {
@media (max-width: 389px) {margin: -77px 0 0 200px}}`;

export const NextButton = styled.div`
display: flex;
height: 50px;
width: 150px;
border-radius: 50px;
cursor: pointer;
background-color: #1E90FF;

&:hover {background-color: #9400D3}

span {
display: flex;
width: 150px;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 500;
border-radius: 50px;
color: #fff;

@media(max-width: 1559px) {font-size: 15px}

@media(max-width: 559px) {font-size: 14px}}

@media(max-width: 1559px) {
height: 40px;
width: 130px}

@media(max-width: 1280px) {width: 120px}

@media(max-width: 409px) {margin-left: 34px}

@media(max-width: 389px) {
height: 35px;
width: 110px}

@media(max-width: 369px) {width: 100px}

@media(max-width: 329px) {
width: 90px;
margin-left: 14px}

/* Responsividade de altura */
@media (max-height: 625px) {
width: 145px;
height: 45px;
margin-top: 32px}

@media(max-height: 625px) {
@media (max-width: 483px) {width: 120px}}

@media (max-height: 625px) {
@media (max-width: 360px) {
width: 115px;
height: 40px;
margin: 40px 0 0 15px}}

@media (max-height: 625px) {
@media (max-width: 340px) {
width: 110px;
margin-left: 0px}}`;

export const ExclamationIconContainer = styled.img`
width: 20px;
height: 20px;
border-radius: 50px`;

export const EmptyContainer = styled.div<InputValid>`
display: ${({ valid }) => valid ? 'none' : 'flex'};
width: 150px;
height: 21px;
margin: 86px 0 0 -98%;
background-color: #fff;

@media(max-width: 630px) {margin: 76px 0 0 -100%}

/* Responsividade de altura */
@media(max-height: 725px) {
@media(max-width: 599px) {margin-top: 62px}}

@media (max-height: 674px) {
@media (max-width: 599px) {margin-top: 62px}}

@media (max-height: 625px) {margin-top: 63px}

@media (max-height: 600px) {
@media (max-width: 599px) {margin-top: 54px}}

@media (max-height: 580px) {margin-top: 58px}

@media (max-height: 580px) {
@media (max-width: 599px) {margin-top: 52px}}
`;

export const EmptyMessage = styled.span`
display: block;
width: fit-content;
height: 21px;
font-size: 13px;
color: red;
cursor: default;
background-color: #fff;

@media(max-width: 329px) {font-size: 12px}`;