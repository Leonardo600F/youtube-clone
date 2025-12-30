import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
width: 100%;
height: 245px;
margin-top: 20px;

@media(max-width: 1760px) {
width: ${({ openMenu }) => openMenu ? '361px' : '407px'};
height: ${({ openMenu }) => openMenu ? '250px' : '245px'};
}

@media(max-width: 1680px) {
width: ${({ openMenu }) => openMenu ? '343px' : '384px'};
height: 250px;
}

@media(max-width: 1559px) {
height: 260px;
width: ${({ openMenu }) => openMenu ? '414px' : '476px'};
}

@media(max-width: 1440px) {
height: ${({ openMenu }) => openMenu ? '245px' : '235px'};
width: ${({ openMenu }) => openMenu ? '379px' : '440px'};
}

@media(max-width: 1400px) {
width: ${({ openMenu }) => openMenu ? '366px' : '426px'};
height: ${({ openMenu }) => openMenu ? '235px' : '225px'};
}

@media(max-width: 1366px) {
width: ${({ openMenu }) => openMenu ? '354px' : '414px'};
height: ${({ openMenu }) => openMenu ? '235px' : '225px'};
}

@media(max-width: 1280px) {
width: ${({ openMenu }) => openMenu ? '325px' : '387px'};
height: ${({ openMenu }) => openMenu ? '225px' : '215px'};
}

@media(max-width: 1152px) {
width: 344px;
}

@media(max-width: 1128px) {
width: 337.2px;
}

@media(max-width: 1115px) {
width: 332px;
}

@media(max-width: 1102px) {
width: 328px;
}

@media(max-width: 1090px) {
width: 324px;
}

@media(max-width: 1080px) {
width: 320px;
}

@media(max-width: 1070px) {
width: 315px;
}

@media(max-width: 1060px) {
width: 312px;
}

@media(max-width: 1050px) {
width: 309px;
}

@media(max-width: 1040px) {
width: 306px;
}

@media(max-width: 1030px) {
width: 304px;
}

@media(max-width: 1020px) {
width: 300px;
}

@media(max-width: 1010px) {
width: 298px;
height: 208px;
}

@media(max-width: 1000px) {
width: 293px;
}

@media(max-width: 990px) {
width: 289px;
}

@media(max-width: 980px) {
width: 286px;
}

@media(max-width: 976px) {
width: 430px;
height: 290px;
}

@media(max-width: 969px) {
width: 428px;
}

@media(max-width: 960px) {
width: 423px;
}

@media(max-width: 950px) {
width: 419px;
height: 275px;
}

@media(max-width: 940px) {
width: 413px;
height: 270px;
}

@media(max-width: 930px) {
width: 408px;
height: 265px;
}

@media(max-width: 920px) {
width: 402.5px;
height: 260px;
}

@media(max-width: 910px) {
width: 399px;
}

@media(max-width: 900px) {
width: 391px;
height: 245px;
}

@media(max-width: 890px) {
width: 388px;
}

@media(max-width: 880px) {
width: 384px;
}

@media(max-width: 870px) {
width: 378px;
}

@media(max-width: 860px) {
width: 374px;
height: 240px;
}

@media(max-width: 850px) {
width: 369px;
}

@media(max-width: 840px) {
width: 364px;
}

@media(max-width: 830px) {
width: 360px;
}

@media(max-width: 820px) {
width: 354px;
}

@media(max-width: 810px) {
width: 349px;
}

@media(max-width: 800px) {
width: 344px;
}

@media(max-width: 791px) {
width: 379px;
}

@media(max-width: 780px) {
width: 375px;
height: 230px;
}

@media(max-width: 770px) {
width: 369px;
}

@media(max-width: 760px) {
width: 365px;
}

@media(max-width: 750px) {
width: 360px;
}

@media(max-width: 740px) {
width: 355px;
}

@media(max-width: 730px) {
width: 351px;
}

@media(max-width: 720px) {
width: 345px;
}

@media(max-width: 710px) {
width: 340px;
}

@media(max-width: 700px) {
width: 334px;
}

@media(max-width: 690px) {
width: 329px;
}

@media(max-width: 685px) {
width: 326px;
}

