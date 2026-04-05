import styled from "styled-components";

interface Modal {
    isDeleteModalOpen: boolean
}

export const DeleteVideoButton = styled.div`
display: none;
position: fixed;
justify-content: center;
align-items: center;
width: 35px;
height: 35px;
border-radius: 50px;
margin-top: 13px;
margin-left: 285px;
background-color: #ececec;

@media(max-width: 1230px) {margin-left: 270px}

@media(max-width: 1200px) {margin-left: 260px}

@media(max-width: 1143px) {margin-left: 250px}

@media(max-width: 1114px) {margin-left: 237px}

@media(max-width: 1018px) {margin-left: 230px}

@media(max-width: 980px) {margin-left: 215px}

@media(max-width: 963px) {
width: 45px;
height: 45px;
margin-top: 5px;
margin-left: 80%;
background-color: #fff}

@media(max-width: 875px) {
width: 40px;
height: 40px;
margin-left: 78%;
background-color: #fff}

@media(max-width: 791px) {margin-left: 87%}

@media(max-width: 765px) {margin-left: 84%}

@media(max-width: 719px) {margin-left: 620px}

@media(max-width: 710px) {margin-left: 605px}

@media(max-width: 680px) {margin-left: 590px}

@media(max-width: 660px) {margin-left: 575px}

@media(max-width: 650px) {margin-left: 560px}

@media(max-width: 635px) {margin-left: 545px}

@media(max-width: 622px) {margin-left: 530px}

@media(max-width: 608px) {margin-left: 515px}

@media(max-width: 590px) {margin-left: 500px}

@media(max-width: 575px) {margin-left: 485px}

@media(max-width: 555px) {
width: 35px;
height: 35px;
margin-left: 475px}

@media(max-width: 536px) {
margin-top: 145px;
margin-left: 460px}

@media(max-width: 523px) {
margin-top: 140px;
margin-left: 445px}

@media(max-width: 513px) {margin-left: 430px}

@media(max-width: 503px) {
margin-top: 130px;
margin-left: 415px}

@media(max-width: 472px) {margin-left: 400px}

@media(max-width: 458px) {margin-left: 385px}

@media(max-width: 438px) {
margin-top: 120px;
margin-left: 370px}

@media(max-width: 423px) {margin-left: 355px}

@media(max-width: 410px) {
margin-top: 115px;
margin-left: 340px}

@media(max-width: 390px) {
width: 30px;
height: 30px;
margin-top: 105px;
margin-left: 330px}

@media(max-width: 379px) {margin-left: 320px}

@media(max-width: 369px) {
margin-top: 100px;
margin-left: 310px}

@media(max-width: 359px) {margin-left: 300px}

@media(max-width: 349px) {
margin-top: 95px;
margin-left: 290px}

@media(max-width: 339px) {margin-left: 280px}

@media(max-width: 329px) {
margin-top: 90px;
margin-left: 270px}

`;

export const DeleteVideoButtonIcon = styled.img`
display: flex;
width: 20px;
height: 20px;

@media(max-width: 963px) {
width: 25px;
height: 25px}

@media(max-width: 875px) {
width: 23px;
height: 23px}

@media(max-width: 555px) {
width: 20px;
height: 20px}

@media(max-width: 390px) {
width: 15px;
height: 15px}

`;

export const Modal = styled.div<Modal>`
display: ${({ isDeleteModalOpen }) => isDeleteModalOpen ? 'flex' : 'none'};
align-items: center;
justify-content: center;
position: fixed;
width: 100vw;
height: 100vh;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 5;
background-color: rgba(0,0,0,0.5);`;

export const DeleteVideoModal = styled.div<Modal>`
display: ${({ isDeleteModalOpen }) => isDeleteModalOpen ? 'flex' : 'none'};
width: 600px;
height: 300px;
border-radius: 12px;
background-color: #fff;

span {
position: fixed;
height: fit-content;
margin-top: 70px;
margin-left: 110px;
font-size: 25px;
cursor: default}`;

export const DeleteButton = styled.div`
display: flex;
width: 135px;
height: 50px;
margin-top: 200px;
margin-left: 110px;
border-radius: 20px;
cursor: pointer;
transition: 0.6s;
background-color: #E5E4E2;

&:hover {background-color: #87CEFA;}

span {
display: flex;
margin-top: 15px;
margin-left: 31px; 
font-size: 15px;
font-weight: 600;
cursor: pointer;}`;

