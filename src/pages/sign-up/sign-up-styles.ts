import styled from "styled-components";

interface InputValid { valid: boolean; }

interface FirstNameFocused { firstNameFocus: boolean }
interface SurnameFocused { surnameFocus: boolean }
interface EmailFocused { emailFocus: boolean }
interface PasswordFocused { passwordFocus: boolean }
interface ComparePasswordFocused { comparePasswordFocus: boolean }
interface NicknameFocused { nicknameFocus: boolean }

export const MainContainer = styled.div`
display: flex;
height: 100vh;
width: 100vw;
background-color: #d2d2d2;`;

export const SignUpContainer = styled.div`
position: absolute;
box-sizing: border-box;
width: 650px;
height: 825px;
top: 50%;
left: 50%;
border-radius: 10px;
transform: translate(-50%, -50%);
background-color: #fff;

@media(max-width: 1559px) {
width: 600px;
height: 785px}  

@media(max-width: 1280px) {
width: 600px;
height: 700px}

@media(max-width: 630px) {
width: 520px;
height: 635px}

@media(max-width: 599px) {
width: 100%;
height: 100%;
border-radius: 0}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 930px) {height: 775px}

@media (max-width: 2556px) and (max-height: 790px) {height: 670px}

@media (max-width: 2556px) and (max-height: 680px) {height: 590px}

@media (max-width: 2556px) and (max-height: 600px) {height: 530px}

@media (max-width: 1559px) and (max-height: 930px) {height: 740px}

@media (max-width: 1559px) and (max-height: 790px) {height: 670px}

@media (max-width: 1559px) and (max-height: 680px) {height: 590px}

@media (max-width: 1559px) and (max-height: 600px) {height: 540px}

@media (max-width: 1280px) and (max-height: 930px) {height: 650px}

@media (max-width: 1280px) and (max-height: 680px) {height: 585px}

@media (max-width: 1280px) and (max-height: 600px) {height: 530px}

@media (max-width: 630px) and (max-height: 930px) {height: 615px}

@media (max-width: 630px) and (max-height: 790px) {height: 655px}

@media (max-width: 630px) and (max-height: 680px) {height: 585px}

@media (max-width: 630px) and (max-height: 600px) {height: 535px}

@media (max-width: 599px) and (max-height: 930px) {height: 100vh}
`;

