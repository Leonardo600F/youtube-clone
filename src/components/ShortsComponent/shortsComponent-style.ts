import styled from "styled-components";

interface OpenMenu { openMenu: boolean;}

export const Container = styled.div<OpenMenu>`
height: ${({ openMenu }) => openMenu ? '555px' : '600px'};
width: 100%;
background-color: blue;

@media(max-width: 1760px) {
height: ${({ openMenu }) => openMenu ? '515px' : '540px'};
}

@media(max-width: 1680px) {
height: ${({ openMenu }) => openMenu ? '520px' : '515px'};
}

@media(max-width: 1559px) {
height: ${({ openMenu }) => openMenu ? '440px' : '500px'};
}

@media(max-width: 1440px) {
height: ${({ openMenu }) => openMenu ? '380px' : '440px'};
}

@media(max-width: 1366px) {
height: ${({ openMenu }) => openMenu ? '390px' : '450px'};
}

@media(max-width: 1280px) {
height: ${({ openMenu }) => openMenu ? '382px' : '425px'};
}

@media(max-width: 1152px) {
height: 385px;
}

@media(max-width: 1128px) {
height: 395px;
}

@media(max-width: 1102px) {
height: 380px;
}

@media(max-width: 1080px) {
height: 373px;
}

@media(max-width: 1040px) {
height: 365px;
}

@media(max-width: 1000px) {
height: 345px;
}

@media(max-width: 990px) {
height: 335px;
}

@media(max-width: 980px) {
height: 325px;
}

@media(max-width: 976px) {
height: 470px;
}

@media(max-width: 969px) {
height: 458px;
}

@media(max-width: 950px) {
height: 448px;
}

@media(max-width: 930px) {
height: 438px;
}

@media(max-width: 910px) {
height: 430px;
}

@media(max-width: 900px) {
height: 420px;
}

@media(max-width: 890px) {
height: 410px;
}

@media(max-width: 880px) {
height: 400px;
}

@media(max-width: 870px) {
height: 386px;
}

@media(max-width: 791px) {
height: 411px;
}

@media(max-width: 670px) {
height: 403px;
}

@media(max-width: 620px) {
height: 382px;
}

@media(max-width: 595px) {
height: 372px;
}

@media(max-width: 586px) {
height: 500px;
}

@media(max-width: 570px) {
height: 490px;
}

@media(max-width: 563px) {
height: 480px;
}

@media(max-width: 553px) {
height: 470px;
}

@media(max-width: 543px) {
height: 460px;
}

@media(max-width: 533px) {
height: 450px;
}

@media(max-width: 523px) {
height: 440px;
}

@media(max-width: 513px) {
height: 430px;
}

@media(max-width: 503px) {
height: 420px;
}

@media(max-width: 493px) {
height: 410px;
}

@media(max-width: 483px) {
height: 400px;
}

@media(max-width: 473px) {
height: 390px;
}

@media(max-width: 463px) {
height: 380px;
}

@media(max-width: 453px) {
height: 370px;
}

@media(max-width: 423px) {
height: 360px;
}

@media(max-width: 373px) {
height: 350px;
}

@media(max-width: 325px) {
height: 300px;
}
`;