export const BackButton = styled.div`
display: flex;
width: 135px;
height: 50px;
margin-top: 200px;
margin-left: 70px;
border-radius: 20px;
cursor: pointer;
transition: 0.6s;
background-color: #E5E4E2;

&:hover {background-color: #E62020}

span {
display: flex;
margin-top: 15px;
margin-left: 31px; 
font-size: 15px;
font-weight: 600;
cursor: pointer;
}
`;

export const Container = styled.div`
width: 340px;
height: 340px;
border-radius: 12px;
margin-left: 20px;
cursor: pointer;
background-color: #fff;

&:hover {background-color: #ececec}

&:hover ${DeleteVideoButton} {display: flex}

@media(max-width: 1230px) {
width: 330px;
height: 330px}

@media(max-width: 1207px) {
width: 320px;
height: 320px}

@media(max-width: 1177px) {
width: 310px;
height: 310px}

@media(max-width: 1143px) {
width: 300px;
height: 300px}

@media(max-width: 1114px) {
width: 290px;
height: 290px}

@media(max-width: 1086px) {
width: 285px;
height: 285px}

@media(max-width: 1070px) {
width: 300px;
height: 300px}

@media(max-width: 1057px) {
width: 295px;
height: 295px}

@media(max-width: 1039px) {
width: 290px;
height: 290px}

@media(max-width: 1025px) {
width: 285px;
height: 285px}

@media(max-width: 1009px) {
width: 280px;
height: 280px;
margin-left: 15px}

@media(max-width: 980px) {
width: 275px;
height: 275px}

@media(max-width: 963px) {
width: 830px;
height: 280px;
margin-left: 10px}

@media(max-width: 935px) {
width: 810px;
height: 260px}

@media(max-width: 915px) {
width: 788px;
height: 250px}

@media(max-width: 895px) {
width: 768px;
height: 240px}

@media(max-width: 875px) {
width: 740px;
height: 230px}

@media(max-width: 845px) {
width: 710px;
height: 220px}

@media(max-width: 815px) {
width: 680px;
height: 210px}

@media(max-width: 791px) {
width: 740px;
height: 230px;
margin-left: -50px}

@media(max-width: 785px) {width: 730px}

@media(max-width: 775px) {width: 720px}

@media(max-width: 765px) {
width: 700px;
height: 220px}

@media(max-width: 745px) {width: 687px}

@media(max-width: 732px) {width: 677px}

@media(max-width: 720px) {
width: 667px;
height: 215px}

@media(max-width: 710px) {width: 657px}

@media(max-width: 700px) {margin-left: -75px}

@media(max-width: 680px) {
width: 640px;
height: 205px}

@media(max-width: 660px) {width: 630px}

@media(max-width: 650px) {
width: 613px;
height: 200px}

@media(max-width: 635px) {width: 598px}

@media(max-width: 622px) {
width: 585px;
height: 190px}

@media(max-width: 608px) {width: 570px}

@media(max-width: 590px) {width: 553px}

@media(max-width: 575px) {
width: 533px;
height: 185px}

@media(max-width: 555px) {width: 517px}

@media(max-width: 536px) {width: 503px}

@media(max-width: 523px) {
width: 492px;
height: 180px}

@media(max-width: 513px) {width: 482px}

@media(max-width: 503px) {
width: 472px;
height: 173px}

@media(max-width: 493px) {width: 462px}

@media(max-width: 482px) {margin-left: -85px}

@media(max-width: 472px) {
width: 448px;
height: 168px}

@media(max-width: 458px) {width: 428px}

@media(max-width: 438px) {
width: 413px;
height: 163px}

@media(max-width: 423px) {
width: 400px;
height: 158px}

@media(max-width: 410px) {
width: 390px;
height: 153px}

@media(max-width: 400px) {width: 380px}

@media(max-width: 390px) {
width: 370px;
height: 138px}

@media(max-width: 379px) {width: 360px}

@media(max-width: 369px) {
width: 350px;
height: 133px}

@media(max-width: 359px) {width: 340px}

@media(max-width: 349px) {
width: 330px;
height: 128px}

@media(max-width: 339px) {width: 320px}

@media(max-width: 329px) {width: 307px}

`;