export const Title = styled.h2`
display: flex;
height: fit-content;
width: fit-content;
margin-left: 145px;
font-weight: 500;
font-size: 30px;
cursor: default;

@media(max-width: 1559px) {
margin-left: 165px;
font-size: 23px}

@media(max-width: 630px) {margin: -5px 0 0 125px}

@media(max-width: 599px) {
font-weight: 400;
font-size: 30px;
margin: 15px 0 0 26px;}

@media(max-width: 409px) {font-size: 25px}

@media(max-width: 349px) {font-size: 20px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 930px) {margin-top: -5px}

@media (max-width: 2556px) and (max-height: 790px) {
margin-left: 175px;
font-size: 25px;}

@media (max-width: 2556px) and (max-height: 680px) {
margin: -10px 0 0 193px;
font-size: 22px;}

@media (max-width: 2556px) and (max-height: 600px) {
margin-left: 211px;
font-size: 19px;}

@media (max-width: 1559px) and (max-height: 790px) {margin-left: 153px}

@media (max-width: 1559px) and (max-height: 680px) {margin-left: 173px}

@media (max-width: 1559px) and (max-height: 600px) {margin-left: 188px}

@media (max-width: 630px) and (max-height: 790px) {margin-left: 110px}

@media (max-width: 630px) and (max-height: 680px) {margin-left: 130px}

@media (max-width: 630px) and (max-height: 600px) {margin-left: 145px}

@media (max-width: 599px) and (max-height: 790px) {margin-left: 150px}

@media (max-width: 599px) and (max-height: 680px) {margin-left: 168px}

@media (max-width: 599px) and (max-height: 635px) {
margin-left: 174px;
font-size: 20px;}

@media (max-width: 599px) and (max-height: 600px) {margin-left: 29.5%}

@media (max-width: 589px) and (max-height: 790px) {margin-left: 24.5%}

@media (max-width: 589px) and (max-height: 680px) {margin-left: 27.5%}

@media (max-width: 589px) and (max-height: 635px) {margin-left: 28.7%}

@media (max-width: 579px) and (max-height: 680px) {margin-left: 28%}

@media (max-width: 579px) and (max-height: 635px) {margin-left: 28.5%}

@media (max-width: 569px) and (max-height: 680px) {margin-left: 27%}

@media (max-width: 569px) and (max-height: 635px) {margin-left: 28%}

@media (max-width: 569px) and (max-height: 600px) {margin-left: 28.5%}

@media (max-width: 559px) and (max-height: 790px) {margin-left: 24%}

@media (max-width: 559px) and (max-height: 680px) {margin-left: 27%}

@media (max-width: 559px) and (max-height: 635px) {margin-left: 28%}

@media (max-width: 549px) and (max-height: 790px) {margin-left: 23.5%}

@media (max-width: 549px) and (max-height: 680px) {margin-left: 26.5%}

@media (max-width: 549px) and (max-height: 635px) {margin-left: 27.5%}

@media (max-width: 549px) and (max-height: 600px) {margin-left: 28%}

@media (max-width: 539px) and (max-height: 635px) {margin-left: 146px}

@media (max-width: 539px) and (max-height: 600px) {margin-left: 149px}

@media (max-width: 529px) and (max-height: 790px) {margin-left: 120px}

@media (max-width: 529px) and (max-height: 680px) {margin-left: 135px}

@media (max-width: 529px) and (max-height: 635px) {margin-left: 141px}

@media (max-width: 529px) and (max-height: 600px) {margin-left: 144px}

@media (max-width: 519px) and (max-height: 790px) {margin-left: 114px}

@media (max-width: 519px) and (max-height: 680px) {margin-left: 132px}

@media (max-width: 519px) and (max-height: 635px) {margin-left: 136px}

@media (max-width: 519px) and (max-height: 600px) {margin-left: 140px}

@media (max-width: 509px) and (max-height: 790px) {margin-left: 109px}

@media (max-width: 509px) and (max-height: 680px) {margin-left: 127px}

@media (max-width: 509px) and (max-height: 635px) {margin-left: 132px}

@media (max-width: 499px) and (max-height: 790px) {margin-left: 104px}

@media (max-width: 499px) and (max-height: 680px) {margin-left: 121px}

@media (max-width: 499px) and (max-height: 635px) {margin-left: 127px}

@media (max-width: 499px) and (max-height: 600px) {margin-left: 130px}

@media (max-width: 489px) and (max-height: 790px) {margin-left: 21%}

@media (max-width: 489px) and (max-height: 680px) {margin-left: 24%}

@media (max-width: 489px) and (max-height: 635px) {margin-left: 25%}

@media (max-width: 489px) and (max-height: 600px) {margin-left: 26%}

@media (max-width: 479px) and (max-height: 790px) {margin-left: 20%}

@media (max-width: 479px) and (max-height: 600px) {margin-left: 25%}

@media (max-width: 469px) and (max-height: 680px) {margin-left: 23.5%}

@media (max-width: 469px) and (max-height: 635px) {margin-left: 24.5%}

@media (max-width: 469px) and (max-height: 600px) {margin-left: 25%}

@media (max-width: 459px) and (max-height: 790px) {margin-left: 19%}

@media (max-width: 459px) and (max-height: 680px) {margin-left: 23%}

@media (max-width: 459px) and (max-height: 635px) {margin-left: 24%}

@media (max-width: 459px) and (max-height: 600px) {margin-left: 24.5%}

@media (max-width: 449px) and (max-height: 790px) {margin-left: 18%}

@media (max-width: 449px) and (max-height: 680px) {margin-left: 22%}

@media (max-width: 449px) and (max-height: 635px) {margin-left: 23%}

@media (max-width: 449px) and (max-height: 600px) {margin-left: 23.5%}

@media (max-width: 429px) and (max-height: 790px) {margin-left: 17%}

@media (max-width: 429px) and (max-height: 680px) {margin-left: 21%}

@media (max-width: 429px) and (max-height: 635px) {margin-left: 22.5%}

@media (max-width: 419px) and (max-height: 790px) {margin-left: 16.5%}

@media (max-width: 419px) and (max-height: 680px) {margin-left: 20.5%}

@media (max-width: 419px) and (max-height: 635px) {margin-left: 21.5%}

@media (max-width: 419px) and (max-height: 600px) {margin-left: 22%}

@media (max-width: 409px) and (max-height: 790px) {
margin: -10px 0 0 21%;
font-size: 20px;}


`;

export const GoogleIconContainer = styled.img`
width: 50px;
height: 50px;
margin: 15px 0px 0 47%;
border-radius: 50%;

@media(max-width: 1559px) {
width: 40px;
height: 40px;}

@media(max-width: 1280px) {margin-left: 285px}

@media(max-width: 630px) {margin-left: 245px}

@media(max-width: 599px) {
width: 55px;
height: 55px;
margin: 20px 0 0 20px;}

@media(max-width: 349px) {
width: 50px;
height: 50px;}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 930px) {margin-top: 5px}

@media (max-width: 2556px) and (max-height: 790px) {
width: 46px;
height: 46px;
margin-left: 47%;}

@media (max-width: 2556px) and (max-height: 680px) {margin-top: 2px}

@media (max-width: 2556px) and (max-height: 600px) {
width: 37px;
height: 37px;
margin-top: 2px;}

@media (max-width: 1559px) and (max-height: 790px) {margin-left: 47%}

@media (max-width: 1280px) and (max-height: 600px) {margin-left: 47.5%}

@media (max-width: 630px) and (max-height: 790px) {margin-left: 46%}

@media (max-width: 630px) and (max-height: 600px) {margin-left: 46.5%}

@media (max-width: 599px) and (max-height: 790px) {
align-items: center;
justify-content: center;}

@media (max-width: 599px) and (max-height: 635px) {
width: 32px;
height: 32px;}

@media (max-width: 409px) and (max-height: 790px) {
width: 29px;
height: 29px;}
`;

