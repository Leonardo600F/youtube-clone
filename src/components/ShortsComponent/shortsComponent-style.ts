import styled from "styled-components";

interface OpenMenu { openMenu: boolean }

export const Container = styled.div<OpenMenu>`
height: ${({ openMenu }) => openMenu ? '555px' : '600px'};
width: 100%;
background-color: blue;

@media(max-width: 2526px) {height: ${({ openMenu }) => openMenu ? '535px' : '590px'}}

@media(max-width: 2496px) {height: ${({ openMenu }) => openMenu ? '515px' : '570px'}}

@media(max-width: 2380px) {height: ${({ openMenu }) => openMenu ? '492px' : '560px'}}

@media(max-width: 2223px) {height: ${({ openMenu }) => openMenu ? '482px' : '550px'}}

@media(max-width: 2015px) {height: ${({ openMenu }) => openMenu ? '462px' : '530px'}}

@media(max-width: 1920px) {height: ${({ openMenu }) => openMenu ? '560px' : '585px'}}

@media(max-width: 1705px) {height: ${({ openMenu }) => openMenu ? '540px' : '555px'}}

@media(max-width: 1410px) {height: ${({ openMenu }) => openMenu ? '525px' : '540px'}}

@media(max-width: 1390px) {height: ${({ openMenu }) => openMenu ? '505px' : '525px'}}

@media(max-width: 1380px) {height: ${({ openMenu }) => openMenu ? '485px' : '505px'}}

@media(max-width: 1360px) {height: ${({ openMenu }) => openMenu ? '470px' : '495px'}}

@media(max-width: 1340px) {height: ${({ openMenu }) => openMenu ? '460px' : '485px'}}

@media(max-width: 1312px) {height: 485px}

@media(max-width: 1162px) {height: 455px}

@media(max-width: 1102px) {height: 465px}

@media(max-width: 976px) {height: 490px}

@media(max-width: 872px) {height: 465px}

@media(max-width: 812px) {height: 455px}

@media(max-width: 667px) {height: 430px}

@media(max-width: 620px) {height: 415px}

@media(max-width: 586px) {height: 500px}

@media(max-width: 570px) {height: 490px}

@media(max-width: 563px) {height: 480px}

@media(max-width: 553px) {height: 470px}

@media(max-width: 543px) {height: 460px}

@media(max-width: 533px) {height: 450px}

@media(max-width: 523px) {height: 440px}

@media(max-width: 513px) {height: 430px}

@media(max-width: 503px) {height: 420px}

@media(max-width: 493px) {height: 410px}

@media(max-width: 483px) {height: 400px}

@media(max-width: 473px) {height: 390px}

@media(max-width: 463px) {height: 380px}

@media(max-width: 453px) {height: 370px}

@media(max-width: 423px) {height: 360px}

@media(max-width: 373px) {height: 350px}

@media(max-width: 325px) {height: 300px}`;

