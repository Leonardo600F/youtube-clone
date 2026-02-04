import styled from "styled-components";

interface InputValid { valid: boolean; }

interface FirstNameFocused { firstNameFocus: boolean; }
interface SurnameFocused { surnameFocus: boolean; }
interface EmailFocused { emailFocus: boolean; }
interface PasswordFocused { passwordFocus: boolean; }
interface ComparePasswordFocused { comparePasswordFocus: boolean; }

export const MainContainer = styled.div`
display: flex;
height: 100vh;
width: 100vw;
background-color: #d2d2d2;
`;

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
height: 800px;
}

@media(max-width: 1280px) {
width: 600px;
height: 710px;
}

@media(max-width: 630px) {
width: 525px;
height: 690px;
}

@media(max-width: 599px) {
width: 100%;
height: 100%;
border-radius: 0;
}
`;

export const GoogleIconContainer = styled.img`
width: 50px;
height: 50px;
margin: 5% 0px 0 46%;
border-radius: 50%;

@media(max-width: 1559px) {
width: 40px;
height: 40px;
}

@media(max-width: 599px) {
width: 55px;
height: 55px;
margin: 20px 0 0 20px;
}

@media(max-width: 349px) {
width: 50px;
height: 50px;
}
`;

export const Title = styled.h2`
display: flex;
height: fit-content;
width: fit-content;
margin-left: 25%;
font-weight: 500;
font-size: 30px;
cursor: default;

@media(max-width: 1559px) {
font-size: 23px;
}

@media(max-width: 599px) {
margin-left: 20%;
font-weight: 400;
font-size: 30px;
margin: 20px 0 0 26px;
}

@media(max-width: 409px) {font-size: 25px;}

@media(max-width: 349px) {
font-size: 20px;
}
`;

export const FirstNameContainer = styled.div`
display: flex;
height: 100px;
width: 255px;
margin: 10% 0px 0 60px;
background-color: #fff;

@media(max-width: 1559px) {
margin: 10% 0px 0 40px;
}

@media(max-width: 630px) {
width: 226px;
margin-left: 20px;
}

@media(max-width: 599px) {
width: 560px;
margin: 4% 0 0 26px;
}

@media(max-width: 589px) {
width: 520px;
}

@media(max-width: 559px) {
width: 490px;
}

@media(max-width: 529px) {
width: 475px;
}

@media(max-width: 509px) {
width: 455px;
}

@media(max-width: 489px) {
width: 435px;
}

@media(max-width: 469px) {
width: 415px;
}

@media(max-width: 449px) {
width: 395px;
}

@media(max-width: 429px) {
width: 375px;
}

@media(max-width: 409px) {
width: 355px;
}

@media(max-width: 389px) {
width: 335px;
}

@media(max-width: 369px) {
width: 315px;
}

@media(max-width: 349px) {
width: 295px;
}

@media(max-width: 329px) {
width: 275px;
}
`;

export const FirstNameUserContainer = styled.div<FirstNameFocused>`
display: flex;
height: 55px;
width: 250px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ firstNameFocus }) => firstNameFocus ? '2px' : '1px'};
border-color: ${({ firstNameFocus }) => firstNameFocus ? '#4169E1' : 'grey'};

@media(max-width: 630px) {width: 220px;}

@media(max-width: 599px) {width: 99%;}
`;

export const FirstNameUserInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '95%' : '98%'};
max-height: ${({ valid }) => valid ? '96%' : '100%'};
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 2px'};
border-radius: 5px;
border-color: red;
padding-left: 10px;
font-size: 16px;    
outline: none;
background-color: #fff;


@media(max-width: 890px) {max-width: ${({ valid }) => valid ? '94.6%' : '95.6%'};}

@media(max-width: 630px) {max-width: ${({ valid }) => valid ? '94%' : '98%'}};

@media(max-width: 599px) {max-width: ${({ valid }) => valid ? '97.6%' : '98%'}};

@media(max-width: 509px) {max-width: ${({ valid }) => valid ? '97.3%' : '98%'};}

@media(max-width: 489px) {max-width: ${({ valid }) => valid ? '97%' : '97.5%'};}

@media(max-width: 429px) {max-width: ${({ valid }) => valid ? '96%' : '97%'};}

@media(max-width: 329px) {max-width: ${({ valid }) => valid ? '95%' : '97%'};}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 50px;
font-size: 12px;
transform: ${({ valid }) => valid ? 'translateY(-25px)' : 'translateY(-27px)'};
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 890px) {transform: translateY(-27px);}

@media(max-width: 630px) {transform: translateY(-25px);}

@media(max-width: 349px) {transform: translateY(-30px);}
}
`;

