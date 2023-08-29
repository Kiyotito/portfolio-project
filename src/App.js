import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
    </Routes>
    </BrowserRouter>
   </div>
   
  );
}

export default App;