export const Banner = styled.img`
width: 95%;
height: 225px;
margin-top: 7px;
margin-left: 8.2px;
border-radius: 12px;

@media(max-width: 1230px) {height: 220px}

@media(max-width: 1207px) {height: 215px}

@media(max-width: 1177px) {height: 205px}

@media(max-width: 1143px) {height: 195px}

@media(max-width: 1114px) {
width: 94.5%;
height: 185px}

@media(max-width: 1086px) {height: 180px}

@media(max-width: 1070px) {height: 195px}

@media(max-width: 1057px) {height: 190px}

@media(max-width: 1039px) {height: 185px}

@media(max-width: 1025px) {
width: 94.3%;
height: 180px}

@media(max-width: 1009px) {height: 175px}

@media(max-width: 980px) {height: 170px}

@media(max-width: 963px) {
width: 380px;
height: 265px}

@media(max-width: 935px) {
width: 360px;
height: 245px}

@media(max-width: 915px) {
width: 350px;
height: 235px}

@media(max-width: 895px) {
width: 340px;
height: 225px}

@media(max-width: 875px) {
width: 320px;
height: 215px}

@media(max-width: 845px) {
width: 300px;
height: 205px}

@media(max-width: 815px) {
width: 280px;
height: 195px}

@media(max-width: 791px) {
width: 300px;
height: 215px}

@media(max-width: 765px) {
width: 290px;
height: 205px}

@media(max-width: 720px) {
width: 285px;
height: 200px}

@media(max-width: 680px) {
width: 275px;
height: 190px}

@media(max-width: 650px) {
width: 270px;
height: 185px}

@media(max-width: 635px) {width: 265px}

@media(max-width: 622px) {
width: 260px;
height: 175px}

@media(max-width: 608px) {width: 255px}

@media(max-width: 590px) {width: 250px}

@media(max-width: 575px) {
width: 245px;
height: 170px}

@media(max-width: 555px) {width: 240px}

@media(max-width: 536px) {width: 235px}

@media(max-width: 523px) {
width: 230px;
height: 165px}

@media(max-width: 513px) {width: 225px}

@media(max-width: 503px) {
width: 220px;
height: 160px}

@media(max-width: 493px) {width: 215px}

@media(max-width: 472px) {
width: 210px;
height: 155px}

@media(max-width: 458px) {
width: 205px;
margin-left: 6px}

@media(max-width: 438px) {
width: 200px;
height: 150px;
margin-left: 6px}

@media(max-width: 423px) {
width: 190px;
height: 145px}

@media(max-width: 410px) {height: 140px}

@media(max-width: 400px) {width: 185px}

@media(max-width: 390px) {
width: 175px;
height: 125px}

@media(max-width: 379px) {width: 170px}

@media(max-width: 369px) {
width: 170px;
height: 120px}

@media(max-width: 359px) {width: 165px}

@media(max-width: 349px) {
width: 160px;
height: 115px}

@media(max-width: 339px) {width: 155px}

@media(max-width: 329px) {width: 150px}

`;

export const TitleContainer = styled.div`
display: flex;
width: 100%;
margin-top: 7px;

@media(max-width: 963px) {display: none}`;

export const ChannelImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 5px;
margin-right: 10px;
border-radius: 50%;
min-width: 35px;
max-width: 35px;
min-height: 35px;
max-height: 35px;
background-color: beige;

@media(max-width: 963px) {
min-width: 45px;
max-width: 45px;
min-height: 45px;
max-height: 45px;
margin-top: 10px;
font-size: 25px}

@media(max-width: 875px) {
min-width: 40px;
max-width: 40px;
min-height: 40px;
max-height: 40px;
font-size: 22px}

@media(max-width: 575px) {
min-width: 35px;
max-width: 35px;
min-height: 35px;
max-height: 35px;
font-size: 20px}

@media(max-width: 438px) {
min-width: 30px;
max-width: 30px;
min-height: 30px;
max-height: 30px;
font-size: 18px}

@media(max-width: 390px) {
min-width: 33px;
max-width: 33px;
min-height: 33px;
max-height: 33px;
margin-top: 5px;
margin-left: 0px;
font-size: 20px}`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column`;

