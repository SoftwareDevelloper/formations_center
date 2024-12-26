import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnciensFormations from '../../component/AnciensFormations/AnciensFormations'
import Contact from '../../component/Contact/contact'
import NewFormations from '../../component/NewFormations/NewFormations'
import img from '../home/Banner1.png'
import '../home/home.css'

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const navigate = useNavigate();
  
  useEffect(() => {
    // Check login status when the component mounts
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set to true if token exists
  }, []);

  return (
    <>
    <div className='items-center  text-white md:flex   Banner'>
        <div className="right">
            <h1 className="title">Bienvenue A DIGILANG ACADEMY</h1>
             <p className="paraph1">Vous y trouverez une variété de formations adaptées à vos besoins.</p>
             <p className="paraph2">Alors, qu'attendez-vous ? </p>
             <p className="paraph3">Inscrivez-vous sur notre site pour recevoir des notifications sur nos nouvelles formations.</p>
             {isLoggedIn ? (
              <>
               
              </>
            ) : (
              <Link to="/register">
                <button type="button" className="text-white bg-blue-700 GetStarted">
                  Crée Votre Compte
                </button>
              </Link>
            )}
        </div>
        <div className="left">
            <img src={img} alt="" />
        </div>
    </div>
    <div className="AnciensFormations"> 
        <AnciensFormations/>
    </div>
    <div className="NewFormations">
        <NewFormations/>
    </div>
    <div className="contact">
        <Contact/>
    </div>
    </>
  )
}

export default Home