export const BannerContainer = styled.div<OpenMenu>`
width: ${({ openMenu }) => openMenu ? '246px' : '265px'};
height: ${({ openMenu }) => openMenu ? '500px' : '550px'};
margin-top: 18px;
border-radius: 15px;
cursor: pointer;
background-color: #fff;

&:hover {background-color: #ececec;}

@media(max-width: 1920px) {
width: ${({ openMenu }) => openMenu ? '264px' : '294px'};
height: ${({ openMenu }) => openMenu ? '525px' : '550px'};
}

@media(max-width: 1760px) {
width: ${({ openMenu }) => openMenu ? '237px' : '267px'};
height: ${({ openMenu }) => openMenu ? '490px' : '515px'};
}

@media(max-width: 1680px) {
width: ${({ openMenu }) => openMenu ? '261px' : '297px'};
height: ${({ openMenu }) => openMenu ? '490px' : '485px'};
}

@media(max-width: 1559px) {
width: ${({ openMenu }) => openMenu ? '240px' : '277px'};
height: ${({ openMenu }) => openMenu ? '405px' : '470px'};
border-radius: 10px;
}

@media(max-width: 1440px) {
width: ${({ openMenu }) => openMenu ? '217.5px' : '254px'};
height: ${({ openMenu }) => openMenu ? '350px' : '410px'};
}

@media(max-width: 1400px) {
width: ${({ openMenu }) => openMenu ? '215.4px' : '251.4px'};
}

@media(max-width: 1366px) {
width: ${({ openMenu }) => openMenu ? '208.4px' : '244.6px'};
height: ${({ openMenu }) => openMenu ? '360px' : '420px'};
}

@media(max-width: 1280px) {
width: ${({ openMenu }) => openMenu ? '191.5px' : '227.8px'};
height: ${({ openMenu }) => openMenu ? '355px' : '400px'};
}

@media(max-width: 1152px) {
width: 202.5px;
height: 360px;
}

@media(max-width: 1128px) {
width: 198px;
height: 370px;
}

@media(max-width: 1115px) {
width: 195.4px;
}

@media(max-width: 1102px) {
width: 192.7px;
height: 352px;
}

@media(max-width: 1090px) {
width: 190px;
}

@media(max-width: 1080px) {
width: 188px;
height: 348px;
}

@media(max-width: 1070px) {
width: 186px;
}

@media(max-width: 1060px) {
width: 184px;
}

@media(max-width: 1050px) {
width: 182px;
}

@media(max-width: 1040px) {
width: 180px;
height: 337px;
}

@media(max-width: 1030px) {
width: 178px;
}

@media(max-width: 1020px) {
width: 176.5px;
}

@media(max-width: 1010px) {
width: 174.2px;
}

@media(max-width: 1000px) {
width: 172px;
height: 320px;
}

@media(max-width: 990px) {
width: 170px;
height: 308px;
}

@media(max-width: 980px) {
width: 168px;
height: 300px;
}

@media(max-width: 976px) {
width: 278px;
height: 440px;
}

@media(max-width: 969px) {
width: 275.4px;
height: 430px;
}

@media(max-width: 960px) {
width: 272.6px;
height: 430px;
}

@media(max-width: 950px) {
width: 269px;
height: 420px;
}

@media(max-width: 940px) {
width: 266px;
height: 415px;
}

@media(max-width: 930px) {
width: 262px;
height: 410px;
}

@media(max-width: 920px) {
width: 258.5px;
}

@media(max-width: 910px) {
width: 255px;
height: 403px;
}

@media(max-width: 900px) {
width: 252.5px;
height: 393px;
}

@media(max-width: 890px) {
width: 249px;
height: 385px;
}

@media(max-width: 880px) {
width: 246px;
height: 376px;
}

@media(max-width: 870px) {
width: 242.5px;
height: 360px;
}

@media(max-width: 860px) {
width: 239px;
}

@media(max-width: 850px) {
width: 241px;
}

@media(max-width: 840px) {
width: 237px;
}

@media(max-width: 830px) {
width: 234px;
}

@media(max-width: 820px) {
width: 231px;
}

@media(max-width: 810px) {
width: 228px;
}

@media(max-width: 800px) {
width: 224px;
}

@media(max-width: 790px) {
width: 220px;
}

@media(max-width: 791px) {
width: 248px;
height: 385px;
}

@media(max-width: 780px) {
width: 244px;
}

@media(max-width: 770px) {
width: 240px;
}

@media(max-width: 760px) {
width: 237.5px;
}

@media(max-width: 750px) {
width: 234px;
}

@media(max-width: 740px) {
width: 231px;
}

@media(max-width: 730px) {
width: 228px;
}

@media(max-width: 720px) {
width: 225px;
}

@media(max-width: 710px) {
width: 221px;
}

@media(max-width: 700px) {
width: 218px;
}

@media(max-width: 690px) {
width: 215px;
}

@media(max-width: 685px) {
width: 211px;
}

@media(max-width: 670px) {
width: 208px;
height: 378px;
}

@media(max-width: 665px) {
width: 206px;
}

@media(max-width: 660px) {
width: 204px;
}

@media(max-width: 650px) {
width: 201px;
}

@media(max-width: 640px) {
width: 198px;
}

@media(max-width: 635px) {
width: 197px;
}

@media(max-width: 630px) {
width: 195px;
}

@media(max-width: 620px) {
width: 191.4px;
height: 360px;
}

@media(max-width: 615px) {
width: 189.5px;
}

@media(max-width: 610px) {
width: 188px;
}

@media(max-width: 601px) {
width: 185px;
}

@media(max-width: 595px) {
width: 183px;
height: 350px;
}

@media(max-width: 590px) {
width: 181px;
}

@media(max-width: 586px) {
width: 275px;
height: 475px;
}

@media(max-width: 576px) {
width: 271px;
}

@media(max-width: 570px) {
width: 268px;
height: 465px;
}

@media(max-width: 563px) {
width: 262.5px;
height: 455px;
}

@media(max-width: 553px) {
width: 257px;
height: 445px;
}

@media(max-width: 543px) {
width: 253px;
height: 435px;
}

@media(max-width: 533px) {
width: 248px;
height: 425px;
}

@media(max-width: 523px) {
width: 242.5px;
height: 415px;
}

@media(max-width: 513px) {
width: 238px;
height: 405px;
}

@media(max-width: 503px) {
width: 233px;
height: 395px;
}

@media(max-width: 493px) {
width: 229px;
height: 385px;
}

@media(max-width: 483px) {
width: 224px;
height: 375px;
}

@media(max-width: 473px) {
width: 218px;
height: 365px;
}

@media(max-width: 463px) {
width: 214px;
height: 355px;
}

@media(max-width: 453px) {
width: 209px;
height: 345px;
}

@media(max-width: 443px) {
width: 204px;
}

@media(max-width: 433px) {
width: 199px;
}

@media(max-width: 423px) {
width: 194px;
height: 335px;
}

@media(max-width: 413px) {
width: 189px;
}

@media(max-width: 403px) {
width: 183.5px;
}

@media(max-width: 393px) {
width: 179px;
}

@media(max-width: 383px) {
width: 174px;
}

@media(max-width: 373px) {
width: 169px;
height: 327px;
}

@media(max-width: 363px) {
width: 164px;
}

@media(max-width: 353px) {
width: 160px;
}

@media(max-width: 345px) {
width: 155px;
}

@media(max-width: 335px) {
width: 150px;
}

@media(max-width: 325px) {
width: 145px;
height: 278px;
}
`;

