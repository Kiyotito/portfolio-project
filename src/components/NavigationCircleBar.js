import React from "react"; 
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hashlink";



const NavigationCircleBar = () => {

    return(
    <>
    <NavBarDiv>
    <ALink smooth="true" to={"/#aboutme"}>
    <DivCircle>
    <span>About Me</span>
    </DivCircle>
    </ALink>
    <ALink smooth="true" to={"/#project"}>
    <DivCircle>
    <span> Project</span>
    </DivCircle>
    </ALink>
    <ALink smooth="true" to={"/#contact"}>
    <DivCircle>
    <span> Contact</span>
    </DivCircle>
    </ALink>
    </NavBarDiv>    
    </>
    )
}

export default NavigationCircleBar;

const NavBarDiv = styled.nav`
display: flex;
justify-content: flex-end;
margin-top: 10px;
@media (max-width: 750px){
margin-top: 20px;
display: flex;
justify-content: center;
}

`
const NavPicture = styled.img`
width: 200px;
`
const DivCircle = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 100px;
background-color: darkblue;
border-radius: 50%;
margin: 0px 10px;
color: white;
font-weight: 700;
font-size: 16px;
transition-duration: 250ms;
&:hover{
background-color: orange ;
}
`
const ALink = styled(HashLink)`
text-decoration: none;
`
