import React from "react";
import styled from "styled-components";

const Hero = () => {

    return (
    <MainDiv>
    <InfoDiv>
    <MyImage src="/assets/KoichiSatoPicture.png"/>
    <div>
     <Name>Koichi Sato</Name>
     <OtherTextInfo>Aspiring Web Developper</OtherTextInfo>   
     <OtherTextInfo>Human Bug Spray</OtherTextInfo>     
    </div>
    </InfoDiv>
    </MainDiv>    
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
`

const MyImage = styled.img`
width: 500px;
`

const Name = styled.h1`
margin: 10px 10px;
`
const OtherTextInfo = styled.h2`
margin: 10px 10px;
`