import React from "react";
import styled from "styled-components";


const Project = () => {

    return (
    <>
    <MainProjectDiv>
        <ProjectTitle>Things I Made 🔧</ProjectTitle>
        <ProjectDiv>
            <ProjectName>⚙️ Menu Project</ProjectName>
            <MyImage src="/assets/MenuProject.png"/>
        <Description>Are you hungry? 
         <br/>
         Check out this delicious restaurant's menu!   
        </Description>
        
        </ProjectDiv>
        
    </MainProjectDiv>
    </>    
    )
}
 
export default Project;

const Description = styled.span`
margin:25px;
`
const MainProjectDiv = styled.div`
display: flex;
border-radius: 50px;
border: 2px solid black;
margin: 20px 10px 0px 10px;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 5vh;
@media (max-width: 750px){
width: 96vw;
margin: 2vw;
}
`
const ProjectDiv = styled.div`
border-radius: 50px;
width: 95vw;
margin: 25px;
text-align: center;
background-color: lightgray;
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 20px;
@media (max-width: 750px){
width: 90vw;
margin-top: 25px;
margin-right: 5vw;
margin-left: 5vw;
}
`

const ProjectTitle = styled.h1`
padding-top: 25px;
`

const ProjectName= styled.h2`
padding-top: 25px;
`
const MyImage = styled.img`
margin-top: 20px;
width: 60vw;
border-radius: 50px;
border: 1px solid black;
`