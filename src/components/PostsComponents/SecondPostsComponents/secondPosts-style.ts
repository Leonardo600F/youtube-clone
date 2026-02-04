import styled from "styled-components";

interface OpenMenu { openMenu: boolean }

export const Container = styled.div<OpenMenu>`
width: 100%;
height: 245px;
margin-top: 10px;

@media(max-width: 2100px) {width: ${({ openMenu }) => openMenu ? '354px' : '388.5px'}}

@media(max-width: 2080px) {width: ${({ openMenu }) => openMenu ? '350px' : '384.4px'}}

@media(max-width: 2060px) {width: ${({ openMenu }) => openMenu ? '346px' : '380.4px'}}

@media(max-width: 2046px) {width: ${({ openMenu }) => openMenu ? '343px' : '378px'}}

@media(max-width: 2030px) {width: ${({ openMenu }) => openMenu ? '339px' : '374px'}}

@media(max-width: 2010px) {width: ${({ openMenu }) => openMenu ? '336.5px' : '370.5px'}}

@media(max-width: 1995px) {width: ${({ openMenu }) => openMenu ? '333px' : '367px'}}

@media(max-width: 1973px) {width: ${({ openMenu }) => openMenu ? '329px' : '363px'}}

@media(max-width: 1954px) {width: ${({ openMenu }) => openMenu ? '326px' : '359px'}}

@media(max-width: 1933px) {width: ${({ openMenu }) => openMenu ? '322px' : '355px'}}

@media(max-width: 1920px) {width: ${({ openMenu }) => openMenu ? '402px' : '445px'}}

@media(max-width: 1905px) {width: ${({ openMenu }) => openMenu ? '400px' : '443px'}}

@media(max-width: 1890px) {width: ${({ openMenu }) => openMenu ? '393px' : '438px'}}

@media(max-width: 1875px) {width: ${({ openMenu }) => openMenu ? '389px' : '435px'}}

@media(max-width: 1860px) {width: ${({ openMenu }) => openMenu ? '385px' : '431px'}}

@media(max-width: 1845px) {width: ${({ openMenu }) => openMenu ? '382px' : '428px'}}

@media(max-width: 1830px) {width: ${({ openMenu }) => openMenu ? '378px' : '424px'}}

@media(max-width: 1815px) {width: ${({ openMenu }) => openMenu ? '374px' : '420px'}}

@media(max-width: 1800px) {width: ${({ openMenu }) => openMenu ? '370px' : '416px'}}

@media(max-width: 1785px) {width: ${({ openMenu }) => openMenu ? '366px' : '412px'}}

@media(max-width: 1765px) {width: ${({ openMenu }) => openMenu ? '362px' : '408px'}}

@media(max-width: 1745px) {width: ${({ openMenu }) => openMenu ? '358px' : '404px'}}

@media(max-width: 1730px) {width: ${({ openMenu }) => openMenu ? '354px' : '400px'}}

@media(max-width: 1716px) {width: ${({ openMenu }) => openMenu ? '350px' : '396px'}}

@media(max-width: 1696px) {width: ${({ openMenu }) => openMenu ? '344px' : '390px'}}

@media(max-width: 1675px) {width: ${({ openMenu }) => openMenu ? '339px' : '385px'}}

@media(max-width: 1655px) {width: ${({ openMenu }) => openMenu ? '335px' : '380px'}}

@media(max-width: 1635px) {width: ${({ openMenu }) => openMenu ? '331px' : '375px'}}

@media(max-width: 1625px) {width: ${({ openMenu }) => openMenu ? '326px' : '370px'}}

@media(max-width: 1594px) {width: ${({ openMenu }) => openMenu ? '321px' : '365px'}}

@media(max-width: 1576px) {width: ${({ openMenu }) => openMenu ? '424px' : '484px'}}

@media(max-width: 1560px) {width: ${({ openMenu }) => openMenu ? '419px' : '479px'}}

@media(max-width: 1546px) {
width: ${({ openMenu }) => openMenu ? '413px' : '475px'};
height: 250px}

@media(max-width: 1533px) {width: ${({ openMenu }) => openMenu ? '410px' : '470px'}}

@media(max-width: 1521px) {width: ${({ openMenu }) => openMenu ? '405px' : '465px'}}

@media(max-width: 1510px) {width: ${({ openMenu }) => openMenu ? '400px' : '460px'}}

@media(max-width: 1495px) {width: ${({ openMenu }) => openMenu ? '397px' : '457px'}}

@media(max-width: 1480px) {width: ${({ openMenu }) => openMenu ? '392px' : '452px'}}

@media(max-width: 1466px) {width: ${({ openMenu }) => openMenu ? '388px' : '448px'}}

@media(max-width: 1451px) {width: ${({ openMenu }) => openMenu ? '382px' : '443px'}}

@media(max-width: 1440px) {
height: ${({ openMenu }) => openMenu ? '245px' : '235px'};
width: ${({ openMenu }) => openMenu ? '379px' : '440px'}}

@media(max-width: 1430px) {width: ${({ openMenu }) => openMenu ? '374px' : '436px'}}

@media(max-width: 1420px) {width: ${({ openMenu }) => openMenu ? '370px' : '432px'}}

@media(max-width: 1410px) {width: ${({ openMenu }) => openMenu ? '366px' : '428px'}}

@media(max-width: 1400px) {width: ${({ openMenu }) => openMenu ? '366px' : '426px'}}

@media(max-width: 1390px) {width: ${({ openMenu }) => openMenu ? '362px' : '422px'}}

@media(max-width: 1380px) {width: ${({ openMenu }) => openMenu ? '358px' : '418px'}}

@media(max-width: 1370px) {width: ${({ openMenu }) => openMenu ? '354px' : '414px'}}

@media(max-width: 1350px) {width: ${({ openMenu }) => openMenu ? '350px' : '410px'}}

@media(max-width: 1340px) {width: ${({ openMenu }) => openMenu ? '346px' : '406px'}}

@media(max-width: 1330px) {width: ${({ openMenu }) => openMenu ? '341px' : '401px'}}

@media(max-width: 1320px) {width: ${({ openMenu }) => openMenu ? '339px' : '399px'}}

@media(max-width: 1312px) {
width: 396px;
height: 235px}

@media(max-width: 1292px) {width: 390px}

@media(max-width: 1272px) {width: 384px}

@media(max-width: 1252px) {width: 378px}

@media(max-width: 1233px) {width: 373px}

@media(max-width: 1222px) {width: 368px}

@media(max-width: 1207px) {width: 363px}

@media(max-width: 1192px) {width: 358px}

@media(max-width: 1182px) {width: 353px}

@media(max-width: 1162px) {width: 348px}

@media(max-width: 1152px) {width: 343px}

@media(max-width: 1142px) {width: 338px}

@media(max-width: 1122px) {width: 332px}

@media(max-width: 1115px) {width: 332px}

@media(max-width: 1102px) {width: 328px}

@media(max-width: 1092px) {width: 324px}

@media(max-width: 1082px) {width: 320px}

@media(max-width: 1072px) {width: 316px}

@media(max-width: 1062px) {width: 475px}

@media(max-width: 1052px) {width: 470px}

@media(max-width: 1042px) {width: 465px}

@media(max-width: 1032px) {width: 460px}

@media(max-width: 1022px) {width: 455px}

@media(max-width: 1012px) {width: 450px}

@media(max-width: 1002px) {width: 445px}

@media(max-width: 992px) {width: 440px}

@media(max-width: 982px) {width: 435px}

@media(max-width: 972px) {width: 430px}

@media(max-width: 962px) {width: 425px}

@media(max-width: 952px) {width: 420px}

@media(max-width: 942px) {width: 416px}

@media(max-width: 932px) {width: 411px}

@media(max-width: 922px) {width: 406px}

@media(max-width: 912px) {width: 401px}

@media(max-width: 902px) {width: 396px}

@media(max-width: 892px) {width: 391px}

@media(max-width: 882px) {width: 386px}

@media(max-width: 872px) {width: 381px}

@media(max-width: 862px) {width: 376px}

@media(max-width: 852px) {width: 371px}

@media(max-width: 842px) {width: 367px}

@media(max-width: 832px) {width: 363px}

@media(max-width: 825px) {width: 358px}

@media(max-width: 822px) {width: 357px}

@media(max-width: 815px) {width: 353px}

@media(max-width: 808px) {width: 349px}

@media(max-width: 802px) {width: 346px}

@media(max-width: 796px) {width: 343px}

@media(max-width: 791px) {width: 380px}

@media(max-width: 782px) {width: 376px}

@media(max-width: 775px) {width: 372px}

@media(max-width: 765px) {width: 368px}

@media(max-width: 755px) {width: 363px}

@media(max-width: 745px) {width: 358px}

@media(max-width: 736px) {width: 353px}

@media(max-width: 726px) {width: 348px}

@media(max-width: 715px) {width: 340px}

@media(max-width: 705px) {width: 334px}

@media(max-width: 695px) {width: 329px}

@media(max-width: 685px) {width: 326px}

@media(max-width: 680px) {width: 323px}

@media(max-width: 670px) {
width: 319px;
height: 225px}

@media(max-width: 665px) {width: 315px}

@media(max-width: 660px) {width: 314px}

@media(max-width: 650px) {width: 310px}

@media(max-width: 640px) {width: 305px}

@media(max-width: 635px) {width: 303px}

@media(max-width: 630px) {width: 300px}

@media(max-width: 620px) {width: 295px}

@media(max-width: 615px) {width: 292px}

@media(max-width: 610px) {width: 290px}

@media(max-width: 601px) {width: 285px}

@media(max-width: 595px) {width: 282px}

@media(max-width: 590px) {width: 280px}

@media(max-width: 586px) {width: 562px}

@media(max-width: 580px) {width: 558px}

@media(max-width: 576px) {width: 548px}

@media(max-width: 563px) {width: 538px}

@media(max-width: 553px) {width: 527px}

@media(max-width: 543px) {width: 517px}

@media(max-width: 533px) {width: 507px}

@media(max-width: 523px) {width: 497px}

@media(max-width: 513px) {width: 487px}

@media(max-width: 503px) {width: 477px}

@media(max-width: 493px) {width: 467px}

@media(max-width: 483px) {width: 457px}

@media(max-width: 473px) {width: 447px}

@media(max-width: 463px) {width: 437px}

@media(max-width: 453px) {width: 427px}

@media(max-width: 443px) {width: 417px}

@media(max-width: 433px) {width: 407px}

@media(max-width: 423px) {width: 397px}

@media(max-width: 413px) {width: 387px}

@media(max-width: 403px) {width: 377px}

@media(max-width: 393px) {
height: 207px;
width: 367px}

@media(max-width: 383px) {width: 359px}

@media(max-width: 373px) {width: 352px}

@media(max-width: 363px) {width: 337px}

@media(max-width: 353px) {width: 327px}

@media(max-width: 343px) {width: 317px}

@media(max-width: 335px) {width: 307px}

@media(max-width: 323px) {width: 301px}`;

