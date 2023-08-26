import React from "react";
import styled from "styled-components";

const Contact = () => {
    const lengthOfWindow = window.innerWidth;
    const numberOfCircle = Math.floor(lengthOfWindow/25);
    return (
    <ContactBanner>
    {}
    <Circle> </Circle>
    <h1>📞 Ring-A-Ling</h1>
    <h1>💌 Or Swoosh... Is that the Sound an Email Makes?</h1>
<h2>{numberOfCircle}</h2>
    </ContactBanner>    
    )
}

export default Contact;

const Circle = styled.div`
height: 25px;
width: 25px;
border-radius: 50%;
background-color: blanchedalmond;
margin-top: 20px;
`

const ContactBanner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Spotlight = styled.img`
width: 200px;
`