export const ImageBanner = styled.img<OpenMenu>`
height: ${({ openMenu }) => openMenu ? '400px' : '450px'};
width: ${({ openMenu }) => openMenu ? '225px' : '245px'};
object-fit: cover;
border-radius: 15px;
margin-top: 8px;
margin-left: 10px;

@media(max-width: 1920px) {
height: ${({ openMenu }) => openMenu ? '415px' : '440px'};
width: 96%;
margin-top: 5px;
margin-left: 5px;
}

@media(max-width: 1760px) {
height: ${({ openMenu }) => openMenu ? '390px' : '410px'};
width: ${({ openMenu }) => openMenu ? '217px' : '247px'};
margin-top: 8px;
margin-left: 10px;
}

@media(max-width: 1680px) {
height: ${({ openMenu }) => openMenu ? '390px' : '380px'};
width: ${({ openMenu }) => openMenu ? '241px' : '276px'};
margin-top: 8px;
margin-left: 10px;
}

@media(max-width: 1559px) {
height: ${({ openMenu }) => openMenu ? '310px' : '370px'};
width: ${({ openMenu }) => openMenu ? '220px' : '257px'};
border-radius: 10px;
}

@media(max-width: 1440px) {
height: ${({ openMenu }) => openMenu ? '260px' : '320px'};
width: ${({ openMenu }) => openMenu ? '203px' : '240px'};
margin-top: 5px;
margin-left: 7px;
}

@media(max-width: 1400px) {
height: ${({ openMenu }) => openMenu ? '260px' : '320px'};
width: ${({ openMenu }) => openMenu ? '200px' : '235px'};
margin-left: 8px;
}

@media(max-width: 1366px) {
height: ${({ openMenu }) => openMenu ? '260px' : '320px'};
width: ${({ openMenu }) => openMenu ? '190px' : '225px'};
margin-top: 10px;
margin-left: 9px;
}

@media(max-width: 1280px) {
height: ${({ openMenu }) => openMenu ? '260px' : '300px'};
width: ${({ openMenu }) => openMenu ? '174px' : '210.5px'};
}

@media(max-width: 1152px) {
height: 270px;
width: 184px;
}

@media(max-width: 1128px) {
width: 180px;
}

@media(max-width: 1102px) {
width: 175px;
height: 260px;
}

@media(max-width: 1090px) {
width: 172px;
}

@media(max-width: 1080px) {
width: 170px;
height: 255px;
}

@media(max-width: 1060px) {
width: 166px;
}

@media(max-width: 1050px) {
width: 164px;
}

@media(max-width: 1050px) {
width: 162px;
height: 245px;
}

@media(max-width: 1020px) {
width: 159px;
}

@media(max-width: 1000px) {
width: 154px;
height: 238px;
}

@media(max-width: 990px) {
width: 152px;
height: 228px;
}

@media(max-width: 980px) {
width: 150px;
height: 218px;
margin-top: 8px;
}

@media(max-width: 976px) {
width: 260px;
height: 350px;
}

@media(max-width: 969px) {
width: 256px;
height: 335px;
margin-left: 10px;
}

@media(max-width: 960px) {
margin-left: 8px;
}

@media(max-width: 950px) {
width: 249px;
height: 325px;
margin-left: 10px;
}

@media(max-width: 940px) {
width: 246px;
height: 320px;
margin-left: 10px;
}

@media(max-width: 930px) {
width: 242px;
height: 310px;
}

@media(max-width: 920px) {
width: 238px;
}

@media(max-width: 910px) {
width: 235px;
height: 305px;
}

@media(max-width: 900px) {
width: 232px;
height: 295px;
}

@media(max-width: 890px) {
width: 229px;
height: 285px;
}

@media(max-width: 880px) {
width: 226px;
height: 275px;
}

@media(max-width: 870px) {
width: 222.5px;
height: 265px;
}

@media(max-width: 860px) {
width: 219px;
}

@media(max-width: 850px) {
width: 221.4px;
}

@media(max-width: 840px) {
width: 217px;
}

@media(max-width: 830px) {
width: 214px;
}

@media(max-width: 820px) {
width: 211px;
}

@media(max-width: 810px) {
width: 208px;
}

@media(max-width: 800px) {
width: 204px;
}

@media(max-width: 791px) {
width: 228px;
height: 293px;
}

@media(max-width: 780px) {
width: 224px;
}

@media(max-width: 770px) {
width: 220px;
}

@media(max-width: 750px) {
width: 214px;
}

@media(max-width: 740px) {
width: 211px;
}

@media(max-width: 730px) {
width: 209px;
}

@media(max-width: 720px) {
width: 205px;
}

@media(max-width: 710px) {
width: 201px;
}

@media(max-width: 700px) {
width: 198px;
}

@media(max-width: 690px) {
width: 195px;
}

@media(max-width: 685px) {
width: 191px;
}

@media(max-width: 670px) {
width: 188px;
height: 285px;
}

@media(max-width: 665px) {
width: 186px;
}

@media(max-width: 660px) {
width: 184px;
}

@media(max-width: 650px) {
width: 182px;
}

@media(max-width: 640px) {
width: 179px;
}

@media(max-width: 635px) {
width: 177px;
}

@media(max-width: 630px) {
width: 175px;
}

@media(max-width: 620px) {
width: 172px;
height: 270px;
}

@media(max-width: 610px) {
width: 168px;
}

@media(max-width: 601px) {
width: 164px;
}

@media(max-width: 595px) {
width: 163px;
height: 260px;
}

@media(max-width: 590px) {
width: 161px;
}

@media(max-width: 586px) {
width: 254.5px;
height: 381px;
}

@media(max-width: 580px) {
width: 252.5px;
height: 381px;
}

@media(max-width: 576px) {
width: 251px;
}

@media(max-width: 570px) {
width: 248px;
height: 371px;
}

@media(max-width: 563px) {
width: 243px;
height: 364px;
}

@media(max-width: 553px) {
width: 237px;
height: 354px;
}

@media(max-width: 543px) {
width: 234px;
height: 344px;
}

@media(max-width: 533px) {
width: 229px;
height: 334px;
}

@media(max-width: 523px) {
width: 222.5px;
height: 324px;
}

@media(max-width: 513px) {
width: 218px;
height: 314px;
}

@media(max-width: 503px) {
width: 213px;
height: 304px;
}

@media(max-width: 493px) {
width: 209px;
height: 294px;
}

@media(max-width: 483px) {
width: 204px;
height: 284px;
}

@media(max-width: 473px) {
width: 198px;
height: 274px;
}

@media(max-width: 463px) {
width: 195px;
height: 264px;
}

@media(max-width: 453px) {
width: 190px;
height: 254px;
}

@media(max-width: 443px) {
width: 184px;
}

@media(max-width: 433px) {
width: 180px;
}

@media(max-width: 423px) {
width: 174px;
height: 244px;
}

@media(max-width: 413px) {
width: 169px;
}

@media(max-width: 403px) {
width: 164px;
}

@media(max-width: 393px) {
width: 159px;
}

@media(max-width: 383px) {
width: 155px;
}

@media(max-width: 373px) {
width: 150px;
}

@media(max-width: 363px) {
width: 145px;
}

@media(max-width: 353px) {
width: 141px;
}

@media(max-width: 345px) {
width: 136px;
}

@media(max-width: 335px) {
width: 131px;
}

@media(max-width: 325px) {
width: 126px;
height: 210px;
}
`;