export const PostBannerContainer = styled.div`
display: flex;
height: 100%;
width: 100%;
border-radius: 15px;
transition: 0.5s;
cursor: pointer;
background-color: #fff;

&:hover {background-color: #ececec;}`;

export const PostBanner = styled.div<OpenMenu>`
width: 95.8%;
height: 92%;
margin: 8px 0 0 7px;
border-radius: 15px;
border-style: solid;
border-color: #D8D8D8;
border-width: 1px;
cursor: pointer;
background-color: #fff;

@media(max-width: 2360px) {
width: 95%;
margin-left: 8px}

@media(max-width: 2142px) {margin-left: 6.5px}

@media(max-width: 2030px) {margin-left: 8px}

@media(max-width: 1973px) {margin-left: ${({ openMenu }) => openMenu ? '7px' : '7.6px'}}

@media(max-width: 1954px) {margin-left: ${({ openMenu }) => openMenu ? '6.7px' : '8px'}}

@media(max-width: 1933px) {margin-left: ${({ openMenu }) => openMenu ? '6.5px' : '7.3px'}}

@media(max-width: 1920px) {margin-left: ${({ openMenu }) => openMenu ? '8.7px' : '10px'}}

@media(max-width: 1830px) {margin-left: ${({ openMenu }) => openMenu ? '7.9px' : '9.2px'}}

@media(max-width: 1730px) {margin-left: ${({ openMenu }) => openMenu ? '7.5px' : '9px'}}

@media(max-width: 1675px) {margin-left: ${({ openMenu }) => openMenu ? '7px' : '8.5px'}}

@media(max-width: 1635px) {margin-left: ${({ openMenu }) => openMenu ? '6.5px' : '8px'}}

@media(max-width: 1576px) {width: 96%}

@media(max-width: 1510px) {margin-left: ${({ openMenu }) => openMenu ? '7px' : '8px'}}

@media(max-width: 1451px) {margin-left: ${({ openMenu }) => openMenu ? '6px' : '7.5px'}}

@media(max-width: 1400px) {margin-left: ${({ openMenu }) => openMenu ? '6px' : '7px'}}

@media(max-width: 1350px) {
width: 94.5%;
margin-left: ${({ openMenu }) => openMenu ? '8px' : '10px'}}

@media(max-width: 1312px) {margin-left: 10px}

@media(max-width: 1292px) {margin-left: 9px}

@media(max-width: 1207px) {margin-left: 8.8px}

@media(max-width: 1192px) {margin-left: 8.4px}

@media(max-width: 1162px) {
width: 93.5%;
margin-left: 9.6px}

@media(max-width: 1062px) {width: 95.4%}

@media(max-width: 1012px) {width: 95.2%}

@media(max-width: 982px) {width: 94.8%}

@media(max-width: 942px) {width: 94.6%}

@media(max-width: 902px) {width: 94.3%}

@media(max-width: 882px) {width: 94.2%}

@media(max-width: 862px) {width: 94%}

@media(max-width: 830px) {width: 93.8%}

@media(max-width: 791px) {width: 94%}

@media(max-width: 755px) {width: 93.7%}

@media(max-width: 690px) {width: 92.5%}

@media(max-width: 670px) {
width: 92.2%;
height: 89.6%}

@media(max-width: 640px) {width: 91.7%}

@media(max-width: 586px) {
width: 100%;
height: 100%;
margin: 0}`;

