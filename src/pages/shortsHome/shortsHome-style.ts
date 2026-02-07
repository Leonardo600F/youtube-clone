import styled from "styled-components";

interface OpenMenu { openMenu: boolean }
interface OpenButton { openButton: boolean }
interface OpenShorts { openShorts: boolean }

export const ShortsContainer = styled.div<OpenMenu>`
height: fit-content;
width: 100%;
margin-top: 40px;
background-color: green`;

export const ShortsSpanContainer = styled.div<OpenButton>`
display: ${({ openButton }) => openButton ? 'flex' : 'none'};
width: fit-content;
align-items: center;
font-weight: 700;
font-size: 20px;
cursor: default`;

export const ShortsIconImage = styled.img<OpenButton>`
width: 40px;
margin-left: 10px;
border-radius: 50px;

@media(max-width: 1559px) {width: 35px}`;

export const Container = styled.div<OpenButton>`
display: ${({ openButton }) => openButton ? 'grid' : 'none'};
grid-template-columns: repeat(9, 1fr);
column-gap: 3px;
width: 100%;
background-color: grey;

@media(max-width: 1920px) {column-gap: 8px}

@media(max-width: 976px) {column-gap: 6px}`;

export const ShortsLine = styled.div<OpenShorts>`
width: ${({ openShorts }) => openShorts ? '100%' : '0'};
background-color: #989898;
height: 1px;
margin-top: 5px`;

