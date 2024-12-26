import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Navbar/navbar';
import About from './Pages/about/about';
import InfoDetail from "./Pages/Formations/formationInfoDetailled/InfoDetail";
import Languedetail from "./Pages/Formations/formationLangueDetailled/languedetail";
import Info from "./Pages/Formations/info/info";
import Langue from "./Pages/Formations/langue/langue";
import Home from './Pages/home/home';
import Login from "./Pages/Login/Login";
import Profile from './Pages/Profil/profil';
import Register from './Pages/Register/register';
function App() {
  return (
    <BrowserRouter>
    <div className="App" >
      <div className="App-header ">
        <Navbar/>
        
      <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/Formations/Informatique' element={<Info/>}/>
            <Route path='/Formations/Langue' element={<Langue/>}/>
            <Route path="/Langue/:id" element={<Languedetail/>}/>
            <Route path="/Informatique/:id" element={<InfoDetail/>}/>
            <Route path="/profile" element={<Profile/>}/>
            </Routes>
      
      </div>
      
      
      
   
      
    </div>
    </BrowserRouter>
  );
}

export default App;
