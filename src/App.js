import logo from './logo.svg';
import './App.css';
import HireMeBar from './components/HireMeBar';
import Hero from './components/Hero';
import NavigationCircleBar from './components/NavigationCircleBar';
import MainPage from './components/MainPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/AboutMe" element={<AboutMe/>}/>
      <Route path="/Project" element={<Project/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
   </div>
   
  );
}

export default App;