export const FirstNameLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 50px;
margin: ${({ valid }) => valid ? '15px 0 0 -94%' : '16px 0 0 -96%'};
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media(max-width: 890px) {margin-top: ${({ valid }) => valid ? '17px' : '16px'};}

@media(max-width: 599px) {
margin-top: 18px;
margin-left: ${({ valid }) => valid ? '-97.5%' : '-98%'};
}

@media(max-width: 349px) {
margin-top: ${({ valid }) => valid ? '21px' : '18px'};
font-size: 14px;
}
`;

export const SurnameContainer = styled.div`
display: flex;
height: 100px;
width: 260px;
margin: -99px 0 0px 335px;
background-color: #fff;

@media(max-width: 1559px) {margin: -99px 0px 0 310px;}

@media(max-width: 630px) {
width: 226px;
margin-left: 276px;
}

@media(max-width: 599px) {
width: 560px;
margin: 2% 0 0 26px;
}

@media(max-width: 589px) {width: 520px;}

@media(max-width: 559px) {width: 490px;}

@media(max-width: 529px) {width: 475px;}

@media(max-width: 509px) {width: 455px;}

@media(max-width: 489px) {width: 435px;}

@media(max-width: 469px) {width: 415px;}

@media(max-width: 449px) {width: 395px;}

@media(max-width: 429px) {width: 375px;}

@media(max-width: 409px) {width: 355px;}

@media(max-width: 389px) {width: 335px;}

@media(max-width: 369px) {width: 315px;}

@media(max-width: 349px) {width: 295px;}

@media(max-width: 329px) {width: 275px;}
`;

export const SurnameUserContainer = styled.div<SurnameFocused>`
display: flex;
height: 55px;
width: 250px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ surnameFocus }) => surnameFocus ? '2px' : '1px'};
border-color: ${({ surnameFocus }) => surnameFocus ? '#4169E1' : 'grey'};

@media(max-width: 630px) {width: 220px;}

@media(max-width: 599px) {width: 99%;}
`;

export const SurnameUserInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '95%' : '98%'};
max-height: ${({ valid }) => valid ? '96%' : '100%'};
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 2px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

@media(max-width: 890px) {max-width: ${({ valid }) => valid ? '94.6%' : '95.6%'};}

@media(max-width: 630px) {max-width: ${({ valid }) => valid ? '94%' : '98%'};}

@media(max-width: 599px) {max-width: ${({ valid }) => valid ? '97.9%' : '98%'};}

@media(max-width: 590px) {max-width: ${({ valid }) => valid ? '97.6%' : '98%'};}

@media(max-width: 509px) {max-width: ${({ valid }) => valid ? '97%' : '97.5%'};}

@media(max-width: 489px) {max-width: ${({ valid }) => valid ? '97%' : '98%'};}

@media(max-width: 429px) {max-width: ${({ valid }) => valid ? '96%' : '97%'};}

@media(max-width: 329px) {max-width: ${({ valid }) => valid ? '95.3%' : '97.3%'};}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 80px;
font-size: 12px;
transform: ${({ valid }) => valid ? 'translateY(-25px)' : 'translateY(-27px)'};
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 890px) {transform: translateY(-27px)}

@media(max-width: 630px) {transform: translateY(-25px)}

@media(max-width: 349px) {transform: translateY(-30px)}}`;

export const SurnameLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 80px;
margin: 15px 0 0 -94%;
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
margin: ${({ valid }) => valid ? 'none' : '16px 0 0 -96%'};
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media(max-width: 890px) {margin-top: ${({ valid }) => valid ? '17px' : '16px'}}

@media(max-width: 599px) {
margin-top: 18px;
margin-left: ${({ valid }) => valid ? '-97.5%' : '-98%'}}

@media(max-width: 349px) {
margin-top: ${({ valid }) => valid ? '21px' : '18px'};
font-size: 14px}`;

export const EmailContainer = styled.div`
display: flex;
height: 100px;
width: 540px;
margin: 40px 0 0 60px;

@media(max-width: 1559px) {margin-left: 40px}

@media(max-width: 1280px) {margin-top: 10px}

@media(max-width: 890px) {width: 530px}

@media(max-width: 630px) {
width: 482px;
margin-left: 20px}

@media(max-width: 599px) {
width: 560px;
margin: 2% 0 0 26px}

@media(max-width: 589px) {width: 520px}

@media(max-width: 559px) {width: 490px}

@media(max-width: 529px) {width: 475px}

@media(max-width: 509px) {width: 455px}

@media(max-width: 489px) {width: 435px}

@media(max-width: 469px) {width: 415px}