@media(max-width: 680px) {
width: 323px;
}

@media(max-width: 670px) {
width: 319px;
height: 225px;
}

@media(max-width: 665px) {
width: 315px;
}

@media(max-width: 660px) {
width: 314px;
}

@media(max-width: 650px) {
width: 310px;
}

@media(max-width: 640px) {
width: 305px;
}

@media(max-width: 635px) {
width: 303px;
}

@media(max-width: 630px) {
width: 300px;
}

@media(max-width: 620px) {
width: 295px;
}

@media(max-width: 615px) {
width: 292px;
}

@media(max-width: 610px) {
width: 290px;
}

@media(max-width: 601px) {
width: 285px;
}

@media(max-width: 595px) {
width: 282px;
}

@media(max-width: 590px) {
width: 280px;
}

@media(max-width: 586px) {
width: 562px;
}

@media(max-width: 580px) {
width: 558px;
}

@media(max-width: 576px) {
width: 548px;
}

@media(max-width: 563px) {
width: 538px;
}

@media(max-width: 553px) {
width: 527px;
}

@media(max-width: 543px) {
width: 517px;
}

@media(max-width: 533px) {
width: 507px;
}

@media(max-width: 523px) {
width: 497px;
}

@media(max-width: 513px) {
width: 487px;
}

@media(max-width: 503px) {
width: 477px;
}

@media(max-width: 493px) {
width: 467px;
}

@media(max-width: 483px) {
width: 457px;
}

@media(max-width: 473px) {
width: 447px;
}

@media(max-width: 463px) {
width: 437px;
}

@media(max-width: 453px) {
width: 427px;
}

@media(max-width: 443px) {
width: 417px;
}

@media(max-width: 433px) {
width: 407px;
}

@media(max-width: 423px) {
width: 397px;
}

@media(max-width: 413px) {
width: 387px;
}

@media(max-width: 403px) {
width: 377px;
}

@media(max-width: 393px) {
height: 207px;
width: 367px;
}

@media(max-width: 383px) {
width: 359px;
}

@media(max-width: 373px) {
width: 352px;
}

@media(max-width: 363px) {
width: 337px;
}

@media(max-width: 353px) {
width: 327px;
}

@media(max-width: 343px) {
width: 317px;
}

@media(max-width: 335px) {
width: 307px;
}

@media(max-width: 323px) {
width: 301px;
}
`;

export const PostBannerContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
border-radius: 15px;
transition: 0.5s;
cursor: pointer;
background-color: #fff;

&:hover {background-color: #ececec;}
`;

export const PostBanner = styled.div`
width: 96%;
height: 92%;
margin: 8px 0 0 7px;
border-radius: 15px;
border-style: solid;
border-color: #D8D8D8;
border-width: 1px;
cursor: pointer;
background-color: #fff;

@media(max-width: 976px) {
width: 94.5%;
margin: 10px 0 0 11px;
}

@media(max-width: 950px) {
width: 94.2%;
}

@media(max-width: 900px) {
width: 92.5%;
height: 90.5%;
}

@media(max-width: 830px) {
width: 93%;
}

@media(max-width: 791px) {
width: 93.5%;
height: 91%;
}

@media(max-width: 760px) {
width: 93%;
height: 90%;
}

@media(max-width: 690px) {
width: 92.5%;
}

@media(max-width: 670px) {
width: 92.2%;
height: 89.6%;
}

@media(max-width: 640px) {
width: 91.7%;
}

@media(max-width: 586px) {
width: 100%;
height: 100%;
margin: 0;
}
`;

export const ChannelImage = styled.div<{ openMenu: boolean }>`
display: flex;
width: fit-content;
margin: 12px 0 0 20px;
cursor: pointer;
background-color: green;

@media(max-width: 1680px) {
margin-left: ${({ openMenu }) => openMenu ? '15px' : '20px'};
}

@media(max-width: 1440px) {
margin-left: ${({ openMenu }) => openMenu ? '20px' : '10px'};
}

@media(max-width: 1400px) {
margin-left: 10px;
}

@media(max-width: 976px) {
margin-left: 20px;
}

@media(max-width: 710px) {
margin-left: 12px;
}

@media(max-width: 650px) {
margin-left: 9px;
}
`;