export const ChannelImage = styled.div<{ openMenu: boolean }>`
display: flex;
width: fit-content;
margin: 12px 0 0 20px;
cursor: pointer;

@media(max-width: 2251px) {margin-left: ${({ openMenu }) => openMenu ? '10px' : '20px'}}

@media(max-width: 1440px) {margin-left: ${({ openMenu }) => openMenu ? '20px' : '10px'}}

@media(max-width: 1400px) {margin-left: 10px}

@media(max-width: 710px) {margin-left: 12px;}

@media(max-width: 650px) {margin-left: 9px}`;

export const ChannelName = styled.span`
display: flex;
align-items: center;
color: #8c8c8c;
cursor: pointer;
font-size: 13px;
margin-left: 10px;
transition: 0.3s;

&:hover {color: #000}

@media(max-width: 1559px) {font-size: 15px}

@media(max-width: 1440px) {font-size: 13px}

@media(max-width: 800px) {font-size: 13.5px}

@media(max-width: 620px) {font-size: 12px}

@media(max-width: 586px) {font-size: 16px}

@media(max-width: 393px) {font-size: 14px}`;

export const PostTime = styled.span`
display: flex;
align-items: center;
margin-left: 5px;
color: #8c8c8c;
font-size: 12px;
cursor: pointer;
transition: 0.3s;

&:hover {color: #000}

@media(max-width: 1559px) {font-size: 15px}

@media(max-width: 1440px) {font-size: 13px}

@media(max-width: 620px) {font-size: 12px}

@media(max-width: 586px) {font-size: 16px}

@media(max-width: 393px) {font-size: 14px}`;