export const FirstNameContainer = styled.div`
display: flex;
height: 87px;
width: 255px;
margin: 45px 0px 0 60px;
background-color: green;

@media(max-width: 1559px) {margin: 30px 0px 0 40px}

@media(max-width: 1280px) {margin-top: 35px}

@media(max-width: 630px) {
width: 226px;
margin: 25px 0 0 20px;}

@media(max-width: 599px) {
width: 560px;
margin: 10px 0 0 26px}

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

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 930px) {margin-top: 25px;}

@media (max-width: 2556px) and (max-height: 680px) {
height: 77px;
margin-top: 15px;}

@media (max-width: 2556px) and (max-height: 600px) {height: 68px}

@media (max-width: 599px) and (max-height: 750px) {margin-top: 13px}

@media (max-width: 599px) and (max-height: 735px) {height: 70px}

@media (max-width: 599px) and (max-height: 635px) {margin-top: 8px}

@media (max-width: 599px) and (max-height: 600px) {height: 67px}

@media (max-width: 409px) and (max-height: 790px) {
height: 67px;
margin-top: 15px}

`;

export const FirstNameUserContainer = styled.div<FirstNameFocused>`
display: flex;
height: 55px;
width: 250px;
border: solid;
border-radius: 5px;
border-width: ${({ firstNameFocus }) => firstNameFocus ? '2px' : '1px'};
border-color: ${({ firstNameFocus }) => firstNameFocus ? '#4169E1' : 'grey'};
background-color: #fff;

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

@media(max-width: 349px) {width: 290px}

@media(max-width: 329px) {width: 270px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 45px}

@media (max-width: 2556px) and (max-height: 600px) {height: 40px}

@media (max-width: 599px) and (max-height: 735px) {height: 40px}

@media (max-width: 409px) and (max-height: 790px) {height: 34px}
`;

export const FirstNameUserInput = styled.input<InputValid>`
width: 238px;
height: 53px;
padding-left: 10px;
font-size: 16px;
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-radius: 5px;
border-color: red;
background-color: #fff;
outline: none;

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

@media(max-width: 349px) {width: 278px}

@media(max-width: 329px) {width: 259px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 43px}

@media (max-width: 2556px) and (max-height: 600px) {height: 38px}

@media (max-width: 599px) and (max-height: 735px) {height: 37px}

@media (max-width: 409px) and (max-height: 790px) {height: 32px}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 50px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 599px) {transform: translateY(-30px)}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {transform: translateY(-26px)}

@media (max-width: 2556px) and (max-height: 600px) {transform: translateY(-24px)}

@media (max-width: 599px) and (max-height: 735px) {transform: translateY(-25px)}

@media (max-width: 409px) and (max-height: 790px) {transform: translateY(-22px)}
`;

export const FirstNameUserLabel = styled.label<InputValid>`
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

@media(max-width: 599px) {
margin-top: 18px;
margin-left: ${({ valid }) => valid ? '-97.5%' : '-98%'}}

@media (max-width: 369px) {margin-left: ${({ valid }) => valid ? '-295px' : '-297px'}}

@media (max-width: 349px) {margin-left: ${({ valid }) => valid ? '-280px' : '-282px'}}

@media (max-width: 329px) {
margin-left: ${({ valid }) => valid ? '-260px' : '-262px'};
font-size: 14px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {
margin-top: 13.5px;
font-size: 14.5px;}

@media (max-width: 2556px) and (max-height: 600px) {
margin-top: 12.5px;
font-size: 13px;}

@media (max-width: 599px) and (max-height: 735px) {
margin-top: 11px;
font-size: 14px;}

@media (max-width: 409px) and (max-height: 790px) {
height: 17px;
margin: 8px 0 0 -335px;
font-size: 13px;}
`;

export const SurnameContainer = styled.div`
display: flex;
height: 87px;
width: 255px;
margin: -87px 0 0px 335px;
background-color: green;

@media(max-width: 1559px) {margin-left: 310px}

@media(max-width: 630px) {
width: 226px;
margin-left: 276px}

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

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {
height: 77px;
margin-top: -77px;}

@media (max-width: 2556px) and (max-height: 600px) {
height: 68px;
margin-top: -68px;}

@media (max-width: 599px) and (max-height: 735px) {height: 70px}

@media (max-width: 599px) and (max-height: 680px) {margin-top: 20px}

@media (max-width: 599px) and (max-height: 635px) {margin-top: 13px}

@media (max-width: 599px) and (max-height: 600px) {height: 67px}

@media (max-width: 409px) and (max-height: 790px) {height: 67px}
`;

export const SurnameUserContainer = styled.div<SurnameFocused>`
display: flex;
height: 55px;
width: 250px;
border: solid;
border-radius: 5px;
border-width: ${({ surnameFocus }) => surnameFocus ? '2px' : '1px'};
border-color: ${({ surnameFocus }) => surnameFocus ? '#4169E1' : 'grey'};
background-color: #fff;

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

@media(max-width: 349px) {width: 290px}

@media(max-width: 329px) {width: 270px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 45px}

@media (max-width: 2556px) and (max-height: 600px) {height: 40px}

@media (max-width: 599px) and (max-height: 735px) {height: 40px}

@media (max-width: 409px) and (max-height: 790px) {height: 34px}
`;

