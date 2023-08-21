import React from "react";
import styled from "styled-components";

const AboutMe = () => {

    return(
    <>
    <AboutMeDiv>
    <h1>I Yam What I Yam 🍠</h1>
    </AboutMeDiv>    
    <StatementDiv>
    <GreyDiv>
    <span>Building problem solving solutions with ❤️</span>
    </GreyDiv>
    <PinkDiv>
    <em>Seasoned Professional:</em>
    <br/>
    <span>Much like tofu, I have both hard and soft skills</span>
    </PinkDiv>
    </StatementDiv>
    <StatementDiv>
    <GreenDiv>
    <TechStackTitle>Tech Stack</TechStackTitle>
    <TechStackList>
       <li>HTML</li>
       <li>CSS</li> 
       <li>JAVASCRIPT</li>  
    </TechStackList>
    </GreenDiv>
    <PurpleDiv>
    <SoftStackTitle>Soft Stack</SoftStackTitle>
    <SoftStackList>
        <li>Communication</li>
        <li>Education</li>
        <li>Leadership</li>
    </SoftStackList>
    </PurpleDiv>
    </StatementDiv>
    </>
    )
}

export default AboutMe;

const AboutMeDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #FDB750;
padding: 25px 0px;
margin: 100px 10px 0px 10px;
border-radius: 50px;
`

const GreyDiv = styled.div`
background-color: #C0C0C0;
margin: 20px 20px 20px 10px;
border-radius: 50px;
width: 40vw;
height: 10vh;
font-size: 20px;
text-align: center;
height: 100px;
padding: 20px;
`
const PinkDiv = styled.div`
margin: 20px 10px 20px 0px;
background-color: #FBBCAF;
border-radius: 50px;
width: 60vw;
font-size: 20px;
height: 100px;
padding: 20px;
text-align: center;
`
const StatementDiv = styled.div`
display: flex;
`

const GreenDiv = styled.div`
background-color: #7FFFD4;
border-radius: 50px;
margin: 0px 10px 0px 10px;
width: 60vw;
height: 150px;
`

const TechStackList = styled.ul`
list-style-type: none;
text-align: center;
padding: 0px 0px 10px 0px;
`

const TechStackTitle = styled.h2`
text-align: center;
padding: 10px 0px 10px 0px;
`

const PurpleDiv = styled.div`
background-color: #E3AFFB;
border-radius: 50px;
margin: 0px 10px 0px 10px;
width: 40vw;
height: 150px;
`

const SoftStackList = styled.ul`
list-style-type: none;
text-align: center;
padding: 0px 0px 10px 0px;
`

const SoftStackTitle = styled.h2`
text-align: center;
padding: 10px 0px 10px 0px;
`