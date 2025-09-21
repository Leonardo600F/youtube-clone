import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 100%;
column-gap: 5px;
row-gap: 20px;
margin-top: 35px;
background-color: #fff;

 @media(max-width: 1920px) {
 grid-template-columns: ${({ openMenu }) => openMenu ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
 column-gap: 5px;
 margin-left: 10px;
 }

 @media(max-width: 1559px) {
 grid-template-columns: repeat(3, 1fr);
 }
`;

export const HomeContainer = styled.div`
width: 97%;
`;

export const MainContainer = styled.div<{ openMenu: boolean }>`
display: flex;
flex-direction: column;
box-sizing: border-box; 
width: 99%;
padding-top: 35px;
padding-left: ${({ openMenu }) => openMenu ? '286px' : '115px'};

@media(max-width: 1920px) {
padding-top: 30px;
padding-left: 0px;
max-width: 95%;
}

@media(max-width: 1556px) {
max-width: 94%;
}

@media(max - width: 834px) {
  padding: 70px 10px 0 100px;
}

@media(max - width: 688px) {
  padding: 70px 60px 0 150px;
}

@media(max - width: 414px) {
  padding: 70px 20px 0 20px;
}
`;

/* padding-left: 293px; */