export const TitleContainer = styled.div<OpenMenu>`
width: 90%;
margin-left: 9px;
margin-top: 5px;
background-color: green;

@media(max-width: 1920px) {
width: 88%;
margin-left: 20px;
}

@media(max-width: 1760px) {
margin-left: 15px;
}

@media(max-width: 1559px) {
width: 86%;
margin-left: 20px;
}

@media(max-width: 1400px) {
width: 88%;
margin-left: 15px;
}

@media(max-width: 1366px) {
margin-top: 10px;
}

@media(max-width: 1280px) {
width: 90%;
margin-left: 12px;
}

@media(max-width: 1152px) {
margin-top: 3px;
}

@media(max-width: 969px) {
margin-left: 14.5px;
}

@media(max-width: 595px) {
margin-left: 9.5px;
}

@media(max-width: 586px) {
width: 92%;
}

@media(max-width: 325px) {
margin-top: 0px;
}
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

export const Title = styled.span<OpenMenu>`
display: flex;
font-weight: 700;
width: fit-content;
font-size: 15px;
color: #0f0f0f;
background-color: blue;

@media(max-width: 1920px) {
font-size: ${({ openMenu }) => openMenu ? '16px' : '17px'};
}

@media(max-width: 1760px) {
font-size: ${({ openMenu }) => openMenu ? '15px' : '16px'};
}

@media(max-width: 1559px) {
font-size: 14px;
}

@media(max-width: 1440px) {
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
overflow: hidden;
width: 100%;
}

@media(max-width: 1000px) {
font-size: 12.5px;
}

@media(max-width: 976px) {
font-size: 15.5px;
}

@media(max-width: 393px) {
font-size: 14px;
}

@media(max-width: 325px) {
font-size: 11px;
}
`;

export const TextCard = styled.div<OpenMenu>`
font-size: ${({ openMenu }) => openMenu ? '13px' : '16px'};
width: fit-content;
margin-top: 10px;
color: #8c8c8c;
cursor: pointer;

@media(max-width: 1920px) {
font-size: ${({ openMenu }) => openMenu ? '15px' : '16px'};
}

@media(max-width: 1760px) {
font-size: ${({ openMenu }) => openMenu ? '14px' : '15px'};
}

@media(max-width: 1559px) {
font-size: ${({ openMenu }) => openMenu ? '13px' : '14px'};
}

@media(max-width: 1000px) {
font-size: 12.5px;
}

@media(max-width: 976px) {
font-size: 14.4px;
}

@media(max-width: 393px) {
font-size: 13px;
}

@media(max-width: 325px) {
margin-top: 6px;
font-size: 11px;
}
`;