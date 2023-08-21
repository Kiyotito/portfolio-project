import React from "react";
import styled from "styled-components";


const Project = () => {

    return (
    <>
    <MainProjectDiv>
        <ProjectTitle>Things I Made 🔧</ProjectTitle>
        <ProjectDiv>
            <ProjectName>⚙️ Project</ProjectName>
        </ProjectDiv>
    </MainProjectDiv>
    </>    
    )
}
 
export default Project;

const MainProjectDiv = styled.div`
display: flex;
border-radius: 50px;
border: 2px solid black;
margin: 20px 10px 0px 10px;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ProjectDiv = styled.div`
border-radius: 50px;
border: 1px solid black;
width: 95vw;
margin: 25px 0px;
height: 200px;
text-align: center;
background-color: lightgray;
`

const ProjectTitle = styled.h1`
padding-top: 25px;
`

const ProjectName= styled.h2`
padding-top: 25px;
`