export const BannerContainer = styled.div<OpenMenu>`
width: ${({ openMenu }) => openMenu ? '246px' : '265px'};
height: ${({ openMenu }) => openMenu ? '500px' : '550px'};
margin-top: 18px;
border-radius: 15px;
cursor: pointer;
background-color: #fff;

&:hover {background-color: #ececec}

@media(max-width: 2526px) {
width: ${({ openMenu }) => openMenu ? '241px' : '260px'};
height: ${({ openMenu }) => openMenu ? '500px' : '550px'}}

@media(max-width: 2496px) {
width: ${({ openMenu }) => openMenu ? '237px' : '255px'};
height: ${({ openMenu }) => openMenu ? '485px' : '535px'}}

@media(max-width: 2434px) {width: ${({ openMenu }) => openMenu ? '229px' : '249px'}}

@media(max-width: 2380px) {
width: ${({ openMenu }) => openMenu ? '222px' : '242px'};
height: ${({ openMenu }) => openMenu ? '460px' : '520px'}}

@media(max-width: 2323px) {width: ${({ openMenu }) => openMenu ? '217px' : '237px'}}

@media(max-width: 2272px) {width: ${({ openMenu }) => openMenu ? '211px' : '231px'}}

@media(max-width: 2223px) {
width: ${({ openMenu }) => openMenu ? '206px' : '226px'};
height: ${({ openMenu }) => openMenu ? '450px' : '510px'}}

@media(max-width: 2173px) {width: ${({ openMenu }) => openMenu ? '200px' : '220px'}}

@media(max-width: 2123px) {width: ${({ openMenu }) => openMenu ? '194px' : '214px'}}

@media(max-width: 2070px) {width: ${({ openMenu }) => openMenu ? '188px' : '208px'}}

@media(max-width: 2015px) {
width: ${({ openMenu }) => openMenu ? '184px' : '204px'};
height: ${({ openMenu }) => openMenu ? '435px' : '495px'}}

@media(max-width: 1980px) {width: ${({ openMenu }) => openMenu ? '180px' : '200px'}}

@media(max-width: 1943px) {width: ${({ openMenu }) => openMenu ? '176px' : '196px'}}

@media(max-width: 1920px) {
width: ${({ openMenu }) => openMenu ? '264px' : '294px'};
height: ${({ openMenu }) => openMenu ? '525px' : '550px'}}

@media(max-width: 1905px) {width: ${({ openMenu }) => openMenu ? '261.5px' : '291.5px'}}

@media(max-width: 1890px) {width: ${({ openMenu }) => openMenu ? '259px' : '289px'}}

@media(max-width: 1875px) {width: ${({ openMenu }) => openMenu ? '256.5px' : '286.5px'}}

@media(max-width: 1860px) {width: ${({ openMenu }) => openMenu ? '253.5px' : '283.5px'}}

@media(max-width: 1845px) {width: ${({ openMenu }) => openMenu ? '251px' : '281.5px'}}

@media(max-width: 1830px) {width: ${({ openMenu }) => openMenu ? '249px' : '279px'}}

@media(max-width: 1815px) {width: ${({ openMenu }) => openMenu ? '246.3px' : '277px'}}

@media(max-width: 1800px) {width: ${({ openMenu }) => openMenu ? '244px' : '274.3px'}}

@media(max-width: 1785px) {width: ${({ openMenu }) => openMenu ? '241.3px' : '272px'}}

@media(max-width: 1770px) {width: ${({ openMenu }) => openMenu ? '239px' : '269px'}}

@media(max-width: 1755px) {width: ${({ openMenu }) => openMenu ? '236.5px' : '267px'}}

@media(max-width: 1745px) {width: ${({ openMenu }) => openMenu ? '235px' : '265px'}}

@media(max-width: 1730px) {width: ${({ openMenu }) => openMenu ? '232.5px' : '263px'}}

@media(max-width: 1720px) {width: ${({ openMenu }) => openMenu ? '230px' : '260.5px'}}

@media(max-width: 1705px) {
width: ${({ openMenu }) => openMenu ? '275.4px' : '312px'};
height: ${({ openMenu }) => openMenu ? '505px' : '520px'}}

@media(max-width: 1696px) {width: ${({ openMenu }) => openMenu ? '273.4px' : '310px'}}

@media(max-width: 1682px) {width: ${({ openMenu }) => openMenu ? '271px' : '307.3px'}}

@media(max-width: 1666px) {width: ${({ openMenu }) => openMenu ? '268px' : '304.3px'}}

@media(max-width: 1655px) {width: ${({ openMenu }) => openMenu ? '265.5px' : '302.3px'}}

@media(max-width: 1645px) {width: ${({ openMenu }) => openMenu ? '263.5px' : '300.3px'}}

@media(max-width: 1635px) {width: ${({ openMenu }) => openMenu ? '261.5px' : '298.3px'}}

@media(max-width: 1625px) {width: ${({ openMenu }) => openMenu ? '259.5px' : '296.3px'}}

@media(max-width: 1615px) {width: ${({ openMenu }) => openMenu ? '257.5px' : '294px'}}

@media(max-width: 1600px) {width: ${({ openMenu }) => openMenu ? '254.5px' : '291px'}}

@media(max-width: 1587px) {width: ${({ openMenu }) => openMenu ? '252px' : '288.5px'}}

@media(max-width: 1576px) {width: ${({ openMenu }) => openMenu ? '250px' : '286.5px'}}

@media(max-width: 1560px) {
width: ${({ openMenu }) => openMenu ? '247px' : '283px'};
border-radius: 10px}

@media(max-width: 1546px) {width: ${({ openMenu }) => openMenu ? '244px' : '280.5px'}}

@media(max-width: 1533px) {width: ${({ openMenu }) => openMenu ? '241.5px' : '278px'}}

@media(max-width: 1521px) {width: ${({ openMenu }) => openMenu ? '239px' : '275.5px'}}

@media(max-width: 1510px) {width: ${({ openMenu }) => openMenu ? '237px' : '273px'}}

@media(max-width: 1495px) {width: ${({ openMenu }) => openMenu ? '234px' : '270px'}}

@media(max-width: 1480px) {width: ${({ openMenu }) => openMenu ? '231px' : '267px'}}

@media(max-width: 1466px) {width: ${({ openMenu }) => openMenu ? '228px' : '264px'}}

@media(max-width: 1451px) {width: ${({ openMenu }) => openMenu ? '225px' : '261.5px'}}

@media(max-width: 1440px) {width: ${({ openMenu }) => openMenu ? '223px' : '259.5px'}}

@media(max-width: 1430px) {width: ${({ openMenu }) => openMenu ? '221px' : '257.5px'}}

@media(max-width: 1420px) {width: ${({ openMenu }) => openMenu ? '219px' : '255.5px'}}

@media(max-width: 1410px) {
width: ${({ openMenu }) => openMenu ? '217px' : '253.5px'};
height: ${({ openMenu }) => openMenu ? '490px' : '505px'}}

@media(max-width: 1400px) {width: ${({ openMenu }) => openMenu ? '215.4px' : '251.4px'}}

@media(max-width: 1390px) {
width: ${({ openMenu }) => openMenu ? '213.4px' : '249.4px'};
height: ${({ openMenu }) => openMenu ? '475px' : '490px'}}

@media(max-width: 1380px) {
width: ${({ openMenu }) => openMenu ? '211.4px' : '247.4px'};
height: ${({ openMenu }) => openMenu ? '455px' : '470px'}}

@media(max-width: 1370px) {width: ${({ openMenu }) => openMenu ? '209.4px' : '245.6px'}}

@media(max-width: 1360px) {
width: ${({ openMenu }) => openMenu ? '207.4px' : '243.6px'};
height: ${({ openMenu }) => openMenu ? '440px' : '460px'}}

@media(max-width: 1350px) {width: ${({ openMenu }) => openMenu ? '205.4px' : '241.6px'}}

@media(max-width: 1340px) {
width: ${({ openMenu }) => openMenu ? '203.4px' : '239.6px'};
height: ${({ openMenu }) => openMenu ? '430px' : '450px'}}

@media(max-width: 1330px) {width: ${({ openMenu }) => openMenu ? '201.4px' : '237.6px'}}

@media(max-width: 1320px) {width: ${({ openMenu }) => openMenu ? '199.4px' : '235.6px'}}

@media(max-width: 1312px) {
width: 235.6px;
height: 450px}

@media(max-width: 1305px) {width: 233.6px}

@media(max-width: 1292px) {width: 231px}

@media(max-width: 1282px) {width: 229px}

@media(max-width: 1272px) {width: 227px}

@media(max-width: 1262px) {width: 225px}

@media(max-width: 1252px) {width: 223px}

@media(max-width: 1242px) {width: 221px}

@media(max-width: 1232px) {width: 219px}

@media(max-width: 1222px) {width: 217px}

@media(max-width: 1212px) {width: 215px}

@media(max-width: 1202px) {width: 213px}

@media(max-width: 1192px) {width: 211px}

@media(max-width: 1182px) {width: 209px}

@media(max-width: 1172px) {width: 207px}

@media(max-width: 1162px) {
width: 205px;
height: 420px}

@media(max-width: 1152px) {width: 203px}

@media(max-width: 1142px) {width: 201px}

@media(max-width: 1132px) {width: 199px}

@media(max-width: 1122px) {width: 197px}

@media(max-width: 1112px) {width: 195px}

@media(max-width: 1102px) {
width: 242.4px;
height: 430px}

@media(max-width: 1092px) {width: 240px}

@media(max-width: 1082px) {width: 238px}

@media(max-width: 1072px) {width: 235px}

@media(max-width: 1062px) {width: 233px}

@media(max-width: 1052px) {width: 230px}

@media(max-width: 1042px) {width: 228px}

@media(max-width: 1032px) {width: 225px}

@media(max-width: 1022px) {width: 223px}

@media(max-width: 1012px) {width: 220px}

@media(max-width: 1002px) {width: 218px}

@media(max-width: 992px) {width: 215px}

@media(max-width: 982px) {width: 213px}

@media(max-width: 976px) {
width: 286px;
height: 460px}

@media(max-width: 966px) {width: 282.3px}

@media(max-width: 956px) {width: 279.3px}

@media(max-width: 946px) {width: 276.3px}

@media(max-width: 942px) {width: 275px}

@media(max-width: 932px) {width: 271.2px}

@media(max-width: 922px) {width: 268px}

@media(max-width: 912px) {width: 265px}

@media(max-width: 902px) {width: 262px}

@media(max-width: 892px) {width: 258px}

@media(max-width: 882px) {width: 255px}

@media(max-width: 872px) {
width: 252px;
height: 430px}

@media(max-width: 862px) {width: 248px}

@media(max-width: 852px) {width: 245px}

@media(max-width: 842px) {width: 242px}

@media(max-width: 832px) {width: 239px}

@media(max-width: 825px) {width: 237px}

@media(max-width: 822px) {width: 235px}

@media(max-width: 812px) {
width: 232px;
height: 420px}

@media(max-width: 802px) {width: 228px}

@media(max-width: 791px) {width: 251px}

@media(max-width: 782px) {width: 248px}

@media(max-width: 772px) {width: 245px}

@media(max-width: 762px) {width: 242px}

@media(max-width: 755px) {width: 239px}

@media(max-width: 745px) {width: 236px}

@media(max-width: 735px) {width: 233px}

@media(max-width: 725px) {width: 230px}

@media(max-width: 720px) {width: 228px}

@media(max-width: 710px) {width: 225px}

@media(max-width: 700px) {width: 221px}

@media(max-width: 690px) {width: 218px}

@media(max-width: 680px) {width: 215px}

@media(max-width: 675px) {width: 213px}

@media(max-width: 667px) {
width: 210px;
height: 405px}

@media(max-width: 660px) {width: 207.5px}

@media(max-width: 650px) {width: 204.5px}

@media(max-width: 642px) {width: 202px}

@media(max-width: 635px) {width: 200px}

@media(max-width: 627px) {width: 197px}

@media(max-width: 620px) {
width: 195px;
height: 390px}

@media(max-width: 610px) {width: 192px}

@media(max-width: 605px) {width: 190px}

@media(max-width: 596px) {width: 186.5px}

@media(max-width: 590px) {width: 184.5px}

@media(max-width: 586px) {
width: 278px;
height: 475px;
background-color: white}

@media(max-width: 578px) {width: 274px}

@media(max-width: 570px) {
width: 270px;
height: 465px}

@media(max-width: 563px) {
width: 262.5px;
height: 455px}

@media(max-width: 553px) {
width: 257px;
height: 445px;}

@media(max-width: 543px) {
width: 253px;
height: 435px}

@media(max-width: 533px) {
width: 248px;
height: 425px}

@media(max-width: 523px) {
width: 242.5px;
height: 415px}

@media(max-width: 513px) {
width: 238px;
height: 405px}

@media(max-width: 503px) {
width: 233px;
height: 395px}

@media(max-width: 493px) {
width: 229px;
height: 385px}

@media(max-width: 483px) {
width: 224px;
height: 375px}

@media(max-width: 473px) {
width: 218px;
height: 365px}

@media(max-width: 463px) {
width: 214px;
height: 355px}

@media(max-width: 453px) {
width: 209px;
height: 345px}

@media(max-width: 443px) {width: 204px}

@media(max-width: 433px) {width: 199px}

@media(max-width: 423px) {
width: 194px;
height: 335px}

@media(max-width: 413px) {width: 189px}

@media(max-width: 403px) {width: 183.5px}

@media(max-width: 393px) {width: 179px}

@media(max-width: 383px) {width: 174px}

@media(max-width: 373px) {
width: 169px;
height: 327px}

@media(max-width: 363px) {width: 164px}

@media(max-width: 353px) {width: 160px}

@media(max-width: 345px) {width: 155px}

@media(max-width: 335px) {width: 150px}

@media(max-width: 325px) {
width: 148px;
height: 278px}`;

