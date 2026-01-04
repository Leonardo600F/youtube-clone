import styled from "styled-components";

interface OpenMenu {openMenu: boolean;}
interface OpenButton {openButton: boolean;}
interface OpenShorts {openShorts: boolean;}

export const ShortsContainer = styled.div<OpenMenu>`
height: fit-content;
width: 100%;
margin-top: 40px;
background-color: green;
`;

export const ShortsSpanContainer = styled.div<OpenButton>`
display: ${({ openButton }) => openButton ? 'flex' : 'none'};
width: fit-content;
align-items: center;
font-weight: 700;
font-size: 20px;
cursor: default;
`;

export const ShortsIconImage = styled.img<OpenButton>`
width: 40px;
margin-left: 10px;
border-radius: 50px;

@media(max-width: 1559px) {
width: 35px;
}
`;

export const Container = styled.div<OpenButton>`
display: ${({ openButton }) => openButton ? 'grid' : 'none'};
grid-template-columns: repeat(9, 1fr);
column-gap: 3px;
width: 100%;
background-color: grey;

@media(max-width: 1920px) {
column-gap: 8px;
}

@media(max-width: 1680px) {
column-gap: 20px;
}

@media(max-width: 1559px) {
column-gap: 15px;
}

@media(max-width: 1400px) {
column-gap: 8px;
}

@media(max-width: 976px) {
column-gap: 18px;
}

@media(max-width: 850px) {
column-gap: 11px;
}
`;

export const ShortsLine = styled.div<OpenShorts>`
width: ${({ openShorts }) => openShorts ? '100%' : '0'};
background-color: #989898;
height: 1px;
margin-top: 5px;
`;