@media(max-width: 449px) {width: 395px}

@media(max-width: 429px) {width: 375px}

@media(max-width: 409px) {width: 355px}

@media(max-width: 389px) {width: 335px}

@media(max-width: 369px) {width: 315px}

@media(max-width: 349px) {width: 295px}

@media(max-width: 329px) {width: 275px}`;

export const EmailUserContainer = styled.div<EmailFocused>`
display: flex;
height: 55px;
width: 527px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ emailFocus }) => emailFocus ? '2px' : '1px'};
border-color: ${({ emailFocus }) => emailFocus ? '#4169E1' : 'grey'};
background-color: #fff;

@media(max-width: 890px) {width: 520px;}

@media(max-width: 630px) {width: 477px;}

@media(max-width: 599px) {width: 99%;}  
`;

export const EmailUserInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '97.7%' : '98%'};
max-height: ${({ valid }) => valid ? '96%' : '100%'};
margin: ${({ valid }) => valid ? 'none' : '-4px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 2px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

@media(max-width: 890px) {max-width: ${({ valid }) => valid ? '97.5%' : '98%'}}

@media(max-width: 630px) {max-width: ${({ valid }) => valid ? '97.4%' : '98.9%'}}

@media(max-width: 599px) {max-width: ${({ valid }) => valid ? '97.9%' : '98%'}}

@media(max-width: 590px) {max-width: ${({ valid }) => valid ? '97.6%' : '98%'}}

@media(max-width: 509px) {max-width: ${({ valid }) => valid ? '97%' : '97.5%'}}

@media(max-width: 489px) {max-width: ${({ valid }) => valid ? '97%' : '98%'}}

@media(max-width: 429px) {max-width: ${({ valid }) => valid ? '96%' : '97%'}}

@media(max-width: 329px) {max-width: ${({ valid }) => valid ? '95.3%' : '97.3%'}}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 53px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};
background-color: #fff;

@media(max-width: 349px) {transform: translateY(-30px)}`;

export const EmailUserLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 50px;
margin: ${({ valid }) => valid ? '18px 0 0 -97%' : '15px 0 0 -98%'};
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media(max-width: 599px) {margin-left: ${({ valid }) => valid ? '-97%' : '-98%'}}

@media(max-width: 349px) {
margin-top: ${({ valid }) => valid ? '21px' : '18px'};
font-size: 14px}`;

export const PasswordContainer = styled.div`
display: flex;
height: 100px;
width: 255px;
margin: 40px 0 0 60px;

@media(max-width: 1559px) {margin: 40px 0 0 40px}

@media(max-width: 1280px) {margin-top: 10px}

@media(max-width: 630px) {
width: 226px;
margin-left: 20px}

@media(max-width: 599px) {
width: 275px;
margin-left: 26px}

@media(max-width: 589px) {width: 245px}

@media(max-width: 559px) {width: 240px}

@media(max-width: 529px) {width: 233px}

@media(max-width: 509px) {width: 222px}

@media(max-width: 489px) {width: 212px}

@media(max-width: 469px) {width: 202px}

@media(max-width: 449px) {width: 192px}

@media(max-width: 429px) {width: 182px}

@media(max-width: 409px) {width: 172px}

@media(max-width: 389px) {width: 162px}

@media(max-width: 369px) {width: 152px}

@media(max-width: 349px) {width: 142px}

@media(max-width: 329px) {width: 135px}`;

export const PasswordUserContainer = styled.div<PasswordFocused>`
display: flex;
height: 55px;
width: 250px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ passwordFocus }) => passwordFocus ? '2px' : '1px'};
border-color: ${({ passwordFocus }) => passwordFocus ? '#4169E1' : 'grey'};
background-color: #fff;

@media(max-width: 630px) {width: 220px}

@media(max-width: 599px) {width: 98%}`;

export const PasswordUserInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '95%' : '95.5%'};
max-height: ${({ valid }) => valid ? '96%' : '100%'};
margin: ${({ valid }) => valid ? 'none' : '-4px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 2px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

@media(max-width: 890px) {max-width: ${({ valid }) => valid ? '94.6%' : '95.6%'};}

@media(max-width: 630px) {max-width: ${({ valid }) => valid ? '94%' : '96%'};}

@media(max-width: 599px) {max-width: ${({ valid }) => valid ? '95%' : '96%'};}

@media(max-width: 570px) {max-width: ${({ valid }) => valid ? '94.5%' : '96%'};}

@media(max-width: 509px) {max-width: ${({ valid }) => valid ? '94%' : '96%'};}

@media(max-width: 489px) {max-width: ${({ valid }) => valid ? '93%' : '95%'};}

@media(max-width: 409px) {max-width: ${({ valid }) => valid ? '92%' : '94%'};}

@media(max-width: 389px) {max-width: ${({ valid }) => valid ? '91.2%' : '94%'};}

@media(max-width: 330px) {max-width: ${({ valid }) => valid ? '91.2%' : '94%'};}

@media(max-width: 322px) {max-width: ${({ valid }) => valid ? '91%' : '94%'};}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 53px;
font-size: 12px;
transform: ${({ valid }) => valid ? 'translateY(-28px)' : 'translateY(-27px)'};
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 349px) {transform: translateY(-30px);}
`;

