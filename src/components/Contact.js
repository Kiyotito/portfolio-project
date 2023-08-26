import React from "react";
import styled from "styled-components";

const Contact = () => {
    const lengthOfWindow = window.innerWidth;
    const numberOfCircle = Math.floor(lengthOfWindow/25);
    return (
    <ContactBanner>
    <Header>📞 Ring-A-Ding</Header>
    <Circle>514-578-2921</Circle>
    <Header>💌 Or SWOOSH... </Header>
    <Header>Is that the sound an Email Makes?</Header>
    <Rectangle>KOICHISATOCARRILLO@GMAIL.COM</Rectangle>
    </ContactBanner>    
    )
}

export default Contact;

const Circle = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
background-color: blanchedalmond;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
border: pink 5px dotted ;
font-size: 20px;
`
const Rectangle = styled.div`
background-color: blanchedalmond;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
padding: 50px;
border: pink 5px solid ;
font-size: 20px;
`

const ContactBanner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

const Spotlight = styled.img`
width: 200px;
`
const Header = styled.h1`
margin-top: 10px;
`