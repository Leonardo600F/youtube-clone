import styled from "styled-components";

export const Container = styled.div`
width: 340px;
height: 340px;
border-radius: 12px;
margin-left: 20px;
cursor: pointer;

&:hover {background-color: #ececec}

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
width: 280px;
height: 280px;
margin-left: 10px}


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

@media(max-width: 963px) {height: 180px}

`;

export const TitleContainer = styled.div`
display: flex;
width: 100%;
margin-top: 7px`;

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
background-color: beige`;

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
color: #0f0f0f`;

export const TextCard = styled.span`
display: -webkit-box;
-webkit-line-clamp: 2; 
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
font-size: 15px;
color: #8c8c8c`;