export const ChannelName = styled.span`
display: flex;
align-items: center;
color: #8c8c8c;
cursor: pointer;
font-size: 13px;
margin-left: 10px;
transition: 0.3s;

&:hover {
color: black;
}

@media(max-width: 1559px) {
font-size: 15px;
}

@media(max-width: 1440px) {
font-size: 13px;
}

@media(max-width: 976px) {
font-size: 17px;
}

@media(max-width: 900px) {
font-size: 15px;
}

@media(max-width: 800px) {
font-size: 13.5px;
}

@media(max-width: 620px) {
font-size: 12px;
}

@media(max-width: 586px) {
font-size: 16px;
}

@media(max-width: 393px) {
font-size: 14px;
}
`;

export const PostTime = styled.span`
display: flex;
align-items: center;
margin-left: 5px;
color: #8c8c8c;
font-size: 12px;
cursor: pointer;
transition: 0.3s;

&:hover {color: black;}

@media(max-width: 1559px) {
font-size: 15px;
}

@media(max-width: 1440px) {
font-size: 13px;
}

@media(max-width: 976px) {
font-size: 15px;
}

@media(max-width: 900px) {
font-size: 13px;
}

@media(max-width: 620px) {
font-size: 12px;
}

@media(max-width: 586px) {
font-size: 16px;
}

@media(max-width: 393px) {
font-size: 14px;
}
`;