export const SurnameUserInput = styled.input<InputValid>`
width: 238px;
height: 53px;
padding-left: 10px;
font-size: 16px;
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-radius: 5px;
border-color: red;
background-color: #fff;
outline: none;

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

@media(max-width: 349px) {width: 278px}

@media(max-width: 329px) {width: 259px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 43px}

@media (max-width: 2556px) and (max-height: 600px) {height: 38px}

@media (max-width: 599px) and (max-height: 735px) {height: 37px}

@media (max-width: 409px) and (max-height: 790px) {height: 32px}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 80px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 599px) {transform: translateY(-30px)}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {transform: translateY(-26px)}

@media (max-width: 2556px) and (max-height: 600px) {transform: translateY(-24px)}

@media (max-width: 599px) and (max-height: 735px) {transform: translateY(-25px)}

@media (max-width: 409px) and (max-height: 790px) {transform: translateY(-22px)}`;

export const SurnameUserLabel = styled.label<InputValid>`
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

@media (max-width: 329px) {
margin-left: ${({ valid }) => valid ? '-260px' : '-262px'};
font-size: 14px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {
margin-top: 13.5px;
font-size: 14.5px;}

@media (max-width: 2556px) and (max-height: 600px) {
margin-top: 12.5px;
font-size: 13px;}

@media (max-width: 599px) and (max-height: 735px) {
margin-top: 11px;
font-size: 14px;}

@media (max-width: 409px) and (max-height: 790px) {
height: 17px;
margin: 8px 0 0 -335px;
font-size: 13px;}
`;

export const EmailContainer = styled.div`
display: flex;
height: 87px;
width: 536px;
margin: 40px 0 0 60px;
background-color: green;

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

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 790px) {margin-top: 20px}

@media (max-width: 2556px) and (max-height: 680px) {height: 77px}

@media (max-width: 2556px) and (max-height: 600px) {height: 68px}

@media (max-width: 599px) and (max-height: 735px) {height: 70px}

@media (max-width: 599px) and (max-height: 635px) {margin-top: 8px}

@media (max-width: 599px) and (max-height: 680px) {margin-top: 20px}

@media (max-width: 599px) and (max-height: 635px) {margin-top: 13px}

@media (max-width: 599px) and (max-height: 600px) {height: 67px}

@media (max-width: 409px) and (max-height: 790px) {height: 67px}
`;

export const EmailUserContainer = styled.div<EmailFocused>`
display: flex;
height: 55px;
width: 525px;
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

@media(max-width: 349px) {width: 290px}

@media(max-width: 329px) {width: 270px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 45px}

@media (max-width: 2556px) and (max-height: 600px) {height: 40px}

@media (max-width: 599px) and (max-height: 735px) {height: 40px}

@media (max-width: 409px) and (max-height: 790px) {height: 34px}`;

export const EmailUserInput = styled.input<InputValid>`
width: 513px;
height: 53px;
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
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

@media(max-width: 349px) {width: 278px}

@media(max-width: 329px) {width: 259px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 43px}

@media (max-width: 2556px) and (max-height: 600px) {height: 38px}

@media (max-width: 599px) and (max-height: 735px) {height: 37px}

@media (max-width: 409px) and (max-height: 790px) {height: 32px}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 53px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};
background-color: #fff;

@media(max-width: 599px) {transform: translateY(-30px)}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {transform: translateY(-26px)}

@media (max-width: 2556px) and (max-height: 600px) {transform: translateY(-24px)}

@media (max-width: 599px) and (max-height: 735px) {transform: translateY(-25px)}

@media (max-width: 409px) and (max-height: 790px) {transform: translateY(-22px)}`;

export const EmailUserLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 50px;
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
margin: ${({ valid }) => valid ? '19px 0 0 -510px' : '17px 0 0 -515px'};
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media (max-width: 630px) {margin-left: ${({ valid }) => valid ? '-463px' : '-467px'}}

@media (max-width: 599px) {margin-left: ${({ valid }) => valid ? '-97.5%' : '-98%'}}

@media (max-width: 369px) {margin-left: ${({ valid }) => valid ? '-295px' : '-297px'}}

@media (max-width: 349px) {margin-left: ${({ valid }) => valid ? '-280px' : '-282px'}}

@media (max-width: 329px) {
margin-left: ${({ valid }) => valid ? '-260px' : '-262px'};
font-size: 14px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {
margin-top: 13.5px;
font-size: 14.5px;}

@media (max-width: 2556px) and (max-height: 600px) {
margin-top: 12.5px;
font-size: 13px;}

@media (max-width: 599px) and (max-height: 735px) {
margin-top: 11px;
font-size: 14px;}

@media (max-width: 409px) and (max-height: 790px) {
height: 17px;
margin: 8px 0 0 -335px;
font-size: 13px;}

`;

export const PasswordContainer = styled.div`
display: flex;
height: 87px;
width: 255px;
margin: 40px 0 0 60px;
background-color: green;

@media(max-width: 1559px) {margin-left: 40px}

@media(max-width: 1280px) {margin-top: 10px}

@media(max-width: 630px) {
width: 226px;
margin-left: 20px}

@media(max-width: 599px) {
width: 275px;
margin-top: 18px;
margin-left: 26px}

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

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 790px) {margin-top: 20px}

@media (max-width: 2556px) and (max-height: 680px) {height: 77px}

@media (max-width: 2556px) and (max-height: 600px) {height: 68px}

@media (max-width: 599px) and (max-height: 735px) {height: 70px}

@media (max-width: 599px) and (max-height: 635px) {margin-top: 8px}

@media (max-width: 599px) and (max-height: 680px) {margin-top: 20px}

