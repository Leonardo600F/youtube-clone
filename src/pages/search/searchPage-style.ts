import styled from "styled-components";

interface OpenMenu { openMenu: boolean }

export const Container = styled.div<OpenMenu>`
display: flex;
flex-direction: column;
box-sizing: border-box;
width: 100%;
max-width: 1600px;
row-gap: 20px;
padding: ${({ openMenu }) => openMenu ? '100px 50px 0 330px' : '100px 10px 0 100px'};

@media(max-width: 1312px) {padding: 100px 10px 0 100px}

@media(max-width: 600px) {row-gap: 30px}`;

export const SearchContainer = styled.div`width: 100%`;