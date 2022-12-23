import React from "react";
import "./ContactHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { AiOutlineMail } from "react-icons/ai";


function Contact() {
  const f = <FontAwesomeIcon icon={faFacebook} />
  const i = <FontAwesomeIcon icon={faInstagram} />
  // const g = <FontAwesomeIcon icon={faGoogle} />
  const t = <FontAwesomeIcon icon={faTwitter} />


  return (

    <footer className="contactContainer">

      <div className="contactData">
        <div className="box">
          <figure>

            <a href="#">
              <div className="direccion">
                <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668061068/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_7_ia4jsg.png" alt="logo" />
              </div>
            </a>

          </figure>

        </div>
        <div className="box">
          <h2>Follow us</h2>
          <div className="red-social">
            <a href="https://www.facebook.com/profile.php?id=100087952037421" className="fa fa-facebook">{f}</a>
            <a href="https://www.instagram.com/henry.foodexpress/" className="fa fa-instagram">{i}</a>
            <a href="mailto:henry.foodexpress@gmail.com?Subject=Info%20,Comments%20or%20Suggestions" className="fa fa-google"><AiOutlineMail /></a>
            <a href="https://twitter.com/FoodExp35194109" className="fa fa-twitter">{t}</a>

          </div>
          <br></br>
          <h2 >Phone Numbers </h2>
          <h5 className="phone">+54 9 11 5678-0894</h5>
          <h5 className="phone">+54 9 11 5678-0895</h5>
        </div>
      </div>
      <div className="company_rights">
        <small>&copy; 2018 <b>Food-Express Company - All rights reserved.</b></small>
      </div>
    </footer>
  )
}

export default Contact;