export const ImageBanner = styled.img<OpenMenu>`
width: ${({ openMenu }) => openMenu ? '225px' : '245px'};
height: ${({ openMenu }) => openMenu ? '400px' : '450px'};
object-fit: cover;
border-radius: 15px;
margin-top: 8px;
margin-left: 10px;

@media(max-width: 2526px) {
width: ${({ openMenu }) => openMenu ? '220px' : '240px'};
margin-top: 8px;
margin-left: 10px}

@media(max-width: 2496px) {
width: ${({ openMenu }) => openMenu ? '216px' : '236px'};
height: ${({ openMenu }) => openMenu ? '385px' : '435px'};
margin-left: 9px;}

@media(max-width: 2434px) {width: ${({ openMenu }) => openMenu ? '210px' : '230px'}}

@media(max-width: 2380px) {
width: ${({ openMenu }) => openMenu ? '203px' : '223px'};
height: ${({ openMenu }) => openMenu ? '370px' : '425px'}}

@media(max-width: 2323px) {width: ${({ openMenu }) => openMenu ? '198px' : '218px'}}

@media(max-width: 2272px) {width: ${({ openMenu }) => openMenu ? '193px' : '213px'}}

@media(max-width: 2223px) {
width: ${({ openMenu }) => openMenu ? '188px' : '208px'};
height: ${({ openMenu }) => openMenu ? '360px' : '415px'}}

@media(max-width: 2173px) {width: ${({ openMenu }) => openMenu ? '182px' : '202px'}}

@media(max-width: 2123px) {width: ${({ openMenu }) => openMenu ? '176px' : '196px'}}

@media(max-width: 2070px) {width: ${({ openMenu }) => openMenu ? '169px' : '189px'}}

@media(max-width: 2015px) {
width: ${({ openMenu }) => openMenu ? '166px' : '186px'};
height: ${({ openMenu }) => openMenu ? '345px' : '400px'}}

@media(max-width: 1980px) {width: ${({ openMenu }) => openMenu ? '162px' : '182px'}}

@media(max-width: 1943px) {width: ${({ openMenu }) => openMenu ? '158px' : '178px'}}

@media(max-width: 1920px) {
height: ${({ openMenu }) => openMenu ? '430px' : '450px'};
width: ${({ openMenu }) => openMenu ? '244px' : '93.2%'};
margin-top: 10px;
margin-left: 10px;}

@media(max-width: 1905px) {width: ${({ openMenu }) => openMenu ? '92.5%' : '93.2%'}}

@media(max-width: 1890px) {width: ${({ openMenu }) => openMenu ? '92.3%' : '93.2%'}}

@media(max-width: 1860px) {width: ${({ openMenu }) => openMenu ? '92%' : '93%'}}

@media(max-width: 1815px) {width: ${({ openMenu }) => openMenu ? '92%' : '92.6%'}}

@media(max-width: 1800px) {width: ${({ openMenu }) => openMenu ? '92%' : '92.6%'}}

@media(max-width: 1785px) {width: ${({ openMenu }) => openMenu ? '91.7%' : '92.7%'}}

@media(max-width: 1755px) {width: ${({ openMenu }) => openMenu ? '91.8%' : '92.5%'}}

@media(max-width: 1705px) {
height: ${({ openMenu }) => openMenu ? '415px' : '427px'};
width: ${({ openMenu }) => openMenu ? '256px' : '292px'};
margin-top: 8px;
margin-left: 10px}

@media(max-width: 1696px) {width: ${({ openMenu }) => openMenu ? '254px' : '290px'}}

@media(max-width: 1682px) {width: ${({ openMenu }) => openMenu ? '251px' : '287px'}}

@media(max-width: 1666px) {width: ${({ openMenu }) => openMenu ? '248px' : '284px'}}

@media(max-width: 1655px) {width: ${({ openMenu }) => openMenu ? '245.5px' : '282px'}}

@media(max-width: 1645px) {width: ${({ openMenu }) => openMenu ? '243px' : '280px'}}

@media(max-width: 1635px) {width: ${({ openMenu }) => openMenu ? '241px' : '278px'}}

@media(max-width: 1625px) {width: ${({ openMenu }) => openMenu ? '239px' : '276px'}}

@media(max-width: 1615px) {width: ${({ openMenu }) => openMenu ? '237px' : '274px'}}

@media(max-width: 1600px) {width: ${({ openMenu }) => openMenu ? '234px' : '271px'}}

@media(max-width: 1587px) {width: ${({ openMenu }) => openMenu ? '232px' : '268.5px'}}

@media(max-width: 1576px) {width: ${({ openMenu }) => openMenu ? '230px' : '266px'}}

@media(max-width: 1560px) {
width: ${({ openMenu }) => openMenu ? '227px' : '263px'};
border-radius: 10px}

@media(max-width: 1546px) {width: ${({ openMenu }) => openMenu ? '224px' : '260px'}}

@media(max-width: 1533px) {width: ${({ openMenu }) => openMenu ? '221.5px' : '258px'}}

@media(max-width: 1521px) {width: ${({ openMenu }) => openMenu ? '218.5px' : '255px'}}

@media(max-width: 1510px) {width: ${({ openMenu }) => openMenu ? '216.5px' : '253px'}}

@media(max-width: 1495px) {width: ${({ openMenu }) => openMenu ? '213.5px' : '250px'}}

@media(max-width: 1480px) {width: ${({ openMenu }) => openMenu ? '210.5px' : '247px'}}

@media(max-width: 1466px) {width: ${({ openMenu }) => openMenu ? '207.5px' : '244px'}}

@media(max-width: 1451px) {width: ${({ openMenu }) => openMenu ? '204.5px' : '241px'}}

@media(max-width: 1440px) {width: ${({ openMenu }) => openMenu ? '202.5px' : '239px'}}

@media(max-width: 1430px) {width: ${({ openMenu }) => openMenu ? '200.5px' : '237px'}}

@media(max-width: 1420px) {width: ${({ openMenu }) => openMenu ? '198.5px' : '235px'}}

@media(max-width: 1410px) {
width: ${({ openMenu }) => openMenu ? '196.5px' : '233px'};
height: ${({ openMenu }) => openMenu ? '405px' : '417px'}}

@media(max-width: 1400px) {width: ${({ openMenu }) => openMenu ? '195.5px' : '231px'}}

@media(max-width: 1390px) {
width: ${({ openMenu }) => openMenu ? '193.5px' : '229px'};
height: ${({ openMenu }) => openMenu ? '390px' : '402px'}}

@media(max-width: 1380px) {
width: ${({ openMenu }) => openMenu ? '191.5px' : '227px'};
height: ${({ openMenu }) => openMenu ? '370px' : '382px'}}

@media(max-width: 1370px) {width: ${({ openMenu }) => openMenu ? '190px' : '225px'}}

@media(max-width: 1360px) {
width: ${({ openMenu }) => openMenu ? '188px' : '223px'};
height: ${({ openMenu }) => openMenu ? '355px' : '372px'}}

@media(max-width: 1350px) {width: ${({ openMenu }) => openMenu ? '186px' : '221px'}}

@media(max-width: 1340px) {
width: ${({ openMenu }) => openMenu ? '184px' : '219px'};
height: ${({ openMenu }) => openMenu ? '345px' : '362px'}}

@media(max-width: 1330px) {width: ${({ openMenu }) => openMenu ? '182px' : '217px'}}

@media(max-width: 1320px) {width: ${({ openMenu }) => openMenu ? '180px' : '215px'}}

@media(max-width: 1312px) {
width: 215px;
height: 362px}

@media(max-width: 1305px) {width: 213px}

@media(max-width: 1292px) {width: 211px}

@media(max-width: 1282px) {width: 209px}

@media(max-width: 1272px) {width: 207px}

@media(max-width: 1262px) {width: 205px}

@media(max-width: 1252px) {width: 203px}

@media(max-width: 1242px) {width: 201px}

@media(max-width: 1232px) {width: 199px}

@media(max-width: 1222px) {width: 197px}

@media(max-width: 1212px) {width: 195px}

@media(max-width: 1202px) {width: 193px}

@media(max-width: 1192px) {width: 191px}

@media(max-width: 1182px) {width: 189px}

@media(max-width: 1172px) {width: 187px}

@media(max-width: 1162px) {
width: 185px;
height: 332px}

@media(max-width: 1152px) {width: 183px}

@media(max-width: 1142px) {width: 181px}

@media(max-width: 1132px) {width: 179px}

@media(max-width: 1122px) {width: 177px}

@media(max-width: 1112px) {width: 175px}

@media(max-width: 1102px) {
width: 222px;
height: 342px}

@media(max-width: 1092px) {width: 219px}

@media(max-width: 1082px) {width: 217px}

@media(max-width: 1072px) {width: 215px}

@media(max-width: 1062px) {width: 213px}

@media(max-width: 1052px) {width: 210px}

@media(max-width: 1042px) {width: 208px}

@media(max-width: 1032px) {width: 205px}

@media(max-width: 1022px) {width: 203px}

@media(max-width: 1012px) {width: 200px}

@media(max-width: 1002px) {width: 198px}

@media(max-width: 992px) {width: 195px}

@media(max-width: 982px) {width: 193px}

@media(max-width: 976px) {
width: 260px;
height: 365px;
margin-top: 11px;
margin-left: 13px}

@media(max-width: 966px) {width: 257px}

@media(max-width: 956px) {width: 254px}

@media(max-width: 946px) {width: 251px}

@media(max-width: 942px) {width: 249px}

@media(max-width: 932px) {width: 245px}

@media(max-width: 922px) {width: 242px}

@media(max-width: 912px) {width: 239px}

@media(max-width: 902px) {width: 236px}

@media(max-width: 892px) {width: 232px}

@media(max-width: 882px) {width: 229px}

@media(max-width: 872px) {
width: 232px;
height: 337px;
margin-left: 10px}

@media(max-width: 862px) {width: 228px}

@media(max-width: 852px) {width: 225px}

@media(max-width: 842px) {width: 222px}

@media(max-width: 832px) {width: 219px}

@media(max-width: 825px) {width: 217px}

@media(max-width: 822px) {width: 215px}

@media(max-width: 812px) {
width: 212px;
height: 327px}

@media(max-width: 802px) {width: 208px}

@media(max-width: 791px) {width: 231px}

@media(max-width: 782px) {width: 228px}

@media(max-width: 772px) {width: 225px}

@media(max-width: 762px) {width: 222px}

@media(max-width: 755px) {width: 219px}

@media(max-width: 745px) {width: 216px}

@media(max-width: 735px) {width: 213px}

@media(max-width: 725px) {width: 211px}

@media(max-width: 720px) {width: 207px}

@media(max-width: 710px) {width: 204px}

@media(max-width: 700px) {width: 201px}

@media(max-width: 690px) {width: 198px}

@media(max-width: 680px) {width: 195px}

@media(max-width: 675px) {width: 193px}

@media(max-width: 667px) {
width: 190px;
height: 310px}

@media(max-width: 660px) {width: 187px}

@media(max-width: 650px) {width: 184.4px}

@media(max-width: 642px) {width: 182px}

@media(max-width: 635px) {width: 180px}

@media(max-width: 627px) {width: 177px}

@media(max-width: 620px) {
width: 175px;
height: 295px}

@media(max-width: 610px) {width: 172px}

@media(max-width: 605px) {width: 170px}

@media(max-width: 596px) {width: 166px}

@media(max-width: 590px) {width: 164px}

@media(max-width: 586px) {
width: 258px;
height: 381px}

@media(max-width: 580px) {
width: 252.5px;
height: 381px}

@media(max-width: 570px) {
width: 250px;
height: 371px}

@media(max-width: 563px) {
width: 243px;
height: 364px}

@media(max-width: 553px) {
width: 237px;
height: 354px}

@media(max-width: 543px) {
width: 234px;
height: 344px}

@media(max-width: 533px) {
width: 229px;
height: 334px}

@media(max-width: 523px) {
width: 222.5px;
height: 324px}

@media(max-width: 513px) {
width: 218px;
height: 314px}

@media(max-width: 503px) {
width: 213px;
height: 304px}

@media(max-width: 493px) {
width: 209px;
height: 294px}

@media(max-width: 483px) {
width: 204px;
height: 284px}

@media(max-width: 473px) {
width: 198px;
height: 274px}

@media(max-width: 463px) {
width: 195px;
height: 264px}

@media(max-width: 453px) {
width: 190px;
height: 254px}

@media(max-width: 443px) {width: 184px}

@media(max-width: 433px) {width: 180px}

@media(max-width: 423px) {
width: 174px;
height: 244px}

@media(max-width: 413px) {width: 169px}

@media(max-width: 403px) {width: 164px}

@media(max-width: 393px) {width: 159px}

@media(max-width: 383px) {width: 155px}

@media(max-width: 373px) {width: 150px}

@media(max-width: 363px) {width: 145px}

@media(max-width: 353px) {width: 141px}

@media(max-width: 345px) {width: 136px}

@media(max-width: 335px) {width: 131px}

@media(max-width: 325px) {
width: 128px;
height: 210px}`;