export const PostText = styled.span<{ openMenu: boolean }>`
display: flex;
width: ${({ openMenu }) => openMenu ? '170px' : '200px'};
height: ${({ openMenu }) => openMenu ? '130px' : '120px'};
color: #8c8c8c;
font-size: 14px;
margin: 10px 0 0 25px;
cursor: pointer;

@media(max-width: 1920px) {
width: ${({ openMenu }) => openMenu ? '170px' : '250px'};
height: ${({ openMenu }) => openMenu ? '130px' : '130px'};
}

@media(max-width: 1760px) {
width: ${({ openMenu }) => openMenu ? '170px' : '55%'};
height: ${({ openMenu }) => openMenu ? '130px' : '130px'};
}

@media(max-width: 1680px) {
width: ${({ openMenu }) => openMenu ? '156px' : '51%'};
height: ${({ openMenu }) => openMenu ? '130px' : '120px'};
margin-left: ${({ openMenu }) => openMenu ? '17px' : '25px'};
font-size: 13px;
}

@media(max-width: 1559px) {
width: ${({ openMenu }) => openMenu ? '217px' : '267px'};
height: ${({ openMenu }) => openMenu ? '130px' : '125px'};
font-size: 15px;
}

@media(max-width: 1440px) {
width: ${({ openMenu }) => openMenu ? '200px' : '257px'};
height: ${({ openMenu }) => openMenu ? '120px' : '110px'};
margin-left: ${({ openMenu }) => openMenu ? '20px' : '10px'};
font-size: 14px;
}

@media(max-width: 1400px) {
width: ${({ openMenu }) => openMenu ? '192px' : '245px'};
height: ${({ openMenu }) => openMenu ? '105px' : '100px'};
margin-left: 10px;
font-size: 13px;
}

@media(max-width: 1366px) {
width: ${({ openMenu }) => openMenu ? '189px' : '240px'};
}

@media(max-width: 1280px) {
width: ${({ openMenu }) => openMenu ? '169px' : '210px'};
height: ${({ openMenu }) => openMenu ? '100px' : '95px'};
font-size: 12px;
}

@media(max-width: 1152px) {
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
overflow: hidden;
width: 185px;
height: 80px;
}

@media(max-width: 1128px) {
width: 170px;
}

@media(max-width: 1102px) {
width: 160px;
height: 85px;
}

@media(max-width: 1050px) {
width: 150px;
}

@media(max-width: 1010px) {
width: 140px;
}

@media(max-width: 1000px) {
width: 150px;
height: 90px;
line-height: 1.5;
}

@media(max-width: 990px) {
width: 140px;
}

@media(max-width: 976px) {
width: 200px;
height: 145px;
line-height: 1.4;
-webkit-line-clamp: 6;
margin-left: 20px;
font-size: 14px;
}

@media(max-width: 950px) {
width: 190px;
height: 135px;
line-height: 1.3;
}

@media(max-width: 940px) {
width: 185px;
height: 130px;
line-height: 1.2;
}

@media(max-width: 930px) {
width: 189px;
height: 125px;
}

@media(max-width: 920px) {
height: 120px;
font-size: 13.4px;
}

@media(max-width: 900px) {
height: 110px;
}

@media(max-width: 850px) {
width: 179px;
height: 105px;
font-size: 13px;
}

@media(max-width: 820px) {
width: 168px;
font-size: 12.3px;
}

@media(max-width: 791px) {
width: 180px;
height: 110px;
font-size: 13px;
line-height: 1.3;
}

@media(max-width: 760px) {
width: 170px;
line-height: 1.1;
}

@media(max-width: 750px) {
width: 165px;
height: 105px;
line-height: 1;
}

@media(max-width: 710px) {
margin-left: 12px;
}

@media(max-width: 690px) {
width: 155px;
}

@media(max-width: 680px) {
width: 145px;
font-size: 12.2px;
}

@media(max-width: 650px) {
margin-left: 9px;
width: 135px;
font-size: 11.7px;
}

@media(max-width: 630px) {
height: 96px;
}

@media(max-width: 601px) {
width: 115px;
}

@media(max-width: 586px) {
width: 390px;
height: 120px;
font-size: 20px;
}

@media(max-width: 576px) {
width: 375px;
font-size: 20px;
}

@media(max-width: 563px) {
width: 365px;
}

@media(max-width: 553px) {
width: 355px;
}

@media(max-width: 543px) {
width: 345px;
}

@media(max-width: 533px) {
width: 335px;
font-size: 18px;
}

@media(max-width: 513px) {
width: 323px;
font-size: 17px;
}

@media(max-width: 503px) {
width: 313px;
}

@media(max-width: 493px) {
width: 303px;
}

@media(max-width: 483px) {
width: 293px;
}

@media(max-width: 473px) {
width: 283px;
}

@media(max-width: 463px) {
width: 273px;
}

@media(max-width: 453px) {
width: 263px;
}

@media(max-width: 433px) {
width: 248px;
}

@media(max-width: 423px) {
width: 238px;
font-size: 15px;
}

@media(max-width: 413px) {
width: 228px;
background-color: red;
}

@media(max-width: 403px) {
width: 218px;
}

@media(max-width: 393px) {
width: 208px;
height: 115px;
}

@media(max-width: 383px) {
width: 198px;
}

@media(max-width: 373px) {
width: 188px;
}

@media(max-width: 363px) {
width: 178px;
}

@media(max-width: 353px) {
width: 168px;
}

@media(max-width: 343px) {
width: 158px;
}

@media(max-width: 333px) {
width: 148px;
}

@media(max-width: 323px) {
width: 140px;
}
`;