export const PostText = styled.span<OpenMenu>`
display: flex;
width: ${({ openMenu }) => openMenu ? '170px' : '200px'};
height: ${({ openMenu }) => openMenu ? '130px' : '120px'};
color: #8c8c8c;
font-size: 14px;
margin: 10px 0 0 25px;
cursor: pointer;

@media(max-width: 2480px) {
width: ${({ openMenu }) => openMenu ? '160px' : '190px'}};

@media(max-width: 2400px) {font-size: 13px};

@media(max-width: 2360px) {width: ${({ openMenu }) => openMenu ? '150px' : '180px'}};

@media(max-width: 2300px) {
width: ${({ openMenu }) => openMenu ? '140px' : '170px'};
height: ${({ openMenu }) => openMenu ? '125px' : '115px'};};

@media(max-width: 2251px) {
width: ${({ openMenu }) => openMenu ? '153px' : '176px'};
margin-left: ${({ openMenu }) => openMenu ? '10px' : '20px'};
display: -webkit-box;
-webkit-line-clamp: 5;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
overflow: hidden};

@media(max-width: 2193px) {width: ${({ openMenu }) => openMenu ? '146px' : '170px'}};

@media(max-width: 2162px) {width: ${({ openMenu }) => openMenu ? '136px' : '160px'}};

@media(max-width: 2100px) {
width: ${({ openMenu }) => openMenu ? '170px' : '190px'};
height: ${({ openMenu }) => openMenu ? '125px' : '125px'};
font-size: 15px;
-webkit-line-clamp: 6};

@media(max-width: 1995px) {width: ${({ openMenu }) => openMenu ? '160px' : '180px'}}

@media(max-width: 1954px) {width: ${({ openMenu }) => openMenu ? '150px' : '170px'}}

@media(max-width: 1920px) {
width: ${({ openMenu }) => openMenu ? '226px' : '262px'};
height: ${({ openMenu }) => openMenu ? '130px' : '130px'}}

@media(max-width: 1905px) {width: ${({ openMenu }) => openMenu ? '216px' : '252px'}}

@media(max-width: 1890px) {width: ${({ openMenu }) => openMenu ? '206px' : '242px'}}

@media(max-width: 1830px) {
width: ${({ openMenu }) => openMenu ? '196px' : '232px'};
font-size: 14px}

@media(max-width: 1785px) {width: ${({ openMenu }) => openMenu ? '186px' : '222px'}}

@media(max-width: 1730px) {width: ${({ openMenu }) => openMenu ? '176px' : '212px'}}

@media(max-width: 1675px) {width: ${({ openMenu }) => openMenu ? '166px' : '202px'}}

@media(max-width: 1635px) {width: ${({ openMenu }) => openMenu ? '156px' : '192px'}}

@media(max-width: 1594px) {
width: ${({ openMenu }) => openMenu ? '146px' : '182px'};
font-size: 13px}

@media(max-width: 1576px) {
width: ${({ openMenu }) => openMenu ? '248px' : '292px'};
font-size: 16px}

@media(max-width: 1560px) {
width: ${({ openMenu }) => openMenu ? '238px' : '282px'};
font-size: 15px}

@media(max-width: 1521px) {width: ${({ openMenu }) => openMenu ? '228px' : '272px'}}

@media(max-width: 1480px) {width: ${({ openMenu }) => openMenu ? '215px' : '259px'}}

@media(max-width: 1440px) {
width: ${({ openMenu }) => openMenu ? '200px' : '257px'};
height: ${({ openMenu }) => openMenu ? '120px' : '110px'};
margin-left: ${({ openMenu }) => openMenu ? '20px' : '10px'};
font-size: 14px}

@media(max-width: 1400px) {margin-left: 10px}

@media(max-width: 1380px) {width: ${({ openMenu }) => openMenu ? '190px' : '247px'}}

@media(max-width: 1360px) {width: ${({ openMenu }) => openMenu ? '189px' : '240px'}}

@media(max-width: 1330px) {width: ${({ openMenu }) => openMenu ? '174px' : '225px'}}

@media(max-width: 1312px) {
width: 225px;
height: 110px}

@media(max-width: 1292px) {width: 215px}

@media(max-width: 1252px) {
width: 205px;
font-size: 13px}

@media(max-width: 1233px) {width: 195px}

@media(max-width: 1207px) {width: 180px}

@media(max-width: 1162px) {width: 170px}

@media(max-width: 1122px) {width: 160px}

@media(max-width: 1092px) {
width: 150px;
font-size: 12.5px}

@media(max-width: 1062px) {
width: 300px;
font-size: 14.5px}

@media(max-width: 1032px) {width: 290px}

@media(max-width: 1012px) {width: 275px}

@media(max-width: 982px) {width: 260px}

@media(max-width: 942px) {width: 245px}

@media(max-width: 922px) {
width: 235px;
font-size: 13.4px}

@media(max-width: 902px) {width: 225px}

@media(max-width: 882px) {width: 210px}

@media(max-width: 852px) {
width: 200px;
font-size: 13px;
background-color: green}

@media(max-width: 832px) {width: 190px}

@media(max-width: 832px) {width: 190px}

@media(max-width: 825px) {width: 185px}

@media(max-width: 808px) {width: 175px}

@media(max-width: 791px) {
width: 208px;
height: 110px;
font-size: 13px;
line-height: 1.3}

@media(max-width: 775px) {width: 198px}

@media(max-width: 736px) {width: 183px}

@media(max-width: 710px) {margin-left: 12px}

@media(max-width: 690px) {width: 155px}

@media(max-width: 680px) {
width: 145px;
font-size: 12.2px}

@media(max-width: 650px) {
margin-left: 9px;
width: 135px;
font-size: 11.7px}

@media(max-width: 630px) {height: 96px}

@media(max-width: 601px) {width: 115px}

@media(max-width: 586px) {
width: 390px;
height: 120px;
font-size: 20px}

@media(max-width: 576px) {
width: 375px;
font-size: 20px}

@media(max-width: 563px) {width: 365px}

@media(max-width: 553px) {width: 355px}

@media(max-width: 543px) {width: 345px}

@media(max-width: 533px) {
width: 335px;
font-size: 18px}

@media(max-width: 513px) {
width: 323px;
font-size: 17px}

@media(max-width: 503px) {width: 313px}

@media(max-width: 493px) {width: 303px}

@media(max-width: 483px) {width: 293px}

@media(max-width: 473px) {width: 283px}

@media(max-width: 463px) {width: 273px}

@media(max-width: 453px) {width: 263px}

@media(max-width: 433px) {width: 248px}

@media(max-width: 423px) {
width: 238px;
font-size: 15px}

@media(max-width: 413px) {width: 228px}

@media(max-width: 403px) {width: 218px}

@media(max-width: 393px) {
width: 208px;
height: 115px}

@media(max-width: 383px) {width: 198px}

@media(max-width: 373px) {width: 188px}

@media(max-width: 363px) {width: 178px}

@media(max-width: 353px) {width: 168px}

@media(max-width: 343px) {width: 158px}

@media(max-width: 333px) {width: 148px}

@media(max-width: 323px) {width: 140px}`;

