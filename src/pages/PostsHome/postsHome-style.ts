import styled from "styled-components";

export const PostsContainer = styled.div<{ openPosts: boolean }>`
display: grid;
height: ${({ openPosts }) => openPosts ? '590px' : '285px'};
width: 100%;
column-gap: 5px;
grid-template-columns: repeat(6, 1fr);

@media(max-width: 1920px) {
grid-template-columns: repeat(4, 1fr);
} 

@media(max-width: 1559px) {
height: ${({ openPosts }) => openPosts ? '630px' : '320px'};
grid-template-columns: repeat(3, 1fr);
} 
`;

export const PostsContainerSpan = styled.span`
display: flex;
align-items: center;
width: fit-content;
font-weight: 700;
font-size: 20px;
margin: 70px 0 0 17px;
`;

export const PostsPictureContainer = styled.img`
width: 25px;
height: 25px;
border-radius: 50%;

@media(max-width: 1559px) {
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
`;

export const CommentsNumberIcon = styled.span`
font-size: 12px;
color: #181818;
padding: 5px 0 0 5px;
font-weight: bold;

@media(max-width: 1559px) {
font-size: 14px;
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
`;

export const ShowMoreContainer = styled.div<{ openPosts: boolean }> `
background-color: white;
width: 15%;
height: 35px;
border-radius: 20px;
border-color: #909090;
border: 1px solid;
cursor: pointer;
color: #707070;
font-weight: 500;
margin-left: 42%;

&:hover {
 background-color: #DCDCDC;
}

span {
display: flex;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
border-radius: 20px;
font-size: 15px;
color: #000;
}

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
padding-left: 10px;
`;