@media (max-width: 599px) and (max-height: 635px) {margin-top: 13px}

@media (max-width: 599px) and (max-height: 600px) {height: 67px}

@media (max-width: 409px) and (max-height: 790px) {height: 67px}`;

export const PasswordUserContainer = styled.div<PasswordFocused>`
display: flex;
height: 55px;
width: 250px;
border: solid;
border-radius: 5px;
border-width: ${({ passwordFocus }) => passwordFocus ? '2px' : '1px'};
border-color: ${({ passwordFocus }) => passwordFocus ? '#4169E1' : 'grey'};
background-color: #fff;

@media(max-width: 630px) {width: 220px}

@media(max-width: 599px) {width: 269px}

@media(max-width: 589px) {width: 239px}

@media(max-width: 559px) {width: 220px}

@media(max-width: 529px) {width: 201px}

@media(max-width: 509px) {width: 217px}

@media(max-width: 489px) {width: 208px}

@media(max-width: 469px) {width: 197px}

@media(max-width: 449px) {width: 186px}

@media(max-width: 429px) {width: 176px}

@media(max-width: 409px) {width: 166px}

@media(max-width: 389px) {width: 156px}

@media(max-width: 369px) {width: 146px}

@media(max-width: 349px) {width: 142px}

@media(max-width: 329px) {width: 129px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 45px}

@media (max-width: 2556px) and (max-height: 600px) {height: 40px}

@media (max-width: 599px) and (max-height: 735px) {height: 40px}

@media (max-width: 409px) and (max-height: 790px) {height: 34px}`;

export const PasswordUserInput = styled.input<InputValid>`
width: 238px;
height: 53px;
padding-left: 10px;
font-size: 16px;
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-radius: 5px;
border-color: red;
background-color: #fff;
outline: none;

@media(max-width: 890px) {width: 238px}

@media(max-width: 630px) {width: 208px}

@media(max-width: 599px) {width: 257px}

@media(max-width: 589px) {width: 227px}

@media(max-width: 559px) {width: 207px}

@media(max-width: 529px) {width: 189px}

@media(max-width: 509px) {width: 204px}

@media(max-width: 489px) {width: 195px}

@media(max-width: 469px) {width: 185px}

@media(max-width: 449px) {width: 174px}

@media(max-width: 429px) {width: 164px}

@media(max-width: 409px) {width: 154px}

@media(max-width: 389px) {width: 144px}

@media(max-width: 369px) {width: 134px}

@media(max-width: 349px) {width: 126px}

@media(max-width: 329px) {width: 116px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 43px}

@media (max-width: 2556px) and (max-height: 600px) {height: 38px}

@media (max-width: 599px) and (max-height: 735px) {height: 37px}

@media (max-width: 409px) and (max-height: 790px) {height: 32px}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 53px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 599px) {transform: translateY(-30px)}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {transform: translateY(-26px)}

@media (max-width: 2556px) and (max-height: 600px) {transform: translateY(-24px)}

@media (max-width: 599px) and (max-height: 735px) {transform: translateY(-25px)}

@media (max-width: 409px) and (max-height: 790px) {transform: translateY(-22px)}`;

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

@media(max-width: 599px) {
margin-top: 18px;
margin-left: ${({ valid }) => valid ? '-95%' : '-96%'};}

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

@media(max-width: 329px) {
margin-left: ${({ valid }) => valid ? '-117px' : '-119px'};
font-size: 14px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {
margin-top: 13.5px;
font-size: 14.5px;}

@media (max-width: 2556px) and (max-height: 600px) {
margin-top: 12.5px;
font-size: 13px;}

@media (max-width: 599px) and (max-height: 735px) {
margin-top: 11px;
font-size: 14px;}

@media (max-width: 409px) and (max-height: 790px) {
height: 17px;
margin: 8px 0 0 -153px;
font-size: 13px;}`;

export const ComparePasswordContainer = styled.div`
display: flex;
height: 87px;
width: 255px;
margin: -87px 0 0 335px;
background-color: green;

@media(max-width: 1559px) {margin-left: 310px}

@media(max-width: 630px) {
width: 225px;   
margin-left: 273px;}

@media(max-width: 599px) {
width: 276px;
margin-left: 310px;}

@media(max-width: 589px) {
width: 244px;
margin-left: 302px;} 

@media(max-width: 559px) {
width: 225px;
margin-left: 286px;}

@media(max-width: 529px) {width: 205px}

@media(max-width: 509px) {
width: 222px;
margin-left: 260px;}

@media(max-width: 489px) {
width: 212px;
margin-left: 250px;}

@media(max-width: 469px) {
width: 202px;
margin-left: 238px;}

@media(max-width: 449px) {
width: 192px;
margin-left: 228px;}

@media(max-width: 429px) {
width: 182px;
margin-left: 218px;}

@media(max-width: 409px) {
width: 172px;
margin-left: 210px;}

@media(max-width: 389px) {
width: 162px;
margin-left: 200px;}

@media(max-width: 369px) {
width: 152px;
margin-left: 188px;}

@media(max-width: 349px) {
width: 142px;
margin-left: 178px;}

@media(max-width: 329px) {
width: 130px;
margin-left: 170px;}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {
height: 77px; 
margin-top: -77px;}

@media (max-width: 2556px) and (max-height: 600px) {
height: 68px;
margin-top: -68px;}

@media (max-width: 599px) and (max-height: 735px) {
height: 70px;
margin-top: -70px;}

@media (max-width: 599px) and (max-height: 600px) {
height: 67px;
margin-top: -67px;}

@media (max-width: 589px) and (max-height: 600px) {
height: 67px;
margin-top: -67px;}

@media (max-width: 409px) and (max-height: 790px) {
height: 67px;
margin-top: -67px;}`;