export const Title = styled.span`
display: -webkit-box;
font-weight: 600;
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 2; 
-webkit-box-orient: vertical;
border-radius: 8px;
color: #0f0f0f;
background-color: none;

@media(max-width: 963px) {
margin-left: 10px;
font-size: 25px}

@media(max-width: 875px) {font-size: 21px}

@media(max-width: 710px) {font-size: 19px}

@media(max-width: 575px) {font-size: 18.3px}

@media(max-width: 493px) {
-webkit-line-clamp: 1; 
font-size: 17px}

@media(max-width: 438px) {font-size: 15px}

@media(max-width: 390px) {
font-size: 15.5px;
margin-left: 1px}

@media(max-width: 359px) {font-size: 14.5px}

@media(max-width: 349px) {font-size: 13.5px}

`;

export const TextCard = styled.span`
display: -webkit-box;
-webkit-line-clamp: 2; 
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
font-size: 15px;
color: #8c8c8c;`;

export const ResponsiveTitleContainer = styled.div`
display: none;

@media(max-width: 963px) {
display: flex;
width: 425px;
height: 266px;
margin-top: -269px;
margin-left: 400px;
border-radius: 12px;}

@media(max-width: 935px) {
width: 422px;
height: 252px;
margin-top: -252px;
margin-left: 385px}

@media(max-width: 915px) {
width: 412px;
height: 235px;
margin-top: -238px;
margin-left: 370px}

@media(max-width: 895px) {
width: 402px;
height: 225px;
margin-top: -228px;
margin-left: 360px}

@media(max-width: 875px) {
width: 392px;
height: 215px;
margin-top: -218px;
margin-left: 340px}

@media(max-width: 845px) {
width: 382px;
height: 205px;
margin-top: -208px;
margin-left: 320px}

@media(max-width: 815px) {
width: 372px;
height: 195px;
margin-top: -198px;
margin-left: 300px}

@media(max-width: 791px) {
width: 416px;
height: 215px;
margin-top: -218px;
margin-left: 315px}

@media(max-width: 785px) {width: 406px}

@media(max-width: 775px) {width: 396px}

@media(max-width: 765px) {
height: 205px;
width: 386px;
margin-top: -208px;
margin-left: 305px}

@media(max-width: 745px) {width: 376px}

@media(max-width: 732px) {width: 366px}

@media(max-width: 720px) {
width: 361px;
height: 200px;
margin-top: -203px;
margin-left: 300px}

@media(max-width: 710px) {width: 351px}

@media(max-width: 680px) {
width: 341px;
height: 190px;
margin-top: -193px;
margin-left: 290px}

@media(max-width: 660px) {width: 331px}

@media(max-width: 650px) {
width: 321px;
height: 185px;
margin-top: -189px;
margin-left: 285px}

@media(max-width: 635px) {
width: 311px;
margin-left: 280px}

@media(max-width: 622px) {
width: 301px;
height: 175px;
margin-top: -179px;
margin-left: 277px}

@media(max-width: 608px) {
width: 291px;
margin-left: 272px}

@media(max-width: 590px) {
width: 281px;
margin-left: 265px}

@media(max-width: 575px) {
width: 265px;
height: 170px;
margin-top: -174px;
margin-left: 260px}

@media(max-width: 555px) {
width: 255px;
margin-left: 255px}

@media(max-width: 536px) {
width: 245px;
margin-left: 250px}

@media(max-width: 523px) {
width: 240px;
height: 165px;
margin-top: -169px;
margin-left: 245px}

@media(max-width: 513px) {
width: 235px;
margin-left: 240px}

@media(max-width: 503px) {
width: 230px;
height: 160px;
margin-top: -164px;
margin-left: 235px}

@media(max-width: 493px) {
width: 225px;
margin-left: 230px}

@media(max-width: 472px) {
width: 215px;
height: 154px;
margin-top: -159px;
margin-left: 225px}

@media(max-width: 458px) {
width: 205px;
margin-left: 217px}

@media(max-width: 438px) {
width: 195px;
height: 149px;
margin-top: -154px;
margin-left: 212px}

@media(max-width: 423px) {
width: 190px;
height: 144px;
margin-top: -149px;
margin-left: 203px}

@media(max-width: 410px) {
width: 180px;
height: 139px;
margin-top: -144px;
margin-left: 203px}

@media(max-width: 400px) {
height: 139px;
margin-top: -144px;
margin-left: 195px}

@media(max-width: 390px) {
width: 177px;
height: 124px;
margin-top: -129px;
margin-left: 188px}

@media(max-width: 379px) {
width: 172px;
margin-left: 183px}

@media(max-width: 369px) {
width: 164px;
height: 119px;
margin-top: -125px;
margin-left: 180px}

@media(max-width: 359px) {
width: 159px;
margin-left: 175px}

@media(max-width: 349px) {
width: 154px;
height: 114px;
margin-top: -119px;
margin-left: 170px}

@media(max-width: 339px) {
width: 149px;
margin-left: 166px}

@media(max-width: 329px) {
width: 139px;
margin-left: 161px}


`;