export const PostImage = styled.img<{ openMenu: boolean }>`
display: flex;
border-radius: 15px;
width: 125px;
height: 120px;
margin-top: -127px;
margin-left: ${({ openMenu }) => openMenu ? '210px' : ' 235px'};

@media(max-width: 1920px) {
margin-left: ${({ openMenu }) => openMenu ? '240px' : '285px'};
}

@media(max-width: 1760px) {
width: ${({ openMenu }) => openMenu ? '135px' : '130px'};
height: ${({ openMenu }) => openMenu ? '127px' : '125px'};
margin-top: -130px;
margin-left: ${({ openMenu }) => openMenu ? '205px' : '245px'};
}

@media(max-width: 1680px) {
width: ${({ openMenu }) => openMenu ? '128px' : '130px'};
height: ${({ openMenu }) => openMenu ? '128px' : '125px'};
margin-top: ${({ openMenu }) => openMenu ? '-130px' : '-121px'};
margin-left: ${({ openMenu }) => openMenu ? '184px' : '225px'};
}

@media(max-width: 1559px) {
width: ${({ openMenu }) => openMenu ? '135px' : '130px'};
height: ${({ openMenu }) => openMenu ? '135px' : '130px'};
margin-top: ${({ openMenu }) => openMenu ? '-135px' : '-130px'};
margin-left: ${({ openMenu }) => openMenu ? '250px' : '315px'};
}

@media(max-width: 1440px) {
width: ${({ openMenu }) => openMenu ? '115px' : '120px'};
height: ${({ openMenu }) => openMenu ? '115px' : '110px'};
margin-top: ${({ openMenu }) => openMenu ? '-122px' : '-111px'};
margin-left: ${({ openMenu }) => openMenu ? '230px' : '275px'};
}

@media(max-width: 1400px) {
width: ${({ openMenu }) => openMenu ? '110px' : '115px'};
height: ${({ openMenu }) => openMenu ? '110px' : '105px'};
margin-top: ${({ openMenu }) => openMenu ? '-108px' : '-103px'};
margin-left: ${({ openMenu }) => openMenu ? '220px' : '275px'};
}

@media(max-width: 1366px) {
margin-left: ${({ openMenu }) => openMenu ? '208px' : '260px'};
}

@media(max-width: 1280px) {
width: 110px;
height: ${({ openMenu }) => openMenu ? '100px' : '95px'};
margin-top: ${({ openMenu }) => openMenu ? '-98px' : '-97px'};
margin-left: ${({ openMenu }) => openMenu ? '188px' : '240px'};
}

@media(max-width: 1152px) {
width: 105px;
height: 90px;
margin-top: -82px;
margin-left: 205px;
}

@media(max-width: 1128px) {
margin-left: 195px;
}

@media(max-width: 1102px) {
margin-top: -86px;
margin-left: 185px;
}

@media(max-width: 1050px) {
margin-left: 170px;
}

@media(max-width: 1010px) {
margin-left: 160px;
}

@media(max-width: 1000px) {
width: 97px;
height: 90px;
margin-top: -90px;
margin-left: 165px;
}

@media(max-width: 990px) {
margin-left: 158px;
}

@media(max-width: 976px) {
width: 145px;
height: 145px;
margin-top: -145px;
margin-left: 226px;
}

@media(max-width: 950px) {
width: 135px;
height: 135px;
margin-top: -135px;
margin-left: 216px;
}

@media(max-width: 940px) {
width: 130px;
height: 130px;
margin-top: -130px;
}

@media(max-width: 930px) {
width: 125px;
height: 125px;
margin-top: -125px;
}

@media(max-width: 920px) {
width: 120px;
height: 120px;
margin-top: -120px;
}

@media(max-width: 900px) {
width: 110px;
height: 110px;
margin-top: -110px;
}

@media(max-width: 850px) {
width: 105px;
height: 105px;
margin-top: -105px;
}

@media(max-width: 840px) {
margin-left: 204px;
}

@media(max-width: 820px) {
margin-left: 192px;
}

@media(max-width: 791px) {
width: 110px;
height: 110px;
margin-top: -110px;
margin-left: 205px;
}

@media(max-width: 760px) {
margin-left: 193px;
}

@media(max-width: 750px) {
width: 105px;
height: 105px;
margin-top: -105px;
margin-left: 189px;
}

@media(max-width: 710px) {
margin-left: 179px;
}

@media(max-width: 690px) {
margin-left: 169px;
}

@media(max-width: 680px) {
margin-left: 159px;
}

@media(max-width: 650px) {
margin-left: 149px;
}

@media(max-width: 630px) {
width: 96px;
height: 96px;
margin-top: -96px;
}

@media(max-width: 601px) {
width: 108px;
height: 100px;
margin-left: 130px;
}

@media(max-width: 586px) {
width: 125px;
height: 120px;
margin-top: -120px;
margin-left: 405px;
}

@media(max-width: 576px) {
margin-left: 390px;
}

@media(max-width: 563px) {
margin-left: 380px;
}

@media(max-width: 553px) {
margin-left: 370px;
}

@media(max-width: 543px) {
margin-left: 360px;
}

@media(max-width: 533px) {
margin-left: 350px;
}

@media(max-width: 523px) {
width: 117px;
margin-left: 347px;
}

@media(max-width: 513px) {
margin-left: 336px;
}

@media(max-width: 503px) {
margin-left: 326px;
}

@media(max-width: 493px) {
margin-left: 316px;
}

@media(max-width: 483px) {
margin-left: 306px;
}

@media(max-width: 473px) {
margin-left: 296px;
}

@media(max-width: 463px) {
margin-left: 286px;
}

@media(max-width: 453px) {
margin-left: 276px;
}

@media(max-width: 433px) {
margin-left: 260px;
color: grey;
}

@media(max-width: 423px) {
margin-left: 250px;
width: 114px;
}

@media(max-width: 413px) {
margin-left: 240px;
}

@media(max-width: 403px) {
margin-left: 230px;
}

@media(max-width: 393px) {
height: 115px;
margin-top: -115px;
margin-left: 220px;
}

@media(max-width: 383px) {
margin-left: 210px;
}

@media(max-width: 373px) {
margin-left: 200px;
}

@media(max-width: 363px) {
margin-left: 190px;
}

@media(max-width: 353px) {
margin-left: 180px;
}

@media(max-width: 343px) {
margin-left: 170px;
}

@media(max-width: 333px) {
margin-left: 160px;
}

@media(max-width: 323px) {
margin-left: 155px;
}
`;

