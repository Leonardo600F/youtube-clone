import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
display: flex;
align-items: center;
width: ${({ openMenu }) => openMenu ? '91%' : '95%'};
height: 45px;
top: 55px;
position: fixed;
z-index: 1px;
background-color: #fff;

@media(max-width: 1920px) {
width: 96%;
}

@media(max-width: 1559px) {
width: 91%;
height: 39px;
}
`;

export const Button = styled.button`
height: 35px;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 7px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  color: black;
  z-index: 1px;
  cursor: pointer;
  background-color: #e9e9e9;

  &:hover{
    background-color: #d3d3d3;
  }

  &:focus {
font-weight: 700;
outline: none;
color: white;
background-color: black;
  }

  @media(max-width: 1559px) {
  height: 30px;
  padding: 5px;
}
`;


export const SliderContent = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
height: 100%;
margin-left: 5px;
z-index: 1px;
column-gap: 10px;
`;