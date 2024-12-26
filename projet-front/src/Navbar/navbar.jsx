import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assest/Logo.png';
import '../Navbar/navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <nav className=" fixed w-full z-10 top-0 start-0   " style={{ backgroundColor: 'rgba(0, 0, 255, 0.2)'}}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={Logo} className="img3d flex items-center space-x-3 rtl:space-x-reverse" alt="Flowbite Logo"  />
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isLoggedIn ? (
              <>
                <Link to="/profile">
                  <button type="button" className="text-white  profile">
                    Profile
                  </button>
                </Link>
              </>
            ) : (
              <Link to="/register">
                <button type="button" className="text-white bg-blue-700 connect">
                  Se connecter
                </button>
              </Link>
            )}
              <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                
              <Link to="/" className="block py-2 px-3 text-white title" aria-current="page">
              Menu
              </Link>

                
              </li>
              {isLoggedIn && (
              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={toggleDropdown}
                  className="flex items-center justify-between py-2 px-3 text-white title"
                >
                  Nos Formations
                  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div id="dropdownNavbar" className=" bg-white ">
                    <ul className="py-2 text-sm" aria-labelledby="dropdownLargeButton">
                      <li>
                        <Link to={'/Formations/Informatique'} className=" block py-2 text-center hover:bg-blue-500 dark:hover:bg-blue-800 hover:text-white">
                          Informatique
                        </Link>
                      </li>
                      <hr />
                      <li>
                        <Link to={'/Formations/Langue'} className="block  py-2 text-center hover:bg-blue-500 dark:hover:bg-blue-800 hover:text-white">
                          Langue
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              )}
              <li>
                <Link to={'/about'} className="block py-2 px-3 text-white title">
                  A-propos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