export const PostImage = styled.img<OpenMenu>`
display: flex;
border-radius: 15px;
width: 125px;
height: 120px;
margin-top: -127px;
margin-left: ${({ openMenu }) => openMenu ? '210px' : ' 235px'}

@media(max-width: 2480px) {
margin-left: ${({ openMenu }) => openMenu ? '200px' : ' 220px'};
margin-top: -122px}

@media(max-width: 2400px) {
width: 115px;
height: 122px}

@media(max-width: 2360px) {margin-left: ${({ openMenu }) => openMenu ? '190px' : ' 210px'}}

@media(max-width: 2300px) {
width: 110px;
height: 116px;
margin-top: -114px;
margin-left: ${({ openMenu }) => openMenu ? '180px' : ' 200px'}}

@media(max-width: 2251px) {
width: ${({ openMenu }) => openMenu ? '115px' : '110px'};
height: ${({ openMenu }) => openMenu ? '125px' : '116px'};
margin-top: ${({ openMenu }) => openMenu ? '-125px' : '-116px'};
margin-left: ${({ openMenu }) => openMenu ? '167px' : ' 200px'}}

@media(max-width: 2193px) {
width: ${({ openMenu }) => openMenu ? '110px' : '105px'};
margin-left: ${({ openMenu }) => openMenu ? '160px' : '192px'}}

@media(max-width: 2162px) {
width: ${({ openMenu }) => openMenu ? '116px' : '111px'};
margin-left: ${({ openMenu }) => openMenu ? '150px' : '182px'}}

@media(max-width: 2100px) {
width: ${({ openMenu }) => openMenu ? '116px' : '122px'};
height: ${({ openMenu }) => openMenu ? '125px' : '123px'};
margin-left: ${({ openMenu }) => openMenu ? '185px' : '212px'};
margin-top: -124px}

@media(max-width: 1995px) {margin-left: ${({ openMenu }) => openMenu ? '175px' : '202px'}}

@media(max-width: 1954px) {
width: ${({ openMenu }) => openMenu ? '112px' : '118px'};
margin-left: ${({ openMenu }) => openMenu ? '175px' : '194px'}}

@media(max-width: 1920px) {
height: 131px;
margin-left: ${({ openMenu }) => openMenu ? '240px' : '285px'};
margin-top: -130px}

@media(max-width: 1905px) {margin-left: ${({ openMenu }) => openMenu ? '230px' : '275px'}}

@media(max-width: 1890px) {
width: 120px;
margin-left: ${({ openMenu }) => openMenu ? '220px' : '265px'}}

@media(max-width: 1830px) {margin-left: ${({ openMenu }) => openMenu ? '209px' : '254px'}}

@media(max-width: 1785px) {
width: 118px;
height: 128px;
margin-left: ${({ openMenu }) => openMenu ? '199px' : '244px'}}

@media(max-width: 1730px) {margin-left: ${({ openMenu }) => openMenu ? '189px' : '234px'}}

@media(max-width: 1675px) {margin-left: ${({ openMenu }) => openMenu ? '179px' : '224px'}}

@media(max-width: 1635px) {
width: 116px;
margin-left: ${({ openMenu }) => openMenu ? '169px' : '214px'}}

@media(max-width: 1594px) {margin-left: ${({ openMenu }) => openMenu ? '159px' : '204px'}}

@media(max-width: 1576px) {
width: ${({ openMenu }) => openMenu ? '120px' : '126px'};
margin-left: ${({ openMenu }) => openMenu ? '260px' : '314px'}}

@media(max-width: 1560px) {margin-left: ${({ openMenu }) => openMenu ? '250px' : '304px'}}

@media(max-width: 1521px) {margin-left: ${({ openMenu }) => openMenu ? '240px' : '294px'}}

@media(max-width: 1480px) {
width: ${({ openMenu }) => openMenu ? '119px' : '123px'};
margin-left: ${({ openMenu }) => openMenu ? '227px' : '280px'}}

@media(max-width: 1440px) {
width: ${({ openMenu }) => openMenu ? '115px' : '120px'};
height: ${({ openMenu }) => openMenu ? '123px' : '111px'};
margin-top: ${({ openMenu }) => openMenu ? '-122px' : '-111px'};
margin-left: ${({ openMenu }) => openMenu ? '222px' : '269px'}}

@media(max-width: 1380px) {
width: ${({ openMenu }) => openMenu ? '112px' : '117px'};
margin-left: ${({ openMenu }) => openMenu ? '202px' : '259px'}}

@media(max-width: 1360px) {margin-left: ${({ openMenu }) => openMenu ? '200px' : '251px'}}

@media(max-width: 1330px) {margin-left: ${({ openMenu }) => openMenu ? '185px' : '236px'}}

@media(max-width: 1312px) {
width: 120px;
height: 111px;
margin-top: -111px;
margin-left: 236px}

@media(max-width: 1292px) {
width: 117px;
margin-left: 226px}

@media(max-width: 1252px) {margin-left: 216px}

@media(max-width: 1233px) {margin-left: 206px}

@media(max-width: 1207px) {margin-left: 191px}

@media(max-width: 1162px) {margin-left: 181px}

@media(max-width: 1122px) {margin-left: 171px}

@media(max-width: 1092px) {
width: 114px;
margin-left: 161px}

@media(max-width: 1062px) {margin-left: 311px}

@media(max-width: 1032px) {margin-left: 301px}

@media(max-width: 1012px) {margin-left: 286px}

@media(max-width: 982px) {margin-left: 271px}

@media(max-width: 942px) {margin-left: 256px}

@media(max-width: 922px) {margin-left: 246px}

@media(max-width: 902px) {
width: 112px;
margin-left: 236px;
color: red}

@media(max-width: 882px) {margin-left: 221px}

@media(max-width: 852px) {margin-left: 211px}

@media(max-width: 840px) {margin-left: 204px}

@media(max-width: 832px) {margin-left: 200px}

@media(max-width: 808px) {margin-left: 188px}

@media(max-width: 791px) {
width: 110px;
height: 110px;
margin-top: -110px;
margin-left: 220px}

@media(max-width: 775px) {margin-left: 210px}

@media(max-width: 736px) {margin-left: 195px}

@media(max-width: 710px) {margin-left: 179px}

@media(max-width: 690px) {margin-left: 169px}

@media(max-width: 680px) {margin-left: 159px}

@media(max-width: 650px) {margin-left: 149px}

@media(max-width: 630px) {
width: 96px;
height: 96px;
margin-top: -96px}

@media(max-width: 601px) {
width: 108px;
height: 100px;
margin-left: 130px}

@media(max-width: 586px) {
width: 125px;
height: 120px;
margin-top: -120px;
margin-left: 405px}

@media(max-width: 576px) {margin-left: 390px}

@media(max-width: 563px) {margin-left: 380px}

@media(max-width: 553px) {margin-left: 370px}

@media(max-width: 543px) {margin-left: 360px}

@media(max-width: 533px) {margin-left: 350px}

@media(max-width: 523px) {
width: 117px;
margin-left: 347px}

@media(max-width: 513px) {margin-left: 336px}

@media(max-width: 503px) {margin-left: 326px}

@media(max-width: 493px) {margin-left: 316px}

@media(max-width: 483px) {margin-left: 306px}

@media(max-width: 473px) {margin-left: 296px}

@media(max-width: 463px) {margin-left: 286px}

@media(max-width: 453px) {margin-left: 276px}

@media(max-width: 433px) {
margin-left: 260px;
color: grey}

@media(max-width: 423px) {
margin-left: 250px;
width: 114px}

@media(max-width: 413px) {margin-left: 240px}

@media(max-width: 403px) {margin-left: 230px}

@media(max-width: 393px) {
height: 115px;
margin-top: -115px;
margin-left: 220px}

@media(max-width: 383px) {margin-left: 210px}

@media(max-width: 373px) {margin-left: 200px}

@media(max-width: 363px) {margin-left: 190px}

@media(max-width: 353px) {margin-left: 180px}

@media(max-width: 343px) {margin-left: 170px}

@media(max-width: 333px) {margin-left: 160px}

@media(max-width: 323px) {margin-left: 155px}`;