export const CloseButtonContainer = styled.div<OpenMenu>`
display: flex;
width: 35px;
height: 35px;
border-radius: 50%;
margin-left: ${({ openMenu }) => openMenu ? '2090px' : '2265px'};
cursor: pointer;

&:hover {
background-color: #d3d3d3;
}

@media(max-width: 1920px) {
margin-left: ${({ openMenu }) => openMenu ? '1476px' : '1660px'};
}

@media(max-width: 1760px) {
margin-left: ${({ openMenu }) => openMenu ? '1314px' : '1495px'};
}

@media(max-width: 1680px) {
margin-left: ${({ openMenu }) => openMenu ? '1235px' : '1420px'};
}

@media(max-width: 1559px) {
margin-left: ${({ openMenu }) => openMenu ? '1120px' : '1300px'};
}

@media(max-width: 1440px) {
margin-left: ${({ openMenu }) => openMenu ? '1007px' : '1190px'};
}

@media(max-width: 1400px) {
margin-left: ${({ openMenu }) => openMenu ? '966px' : '1150px'};
}

@media(max-width: 1366px) {
margin-left: ${({ openMenu }) => openMenu ? '932px' : '1114px'};
}

@media(max-width: 1280px) {
margin-left: ${({ openMenu }) => openMenu ? '848px' : '1030px'};
}

@media(max-width: 1152px) {
margin-left: 904px;
}

@media(max-width: 1128px) {
margin-left: 880px;
}

@media(max-width: 1115px) {
margin-left: 868px;
}

@media(max-width: 1102px) {
margin-left: 853px;
}

@media(max-width: 1090px) {
margin-left: 842px;
}

@media(max-width: 1080px) {
margin-left: 832px;
}

@media(max-width: 1070px) {
margin-left: 820px;
}

@media(max-width: 1060px) {
margin-left: 810px;
}

@media(max-width: 1050px) {
margin-left: 800px;
}

@media(max-width: 1040px) {
margin-left: 790px;
}

@media(max-width: 1030px) {
margin-left: 780px;
}

@media(max-width: 1020px) {
margin-left: 770px;
}

@media(max-width: 1010px) {
margin-left: 760px;
}

@media(max-width: 1000px) {
margin-left: 750px;
}

@media(max-width: 990px) {
margin-left: 740px;
}

@media(max-width: 980px) {
margin-left: 730px;
}

@media(max-width: 976px) {
margin-left: 727px;
}

@media(max-width: 969px) {
width: 45px;
height: 45px;
margin-left: 712px;
}

@media(max-width: 960px) {
margin-left: 700px;
}

@media(max-width: 950px) {
margin-left: 690px;
}

@media(max-width: 940px) {
margin-left: 680px;
}

@media(max-width: 930px) {
margin-left: 670px;
}

@media(max-width: 920px) {
margin-left: 660px;
}

@media(max-width: 910px) {
margin-left: 650px;
}

@media(max-width: 900px) {
margin-left: 640px;
}

@media(max-width: 890px) {
margin-left: 630px;
}

@media(max-width: 880px) {
margin-left: 620px;
}

@media(max-width: 870px) {
margin-left: 610px;
}

@media(max-width: 860px) {
margin-left: 600px;
}

@media(max-width: 850px) {
margin-left: 590px;
}

@media(max-width: 840px) {
margin-left: 580px;
}

@media(max-width: 830px) {
margin-left: 570px;
}

@media(max-width: 820px) {
margin-left: 560px;
}

@media(max-width: 810px) {
margin-left: 550px;
}

@media(max-width: 800px) {
margin-left: 540px;
}

@media(max-width: 791px) {
margin-left: 614px;
}

@media(max-width: 790px) {
margin-left: 530px;
}

@media(max-width: 780px) {
margin-left: 605px;
}

@media(max-width: 770px) {
margin-left: 584px;
}

@media(max-width: 750px) {
margin-left: 574px;
}

@media(max-width: 740px) {
margin-left: 564px;
}

@media(max-width: 730px) {
margin-left: 554px;
}

@media(max-width: 720px) {
margin-left: 544px;
}

@media(max-width: 710px) {
margin-left: 534px;
}

@media(max-width: 700px) {
margin-left: 524px;
}

@media(max-width: 690px) {
margin-left: 514px;
}

@media(max-width: 685px) {
margin-left: 504px;
}

@media(max-width: 670px) {
margin-left: 494px;
}

@media(max-width: 665px) {
margin-left: 490px;
}

@media(max-width: 660px) {
margin-left: 484px;
}

@media(max-width: 650px) {
margin-left: 474px;
}

@media(max-width: 640px) {
margin-left: 464px;
}

@media(max-width: 635px) {
margin-left: 460px;
}

@media(max-width: 630px) {
margin-left: 454px;
}

@media(max-width: 620px) {
margin-left: 444px;
}

@media(max-width: 610px) {
margin-left: 434px;
}

@media(max-width: 601px) {
margin-left: 424px;
}

@media(max-width: 590px) {
margin-left: 414px;
}

@media(max-width: 586px) {
margin-left: 411px;
}

@media(max-width: 580px) {
margin-left: 404px;
}

@media(max-width: 576px) {
margin-left: 401px;
}

@media(max-width: 570px) {
margin-left: 394px;
}

@media(max-width: 563px) {
margin-left: 384px;
}

@media(max-width: 553px) {
margin-left: 374px;
}

@media(max-width: 543px) {
margin-left: 364px;
}

@media(max-width: 533px) {
margin-left: 354px;
}

@media(max-width: 523px) {
margin-left: 344px;
}

@media(max-width: 513px) {
margin-left: 334px;
}

@media(max-width: 503px) {
margin-left: 324px;
}

@media(max-width: 493px) {
margin-left: 314px;
}

@media(max-width: 483px) {
margin-left: 304px;
}

@media(max-width: 473px) {
margin-left: 294px;
}

@media(max-width: 463px) {
margin-left: 284px;
}

@media(max-width: 453px) {
margin-left: 274px;
}

@media(max-width: 443px) {
margin-left: 264px;
}

@media(max-width: 433px) {
margin-left: 257px;
}

@media(max-width: 423px) {
margin-left: 247px;
}

@media(max-width: 413px) {
margin-left: 237px;
}

@media(max-width: 403px) {
margin-left: 227px;
}

@media(max-width: 393px) {
margin-left: 217px;
}

@media(max-width: 383px) {
margin-left: 207px;
}

@media(max-width: 373px) {
margin-left: 197px;
}

@media(max-width: 363px) {
margin-left: 187px;
}

@media(max-width: 353px) {
margin-left: 177px;
}

@media(max-width: 343px) {
margin-left: 167px;
}

@media(max-width: 333px) {
margin-left: 157px;
}

@media(max-width: 320px) {
margin-left: 147px;
}
`;

export const CloseButtonImage = styled.img<OpenShorts>`
display: flex;
width: 30px;
height: 30px;
margin: 4px 0 0 2px;
border-radius: 50%;

@media(max-width: 969px) {
width: 36px;
height: 36px;
margin: 5px 0 0 4px;
}
`;

export const SpanMessageContainer = styled.div`
height: 50px;
width: fit-content;
margin: 30px 0 0 25px;
cursor: default;

@media(max-width: 1920px) {
margin: 50px 0 0 5px;
}
`;

export const ReturnContainer = styled.div<OpenShorts>`
height: 35px;
width: 90px;
margin: -27px 0px 0px 260px;
border-radius: 20px;
transition: 0.5s;
cursor: pointer;
&:hover {background-color: #007FFF;}

span {
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
font-size: 17px;
font-weight: 500;
border-radius: 20px;
color: grey;
&:hover {color: white;}
}

@media(max-width: 380px) {
width: 85px;
margin-left: 235px;
span{font-size: 16px}
}

@media(max-width: 345px) {
width: 75px;
margin-left: 235px;
span{font-size: 14px}
}

@media(max-width: 335px) {
margin-left: 220px;
}
`;

export const SpanMessage = styled.span`
display: flex;
width: fit-content;
margin-top: 15px;
color: grey;
font-size: 15px;

@media(max-width: 380px) {
font-size: 14px;
}

@media(max-width: 335px) {
font-size: 13px;
}
`;