export const PasswordUserLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 50px;
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
margin-top: ${({ valid }) => valid ? '18px' : '15px'};
margin-left: ${({ valid }) => valid ? '-93%' : '-95%'};
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media(max-width: 599px) {
margin-left: ${({ valid }) => valid ? '-94%' : '-95%'};
}

@media(max-width: 349px) {
margin-top: ${({ valid }) => valid ? '21px' : '18px'};
font-size: 14px;
}
`;

export const ComparePasswordContainer = styled.div`
display: flex;
height: 100px;
width: 255px;
margin: -100px 0 0 335px;

@media(max-width: 1559px) {margin-left: 310px;}

@media(max-width: 630px) {
margin-left: 273px;
}

@media(max-width: 599px) {
width: 280px;
margin-left: 305px;
}

@media(max-width: 589px) {
width: 245px;
margin-left: 300px;
}

@media(max-width: 559px) {
width: 240px;
margin-left: 277px;
}

@media(max-width: 529px) {
width: 233px;
margin-left: 267px;
}

@media(max-width: 509px) {
width: 222px;
margin-left: 260px;
}

@media(max-width: 489px) {
width: 212px;
margin-left: 250px;
}

@media(max-width: 469px) {
width: 202px;
margin-left: 238px;
}

@media(max-width: 449px) {
width: 192px;
margin-left: 228px;
}

@media(max-width: 429px) {
width: 182px;
margin-left: 218px;
}

@media(max-width: 409px) {
width: 172px;
margin-left: 208px;
}

@media(max-width: 389px) {
width: 162px;
margin-left: 198px;
}

@media(max-width: 369px) {
width: 152px;
margin-left: 188px;
}

@media(max-width: 349px) {
width: 142px;
margin-left: 178px;
}

@media(max-width: 329px) {
width: 130px;
margin-left: 170px;
}
`;

export const ComparePasswordUserContainer = styled.div<ComparePasswordFocused>`
display: flex;
height: 55px;
width: 250px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ comparePasswordFocus }) => comparePasswordFocus ? '2px' : '1px'};
border-color: ${({ comparePasswordFocus }) => comparePasswordFocus ? '#4169E1' : 'grey'};
background-color: #fff;

@media(max-width: 630px) {
width: 226px;
}

@media(max-width: 599px) {
width: 98%;
}
`;

export const ComparePasswordUserInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '95%' : '95.5%'};
max-height: ${({ valid }) => valid ? '96%' : '100%'};
margin: ${({ valid }) => valid ? 'none' : '-4px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 2px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

@media(max-width: 890px) {max-width: ${({ valid }) => valid ? '94.6%' : '95.6%'};}

@media(max-width: 630px) {max-width: ${({ valid }) => valid ? '94%' : '96%'};}

@media(max-width: 599px) {max-width: ${({ valid }) => valid ? '95%' : '96%'};}

@media(max-width: 570px) {max-width: ${({ valid }) => valid ? '94.5%' : '96%'};}

@media(max-width: 509px) {max-width: ${({ valid }) => valid ? '94%' : '96%'};}

@media(max-width: 489px) {max-width: ${({ valid }) => valid ? '93%' : '95%'};}

@media(max-width: 409px) {max-width: ${({ valid }) => valid ? '92%' : '94%'};}

@media(max-width: 389px) {max-width: 91%;}

@media(max-width: 359px) {max-width: ${({ valid }) => valid ? '91%' : '94%'};}

@media(max-width: 329px) {max-width: ${({ valid }) => valid ? '91%' : '96%'};}

@media(max-width: 322px) {max-width: ${({ valid }) => valid ? '90%' : '96%'};}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 100px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 349px) {transform: translateY(-30px);} 
`;

export const ComparePasswordUserLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 120px;
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
margin-top: ${({ valid }) => valid ? '18px' : '15px'};
margin-left: ${({ valid }) => valid ? '-94%' : '-95%'};
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;

@media(max-width: 599px) {
margin-left: ${({ valid }) => valid ? '-94%' : '-95%'};
}