export const ComparePasswordUserContainer = styled.div<ComparePasswordFocused>`
display: flex;
height: 55px;
width: 250px;
border: solid;
border-radius: 5px;
border-width: ${({ comparePasswordFocus }) => comparePasswordFocus ? '2px' : '1px'};
border-color: ${({ comparePasswordFocus }) => comparePasswordFocus ? '#4169E1' : 'grey'};
background-color: #fff;

@media(max-width: 630px) {width: 220px}

@media(max-width: 599px) {width: 269px}

@media(max-width: 589px) {width: 239px}

@media(max-width: 559px) {width: 220px}

@media(max-width: 529px) {width: 201px}

@media(max-width: 509px) {width: 217px}

@media(max-width: 489px) {width: 208px}

@media(max-width: 469px) {width: 197px}

@media(max-width: 449px) {width: 186px}

@media(max-width: 429px) {width: 176px}

@media(max-width: 409px) {width: 166px}

@media(max-width: 389px) {width: 156px}

@media(max-width: 369px) {width: 146px}

@media(max-width: 349px) {width: 142px}

@media(max-width: 329px) {width: 124px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 45px}

@media (max-width: 2556px) and (max-height: 600px) {height: 40px}

@media (max-width: 599px) and (max-height: 735px) {height: 40px}

@media (max-width: 409px) and (max-height: 790px) {height: 34px}`;

export const ComparePasswordUserInput = styled.input<InputValid>`
width: 238px;
height: 53px;
padding-left: 10px;
font-size: 16px;
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-radius: 5px;
border-color: red;
background-color: #fff;
outline: none;

@media(max-width: 890px) {width: 238px}

@media(max-width: 630px) {width: 208px}

@media(max-width: 599px) {width: 257px}

@media(max-width: 589px) {width: 227px}

@media(max-width: 559px) {width: 207px}

@media(max-width: 529px) {width: 189px}

@media(max-width: 509px) {width: 204px}

@media(max-width: 489px) {width: 195px}

@media(max-width: 469px) {width: 185px}

@media(max-width: 449px) {width: 174px}

@media(max-width: 429px) {width: 164px}

@media(max-width: 409px) {width: 154px}

@media(max-width: 389px) {width: 144px}

@media(max-width: 369px) {width: 134px}

@media(max-width: 349px) {width: 126px}

@media(max-width: 329px) {width: 116px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 43px}

@media (max-width: 2556px) and (max-height: 600px) {height: 38px}

@media (max-width: 599px) and (max-height: 735px) {height: 37px}

@media (max-width: 409px) and (max-height: 790px) {height: 32px}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 100px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 599px) {transform: translateY(-30px)}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {transform: translateY(-26px)}

@media (max-width: 2556px) and (max-height: 600px) {transform: translateY(-24px)}

@media (max-width: 599px) and (max-height: 735px) {transform: translateY(-25px)}

@media (max-width: 409px) and (max-height: 790px) {transform: translateY(-22px)}`;

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

@media(max-width: 599px) {
margin-top: 18px;
margin-left: ${({ valid }) => valid ? '-95%' : '-96%'};}

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

@media(max-width: 329px) {
margin-left: ${({ valid }) => valid ? '-117px' : '-119px'};
font-size: 14px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {
margin-top: 13.5px;
font-size: 14.5px;}

@media (max-width: 2556px) and (max-height: 600px) {
margin-top: 12.5px;
font-size: 13px;}

@media (max-width: 599px) and (max-height: 735px) {
margin-top: 11px;
font-size: 14px;}

@media (max-width: 409px) and (max-height: 790px) {
height: 17px;
margin: 8px 0 0 -153px;
font-size: 13px;}`;

export const NicknameContainer = styled.div`
display: flex;
height: 87px;
width: 536px;
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

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 790px) {margin-top: 20px}

@media (max-width: 2556px) and (max-height: 680px) {height: 77px}

@media (max-width: 2556px) and (max-height: 600px) {height: 68px}

@media (max-width: 599px) and (max-height: 735px) {height: 70px}

@media (max-width: 599px) and (max-height: 635px) {margin-top: 8px}

@media (max-width: 599px) and (max-height: 680px) {margin-top: 20px}

@media (max-width: 599px) and (max-height: 635px) {margin-top: 13px}

@media (max-width: 599px) and (max-height: 600px) {height: 67px}

@media (max-width: 409px) and (max-height: 790px) {height: 67px}
`;

export const NicknameUserContainer = styled.div<NicknameFocused>`
display: flex;
height: 55px;
width: 525px;
border: solid;
border-radius: 5px;
border-width: ${({ nicknameFocus }) => nicknameFocus ? '2px' : '1px'};
border-color: ${({ nicknameFocus }) => nicknameFocus ? '#4169E1' : 'grey'};
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

@media(max-width: 349px) {width: 290px}