export const ButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: fit-content;
width: 100%;
margin-top: 13px;
background-color: green;

@media(max-width: 1440px) {
margin-top: 21px;
}

@media(max-width: 900px) {
margin-top: 15px;
}

@media(max-width: 791px) {
margin-top: 15px;
}

@media(max-width: 780px) {
margin-top: 17px;
}

@media(max-width: 586px) {
margin-top: 8px;
}
`;

export const PrimaryButtonsContainer = styled.div<{ openMenu: boolean }>`
display: flex;
justify-content: space-between;
align-items: center;
height: fit-content;
width: fit-content;
margin-left: 25px;
background-color: purple;

@media(max-width: 1680px) {
margin-left: ${({ openMenu }) => openMenu ? '17px' : '25px'};
}

@media(max-width: 1440px) {
margin-left: ${({ openMenu }) => openMenu ? '20px' : '10px'};
}

@media(max-width: 1400px) {
margin-left: 10px;
}

@media(max-width: 976px) {
margin-left: 20px;
}

@media(max-width: 710px) {
margin-left: 12px;
}

@media(max-width: 650px) {
margin-left: 9px;
}
`;

export const SecondButtonsContainer = styled.div`
display: flex;
align-items: center;
height: fit-content;
width: fit-content;

@media(max-width: 1440px) {
margin-right: 15px;
}
`;

export const LikeButtonContainer = styled.div`
display: flex;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
transition: 0.3s;

&:hover {
 background-color: #C8C8C8;
}

@media(max-width: 1559px) {
width: 35px;
height: 35px;
}

@media(max-width: 1440px) {
width: 25px;
height: 25px;
}

@media(max-width: 1010px) {
width: 20px;
height: 20px;
}

@media(max-width: 976px) {
width: 32px;
height: 32px;
}

@media(max-width: 900px) {
width: 26px;
height: 26px;
}

@media(max-width: 586px) {
width: 31px;
height: 31px;
}

@media(max-width: 393px) {
width: 27px;
height: 27px;
}
`;

export const LikeViewerContainer = styled.div`
display: flex;
width: fit-content;
height: fit-content;
margin: 0 6px 0 6px;

@media(max-width: 1559px) {
margin: 0 10px 0 10px;
}
`;

export const DeslikeButtonContainer = styled.div`
display: flex;
width: 30px;
height: 30px;
border-radius: 50%;
transition: 0.3s;
cursor: pointer;    

&:hover {
 background-color: #C8C8C8;
}

@media(max-width: 1559px) {
width: 35px;
height: 35px;
}

@media(max-width: 1440px) {
width: 25px;
height: 25px;
}

@media(max-width: 1010px) {
width: 20px;
height: 20px;
}

@media(max-width: 976px) {
width: 32px;
height: 32px;
}

@media(max-width: 900px) {
width: 26px;
height: 26px;
}

@media(max-width: 586px) {
width: 31px;
height: 31px;
}