export const ResponsiveChannelName = styled.span`
display: none;

@media(max-width: 963px) {
display: flex;
margin-top: -39px;
margin-left: 70px;
font-weight: 600;
font-size: 21px;
color: #0f0f0f;}

@media(max-width: 875px) {
margin-left: 60px;
font-size: 19px}

@media(max-width: 710px) {font-size: 17.5px}

@media(max-width: 575px) {
margin-left: 50px;
font-size: 17px}

@media(max-width: 493px) {font-size: 15.5px}

@media(max-width: 438px) {
margin-top: -32px;
margin-left: 44px;
font-size: 14px}

@media(max-width: 390px) {display: none}


`;

export const ResponsiveDescription = styled.div`
display: none;

@media(max-width: 963px) {
display: flex;
width: 412px;
height: fit-content;
margin-top: 20px;
margin-left: 10px;
background-color: none;

@media(max-width: 915px) {width: 400px}

@media(max-width: 895px) {width: 390px}

@media(max-width: 875px) {width: 380px}

@media(max-width: 845px) {width: 370px}

@media(max-width: 815px) {width: 360px}

@media(max-width: 791px) {width: 403px}

@media(max-width: 785px) {width: 393px}

@media(max-width: 775px) {width: 383px}

@media(max-width: 765px) {width: 373px}

@media(max-width: 745px) {width: 363px}

@media(max-width: 732px) {width: 353px}

@media(max-width: 720px) {width: 348px}

@media(max-width: 710px) {width: 338px}

@media(max-width: 680px) {width: 328px}

@media(max-width: 660px) {width: 318px}

@media(max-width: 650px) {width: 308px}

@media(max-width: 635px) {width: 298px}

@media(max-width: 622px) {width: 288px}

@media(max-width: 608px) {width: 278px}

@media(max-width: 590px) {width: 268px}

@media(max-width: 575px) {width: 250px}

@media(max-width: 555px) {width: 243px}

@media(max-width: 536px) {width: 233px}

@media(max-width: 523px) {width: 227px}

@media(max-width: 513px) {width: 222px}

@media(max-width: 503px) {width: 216px}

@media(max-width: 493px) {width: 211px}

@media(max-width: 472px) {width: 204px}

@media(max-width: 458px) {width: 194px}

@media(max-width: 438px) {
width: 189px;
margin-left: 5px}

@media(max-width: 423px) {width: 184px}

@media(max-width: 410px) {width: 173px}

@media(max-width: 400px) {width: 169px}

@media(max-width: 390px) {
width: 176px;
margin-top: 15px;
margin-left: 0}

@media(max-width: 379px) {width: 171px}

@media(max-width: 369px) {width: 163px}

@media(max-width: 359px) {width: 158px}

@media(max-width: 349px) {width: 153px}

@media(max-width: 339px) {width: 147px}

@media(max-width: 329px) {width: 138px}

span {
display: -webkit-box;
-webkit-line-clamp: 2; 
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
font-size: 17px;
color: #8c8c8c;

@media(max-width: 875px) {font-size: 14px}

@media(max-width: 493px) {font-size: 12.5px}

@media(max-width: 438px) {font-size: 11px}}

}`;

export const ResponsivePublishedData = styled.div`
display: none;

@media(max-width: 963px) {
display: flex;
width: fit-content;
margin-top: 7px;
margin-left: 70px}

@media(max-width: 875px) {
margin-top: 0px;
margin-left: 60px}

@media(max-width: 575px) {margin-left: 50px}

@media(max-width: 438px) {margin-left: 45px}

@media(max-width: 390px) {margin-top: -25px}

span {
font-size: 15px;
font-weight: 600;
color: #0f0f0f;

@media(max-width: 875px) {font-size: 13px}

@media(max-width: 575px) {font-size: 12.5px}

@media(max-width: 493px) {font-size: 12px}

@media(max-width: 438px) {font-size: 11px}

@media(max-width: 390px) {font-size: 14px}}

`;