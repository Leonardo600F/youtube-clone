import styled from "styled-components";

interface OpenPosts { openPosts: boolean;}

export const PostsContainer = styled.div<OpenPosts>`
display: grid;
height: ${({ openPosts }) => openPosts ? '300px' : '290px'};
width: 100%;
column-gap: 5px;
background-color: blue;
grid-template-columns: repeat(6, 1fr);

@media(max-width: 1920px) {
grid-template-columns: repeat(4, 1fr);
}

@media(max-width: 1559px) {
height: ${({ openPosts }) => openPosts ? '295px' : '310px'};
grid-template-columns: repeat(3, 1fr);
}

@media(max-width: 1440px) {
height: ${({ openPosts }) => openPosts ? '275px' : '285px'};
}

@media(max-width: 1280px) {
height: ${({ openPosts }) => openPosts ? '263px' : '270px'};
}

@media(max-width: 1102px) {
height: ${({ openPosts }) => openPosts ? '249px' : '258px'};
}

@media(max-width: 976px) {
height: ${({ openPosts }) => openPosts ? '326px' : '335px'};
}

@media(max-width: 950px) {
height: ${({ openPosts }) => openPosts ? '314px' : '323px'};
}

@media(max-width: 940px) {
height: ${({ openPosts }) => openPosts ? '308px' : '317px'};
}

@media(max-width: 930px) {
height: ${({ openPosts }) => openPosts ? '300px' : '310px'};
}

@media(max-width: 910px) {
height: ${({ openPosts }) => openPosts ? '290px' : '300px'};
}

@media(max-width: 900px) {
height: ${({ openPosts }) => openPosts ? '280px' : '290px'};
}

@media(max-width: 780px) {
height: ${({ openPosts }) => openPosts ? '270px' : '280px'};
}

@media(max-width: 670px) {
height: ${({ openPosts }) => openPosts ? '260px' : '270px'};
}

@media(max-width: 586px) {
height: ${({ openPosts }) => openPosts ? '630px' : '270px'};
}

@media(max-width: 393px) {
height: ${({ openPosts }) => openPosts ? '610px' : '250px'};
}
`;

export const PostsContainerSpan = styled.span`
display: flex;
align-items: center;
width: fit-content;
font-weight: 700;
font-size: 20px;
margin: 70px 0 0 17px;
cursor: default;

@media(max-width: 400px) {
font-size: 17.5px;
}

@media(max-width: 343px) {
font-size: 16px;
margin-left: 7px;
}
`;

export const PostsPictureContainer = styled.img`
width: 25px;
height: 25px;
border-radius: 50%;

@media(max-width: 1559px) {
width: 30px;
height: 30px;
}

@media(max-width: 1440px) {
width: 25px;
height: 25px;
}

@media(max-width: 976px) {
width: 33px;
height: 33px;
}

@media(max-width: 800px) {
width: 29px;
height: 29px;
}

@media(max-width: 586px) {
width: 35px;
height: 35px;
}

@media(max-width: 393px) {
width: 30px;
height: 30px;
}
`;

export const LikeButtonIcon = styled.img`
display: flex;
width: 22px;
height: 22px;
border-radius: 50%;
padding: 3px 0 0 4px;

@media(max-width: 1559px) {
width: 25px;
height: 25px;
}

@media(max-width: 1440px) {
width: 20px;
height: 20px;
}

@media(max-width: 1010px) {
width: 15px;
height: 15px;
}

@media(max-width: 976px) {
width: 25px;
height: 25px;
}

@media(max-width: 900px) {
width: 19px;
height: 19px;
}

@media(max-width: 586px) {
width: 25px;
height: 25px;
}

@media(max-width: 393px) {
width: 22px;
height: 22px;
}
`;

export const LikeViewerNumber = styled.span`
display: flex;
width: fit-content;
height: fit-content;
font-size: 14px;
color: #787878;

@media(max-width: 1559px) {
font-size: 16px;
}

@media(max-width: 1440px) {
font-size: 14px;
}

@media(max-width: 1010px) {
font-size: 12px;
}

@media(max-width: 976px) {
font-size: 16.4px;
}

@media(max-width: 900px) {
font-size: 15px;
}

@media(max-width: 586px) {
font-size: 19px;
}

@media(max-width: 393px) {
font-size: 14.5px;
}
`;

export const DeslikeButtonIcon = styled.img`
display: flex;
width: 22px;
height: 22px;
border-radius: 50%;
padding: 5px 0 0 5px;

@media(max-width: 1559px) {
width: 25px;
height: 25px;
}

@media(max-width: 1440px) {
width: 20px;
height: 20px;
}

@media(max-width: 1010px) {
width: 15px;
height: 15px;
}

@media(max-width: 976px) {
width: 25px;
height: 25px;
}

@media(max-width: 900px) {
width: 19px;
height: 19px;
}

@media(max-width: 586px) {
width: 25px;
height: 25px;
}

@media(max-width: 393px) {
width: 22px;
height: 22px;
}
`;

