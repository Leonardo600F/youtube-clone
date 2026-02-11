import styled from "styled-components";

interface OpenMenu { openMenu: boolean }

export const Container = styled.div<OpenMenu>`
display: flex;
width: 1350px;
column-gap: 15px;
cursor: pointer;
margin: -45px 0 45px 30%;
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

@media(max-width: 600px) {
flex-direction: column;
width: 98%}`;

export const Banner = styled.div<OpenMenu>`
min-width: 450px;
max-width: 450px;
height: 295px;
border-radius: 12px;
background-size: cover;
background-position: 50% 50%;

@media(max-width: 1800px) {
min-width: 470px;
max-width: 470px;
height: 320px}

@media(max-width: 600px) {
min-width: 480px;
max-width: 480px;
height: 260px}

@media(max-width: 414px) {
min-width: 100%;
max-width: 100%;
height: 190px}`;

export const TitleContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;

@media(max-width: 600px) {margin-top: 5px}`;

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
background-color: beige`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column`;

export const ChannelContainer = styled.div`
display: flex;
align-items: center;
margin-top: 10px`;

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

@media(max-width: 1630px) {font-size: ${({ openMenu }) => openMenu ? '15px' : '16px'}}`;

export const TextCard = styled.span`
font-size: 15px;
color: #8c8c8c

@media(max-width: 2000px) {font-size: 13px}`;

export const DescriptionContainer = styled.div`
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
width: fit-content;
overflow: hidden;
text-overflow: ellipsis;
text-align: justify;
margin-top: 20px;

@media(max-width: 600px) {margin-top: 0px}`;