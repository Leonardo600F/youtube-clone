import styled from "styled-components";

interface OpenMenu { openMenu: boolean }

export const Container = styled.div<OpenMenu>`
display: flex;
align-items: center;
position: fixed;
width: 100%;
height: 55px;
top: 55px; 
left: ${({ openMenu }) => openMenu ? '270px' : '100px'}; 
z-index: 1px;
background-color: #fff;

@media(max-width: 1920px) {left: ${({ openMenu }) => openMenu ? '260px' : '80px'}}

@media(max-width: 1559px) {height: 45px}

@media(max-width: 1312px) {left: 80px}

@media(max-width: 791px) {left: 0%}`;

export const Button = styled.button<OpenMenu>`
height: 35px;
display: inline-block;
white-space: nowrap;
align-items: center;
box-sizing: border-box;
border: none;
outline: none;
padding: 10px;
border-radius: 7px;
font-size: 14px;
font-weight: 700;
color: black;
z-index: 1px;
cursor: pointer;
background-color: #e9e9e9;

&:hover{background-color: #d3d3d3}

&:focus {
font-weight: 700;
outline: none;
color: white;
background-color: #000}

@media(max-width: 1645px) {padding: ${({ openMenu }) => openMenu ? '9.5px' : '10px'}}

@media(max-width: 1630px) {padding: ${({ openMenu }) => openMenu ? '8.5px' : '10px'}}

@media(max-width: 1606px) {padding: ${({ openMenu }) => openMenu ? '7.5px' : '10px'}}

@media(max-width: 1576px) {padding: ${({ openMenu }) => openMenu ? '6.5px' : '10px'}}

@media(max-width: 1559px) {padding: ${({ openMenu }) => openMenu ? '6.4px' : '10px'}}

@media(max-width: 1546px) {padding: ${({ openMenu }) => openMenu ? '5.4px' : '10px'}}

@media(max-width: 1521px) {
padding: ${({ openMenu }) => openMenu ? '5px' : '10px'};
font-size: 13.5px}

@media(max-width: 1480px) {padding: ${({ openMenu }) => openMenu ? '4.3px' : '10px'}}

@media(max-width: 1465px) {padding: ${({ openMenu }) => openMenu ? '4px' : '10px'}}

@media(max-width: 1450px) {padding: ${({ openMenu }) => openMenu ? '5.9px' : '10px'}}

@media(max-width: 1390px) {padding: ${({ openMenu }) => openMenu ? '4.9px' : '10px'}}

@media(max-width: 1360px) {padding: ${({ openMenu }) => openMenu ? '4.3px' : '10px'}}

@media(max-width: 1340px) {font-size: 13px}

@media(max-width: 1320px) {font-size: 14px}

@media(max-width: 1312px) {padding: 10px}

@media(max-width: 1072px) {font-size: 13.5px}

@media(max-width: 423px) {padding: 8px}

@media(max-width: 413px) {padding: 7.5px}`;


export const SliderContent = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
height: 100%;
margin-left: 15px;
z-index: 1px;
column-gap: 10px;

@media(max-width: 363px) {margin-left: 5px}`;