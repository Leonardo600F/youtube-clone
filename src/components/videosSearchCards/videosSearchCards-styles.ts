import styled from "styled-components";

interface OpenMenu { openMenu: boolean }

export const Container = styled.div<OpenMenu>`
display: flex;
width: 1350px;
margin: -45px 0 45px 30%;
column-gap: 15px;
cursor: pointer;
background-color: grey;

@media(max-width: 2000px) {
width: 1310px;
margin-left: ${({ openMenu }) => openMenu ? '20%' : '12%'}}

@media(max-width: 1900px) {margin-left: 8%}

@media(max-width: 1800px) {
width: 1250px;
margin-left: 6%}

@media(max-width: 1700px) {width: ${({ openMenu }) => openMenu ? '1180px' : '1240px'}}

@media(max-width: 1650px) {
width: ${({ openMenu }) => openMenu ? '1260px' : '1330px'};
margin-left: ${({ openMenu }) => openMenu ? '-3%' : '6%'}}

@media(max-width: 1600px) {width: ${({ openMenu }) => openMenu ? '1250px' : '1340px'}}

@media(max-width: 1570px) {
width: ${({ openMenu }) => openMenu ? '1210px' : '1300px'};
margin-left: ${({ openMenu }) => openMenu ? '-4%' : '4%'}}

@media(max-width: 1520px) {width: ${({ openMenu }) => openMenu ? '1180px' : '1280px'}}

@media(max-width: 1490px) {width: ${({ openMenu }) => openMenu ? '1140px' : '1240px'}}

@media(max-width: 1470px) {width: ${({ openMenu }) => openMenu ? '1100px' : '1200px'}}

@media(max-width: 1420px) {
width: ${({ openMenu }) => openMenu ? '1080px' : '1180px'};
margin-left: ${({ openMenu }) => openMenu ? '-5%' : '2%'}}

@media(max-width: 1390px) {width: ${({ openMenu }) => openMenu ? '1050px' : '1150px'}}

@media(max-width: 1350px) {width: ${({ openMenu }) => openMenu ? '1000px' : '1160px'}}

@media(max-width: 1312px) {
width: 1180px;
margin-left: 0%}

@media(max-width: 1300px) {width: 1160px}

@media(max-width: 1285px) {width: 1140px}

@media(max-width: 1265px) {width: 1120px}

@media(max-width: 1240px) {width: 1100px}

@media(max-width: 1220px) {width: 1080px}

@media(max-width: 1200px) {width: 1060px}

@media(max-width: 1180px) {width: 1040px}

@media(max-width: 1160px) {width: 1020px}

@media(max-width: 1140px) {width: 1000px}

@media(max-width: 1120px) {width: 980px}

@media(max-width: 1100px) {width: 960px}

@media(max-width: 1080px) {width: 940px}

@media(max-width: 1060px) {width: 920px}

@media(max-width: 1040px) {width: 900px}

@media(max-width: 1010px) {
width: 880px;
margin-top: -60px;
margin-bottom: 80px}

@media(max-width: 990px) {width: 850px}

@media(max-width: 970px) {width: 820px}

@media(max-width: 940px) {width: 790px}

@media(max-width: 910px) {width: 760px}

@media(max-width: 880px) {width: 730px}

@media(max-width: 850px) {
width: 700px;
margin-bottom: 50px}

@media(max-width: 810px) {width: 670px}

@media(max-width: 791px) {
width: 750px;
margin-left: -80px}

@media(max-width: 780px) {width: 730px}

@media(max-width: 770px) {width: 720px}

@media(max-width: 760px) {width: 705px}

@media(max-width: 740px) {width: 685px}

@media(max-width: 720px) {width: 665px}

@media(max-width: 700px) {width: 645px}

@media(max-width: 680px) {width: 625px}

@media(max-width: 660px) {width: 610px}

@media(max-width: 640px) {width: 590px}

@media(max-width: 620px) {width: 575px}

@media(max-width: 600px) {width: 560px}

@media(max-width: 590px) {width: 545px}

@media(max-width: 575px) {width: 530px}

@media(max-width: 560px) {width: 515px}

@media(max-width: 540px) {width: 505px}

@media(max-width: 530px) {width: 495px}

@media(max-width: 550px) {height: 388px}

@media(max-width: 515px) {width: 470px}

@media(max-width: 500px) {
width: 460px;
margin-top: -90px;
margin-bottom: 70px}

@media(max-width: 490px) {width: 450px}

@media(max-width: 480px) {width: 440px}

@media(max-width: 470px) {width: 430px}

@media(max-width: 455px) {width: 420px}

@media(max-width: 445px) {width: 415px}

@media(max-width: 435px) {width: 405px}

@media(max-width: 430px) {width: 395px}

@media(max-width: 420px) {width: 390px}

@media(max-width: 415px) {width: 380px}

@media(max-width: 405px) {width: 370px}

@media(max-width: 395px) {width: 360px}

@media(max-width: 385px) {width: 346px}

@media(max-width: 375px) {width: 340px}

@media(max-width: 365px) {width: 335px}

@media(max-width: 360px) {width: 325px}

@media(max-width: 350px) {width: 310px}

@media(max-width: 340px) {width: 305px}

@media(max-width: 330px) {width: 299px}


`;