@media(max-width: 329px) {width: 270px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 45px}

@media (max-width: 2556px) and (max-height: 600px) {height: 40px}

@media (max-width: 599px) and (max-height: 735px) {height: 40px}

@media (max-width: 409px) and (max-height: 790px) {height: 34px}`;

export const NicknameUserInput = styled.input<InputValid>`
width: 513px;
height: 53px;
padding-left: 10px;
font-size: 16px;
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 3px'};
border-radius: 5px;
border-color: red;
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

@media(max-width: 349px) {width: 278px}

@media(max-width: 329px) {width: 259px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {height: 43px}

@media (max-width: 2556px) and (max-height: 600px) {height: 38px}

@media (max-width: 599px) and (max-height: 735px) {height: 37px}

@media (max-width: 409px) and (max-height: 790px) {height: 32px}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 100px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 599px) {transform: translateY(-30px)}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {transform: translateY(-26px)}

@media (max-width: 2556px) and (max-height: 600px) {transform: translateY(-24px)}

@media (max-width: 599px) and (max-height: 735px) {transform: translateY(-25px)}

@media (max-width: 409px) and (max-height: 790px) {transform: translateY(-22px)}`;

export const NicknameUserLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 130px;
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
margin: ${({ valid }) => valid ? '19px 0 0 -510px' : '17px 0 0 -515px'};
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media (max-width: 630px) {margin-left: ${({ valid }) => valid ? '-463px' : '-473px'}}

@media (max-width: 599px) {margin-left: ${({ valid }) => valid ? '-97.5%' : '-98%'}}

@media (max-width: 369px) {margin-left: ${({ valid }) => valid ? '-295px' : '-297px'}}

@media (max-width: 349px) {margin-left: ${({ valid }) => valid ? '-280px' : '-282px'}}

@media (max-width: 329px) {
margin-left: ${({ valid }) => valid ? '-260px' : '-262px'};
font-size: 14px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {
margin-top: 13.5px;
font-size: 14.5px;}

@media (max-width: 2556px) and (max-height: 600px) {
margin-top: 12.5px;
font-size: 13px;}

@media (max-width: 599px) and (max-height: 735px) {
margin-top: 11px;
font-size: 14px;}

@media (max-width: 409px) and (max-height: 790px) {
height: 17px;
margin: 8px 0 0 -335px;
font-size: 13px;}`;

export const PasswordMessageContainer = styled.div`
display: flex;
width: fit-content;
margin: 10px 0 0 60px;
cursor: default;

@media(max-width: 1559px) {margin-left: 45px}

@media(max-width: 640px) {margin-top: 0px}

@media(max-width: 630px) {margin-left: 23px}

@media(max-width: 599px) {margin: 5px 0 0 30px}

span {
color: #2F4F4F;

@media(max-width: 630px) {font-size: 15.4px}

@media(max-width: 599px) {font-size: 17px}

@media(max-width: 589px) {font-size: 16px}

@media(max-width: 559px) {font-size: 15px}

@media(max-width: 529px) {font-size: 14.2px}

@media(max-width: 499px) {font-size: 13.6px}

@media(max-width: 469px) {font-size: 13px}

@media(max-width: 449px) {font-size: 12.5px}

@media(max-width: 429px) {font-size: 12px}

@media(max-width: 409px) {font-size: 15.4px}

@media(max-width: 389px) {font-size: 14.7px}

@media(max-width: 369px) {font-size: 14px}

@media(max-width: 329px) {font-size: 12.7px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {font-size: 16.5px}

@media (max-width: 630px) and (max-height: 680px) {font-size: 14.5px}

@media (max-width: 589px) and (max-height: 600px) {font-size: 15.5px}

@media (max-width: 559px) and (max-height: 680px) {font-size: 14.5px}

@media(max-width: 499px) and (max-height: 680px) {font-size: 13.5px}

@media(max-width: 469px) and (max-height: 680px) {font-size: 12.7px}

@media(max-width: 449px) and (max-height: 680px) {font-size: 12px}
}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {margin: 3px 0 0 63px}

@media (max-width: 1559px) and (max-height: 680px) {margin-left: 43px}

@media (max-width: 1280px) and (max-height: 790px) {margin-top: 2px}

@media (max-width: 630px) and (max-height: 680px) {margin-left: 24px}

@media (max-width: 599px) and (max-height: 680px) {margin-left: 30px}
`;

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
cursor: pointer;}

@media(max-width: 1559px) {margin-left: 40px}

@media(max-width: 630px) {margin-left: 20px}

