import styled from "styled-components";

interface InputValid {
        valid: boolean;
}

export const MainContainer = styled.div`
display: flex;
height: 100vh;
width: 100vw;
background-color: #d2d2d2;
`;

export const SignUpContainer = styled.div`
box-sizing: border-box;
width: 650px;
height: 900px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 10px;
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
`;

export const FirstNameContainer = styled.div`
display: flex;
height: 100px;
width: 255px;
margin: 10% 0px 0 60px;
background-color: red;

@media(max-width: 1559px) {
margin: 10% 0px 0 40px;
}

@media(max-width: 630px) {
width: 226px;
margin-left: 20px;
}
`;

export const FirstNameUserContainer = styled.div<{ firstNameFocus: boolean }>`
display: flex;
height: 55px;
width: 250px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ firstNameFocus }) => firstNameFocus ? '2px' : '1px'};
border-color: ${({ firstNameFocus }) => firstNameFocus ? '#4169E1' : 'grey'};

@media(max-width: 630px) {
width: 220px;
}
`;

export const FirstNameUserInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '95%' : '96%'};
max-height: ${({ valid }) => valid ? '96%' : '100%'};
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 2px'};
border-radius: 5px;
border-color: red;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 50px;
font-size: 12px;
transform: ${({ valid }) => valid ? 'translateY(-25px)' : 'translateY(-27px)'};
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 630px) {transform: translateY(-25px);}
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
`;

export const SurnameContainer = styled.div`
display: flex;
height: 100px;
width: 255px;
margin: -99px 0 0px 335px;
background-color: red;

@media(max-width: 1559px) {
margin: -99px 0px 0 310px;
}

@media(max-width: 630px) {
width: 226px;
margin-left: 276px;
}
`;

export const SurnameUserContainer = styled.div<{ surnameFocus: boolean }>`
display: flex;
height: 55px;
width: 250px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ surnameFocus }) => surnameFocus ? '2px' : '1px'};
border-color: ${({ surnameFocus }) => surnameFocus ? '#4169E1' : 'grey'};
background-color: #fff;

@media(max-width: 630px) {
width: 220px;
}
`;

export const SurnameUserInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '95%' : '96%'};
max-height: ${({ valid }) => valid ? '96%' : '100%'};
margin: ${({ valid }) => valid ? 'none' : '-3px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 2px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 80px;
font-size: 12px;
transform: ${({ valid }) => valid ? 'translateY(-25px)' : 'translateY(-27px)'};
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 630px) {transform: translateY(-25px);}
}
`;

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
`;

export const EmailContainer = styled.div`
display: flex;
height: 100px;
width: 540px;
margin: 40px 0 0 60px;
background-color: purple;

@media(max-width: 1559px) {
margin-left: 40px;
}

@media(max-width: 1280px) {
margin-top: 10px;
}

@media(max-width: 630px) {
width: 482px;
margin-left: 20px;
}
`;

export const EmailUserContainer = styled.div<{ emailFocus: boolean }>`
display: flex;
height: 55px;
width: 527px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ emailFocus }) => emailFocus ? '2px' : '1px'};
border-color: ${({ emailFocus }) => emailFocus ? '#4169E1' : 'grey'};
background-color: #fff;

@media(max-width: 630px) {
width: 477px;
}
`;

export const EmailUserInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: 515px;
max-height: ${({ valid }) => valid ? '96%' : '100%'};
margin: ${({ valid }) => valid ? 'none' : '-4px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 2px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

@media(max-width: 630px) {
max-width: 465.4px;
}

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 53px;
font-size: 12px;
transform: translateY(-28px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};
background-color: #fff;

@media(max-width: 630px) {transform: translateY(-25px);}
}
`;

export const EmailUserLabel = styled.label<InputValid>`
display: flex;
height: 21px;
width: 50px;
margin-top: ${({ valid }) => valid ? '18px' : '15px'};
margin-left: ${({ valid }) => valid ? '-97%' : '-98%'};
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;
`;

export const PasswordContainer = styled.div`
display: flex;
height: 100px;
width: 255px;
margin: 40px 0 0 60px;

@media(max-width: 1559px) {
margin: 40px 0 0 40px;
}

@media(max-width: 1280px) {
margin-top: 10px;
}

@media(max-width: 630px) {
width: 230px;
margin-left: 20px;
background-color: green;
}
`;

export const PasswordUserContainer = styled.div<{ passwordFocus: boolean }>`
display: flex;
height: 55px;
width: 250px;
margin-top: 15px;
border: solid;
border-radius: 5px;
border-width: ${({ passwordFocus }) => passwordFocus ? '2px' : '1px'};
border-color: ${({ passwordFocus }) => passwordFocus ? '#4169E1' : 'grey'};
background-color: #fff;

@media(max-width: 630px) {
width: 225px;
}
`;

export const PasswordUserInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '95%' : '96%'};
max-height: ${({ valid }) => valid ? '96%' : '100%'};
margin: ${({ valid }) => valid ? 'none' : '-4px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 2px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 53px;
font-size: 12px;
transform: ${({ valid }) => valid ? 'translateY(-28px)' : 'translateY(-27px)'};
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 630px) {transform: translateY(-25px);}
}
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
`;

export const ComparePasswordContainer = styled.div`
display: flex;
height: 100px;
width: 255px;
margin: -99px 0 0 335px;
background-color: green;

@media(max-width: 1559px) {
margin: -99px 0 0 310px;
}

@media(max-width: 630px) {
width: 230px;
margin-left: 273px;
}
`;

export const ComparePasswordUserContainer = styled.div<{ comparePasswordFocus: boolean }>`
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
width: 225px;
}
`;

export const ComparePasswordUserInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '95%' : '96%'};
max-height: ${({ valid }) => valid ? '96%' : '100%'};
margin: ${({ valid }) => valid ? 'none' : '-4px 0 0 -2px'};
border: ${({ valid }) => valid ? 'none' : 'solid 2px'};
border-color: red;
border-radius: 5px;
padding-left: 10px;
font-size: 16px;
outline: none;
background-color: #fff;

&:focus + label,
&:not(:placeholder-shown) + label {
height: 15px;
width: 100px;
font-size: 12px;
transform: ${({ valid }) => valid ? 'translateY(-28px)' : 'translateY(-28px)'};
color: ${({ valid }) => valid ? '#4169E1' : 'red'};

@media(max-width: 630px) {transform: translateY(-25px);}
}
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
`;

export const PasswordMessageContainer = styled.div`
display: flex;
width: 525px;
margin: 20px 0 0 60px;
cursor: default;

span {
color: #2F4F4F;

@media(max-width: 630px) {
font-size: 15.4px;
}
}

@media(max-width: 1559px) {
margin: 10px 0 0 40px;
}

@media(max-width: 630px) {
width: 480px;
margin-left: 23px;
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

&:hover {
background-color: #00FFFF;
}

@media(max-width: 1559px) {
width: 170px;
height: 40px;

span {
padding-top: 10px;
font-size: 14px;
}
}
`;

export const NextButtonContainer = styled.div`
display: flex;
height: fit-content;
width: fit-content;
margin: -79px 0 0 65%;
background-color: #fff;
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

&:hover {
background-color: #9400D3;
}

span {
display: flex;
width: 150px;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 500;
border-radius: 50px;
color: #fff;
}


@media(max-width: 1559px) {
height: 45px;
width: 130px;
margin-top: 35px;
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
`;