export const Banner = styled.div<OpenMenu>`
min-width: 540px;
height: 295px;
border-radius: 12px;
background-size: cover;
background-position: 50% 50%;

@media(max-width: 1800px) {height: 320px}

@media(max-width: 1420px) {height: 305px}

@media(max-width: 1200px) {
min-width: 490px;
height: 280px}

@media(max-width: 1060px) {
min-width: 450px;
height: 265px}

@media(max-width: 990px) {
min-width: 380px;
height: 220px}

@media(max-width: 910px) {
min-width: 370px;
height: 215px}

@media(max-width: 880px) {
min-width: 355px;
height: 210px}

@media(max-width: 810px) {
min-width: 335px;
height: 195px}

@media(max-width: 791px) {
min-width: 370px;
height: 215px}

@media(max-width: 760px) {
min-width: 350px;
height: 200px}

@media(max-width: 700px) {
min-width: 330px;
height: 190px}

@media(max-width: 680px) {min-width: 310px}

@media(max-width: 660px) {
min-width: 305px;
height: 175px}

@media(max-width: 620px) {
min-width: 285px;
height: 170px}

@media(max-width: 590px) {
min-width: 270px;
height: 160px}

@media(max-width: 560px) {
min-width: 260px;
height: 155px}

@media(max-width: 550px) {
min-width: 515px;
height: 291px}

@media(max-width: 540px) {
min-width: 505px;
height: 281px}

@media(max-width: 530px) {
min-width: 495px;
height: 271px}

`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;

@media(max-width: 640px) {margin-left: -10px}

@media(max-width: 550px) {
margin-top: 295px;
margin-left: -103%}`;

export const ChannelImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-width: 35px;
max-width: 35px;
min-height: 35px;
max-height: 35px;
font-size: 15px;
margin-right: 10px;
border-radius: 50%;
background-color: beige;

@media(max-width: 1312px) {
min-width: 30px;
max-width: 30px;
min-height: 30px;
max-height: 30px}

@media(max-width: 550px) {margin-top: -15px}

@media(max-width: 540px) {margin-top: -25px}

@media(max-width: 415px) {
min-width: 23px;
max-width: 23px;
min-height: 23px;
max-height: 23px}`;

export const ResponsiveChannelTitle = styled.span`
display: none;

@media(max-width: 550px) {
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
text-overflow: ellipsis;
text-align: justify;
overflow: hidden;
width: 473px;
margin-top: -15px;
font-size: 15px;
font-weight: 600;
background-color: yellow}


@media(max-width: 540px) {
width: 463px;
margin-top: -25px}

@media(max-width: 530px) {width: 453px}`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
background-color: grey`;

export const ChannelContainer = styled.div`
display: flex;
align-items: center;
margin-top: 10px;

@media(max-width: 550px) {margin-top: 0}`;

export const Title = styled.span<OpenMenu>`
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
font-weight: 500;
font-size: 20px;
text-align: justify;
overflow: hidden;
text-overflow: ellipsis;
color: #0f0f0f;

@media(max-width: 2000px) {font-size: 18px}

@media(max-width: 1630px) {font-size: ${({ openMenu }) => openMenu ? '15px' : '16px'}}

@media(max-width: 1312px) {font-size: 19px}

@media(max-width: 1020px) {font-size: 17px}

@media(max-width: 900px) {
width: 370px;
background-color: blue}

@media(max-width: 880px) {width: 355px}

@media(max-width: 851px) {width: 328px}

@media(max-width: 811px) {width: 318px}

@media(max-width: 791px) {font-size: 15px}

@media(max-width: 771px) {width: 332px}

@media(max-width: 741px) {width: 317px}

@media(max-width: 721px) {width: 297px}

@media(max-width: 661px) {width: 286px}

@media(max-width: 641px) {width: 275px}

@media(max-width: 601px) {width: 267px}

@media(max-width: 571px) {width: 253px}

@media(max-width: 561px) {width: 246px}

@media(max-width: 550px) {display: none}`;

export const TextCard = styled.span`
display: flex;
font-size: 15px;
width: fit-content;

@media(max-width: 2000px) {font-size: 13px}

@media(max-width: 1312px) {font-size: 12.7px}

@media(max-width: 550px) {display: none}`;


export const ChannelDetails = styled.span`
font-size: 15px;

@media(max-width: 2000px) {font-size: 13px}

@media(max-width: 1312px) {font-size: 12.7px}

@media(max-width: 550px) {
width: fit-content;
margin-top: 30px;
margin-left: -472px}

@media(max-width: 540px) {margin-left: -462px}

@media(max-width: 530px) {margin-left: -452px}`;

export const DescriptionContainer = styled.div`
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
width: fit-content;
overflow: hidden;
text-overflow: ellipsis;
text-align: justify;
margin-top: 20px;
background-color: yellow;

@media(max-width: 900px) {width: 90%}

@media(max-width: 881px) {width: 355px}

@media(max-width: 851px) {width: 327px}

@media(max-width: 811px) {width: 317px}

@media(max-width: 791px) {width: 361px}

@media(max-width: 781px) {width: 341px}

@media(max-width: 771px) {width: 330px}

@media(max-width: 741px) {width: 315px}

@media(max-width: 721px) {width: 296px}

@media(max-width: 661px) {width: 288px}

@media(max-width: 641px) {width: 278px}

@media(max-width: 601px) {width: 268px}

@media(max-width: 571px) {width: 252px}

@media(max-width: 561px) {width: 247px}

@media(max-width: 550px) {
width: 473px;
margin-top: 7px;
margin-left: 40px}

@media(max-width: 540px) {width: 463px}

@media(max-width: 530px) {width: 453px}`

export const ResponsiveTextCard = styled.span`
display: flex;
font-size: 14px`