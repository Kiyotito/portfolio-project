import React from "react";
import styled from "styled-components";
import { useState } from "react";


const Hero = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };

    return (
    <>
    <MainDiv>
    <InfoDiv>
    <MyImage src="/assets/KoichiSatoPicture.png"/>
    <div>
    <div
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
   
    >

    <NameQuestion>My name is:
    <HereText>*HOVER*</HereText>
    <Name>Koichi Sato</Name>  
    </NameQuestion> 
    
    
    
    </div> 
     <OtherTextInfo>Web Development Student</OtherTextInfo>   
     <OtherTextInfo>Human Bug Spray</OtherTextInfo>     
    </div>
    </InfoDiv>
    </MainDiv>  
    </>  
    )
}

export default Hero;

const MainDiv = styled.div`
display: flex;
justify-content: center;
`

const InfoDiv = styled.div`
display: flex;
align-items: center;
@media (max-width: 750px){
display: flex;
flex-direction: column;
}
`

const MyImage = styled.img`
width: 500px;
`

const NameQuestion = styled.h1`
margin: 10px 10px;
display: flex;
flex-direction: column;
`

const Name = styled.h1`
margin: 5px 10px;
font-size: 0px;
transition: all 0.25s ease-in-out;
opacity: 0;
${NameQuestion}:hover &{
  margin-top: -10px;
  font-size: 75px;
  opacity: 1;
}
@media (max-width: 750px){
  margin-top: -10px;
  margin-left: 0px;
  font-size: 75px;
  opacity: 1;
}
`
const OtherTextInfo = styled.h2`
margin: 10px 10px;
`

const HereText = styled.span`
font-size: 10px;
margin-top: 10px;
transition: all 0.25s ease-in-out;
${NameQuestion}:hover &{
  margin-top: 0px;
opacity: 0;
}
@media (max-width: 750px){
margin-top: 0px;
opacity: 0;
}
`