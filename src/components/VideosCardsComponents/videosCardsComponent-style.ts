import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
width: 98%;
height: ${({ openMenu }) => openMenu ? '455px' : '485px'};
border-radius: 12px;
cursor: pointer;
background-color: #fff;

@media(max-width: 1920px) {
height: ${({ openMenu }) => openMenu ? '430px' : '370px'};
}

@media(max-width: 1760px) {
height: ${({ openMenu }) => openMenu ? '390px' : '400px'};
}

@media(max-width: 1559px) {
height: ${({ openMenu }) => openMenu ? '342px' : '372px'};
}

@media(max-width: 1440px) {
height: ${({ openMenu }) => openMenu ? '332px' : '355px'};
}

@media(max-width: 1366px) {
height: ${({ openMenu }) => openMenu ? '319px' : '335px'};
}

@media(max-width: 1152px) {
height: 345px;
margin-left: 0;
}

@media(max-width: 1010px) {
height: 320px;
}

@media(max-width: 1000px) {
height: 310px;
}

@media(max-width: 976px) {
height: 380px;
}

@media(max-width: 969px) {
height: 395px;
}

@media(max-width: 960px) {
height: 405px;
}

@media(max-width: 940px) {
height: 395px;
}

@media(max-width: 930px) {
height: 388px;
}

@media(max-width: 920px) {
height: 373px;
}

@media(max-width: 910px) {
height: 360px;
}

@media(max-width: 900px) {
height: 350px;
}

@media(max-width: 880px) {
height: 340px;
}

@media(max-width: 850px) {
height: 320px;
}

@media(max-width: 810px) {
height: 310px;
}

@media(max-width: 791px) {
height: 350px;
}

@media(max-width: 760px) {
height: 330px;
}

@media(max-width: 700px) {
height: 315px;
}

@media(max-width: 685px) {
height: 300px;
}

@media(max-width: 670px) {
height: 285px;
}

@media(max-width: 586px) {
height: 420px;
}

@media(max-width: 523px) {
height: 400px;
}

@media(max-width: 513px) {
height: 390px;
}

@media(max-width: 503px) {
height: 380px;
}

@media(max-width: 493px) {
height: 370px;
}

@media(max-width: 483px) {
height: 360px;
}

@media(max-width: 473px) {
height: 350px;
}

@media(max-width: 443px) {
height: 325px;
}

@media(max-width: 323px) {
height: 295px;
}
`;

export const BannerContainer = styled.div`
height: 100%;
width: 100%;
border-radius: 12px;
transition: 0.5s;