export const TitleContainer = styled.div<OpenMenu>`
width: 90%;
margin-left: 9px;
margin-top: 5px;
background-color: green;

@media(max-width: 1920px) {
width: 88%;
margin-left: 20px;}

@media(max-width: 1760px) {margin-left: 15px;}

@media(max-width: 1559px) {
width: 86%;
margin-left: 20px;}

@media(max-width: 1500px) {
width: 88%;
margin-left: 15px;

@media(max-width: 1280px) {
width: 90%;
margin-left: 12px}

@media(max-width: 1152px) {margin-top: 3px}

@media(max-width: 595px) {margin-left: 9.5px}

@media(max-width: 586px) {width: 92%}

@media(max-width: 325px) {margin-top: 0px}`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%`;

export const Title = styled.span<OpenMenu>`
display: flex;
font-weight: 700;
width: fit-content;
font-size: 15px;
color: #0f0f0f;
background-color: blue;

@media(max-width: 2380px) {font-size: ${({ openMenu }) => openMenu ? '14px' : '15px'};}

@media(max-width: 2272px) {
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
overflow: hidden;
width: 100%}

@media(max-width: 1920px) {font-size: ${({ openMenu }) => openMenu ? '16px' : '17px'}}

@media(max-width: 1760px) {font-size: ${({ openMenu }) => openMenu ? '15px' : '16px'}}

@media(max-width: 1559px) {font-size: 14px}

@media(max-width: 976px) {font-size: 15.5px}

@media(max-width: 393px) {font-size: 14px}

@media(max-width: 325px) {font-size: 11px}`;

export const TextCard = styled.div<OpenMenu>`
font-size: ${({ openMenu }) => openMenu ? '13px' : '16px'};
width: fit-content;
margin-top: 10px;
color: #8c8c8c;
cursor: pointer;

@media(max-width: 1920px) {font-size: ${({ openMenu }) => openMenu ? '15px' : '16px'}}

@media(max-width: 1760px) {font-size: ${({ openMenu }) => openMenu ? '14px' : '15px'}}

@media(max-width: 1559px) {font-size: ${({ openMenu }) => openMenu ? '13px' : '14px'}}

@media(max-width: 1312px) {font-size: 14px}

@media(max-width: 976px) {font-size: 14.4px}

@media(max-width: 393px) {font-size: 13px}

@media(max-width: 325px) {
margin-top: 6px;
font-size: 11px}`;