@media(max-width: 599px) {margin-left: 25px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {margin-top: 10px}
`;

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
margin: 30px 0px 0 47px;

@media(max-width: 1559px) {margin-left: 28px}

@media(max-width: 630px) {margin: 15px 0 0 13px}

@media(max-width: 599px) {margin-left: 18px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 790px) {margin-top: 14px}

@media (max-width: 1280px) and (max-height: 680px) {margin-top: 10px}
`;

export const LoginPage = styled.div`
display: flex;
height: 50px;
width: 200px;
border-radius: 50px;
cursor: pointer;
background-color: #fff;

span {
display: flex;
align-items: center;
justify-content: center;
padding-left: 16px;
font-size: 16px;
font-weight: 500;
border-radius: 50px;
color: #4169E1;}

&:hover {background-color: #00FFFF;}

@media(max-width: 1559px) {
width: 177px;
height: 40px;
span {font-size: 14px;}}

@media(max-width: 630px) {span{padding-left: 12px}}

@media(max-width: 399px) {
width: 150px;
height: 35px;
span {font-size: 12px;}}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {
width: 180px;
height: 43px;
span {font-size: 14px};}

@media (max-width: 2556px) and (max-height: 600px) {
width: 171px;
height: 38px;
span {font-size: 13px;}}

@media (max-width: 630px) and (max-height: 680px) {width: 174px}

@media (max-width: 630px) and (max-height: 600px) {
width: 164px;
span{padding-top: -5px;}}

@media (max-width: 449px) and (max-height: 680px) {
width: 157px;
height: 35px;
span {
padding-top: -5px;
font-size: 12.5px;}}

@media (max-width: 409px) and (max-height: 790px) {
height: 35px;
width: 145px;
span {font-size: 11.5px;}}

`;

export const NextButtonContainer = styled.div`
display: flex;
height: fit-content;
width: fit-content;
margin: -48px 0 0 430px;

@media (max-width: 1559px) {margin: -39px 0 0 423px}

@media (max-width: 630px) {margin-left: 355px}

@media (max-width: 599px) {margin-left: 430px}

@media (max-width: 589px) {margin-left: 395px}

@media (max-width: 559px) {margin-left: 370px}

@media (max-width: 529px) {margin-left: 340px}

@media (max-width: 499px) {margin-left: 325px}

@media (max-width: 469px) {margin-left: 305px}

@media (max-width: 449px) {margin-left: 280px}

@media (max-width: 429px) {margin-left: 270px}

@media (max-width: 409px) {margin-left: 225px}

@media (max-width: 399px) {margin: -34px 0 0 205px}

@media (max-width: 369px) {margin-left: 200px}

@media (max-width: 349px) {margin-left: 185px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {margin-top: -42px}

@media (max-width: 2556px) and (max-height: 600px) {margin-top: -39px}

@media (max-width: 1559px) and (max-height: 680px) {margin-left: 68%}

@media (max-width: 630px) and (max-height: 600px) {margin-top: -38px}

@media (max-width: 559px) and (max-height: 680px) {margin-left: 64%}

@media (max-width: 489px) and (max-height: 790px) {margin-left: 62%}

@media (max-width: 449px) and (max-height: 680px) {margin-top: -33px}

@media (max-width: 409px) and (max-height: 790px) {margin-left: 55%}

`;

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
width: fit-content;
align-items: center;
justify-content: center;
padding-left: 45px;
font-size: 16px;
font-weight: 500;
border-radius: 50px;
color: #fff;

@media(max-width: 630px) {padding-left: 38px}

@media(max-width: 559px) {font-size: 14px}}

@media(max-width: 1559px) {
height: 40px;
width: 130px;
span {
padding-left: 40px;
font-size: 15px;}}

@media(max-width: 449px) {width: 120px;}

@media(max-width: 439px) {span {padding-left: 33px}}

@media(max-width: 409px) {margin-left: 34px}

@media(max-width: 399px) {
height: 35px;
width: 110px;}

@media(max-width: 369px) {width: 100px}

@media(max-width: 329px) {
width: 90px;
margin-left: 14px;}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {
width: 140px;
height: 43px;
span {font-size: 14px;}}

@media (max-width: 2556px) and (max-height: 600px) {
height: 38px;
span {font-size: 13px;}}

@media (max-width: 1559px) and (max-height: 680px) {span {padding: 3px 0 0 45px}}

@media (max-width: 1559px) and (max-height: 600px) {span {padding: 0px 0 0 48px}}

@media (max-width: 630px) and (max-height: 680px) {
width: 135px;
span {padding: 1px 0 0 43px};}

@media (max-width: 630px) and (max-height: 600px) {span {padding: -3px 0 0 5px}}

@media (max-width: 449px) and (max-height: 680px) {
width: 120px;
height: 35px;
span {
padding-left: 37px;
font-size: 12.5px;}}

@media (max-width: 409px) and (max-height: 790px) {
height: 35px;
span {
padding-left: 40px;
font-size: 11.5px;}}

`;

export const ExclamationIconContainer = styled.img`
width: 20px;
height: 20px;
border-radius: 50px;

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 600px) {
width: 15px;
height: 15px;}`;

export const EmptyContainer = styled.div<InputValid>`
display: ${({ valid }) => valid ? 'none' : 'flex'};
width: fit-content;
height: 21px;
margin: 65px 0 0 -98%;
background-color: #fff;

@media(max-width: 630px) {margin: 65px 0 0 -99%}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 680px) {margin-top: 55px}

@media (max-width: 2556px) and (max-height: 600px) {
height: 18px;
margin-top: 49px}

@media (max-width: 599px) and (max-height: 735px) {margin-top: 48px}

@media (max-width: 409px) and (max-height: 790px) {margin-top: 45px}

`;

export const EmptyMessage = styled.span`
display: block;
width: fit-content;
height: fit-content;
font-size: 13px;
color: red;
cursor: default;
background-color: #fff;

@media(max-width: 329px) {font-size: 12px}

/* Height Responsiveness */
@media (max-width: 2556px) and (max-height: 600px) {font-size: 11.5px}
`;