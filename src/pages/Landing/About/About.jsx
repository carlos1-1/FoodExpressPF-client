import React from "react";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
 import "./About.css";


function About(){
    return(
<div className='about' id='#sec2'>
    <div className='container'>
    <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668575898/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_8_cifgue.png" alt="" className="imageAbout"/>
    <div>
    <h2>About</h2>
    <p className='{style.aboutR}'><FaQuoteLeft className='quoteUno'/>
    The restaurant that takes the best of international gastronomy,
    the fusion of these flavors, techniques, ingredients and
    experiences allow us to offer the best dishes to our customers,
    was founded in 2018 and continues to be the best option to taste
    any recipe international <FaQuoteRight className='quoteUno'/>
    </p>
    <a href="#sec3">
    <button className='aboutButton'>Explore More</button>
    </a>
    </div>
    </div>
    

</div>
    )
}

export default About;