&:hover {background-color: #ececec;}
`;

export const ImageBanner = styled.img<{ openMenu: boolean }>`
width: ${({ openMenu }) => openMenu ? '97%' : '96%'};
height: ${({ openMenu }) => openMenu ? '325px' : '350px'};
margin-left: ${({ openMenu }) => openMenu ? '8px' : '11.5px'};
margin-top: 6px;
border-radius: 12px;
object-fit: cover;

@media(max-width: 1920px) {
width: ${({ openMenu }) => openMenu ? '97%' : '96%'};
height: ${({ openMenu }) => openMenu ? '300px' : '230px'};
margin-left: ${({ openMenu }) => openMenu ? '10px' : '10px'};
}

@media(max-width: 1760px) {
width: 96%;
height: ${({ openMenu }) => openMenu ? '260px' : '275px'};
margin-left: 10px;
}

@media(max-width: 1559px) {
height: ${({ openMenu }) => openMenu ? '225px' : '240px'};
margin-left: ${({ openMenu }) => openMenu ? '8.5px' : '10px'};
}

@media(max-width: 1440px) {
height: ${({ openMenu }) => openMenu ? '210px' : '225px'};
margin-left: ${({ openMenu }) => openMenu ? '7.5px' : '8.8px'};
}

@media(max-width: 1366px) {
height: ${({ openMenu }) => openMenu ? '192px' : '208px'};
margin-left: ${({ openMenu }) => openMenu ? '7.5px' : '8.8px'};
}

@media(max-width: 1152px) {
height: 218px;
margin-left: 7px;
}

@media(max-width: 1010px) {
height: 185px;
}

@media(max-width: 1000px) {
height: 173px;
}

@media(max-width: 980px) {
height: 167px;
margin-left: 5.5px;
}

@media(max-width: 976px) {
height: 235px;
margin-left: 8.5px;
}

@media(max-width: 969px) {
height: 245px;
margin-left: 8.7px;
}

@media(max-width: 960px) {
height: 255px;
margin-left: 8.5px;
}

@media(max-width: 940px) {
height: 247px;
margin-left: 8px;
}

@media(max-width: 930px) {
height: 237px;
}

@media(max-width: 920px) {
height: 227px;
}

@media(max-width: 910px) {
height: 217px;
}

@media(max-width: 900px) {
height: 207px;
}

@media(max-width: 880px) {
height: 197px;
margin-left: 7.5px;
}

@media(max-width: 860px) {
margin-left: 7.3px;
}

@media(max-width: 850px) {
height: 187px;
}

@media(max-width: 810px) {
height: 177px;
}

@media(max-width: 791px) {
height: 217px;
}

@media(max-width: 760px) {
height: 200px;
}

@media(max-width: 700px) {
height: 185px;
}

@media(max-width: 685px) {
height: 170px;
}

@media(max-width: 670px) {
height: 155px;
margin-left: 6px;
}

@media(max-width: 586px) {
height: 290px;
margin-top: 10px;
margin-left: 11px;
}

@media(max-width: 523px) {
height: 270px;
}

@media(max-width: 513px) {
height: 260px;
}

@media(max-width: 503px) {
height: 250px;
margin-left: 9px;
}

@media(max-width: 493px) {
height: 240px;
margin-left: 10px;
}

@media(max-width: 483px) {
height: 230px;
margin-left: 9px;
}

@media(max-width: 473px) {
height: 220px;
}

@media(max-width: 443px) {
height: 207px;
}

@media(max-width: 433px) {
margin-left: 7.5px;
}

@media(max-width: 403px) {
margin-left: 8px;
}

@media(max-width: 393px) {
margin-left: 7.5px;
}

@media(max-width: 383px) {
margin-left: 6.5px;
}

@media(max-width: 353px) {
margin-left: 6.7px;
}

@media(max-width: 343px) {
margin-left: 6.6px;
}

@media(max-width: 333px) {
margin-left: 6px;
}

@media(max-width: 323px) {
height: 177px;
margin-top: 6px;
margin-left: 6px;
}
`;

export const TitleContainer = styled.div`
display: flex;
height: 100px;
width: 92%;
margin-left: 19px;
border-radius: 20px;

@media(max-width: 980px) {
margin-left: 10px;
}

@media(max-width: 820px) {
width: 95%;
height: 110px;
}
`;

export const ChannelImage = styled.div<{ openMenu: boolean }>`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;
margin-right: 10px;
min-width: 40px;
max-width: 40px;
min-height: 40px;
max-height: 40px;
border-radius: 50%;
background-color: beige;

@media(max-width: 976px) {
min-width: 45px;
max-width: 45px;
min-height: 45px;
max-height: 45px;
}

@media(max-width: 791px) {
min-width: 38px;
max-width: 38px;
min-height: 38px;
max-height: 38px;
}

@media(max-width: 586px) {
min-width: 42px;
max-width: 42px;
min-height: 42px;
max-height: 42px;
}

@media(max-width: 443px) {
min-width: 36px;
max-width: 36px;
min-height: 36px;
max-height: 36px;
}
`;

export const TextContainer = styled.div`
display: flex;
height: fit-content;
flex-direction: column;
margin-top: 5px;
`;

export const Title = styled.span<{ openMenu: boolean }>`
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
width: 100%;
text-overflow: ellipsis;
font-size: 16px;
font-weight: 600;
color: #0f0f0f;
overflow: hidden;

@media(max-width: 1559px) {
-webkit-line-clamp: ${({ openMenu }) => openMenu ? '1' : '2'};
margin-top: 6px;
}

@media(max-width: 1440px) {
-webkit-line-clamp: 2;
}

@media(max-width: 1366px) {
font-size: 15px;
}

@media(max-width: 976px) {
font-size: 16.5px; 
}

@media(max-width: 920px) {
font-size: 16px; 
}

@media(max-width: 850px) {
font-size: 14.5px;
}

@media(max-width: 791px) {
font-weight: 650;
}

@media(max-width: 586px) {
font-size: 16px;
}

@media(max-width: 443px) {
font-size: 14px;
}
`;

export const ChannelName = styled.span`
display: flex;
width: fit-content;
margin-top: 5px;
font-size: 15px;
color: #8c8c8c;

@media(max-width: 1366px) {
font-size: 13px;
}

@media(max-width: 976px) {
font-size: 15px;
}

@media(max-width: 920px) {
font-size: 14.5px;
}

@media(max-width: 850px) {
font-size: 13.5px; 
}

@media(max-width: 586px) {
font-size: 15px; 
}

@media(max-width: 443px) {
font-size: 13px;
}
`;

export const DetailsCard = styled.span`
display: flex;
width: fit-content;
margin-top: 5px;
font-size: 15px;
color: #8c8c8c;

@media(max-width: 1366px) {
font-size: 13px;
}

@media(max-width: 976px) {
font-size: 15px;
}

@media(max-width: 920px) {
font-size: 14.5px;
}

@media(max-width: 850px) {
font-size: 13.5px; 
}

@media(max-width: 586px) {
font-size: 15px; 
}

@media(max-width: 443px) {
font-size: 13px;
}
`;