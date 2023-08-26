import React from "react";
import HireMeBar from "./HireMeBar";
import Hero from "./Hero";
import NavigationCircleBar from "./NavigationCircleBar";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";
const MainPage = () => {

    return(
    <>
    <NavigationCircleBar/>
    <Hero/> 
    <AboutMe/>
    <Project/>
    <Contact/>
    </>
    )
}

export default MainPage;