import React from "react";
import styled from "styled-components";

const Contact = () => {

    return (
    <ContactBanner>
    <Spotlight src="/assets/Spotlight.png"/>
    <h1>I am everywhere</h1>
    </ContactBanner>    
    )
}

export default Contact;

const ContactBanner = styled.div`
display: flex;
`

const Spotlight = styled.img`
width: 200px;
`