export const ButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: fit-content;
width: 100%;
margin-top: 20px;

@media(max-width: 2400px) {margin-top: 17px}

@media(max-width: 2070px) {margin-top: 14px}

@media(max-width: 1920px) {margin-top: 9px}

@media(max-width: 1440px) {margin-top: 21px}

@media(max-width: 791px) {margin-top: 15px}

@media(max-width: 780px) {margin-top: 17px}

@media(max-width: 586px) {margin-top: 8px}`;

export const PrimaryButtonsContainer = styled.div<OpenMenu>`
display: flex;
justify-content: space-between;
align-items: center;
height: fit-content;
width: fit-content;
margin-left: 25px;

@media(max-width: 2251px) {margin-left: ${({ openMenu }) => openMenu ? '10px' : '20px'}}

@media(max-width: 1440px) {margin-left: ${({ openMenu }) => openMenu ? '20px' : '10px'}}

@media(max-width: 1400px) {margin-left: 10px}

@media(max-width: 710px) {margin-left: 12px}

@media(max-width: 650px) {margin-left: 9px}`;

export const SecondButtonsContainer = styled.div`
display: flex;
align-items: center;
height: fit-content;
width: fit-content;

@media(max-width: 1440px) {margin-right: 15px}`;

export const LikeButtonContainer = styled.div`
display: flex;
width: 30px;
height: 30px;
border-radius: 50%;
cursor: pointer;
transition: 0.3s;