@media(max-width: 393px) {
width: 27px;
height: 27px;
}
`;

export const ShareButtonContainer = styled.div`
display: flex;
width: 40px;
height: 40px;
margin-right: 26px;
border-radius: 50%;
cursor: pointer;
transition: 0.3s;

&:hover {background-color: #C8C8C8;}

@media(max-width: 1680px) {
width: 35px;
height: 35px;
margin-right: 20px;
}

@media(max-width: 1559px) {
margin-right: 23px;
}

@media(max-width: 1440px) {
width: 30px;
height: 30px;
}

@media(max-width: 1060px) {
width: 24px;
height: 24px;
margin-right: 15px;
}

@media(max-width: 976px) {
width: 32px;
height: 32px;
margin-right: 20px;
}

@media(max-width: 900px) {
width: 26px;
height: 26px;
margin-right: 30px;
}

@media(max-width: 870px) {
margin-right: 20px;
}

@media(max-width: 791px) {
margin-right: 25px;
}

@media(max-width: 750px) {
margin-right: 15px;
}

@media(max-width: 680px) {
margin-right: 7px;
}

@media(max-width: 586px) {
width: 31px;
height: 31px;
margin-right: 7px;
}

@media(max-width: 393px) {
width: 27px;
height: 27px;
margin-right: 20px;
}

@media(max-width: 323px) {
margin-right: 15px;
}
`;

export const CommentsButtonContainer = styled.div`
display: flex;
width: 65px;
height: 30px;
margin-right: 25px;
border-radius: 20px;
cursor: pointer;
transition: 0.3s;

&:hover {background-color: #C8C8C8;}

@media(max-width: 1680px) {
margin-right: 15px;
}

@media(max-width: 1559px) {
width: 75px;
margin-right: 20px;
}

@media(max-width: 1440px) {
width: 65px;
margin-right: 20px;
}

@media(max-width: 1060px) {
width: 60px;
margin-right: 20px;
}

@media(max-width: 1010px) {
height: 25px;
}

@media(max-width: 976px) {
width: 75px;
height: 32px;
margin-right: 40px;
}

@media(max-width: 950px) {
margin-right: 25px;
}

@media(max-width: 900px) {
width: 65px;
height: 26px;
margin-right: 25px;
}

@media(max-width: 870px) {
margin-right: 15px;
}

@media(max-width: 791px) {
margin-right: 20px;
}

@media(max-width: 720px) {
margin-right: 10px;
}

@media(max-width: 660px) {
margin-right: 0px;
}

@media(max-width: 586px) {
width: 80px;
height: 31px;
margin-right: 7px;
}

@media(max-width: 393px) {
width: 65px;
height: 27px;
margin-right: 10px;
}

@media(max-width: 323px) {
margin-right: 8px;
}
`;

export const OptionsButtonContainer = styled.div`
display: flex;
width: 35px;
height: 35px;
margin-right: 5px;
border-radius: 50%;
cursor: pointer;
transition: 0.3s;

@media(max-width: 1680px) {
margin-top: 2px;
}

@media(max-width: 1559px) {
margin-right: 10px;
}

@media(max-width: 1440px) {
width: 28px;
height: 28px;
}

@media(max-width: 1080px) {
margin-right: 0px;
}

@media(max-width: 1060px) {
width: 25px;
height: 25px;
margin-right: 5px;
}

@media(max-width: 1030px) {
margin-right: 3px;
}

@media(max-width: 1020px) {
margin-right: 0px;
}

@media(max-width: 1010px) {
margin-right: 10px;
}

@media(max-width: 976px) {
width: 32px;
height: 32px;
margin-top: 0;
margin-right: 20px;
}

@media(max-width: 950px) {
margin-right: 25px;
}

@media(max-width: 900px) {
width: 26px;
height: 26px;
}

@media(max-width: 870px) {
margin-right: 15px;
}

@media(max-width: 791px) {
margin-right: 25px;
}

@media(max-width: 730px) {
margin-right: 17px;
}

@media(max-width: 680px) {
margin-right: 10px;
}

@media(max-width: 586px) {
width: 31px;
height: 31px;
}

@media(max-width: 393px) {
width: 27px;
height: 27px;
}
`;