export const ShareButtonIcon = styled.img`
display: flex;
width: 25px;
height: 25px;
border-radius: 50%;
margin: 7px 0 0 6px;

@media(max-width: 1559px) {
width: 30px;
height: 30px;
margin: 5px 0 0 6px;
}

@media(max-width: 1440px) {
width: 25px;
height: 25px;
margin-left: 4px;
}

@media(max-width: 1060px) {
width: 20px;
height: 20px;
}

@media(max-width: 1010px) {
width: 18px;
height: 18px;
}

@media(max-width: 976px) {
width: 25px;
height: 25px;
}

@media(max-width: 900px) {
width: 19px;
height: 19px;
}

@media(max-width: 586px) {
width: 25px;
height: 25px;
}

@media(max-width: 393px) {
width: 22px;
height: 22px;
}
`;

export const CommentsButtonIcon = styled.img`
display: flex;
width: 13px;
height: 13px;
border-radius: 50%;
display: flex;
margin: 8px 0 0 7px;

@media(max-width: 1559px) {
width: 23px;
height: 23px;
margin: 5px 0 0 10px;
}

@media(max-width: 1440px) {
width: 18px;
height: 18px;
margin: 8px 0 0 10px;
}

@media(max-width: 1060px) {
width: 16px;
height: 16px;
}

@media(max-width: 1010px) {
width: 14.5px;
height: 14.5px;
margin-top: 6px;
}

@media(max-width: 976px) {
width: 22px;
height: 22px;
}

@media(max-width: 900px) {
width: 17px;
height: 17px;
}

@media(max-width: 586px) {
width: 23px;
height: 23px;
}

@media(max-width: 393px) {
width: 19px;
height: 19px;
}
`;

export const CommentsNumberIcon = styled.span`
height: fit-content;
font-size: 12px;
color: #181818;
margin: 5px 0 0 5px;
font-weight: bold;

@media(max-width: 1559px) {
font-size: 14px;
}

@media(max-width: 1440px) {
font-size: 13px;
margin: 8px 0 0 8px;
}

@media(max-width: 1060px) {
font-size: 12.5px;
margin: 8px 0 0 6px;
}

@media(max-width: 1010px) {
font-size: 11.4px;
margin-top: 5px;
}

@media(max-width: 976px) {
font-size: 14px;
margin-top: 5px;
}

@media(max-width: 900px) {
font-size: 12px;
}

@media(max-width: 586px) {
font-size: 15px;
}

@media(max-width: 393px) {
font-size: 13px;
}
`;

export const OptionsButtonIcon = styled.img`
display: flex;
width: 22px;
height: 22px;
border-radius: 50%;

@media(max-width: 1559px) {
width: 90%;
height: 90%;
margin-left: 2px;
}

@media(max-width: 1440px) {
width: 25px;
height: 25px;
}

@media(max-width: 1060px) {
width: 20px;
height: 20px;
}

@media(max-width: 976px) {
width: 25px;
height: 25px;
}

@media(max-width: 586px) {
margin-top: 2px;
}

@media(max-width: 393px) {
width: 22px;
height: 22px;
margin-top: 4px;
}
`;

export const ShowMoreContainer = styled.div<OpenPosts> `
width: 15%;
height: 35px;
margin-left: 42%;
font-weight: 500;
border: 1px solid;
border-radius: 20px;
border-color: #909090;
color: #707070;
background-color: #fff;
cursor: pointer;

@media(max-width: 976px) {
width: 40%;
margin-left: 32%;
}

&:hover {background-color: #DCDCDC;}

span {
display: flex;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
border-radius: 20px;
font-size: 15px;
color: #000;

@media(max-width: 1280px) {font-size: 14px;}

@media(max-width: 1115px) {font-size: 13px;}

@media(max-width: 990px) {font-size: 12px;}

@media(max-width: 980px) {font-size: 11.4px;}

@media(max-width: 976px) {font-size: 15px;}

@media(max-width: 410px) {font-size: 14px;}

@media(max-width: 400px) {font-size: 13px;}

@media(max-width: 340px) {font-size: 11px;}
}
`;

export const PostsLine = styled.div`
display: flex;
height: 1px;
width: 98%;
align-items: center;
background-color: #989898;
`;

export const ShowMoreIcon = styled.img`
width: 20px;
height: 20px;
margin-left: 10px;

@media(max-width: 990px) {
width: 15px;
height: 15px;
}

@media(max-width: 980px) {
width: 13px;
height: 13px;
}

@media(max-width: 976px) {
width: 21px;
height: 21px;
}
`;