export const CloseButtonContainer = styled.div<OpenMenu>`
display: flex;
width: 35px;
height: 35px;
border-radius: 50%;
margin-left: ${({ openMenu }) => openMenu ? '2090px' : '2265px'};
cursor: pointer;

&:hover {background-color: #d3d3d3}

@media(max-width: 2526px) {margin-left: ${({ openMenu }) => openMenu ? '2067px' : '2235px'}}

@media(max-width: 2496px) {margin-left: ${({ openMenu }) => openMenu ? '2036px' : '2205px'}}

@media(max-width: 2466px) {margin-left: ${({ openMenu }) => openMenu ? '2000px' : '2173px'}}

@media(max-width: 2434px) {margin-left: ${({ openMenu }) => openMenu ? '1973px' : '2143px'}}

@media(max-width: 2404px) {margin-left: ${({ openMenu }) => openMenu ? '1953px' : '2113px'}}

@media(max-width: 2380px) {margin-left: ${({ openMenu }) => openMenu ? '1921px' : '2090px'}}

@media(max-width: 2351px) {margin-left: ${({ openMenu }) => openMenu ? '1891px' : '2062px'}}

@media(max-width: 2323px) {margin-left: ${({ openMenu }) => openMenu ? '1861px' : '2032px'}}

@media(max-width: 2293px) {margin-left: ${({ openMenu }) => openMenu ? '1831px' : '2002px'}}

@media(max-width: 2272px) {margin-left: ${({ openMenu }) => openMenu ? '1811px' : '1982px'}}

@media(max-width: 2250px) {margin-left: ${({ openMenu }) => openMenu ? '1791px' : '1962px'}}

@media(max-width: 2223px) {margin-left: ${({ openMenu }) => openMenu ? '1761px' : '1932px'}}

@media(max-width: 2193px) {margin-left: ${({ openMenu }) => openMenu ? '1731px' : '1902px'}}

@media(max-width: 2173px) {margin-left: ${({ openMenu }) => openMenu ? '1711px' : '1882px'}}

@media(max-width: 2150px) {margin-left: ${({ openMenu }) => openMenu ? '1691px' : '1862px'}}

@media(max-width: 2123px) {margin-left: ${({ openMenu }) => openMenu ? '1661px' : '1832px'}}

@media(max-width: 2093px) {margin-left: ${({ openMenu }) => openMenu ? '1631px' : '1805px'}}

@media(max-width: 2070px) {margin-left: ${({ openMenu }) => openMenu ? '1611px' : '1785px'}}

@media(max-width: 2046px) {margin-left: ${({ openMenu }) => openMenu ? '1590px' : '1760px'}}

@media(max-width: 2030px) {margin-left: ${({ openMenu }) => openMenu ? '1575px' : '1745px'}}

@media(max-width: 2015px) {margin-left: ${({ openMenu }) => openMenu ? '1555px' : '1725px'}}

@media(max-width: 1995px) {margin-left: ${({ openMenu }) => openMenu ? '1540px' : '1710px'}}

@media(max-width: 1980px) {margin-left: ${({ openMenu }) => openMenu ? '1525px' : '1695px'}}

@media(max-width: 1960px) {margin-left: ${({ openMenu }) => openMenu ? '1505px' : '1675px'}}

@media(max-width: 1943px) {margin-left: ${({ openMenu }) => openMenu ? '1485px' : '1655px'}}

@media(max-width: 1920px) {margin-left: ${({ openMenu }) => openMenu ? '1476px' : '1660px'}}

@media(max-width: 1905px) {margin-left: ${({ openMenu }) => openMenu ? '1456px' : '1640px'}}

@media(max-width: 1890px) {margin-left: ${({ openMenu }) => openMenu ? '1441px' : '1625px'}}

@media(max-width: 1875px) {margin-left: ${({ openMenu }) => openMenu ? '1430px' : '1612px'}}

@media(max-width: 1860px) {margin-left: ${({ openMenu }) => openMenu ? '1410px' : '1592px'}}

@media(max-width: 1845px) {margin-left: ${({ openMenu }) => openMenu ? '1397px' : '1577px'}}

@media(max-width: 1830px) {margin-left: ${({ openMenu }) => openMenu ? '1385px' : '1567px'}}

@media(max-width: 1815px) {margin-left: ${({ openMenu }) => openMenu ? '1370px' : '1550px'}}

@media(max-width: 1800px) {margin-left: ${({ openMenu }) => openMenu ? '1355px' : '1535px'}}

@media(max-width: 1785px) {margin-left: ${({ openMenu }) => openMenu ? '1340px' : '1520px'}}

@media(max-width: 1770px) {margin-left: ${({ openMenu }) => openMenu ? '1324px' : '1505px'}}

@media(max-width: 1755px) {margin-left: ${({ openMenu }) => openMenu ? '1309px' : '1490px'}}

@media(max-width: 1745px) {margin-left: ${({ openMenu }) => openMenu ? '1300px' : '1480px'}}

@media(max-width: 1730px) {margin-left: ${({ openMenu }) => openMenu ? '1285px' : '1465px'}}

@media(max-width: 1710px) {margin-left: ${({ openMenu }) => openMenu ? '1265px' : '1445px'}}

@media(max-width: 1696px) {margin-left: ${({ openMenu }) => openMenu ? '1250px' : '1430px'}}

@media(max-width: 1682px) {margin-left: ${({ openMenu }) => openMenu ? '1235px' : '1416px'}}

@media(max-width: 1666px) {margin-left: ${({ openMenu }) => openMenu ? '1219px' : '1400px'}}

@media(max-width: 1655px) {margin-left: ${({ openMenu }) => openMenu ? '1209px' : '1390px'}}

@media(max-width: 1645px) {margin-left: ${({ openMenu }) => openMenu ? '1199px' : '1380px'}}

@media(max-width: 1635px) {margin-left: ${({ openMenu }) => openMenu ? '1189px' : '1370px'}}

@media(max-width: 1625px) {margin-left: ${({ openMenu }) => openMenu ? '1179px' : '1360px'}}

@media(max-width: 1615px) {margin-left: ${({ openMenu }) => openMenu ? '1169px' : '1350px'}}

@media(max-width: 1600px) {margin-left: ${({ openMenu }) => openMenu ? '1149px' : '1330px'}}

@media(max-width: 1576px) {margin-left: ${({ openMenu }) => openMenu ? '1129px' : '1310px'}}

@media(max-width: 1560px) {margin-left: ${({ openMenu }) => openMenu ? '1109px' : '1290px'}}

@media(max-width: 1533px) {margin-left: ${({ openMenu }) => openMenu ? '1095px' : '1275px'}}

@media(max-width: 1521px) {margin-left: ${({ openMenu }) => openMenu ? '1085px' : '1265px'}}

@media(max-width: 1510px) {margin-left: ${({ openMenu }) => openMenu ? '1075px' : '1255px'}}

@media(max-width: 1495px) {margin-left: ${({ openMenu }) => openMenu ? '1060px' : '1240px'}}

@media(max-width: 1480px) {margin-left: ${({ openMenu }) => openMenu ? '1040px' : '1220px'}}

@media(max-width: 1466px) {margin-left: ${({ openMenu }) => openMenu ? '1020px' : '1200px'}}

@media(max-width: 1451px) {margin-left: ${({ openMenu }) => openMenu ? '1010px' : '1190px'}}

@media(max-width: 1440px) {margin-left: ${({ openMenu }) => openMenu ? '1007px' : '1190px'}}

@media(max-width: 1430px) {margin-left: ${({ openMenu }) => openMenu ? '997px' : '1180px'}}

@media(max-width: 1420px) {margin-left: ${({ openMenu }) => openMenu ? '987px' : '1170px'}}

@media(max-width: 1410px) {margin-left: ${({ openMenu }) => openMenu ? '977px' : '1160px'}}

@media(max-width: 1400px) {margin-left: ${({ openMenu }) => openMenu ? '966px' : '1150px'}}

@media(max-width: 1390px) {margin-left: ${({ openMenu }) => openMenu ? '956px' : '1140px'}}

@media(max-width: 1380px) {margin-left: ${({ openMenu }) => openMenu ? '946px' : '1130px'}}

@media(max-width: 1370px) {margin-left: ${({ openMenu }) => openMenu ? '936px' : '1120px'}}

@media(max-width: 1360px) {margin-left: ${({ openMenu }) => openMenu ? '926px' : '1110px'}}

@media(max-width: 1350px) {margin-left: ${({ openMenu }) => openMenu ? '916px' : '1100px'}}

@media(max-width: 1340px) {margin-left: ${({ openMenu }) => openMenu ? '906px' : '1090px'}}

@media(max-width: 1330px) {margin-left: ${({ openMenu }) => openMenu ? '896px' : '1080px'}}

@media(max-width: 1320px) {margin-left: ${({ openMenu }) => openMenu ? '876px' : '1070px'}}

@media(max-width: 1312px) {margin-left: 1060px}

@media(max-width: 1292px) {margin-left: 1045px}

@media(max-width: 1282px) {margin-left: 1035px}

@media(max-width: 1272px) {margin-left: 1025px}

@media(max-width: 1262px) {margin-left: 1015px}

@media(max-width: 1252px) {margin-left: 1005px}

@media(max-width: 1242px) {margin-left: 995px}

@media(max-width: 1232px) {margin-left: 985px}

@media(max-width: 1222px) {margin-left: 975px}

@media(max-width: 1212px) {margin-left: 965px}

@media(max-width: 1202px) {margin-left: 955px}

@media(max-width: 1192px) {margin-left: 945px}

@media(max-width: 1182px) {margin-left: 935px}

@media(max-width: 1172px) {margin-left: 925px}

@media(max-width: 1162px) {margin-left: 915px}

@media(max-width: 1152px) {margin-left: 905px}

@media(max-width: 1142px) {margin-left: 895px}

@media(max-width: 1132px) {margin-left: 885px}

@media(max-width: 1122px) {margin-left: 875px}

@media(max-width: 1112px) {margin-left: 865px}

@media(max-width: 1102px) {margin-left: 855px}

@media(max-width: 1092px) {margin-left: 842px}

@media(max-width: 1082px) {margin-left: 832px}

@media(max-width: 1072px) {margin-left: 822px}

@media(max-width: 1062px) {margin-left: 812px}

@media(max-width: 1052px) {margin-left: 802px}

@media(max-width: 1042px) {margin-left: 792px}

@media(max-width: 1032px) {margin-left: 782px}

@media(max-width: 1022px) {margin-left: 772px}

@media(max-width: 1012px) {margin-left: 762px}

@media(max-width: 1002px) {margin-left: 752px}

@media(max-width: 992px) {margin-left: 742px}

@media(max-width: 982px) {margin-left: 732px}

@media(max-width: 976px) {margin-left: 727px}

@media(max-width: 966px) {
width: 45px;
height: 45px;
margin-left: 710px}

@media(max-width: 956px) {margin-left: 700px}

@media(max-width: 950px) {margin-left: 690px}

@media(max-width: 942px) {margin-left: 684px}

@media(max-width: 932px) {margin-left: 676px}

@media(max-width: 922px) {margin-left: 666px}

@media(max-width: 912px) {margin-left: 656px}

@media(max-width: 902px) {margin-left: 646px}

@media(max-width: 892px) {margin-left: 632px}

@media(max-width: 882px) {margin-left: 620px}

@media(max-width: 872px) {margin-left: 610px}

@media(max-width: 862px) {margin-left: 600px}

@media(max-width: 852px) {margin-left: 590px}

@media(max-width: 842px) {margin-left: 580px}

@media(max-width: 832px) {margin-left: 570px}

@media(max-width: 822px) {margin-left: 560px}

@media(max-width: 812px) {margin-left: 550px}

@media(max-width: 802px) {margin-left: 540px}

@media(max-width: 791px) {margin-left: 612px}

@media(max-width: 782px) {margin-left: 605px}

@media(max-width: 772px) {margin-left: 595px}

@media(max-width: 762px) {margin-left: 585px}

@media(max-width: 755px) {margin-left: 575px}

@media(max-width: 745px) {margin-left: 565px}

@media(max-width: 735px) {margin-left: 555px}

@media(max-width: 725px) {margin-left: 545px}

@media(max-width: 715px) {margin-left: 535px}

@media(max-width: 705px) {margin-left: 525px}

@media(max-width: 692px) {margin-left: 515px}

@media(max-width: 685px) {margin-left: 504px}

@media(max-width: 675px) {margin-left: 494px}

@media(max-width: 667px) {margin-left: 490px}

@media(max-width: 660px) {margin-left: 484px}

@media(max-width: 650px) {margin-left: 474px}

@media(max-width: 642px) {margin-left: 464px}

@media(max-width: 635px) {margin-left: 460px}

@media(max-width: 630px) {margin-left: 454px}

@media(max-width: 620px) {margin-left: 444px}

@media(max-width: 610px) {margin-left: 434px}

@media(max-width: 601px) {margin-left: 424px}

@media(max-width: 590px) {margin-left: 414px}

@media(max-width: 586px) {margin-left: 411px}

@media(max-width: 580px) {margin-left: 404px}

@media(max-width: 576px) {margin-left: 401px}

@media(max-width: 570px) {margin-left: 394px}

@media(max-width: 563px) {margin-left: 384px}

@media(max-width: 553px) {margin-left: 374px}

@media(max-width: 543px) {margin-left: 364px}

@media(max-width: 533px) {margin-left: 354px}

@media(max-width: 523px) {margin-left: 344px}

@media(max-width: 513px) {margin-left: 334px}

@media(max-width: 503px) {margin-left: 324px}

@media(max-width: 493px) {margin-left: 314px}

@media(max-width: 483px) {margin-left: 304px}

@media(max-width: 473px) {margin-left: 294px}

@media(max-width: 463px) {margin-left: 284px}

@media(max-width: 453px) {margin-left: 274px}

@media(max-width: 443px) {margin-left: 264px}

@media(max-width: 433px) {margin-left: 257px}

@media(max-width: 423px) {margin-left: 247px}

@media(max-width: 413px) {margin-left: 237px}

@media(max-width: 403px) {margin-left: 227px}

@media(max-width: 393px) {margin-left: 217px}

@media(max-width: 383px) {margin-left: 207px}

@media(max-width: 373px) {margin-left: 197px}

@media(max-width: 363px) {margin-left: 187px}

@media(max-width: 353px) {margin-left: 177px}

@media(max-width: 343px) {margin-left: 167px}

@media(max-width: 333px) {margin-left: 157px}

@media(max-width: 320px) {margin-left: 147px}`;

