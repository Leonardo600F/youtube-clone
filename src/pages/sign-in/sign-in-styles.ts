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

export const LoginContainer = styled.div`
height: 470px;
width: 42%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 30px;
background-color: #fff;

@media(max-width: 1559px) {
width: 65%;
height: 460px;
}
`;

export const GoogleIconContainer = styled.img`
height: 50px;
width: 50px;
margin: 40px 0 0 40px;
border-radius: 50%;
`;

export const LoginSpanContainer = styled.div`
background-color: #fff;
`;

export const LoginSpan = styled.span`
display: flex;
font-size: 45px;
margin: 1% 0 0 4%;
`;

export const SecondLoginSpan = styled.span`
display: flex;
font-size: 16px;
margin: 1% 0 0 4%;
`;

export const EmailInfoContainer = styled.div`
display: flex;
height: 44%;
width: 50%;
margin: -194px 0 0 50%;
border-top-right-radius: 30px;
background-color: #fff;
`;

export const EmailContainer = styled.div<{ isFocused: boolean }>`
display: flex;
height: 55px;
width: 470px;
margin: 22% 0 0 10px;
border: solid;
border-radius: 5px;
border-width: ${({ isFocused }) => isFocused ? '2px' : '1px'};
border-color: ${({ isFocused }) => isFocused ? '#4169E1' : 'grey'};
background-color: #fff;
`;

export const EmailInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '458px' : '98%'};
max-height: ${({ valid }) => valid ? '96%' : '98%'};
margin: ${({ valid }) => valid ? 'none' : '-2px 0 0 -2px'};
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
width: 115px;
font-size: 12px;
transform: translateY(-27px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};
}
`;

export const EmailLabel = styled.label<InputValid>`
height: 21px;
width: 130px;
margin: ${({ valid }) => valid ? '16px 0px 0px -455px' : '16px 0 0 -462px'};
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;
`;

export const ExclamationIconContainer = styled.img`
width: 20px;
height: 20px;
border-radius: 50px;
`;

export const PasswordInfoContainer = styled.div`
display: flex;
width: 50%;
height: 21%;
margin-top: 2px;
margin-left: 50%;
background-color: #fff;
`;

export const PasswordContainer = styled.div<{ passwordFocused: boolean }>`
display: flex;
height: 55px;
width: 470px;
margin: 10px 0 0 10px;
border: solid;
border-radius: 5px;
border-width: ${({ passwordFocused }) => passwordFocused ? '2px' : '1px'};
border-color: ${({ passwordFocused }) => passwordFocused ? '#4169E1' : 'grey'};
background-color: #fff;
`;

export const PasswordInput = styled.input<InputValid>`
width: 100%;
height: 100%;
max-width: ${({ valid }) => valid ? '458px' : '98%'};
max-height: ${({ valid }) => valid ? '96%' : '98%'};
margin: ${({ valid }) => valid ? 'none' : '-2px 0px 0 -2px'};
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
width: 102px;
padding-left: 0px;
font-size: 12px;
transform: translateY(-27px);
color: ${({ valid }) => valid ? '#4169E1' : 'red'};
}
`;

export const PasswordLabel = styled.label<InputValid>`
height: 21px;
width: 140px;
margin: ${({ valid }) => valid ? '16px 0px 0px -455px' : '16px 0 0 -462px'};
font-size: 16px;
transition: 0.2s ease all;
pointer-events: none;
color: ${({ valid }) => valid ? '#333' : 'red'};
background-color: #fff;
`;

export const InvalidPasswordMessage = styled.span`
display: block;
width: 43%;
height: 20px;
margin-left: 5px;
font-size: 13px;
color: red;
cursor: default;
`;

export const ShowPasswordContainer = styled.div`
display: flex;
width: 150px;
height: 40px;
margin-left: 522px;
cursor: pointer;
 background-color: #fff;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;

  &:hover {
background-color: #bbe4e9;
}
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
dispay: flex;
  width: 18px;
  height: 18px;
  margin: 8px 0 0 8px;
  background-color: #7CB9E8; 
  cursor: pointer;
`;

export const ShowPasswordSpanContainer = styled.div`
display: flex;
width: 98px;
height: 40px;
`;

export const ShowPasswordSpan = styled.span`
display: flex;
margin: 8px 0 0 7px;
font-size: 14px;
font-weight: 600;
`;

export const ButtonsContainer = styled.div`
display: flex;
height: 67px;
width: 50%;
margin-left: 50%;
border-bottom-right-radius: 35px;
background-color: #fff;
`;

export const SignUpContainer = styled.div`
display: flex;
height: 40px;
width: 105px;
margin: 15px 0 0 48%;
border-radius: 50px;
cursor: pointer;
background-color: #fff;

&:hover {
background-color: #F8F8FF;
}
`;

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
background-color: #1E90FF;

&:hover {
background-color: #9400D3;
}
`;

export const EmptyContainer = styled.div<InputValid>`
display: ${({ valid }) => valid ? 'none' : 'flex'};
height: 21px;
background-color: #fff;
`;

export const EmptyMessage = styled.span`
display: block;
height: 21px;
font-size: 13px;
margin-left: 5px;
color: red;
cursor: default ;
`;