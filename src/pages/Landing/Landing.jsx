import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../../components/Auth/Login.jsx";
import LogoutButton from "../../components/Auth/Logout.jsx";
import ModalAuth from "../../modals/Auth/Auth.jsx";

import "./Landing.css";
import {FaQuoteLeft, FaQuoteRight,FaBars, FaTimes} from "react-icons/fa";

import About from './About/About.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import Contact from './Contact/Contact.jsx';



function Landing() {
  const history = useHistory();
  const { isAuthenticated } = useAuth0();

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)
    
  return (
    <div><div className='landing'>
      
      <div className='slogan'>
        <p>Food to Fill Your Soul</p>
        <p>We are preparing delicious food for you...</p>
        <p>Book or place your order now!</p>
        <section id='sec1'>
        <button
          type="button"
          className='button'
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => history.push("/home")}
        >
          Go!
        </button>
        </section>
      </div>
    
    </div>
      <div className='header'>
        <nav className='navbar'>
         <a href='/' className='logo'>
          <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png" alt='logo' />
         </a>
          <div className='hamburger' onClick={handleClick}>
           {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
            : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
         </div>
           <ul className={click ? "nav-menu active" : "nav-menu"}>
             <li className='nav-item'>
              <a href="#sec1" spy='true' smooth='true' offset={50} duration={500} onClick={closeMenu}>Home</a>
	           </li>
             <li className='nav-item'>
              <a href="#sec2" spy='true' smooth='true' offset={50} duration={500} onClick={closeMenu}>About</a>
	           </li>
             <li className='nav-item'>
             <a href="#sec3" spy='true' smooth='true' offset={50} duration={500} onClick={closeMenu}>Reviews</a>
	           </li>
             <li className='nav-item'>
             <a href="#sec4" spy='true' smooth='true' offset={50} duration={500} onClick={closeMenu}>Contact</a>
	           </li>
               <li className='nav-item'>
                 <div className='ButtonLogin' spy='true' smooth='true' offset={50} duration={500} onClick={closeMenu}>{ isAuthenticated ? <LogoutButton  /> : <LoginButton />}</div>
	             </li>
     
            </ul>
       
     </nav>
     
     <ModalAuth />
     
    </div>
    <scroll-container>
    <section id='sec2'className='sec2'>
      <div id='About'>
        <div>
    <About/>
   
    </div>
    </div>
    </section>

    <section id='sec3' className='sec3'>
    <div id='testimonials'>
          <div>
          
            
            <Testimonials />
          </div>
        </div>
    </section>

    <section id='sec4' >
    <div className='contacto' id="#sec4">
          
          <Contact/>
          
        </div>
    </section>
    </scroll-container>
  </div>
  )
}

export default Landing;