export const CloseButtonImage = styled.img<OpenShorts>`
display: flex;
width: 30px;
height: 30px;
margin: 4px 0 0 2px;
border-radius: 50%;

@media(max-width: 969px) {
width: 36px;
height: 36px;
margin: 5px 0 0 4px}`;

export const SpanMessageContainer = styled.div`
height: 50px;
width: fit-content;
margin: 30px 0 0 25px;
cursor: default;

@media(max-width: 1920px) {margin: 50px 0 0 5px}`;

export const ReturnContainer = styled.div<OpenShorts>`
height: 35px;
width: 90px;
margin: -27px 0px 0px 260px;
border-radius: 20px;
transition: 0.5s;
cursor: pointer;
&:hover {background-color: #007FFF}

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
&:hover {color: white}}

@media(max-width: 380px) {
width: 85px;
margin-left: 235px;
span{font-size: 16px}}

@media(max-width: 345px) {
width: 75px;
margin-left: 235px;
span{font-size: 14px}}

@media(max-width: 335px) {margin-left: 220px}`;

export const SpanMessage = styled.span`
display: flex;
width: fit-content;
margin-top: 15px;
color: grey;
font-size: 15px;

@media(max-width: 380px) {font-size: 14px}

@media(max-width: 335px) {font-size: 13px}`;