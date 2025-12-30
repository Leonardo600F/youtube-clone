import styled from "styled-components";

export const MainContainer = styled.div<{ openMenu: boolean }>`
display: flex;
flex-direction: column;
box-sizing: border-box; 
width: 99%;
padding-top: 35px;
padding-left: ${({ openMenu }) => openMenu ? '286px' : '115px'};
background-color: red;

@media(max-width: 1920px) {
padding-top: 30px;
padding-left: ${({ openMenu }) => openMenu ? '276px' : '94px'};
}

@media(max-width: 1152px) {
padding-left: 94px;
}

@media(max-width: 791px) {
padding-left: 15px;
}
`;

export const Container = styled.div<{ openMenu: boolean }>`
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 100%;
column-gap: 5px;
row-gap: 20px;
margin-top: 35px;

@media(max-width: 1920px) {
grid-template-columns: ${({ openMenu }) => openMenu ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
}

@media(max-width: 1760px) {
grid-template-columns: repeat(3, 1fr);
}

@media(max-width: 1152px) {
margin-top: 20px;
row-gap: 10px;
column-gap: 0px;
}

@media(max-width: 976px) {
grid-template-columns: repeat(2, 1fr);
}

@media(max-width: 586px) {
grid-template-columns: repeat(1, 1fr);
}
`;