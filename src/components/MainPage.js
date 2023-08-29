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
    <div id="hero">
    <Hero/>
    </div> 
    <div id="aboutme">
    <AboutMe/>
    </div>
    <div id="project">
    <Project/>
    </div>
    <div id="contact">
    <Contact/>
    </div>
    </>
    )
}

export default MainPage;