@media(max-width: 349px) {
margin-top: ${({ valid }) => valid ? '21px' : '18px'};
font-size: 14px;
}

@media(max-width: 329px) {
width: 110px;
}
`;

export const PasswordMessageContainer = styled.div`
display: flex;
width: fit-content;
margin: 20px 0 0 60px;
cursor: default;

span {
color: #2F4F4F;

@media(max-width: 630px) {font-size: 15.4px;}

@media(max-width: 599px) {font-size: 18px;}

@media(max-width: 589px) {font-size: 16.6px;}

@media(max-width: 579px) {font-size: 15.6px;}

@media(max-width: 529px) {font-size: 15px;}

@media(max-width: 509px) {font-size: 14.6px;}

@media(max-width: 489px) {font-size: 14px;}

@media(max-width: 469px) {font-size: 13px;}

@media(max-width: 449px) {font-size: 12.5px;}

@media(max-width: 429px) {font-size: 12.3px;}

@media(max-width: 359px) {font-size: 11.5px;}

@media(max-width: 339px) {font-size: 11px;}

@media(max-width: 329px) {font-size: 10.4px;}

}

@media(max-width: 1559px) {
margin: 10px 0 0 40px;
}

@media(max-width: 630px) {
margin-left: 23px;
}

@media(max-width: 599px) {
margin-left: 26px;
}

@media(max-width: 359px) {
margin-top: 5px;
}
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
margin-top: 2px;
margin-left: 10px;
font-size: 14px;
font-weight: 600;
cursor: pointer;
}

@media(max-width: 1559px) {
margin-left: 40px;
}

@media(max-width: 630px) {
margin-left: 25px;
}
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
dispay: flex;
width: 18px;
height: 18px;
background-color: #7CB9E8;
cursor: pointer;
`;

export const LoginPageContainer = styled.div`
display: flex;
height: fit-content;
width: fit-content;
margin: 30px 0px 0 60px;
background-color: #fff;

@media(max-width: 1559px) {
margin-left: 30px;
}

@media(max-width: 630px) {
margin-left: 20px;
}
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
color: #4169E1;
}

&:hover {background-color: #00FFFF;}

@media(max-width: 1559px) {
width: 170px;
height: 40px;

span {
padding-top: 10px;
font-size: 14px;
}
}

@media(max-width: 389px) {
width: 150px;
height: 35px;

span {
font-size: 12px;
}
}
`;

export const NextButtonContainer = styled.div`
display: flex;
height: fit-content;
width: fit-content;
margin: -79px 0 0 65%;

@media(max-width: 549px) {
margin-left: 66%;
}

@media(max-width: 509px) {
margin-left: 63%;
}

@media(max-width: 489px) {
margin-left: 61%;
}

@media(max-width: 469px) {
margin-left: 59%;
}

@media(max-width: 449px) {
margin-left: 57%;
}

@media(max-width: 389px) {
margin-top: -69px;
}
`;

export const NextButton = styled.div`
display: flex;
height: 50px;
width: 150px;
margin-top: 25px;
margin-left: 7px;
border-radius: 50px;
cursor: pointer;
background-color: #1E90FF;

&:hover {background-color: #9400D3;}

span {
display: flex;
width: 150px;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 500;
border-radius: 50px;
color: #fff;

@media(max-width: 559px) {font-size: 14px;}
}

@media(max-width: 1559px) {
height: 45px;
width: 130px;
margin-top: 35px;
}

@media(max-width: 599px) {
margin-left: 55px;
}

@media(max-width: 589px) {
margin-left: 34px;
}

@media(max-width: 559px) {
width: 114px;
}

@media(max-width: 549px) {
margin-left: 47px;
}

@media(max-width: 409px) {
margin-left: 34px;
}

@media(max-width: 389px) {
height: 35px;
width: 110px;
}

@media(max-width: 369px) {
width: 100px;
}

@media(max-width: 329px) {
width: 90px;
margin-left: 14px;
}
`;

export const ExclamationIconContainer = styled.img`
width: 20px;
height: 20px;
border-radius: 50px;
`;

export const EmptyContainer = styled.div<InputValid>`
display: ${({ valid }) => valid ? 'none' : 'flex'};
width: 150px;
height: 21px;
margin: 86px 0 0 -98%;
background-color: #fff;

@media(max-width: 630px) {
margin: 76px 0 0 -100%;
}
`;

export const EmptyMessage = styled.span`
display: block;
width: 87%;
height: 21px;
font-size: 13px;
color: red;
cursor: default ;

@media(max-width: 329px) {
font-size: 12px;
}
`;