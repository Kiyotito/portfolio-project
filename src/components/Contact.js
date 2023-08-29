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
    <Rectangle>
    <Form>
    <label htmlFor="firstname">First Name</label>
    <Input type="text" id="firstname"/>
    <label htmlFor="lastname">Last Name</label>
    <Input type="text" id="lastname"/>  
    <label htmlFor="email">Email</label>
    <Input type="text" id="email"/> 
    <label htmlFor="textarea">Message</label>
    <TextArea type="textarea" id="textarea"/>   
    <Button type="submit" value="Send"/>      
    </Form></Rectangle>
    </ContactBanner>    
    )
}

export default Contact;

const TextArea = styled.textarea`
height: 150px;
border-radius: 20px;
`
const Input = styled.input`
margin: 5px 0px;
border-radius: 50px;
`

const Button = styled.input`
border-radius: 50px;
margin-top: 20px;
background-color: lightyellow;
border: 5px dotted pink;
&:hover{
background-color: lightpink; 
border: orange 5px solid ;
}
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Circle = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
background-color: blanchedalmond;
margin-top: 20px;
margin-bottom: 50px;
display: flex;
align-items: center;
justify-content: center;
border: pink 5px dotted ;
font-size: 20px;
transition-duration: 250ms;
&:hover{
background-color: lightpink; 
border: orange 5px solid ;
}
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
transition-duration: 250ms;
&:hover{
background-color: lightpink; 
border: orange 5px dotted ;
}
`

const ContactBanner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-bottom: 50px;
`

const Spotlight = styled.img`
width: 200px;
`
const Header = styled.h1`
margin-top: 10px;
`