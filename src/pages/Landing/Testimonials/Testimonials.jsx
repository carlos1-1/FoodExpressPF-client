import React from "react";
import "./Testimonials.css";


function Testimonials(){

    return(
        <div className='testimonials' id='testimonials'>
            <div className='container'>
            <h2 className='test'>Reviews</h2>
          <a href='#sec4'>
              <button className='buttonReviews'>Contact</button>
            </a>
                {/* <span className='line'></span> */}
                <div className='content' id="testimonial">
                    <div className='card'>
                        <img src='https://res.cloudinary.com/dowhfu3fj/image/upload/v1668727845/recipes/uno.f_wwso0x.png' alt='user1' className="img1" />
                        <p>Great Flavors.
                            The service and food was great! I was visiting on my own as a side trip, and dishes in Argentina, especially meat dishes, tend to be very large. I ordered the tenderloin and they were able to fit a half order for me. It was delicious and the perfect amount. The fresh bread at the start was also great.</p>
                        <p><span>"Nahuel Guzman"</span></p>
                        <p>User</p>
                    </div>
                    <div className='card'>
                        <img src='https://res.cloudinary.com/dowhfu3fj/image/upload/v1668727845/recipes/tres.f_kcjuir.png' alt='user2' className="img1" />
                        <p>Excellent option to enjoy with the family, the dishes are delicious and the waiting time is minimal compared to other restaurants, the trompo tacos, one of my favorites, do not hesitate to ask for them, without a doubt I highly recommend this place.</p>
                        <p><span>Carol Harper</span></p>
                        <p>User</p>
                    </div>
                    <div className='card'>
                        <img src='https://res.cloudinary.com/dowhfu3fj/image/upload/v1668728375/recipes/Dise%C3%B1o_sin_t%C3%ADtulo_14_at0jmg.png' alt='user3' className="img1" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quo officia maiores distinctio quas veniam debitis saepe vitae iure voluptas nam hic dolor, doloremque inventore! Soluta laboriosam asperiores nobis veniam.</p>
                        <p><span>Snow.J.R.</span></p>
                        <p>Chef</p>
                    </div>
                </div>
            </div>
        </div>
     
        

    )
}

export default Testimonials;