&:hover {background-color: #C8C8C8}

@media(max-width: 1559px) {
width: 35px;
height: 35px}

@media(max-width: 1440px) {
width: 30px;
height: 30px}

@media(max-width: 586px) {
width: 31px;
height: 31px}

@media(max-width: 393px) {
width: 27px;
height: 27px}`;

export const LikeViewerContainer = styled.div`
display: flex;
width: fit-content;
height: fit-content;
margin: 0 6px 0 6px;

@media(max-width: 1559px) {margin: 0 10px 0 10px}`;

export const DeslikeButtonContainer = styled.div`
display: flex;
width: 30px;
height: 30px;
border-radius: 50%;
transition: 0.3s;
cursor: pointer;    

&:hover {background-color: #C8C8C8}

@media(max-width: 1559px) {
width: 35px;
height: 35px}

@media(max-width: 1440px) {
width: 30px;
height: 30px}

@media(max-width: 586px) {
width: 31px;
height: 31px}

@media(max-width: 393px) {
width: 27px;
height: 27px}`;

export const ShareButtonContainer = styled.div`
display: flex;
width: 35px;
height: 35px;
margin-right: 26px;
border-radius: 50%;
cursor: pointer;
transition: 0.3s;
&:hover {background-color: #C8C8C8}

@media(max-width: 2142px) {margin-right: 4px}

@media(max-width: 2100px) {margin-right: 20px}

@media(max-width: 1559px) {margin-right: 23px}

@media(max-width: 1440px) {margin-right: 12px}

@media(max-width: 1062px) {
width: 32px;
height: 32px}

@media(max-width: 680px) {margin-right: 7px}

@media(max-width: 586px) {
width: 31px;
height: 31px;
margin-right: 7px}

@media(max-width: 393px) {
width: 27px;
height: 27px;
margin-right: 20px}

@media(max-width: 323px) {margin-right: 15px}`;

export const CommentsButtonContainer = styled.div`
display: flex;
width: 65px;
height: 30px;
margin-right: 10px;
border-radius: 20px;
cursor: pointer;
transition: 0.3s;

&:hover {background-color: #C8C8C8}

@media(max-width: 2100px) {margin-right: 13px}

@media(max-width: 1559px) {
width: 75px;
margin-right: 20px}

@media(max-width: 1440px) {
width: 70px;
margin-right: 5px}

@media(max-width: 720px) {margin-right: 10px}

@media(max-width: 660px) {margin-right: 0px}

@media(max-width: 586px) {
width: 80px;
height: 31px;
margin-right: 7px}

@media(max-width: 393px) {
width: 65px;
height: 27px;
margin-right: 10px}

@media(max-width: 323px) {margin-right: 8px}`;

export const OptionsButtonContainer = styled.div`
display: flex;
width: 35px;
height: 35px;
margin-right: 10px;
border-radius: 50%;
cursor: pointer;
transition: 0.3s;

@media(max-width: 2162px) {
width: 30px;
height: 30px;
margin-top: -5px}

@media(max-width: 2100px) {margin-right: 25px}

@media(max-width: 2030px) {margin-right: 16px}

@media(max-width: 1559px) {margin-right: 10px}

@media(max-width: 1440px) {
width: 28px;
height: 28px}

@media(max-width: 1420px) {margin-right: 5px}

@media(max-width: 1080px) {margin-right: 0px}

@media(max-width: 1062px) {margin-top: 0px}

@media(max-width: 1030px) {margin-right: 3px}

@media(max-width: 1020px) {margin-right: 0px}

@media(max-width: 730px) {margin-right: 17px}

@media(max-width: 680px) {margin-right: 10px}

@media(max-width: 586px) {
width: 31px;
height: 31px}

@media(max-width: 393px) {
width: 27px;
height: 27px}`;