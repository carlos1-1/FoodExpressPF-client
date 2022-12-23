
export const emailPrueba = {
  user: "",
  subject: "asunto del correo",
  text: "mensaje a mandar",
  html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <style>
          p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
          h1{ font-size: 30px !important;}
          h2{ font-size: 25px !important;}
          h3{ font-size: 18px !important;}
          h4{ font-size: 16px !important;}
          p, a{font-size: 15px !important;}
  
          .claseBoton{
              width: 30%;
                  background-color: #fcae3b;
                  border: 2px solid #fcae3b;
                  border-radius: 20px;
                  color: rgb(248, 246, 246); 
                  padding: 16px 15px;
                  text-align: center;
                  text-decoration: none;
                  font-weight: bold;
                  display: inline-block;
                  font-size: 16px;
                  margin: 4px 2px;
                  transition-duration: 0.4s;
                  cursor: pointer;
          }
          .claseBoton:hover{
              background-color: #06556f;
              color: #fcae3b;
          }
          .imag{
              width: 40px;
              height: 40px;
          }
          .contA{
              margin: 0px 5px 0 5px;
          }
          .afooter{
              color: #ffffff !important; 
              text-decoration: none;
              font-size: 13px !important;
          }
      </style>
  </head>
  <body>
      <div style="width: 100%; background-color: #f9fcfc;">
          <div style="padding: 20px 10px 20px 10px;">
              <!-- Imagen inicial -->
              <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                  <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669182852/recipes/logo_2_ucsgki.png" alt="" style="width: 200px; height: 200px;">
              </div>
              <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                  <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669182670/recipes/mail_b3nwhe.png" alt="" style="width: 650px; height: 200px;">
              </div>
              <!-- Imagen inicial -->
  
              <!-- Contenido principal -->
              <div style="background-color: #f9fcfc;; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                  <h1>Thank you!</h1>
                  <h1>Your payment was successful</h1>
                 
  
                  <!-- Gracias -->
                  <!-- <p>Gracias por tu tiempo.</p>
                  <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>Equipo Pretwor</p> -->
  
                  <!-- Botón -->
                  <a class="claseBoton" href="">Food-Express</a>
              </div>
              <!-- Contenido principal -->
  
              <!-- Footer -->
              <div style="background-color: #282828; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                  <!-- Redes sociales -->
                  <a href="https://www.facebook.com/profile.php?id=100087952037421" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184557/recipes/f1_ibqdnf.png" class="imag" /></a>
                  <a href="https://www.instagram.com/henry.foodexpress/" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184557/recipes/i1_l4ka5c.png" class="imag" /></a>
                  <a href="https://twitter.com/FoodExp35194109" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184557/recipes/t1_hrhfe1.png" class="imag" /></a>
                  <a href="mailto:henry.foodexpress@gmail.com?Subject=Info%20,Comments%20or%20Suggestions" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184959/recipes/ma1_fbsl74.png" class="imag" /></a>
                  <!-- Redes sociales -->
  
                  <h4>Contact</h4>
                  <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                      Contact us by the following means:<br>
                      Mail: <a class="afooter" href="mailto:henry.foodexpress@gmail.com?Subject=Info%20,Comments%20or%20Suggestions">henry.foodexpress@gmail.com</a><br>
                      Whatsapp: <a class="afooter" href="https://wa.me/528112290974">+52 811 229 0974</a><br>
                  </p>
                  <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                      © 2022 Food-Express, all rights reserved.
                  </p>
              </div>
              <!-- Footer -->
  
  
  
          </div>
      </div>
  </body>
  </html>`
  
     
};

export const PaymentConfirmed = (price)=>{
    let email= {
        user:  "",
        subject: 'Payment Confirmed',
        text: `Food-Express informs yoy that your payment of ${price}usd has just been conffirmed`,
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <style>
                p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
                h1{ font-size: 30px !important;}
                h2{ font-size: 25px !important;}
                h3{ font-size: 18px !important;}
                h4{ font-size: 16px !important;}
                p, a{font-size: 15px !important;}
        
                .claseBoton{
                    width: 30%;
                        background-color: #fcae3b;
                        border: 2px solid #fcae3b;
                        border-radius: 20px;
                        color: rgb(248, 246, 246); 
                        padding: 16px 15px;
                        text-align: center;
                        text-decoration: none;
                        font-weight: bold;
                        display: inline-block;
                        font-size: 16px;
                        margin: 4px 2px;
                        transition-duration: 0.4s;
                        cursor: pointer;
                }
                .claseBoton:hover{
                    background-color: #06556f;
                    color: #fcae3b;
                }
                .imag{
                    width: 40px;
                    height: 40px;
                }
                .contA{
                    margin: 0px 5px 0 5px;
                }
                .afooter{
                    color: #ffffff !important; 
                    text-decoration: none;
                    font-size: 13px !important;
                }
            </style>
        </head>
        <body>
            <div style="width: 100%; background-color: #f9fcfc;">
                <div style="padding: 20px 10px 20px 10px;">
                    <!-- Imagen inicial -->
                    <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                        <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669182852/recipes/logo_2_ucsgki.png" alt="" style="width: 200px; height: 200px;">
                    </div>
                    <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                        <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669182670/recipes/mail_b3nwhe.png" alt="" style="width: 650px; height: 200px;">
                    </div>
                    <!-- Imagen inicial -->
        
                    <!-- Contenido principal -->
                    <div style="background-color: #f9fcfc;; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                        <h1>Thank you!</h1>
                        <h1>Your payment was successful</h1>
                       
        
                        <!-- Gracias -->
                        <!-- <p>Gracias por tu tiempo.</p>
                        <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>Equipo Pretwor</p> -->
        
                        <!-- Botón -->
                        <a class="claseBoton" href="">Food-Express</a>
                    </div>
                    <!-- Contenido principal -->
        
                    <!-- Footer -->
                    <div style="background-color: #282828; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                        <!-- Redes sociales -->
                        <a href="https://www.facebook.com/profile.php?id=100087952037421" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184557/recipes/f1_ibqdnf.png" class="imag" /></a>
                        <a href="https://www.instagram.com/henry.foodexpress/" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184557/recipes/i1_l4ka5c.png" class="imag" /></a>
                        <a href="https://twitter.com/FoodExp35194109" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184557/recipes/t1_hrhfe1.png" class="imag" /></a>
                        <a href="mailto:henry.foodexpress@gmail.com?Subject=Info%20,Comments%20or%20Suggestions" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184959/recipes/ma1_fbsl74.png" class="imag" /></a>
                        <!-- Redes sociales -->
        
                        <h4>Contact</h4>
                        <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                            Contact us by the following means:<br>
                            Mail: <a class="afooter" href="mailto:henry.foodexpress@gmail.com?Subject=Info%20,Comments%20or%20Suggestions">henry.foodexpress@gmail.com</a><br>
                            Whatsapp: <a class="afooter" href="https://wa.me/528112290974">+52 811 229 0974</a><br>
                        </p>
                        <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                            © 2022 Food-Express, all rights reserved.
                        </p>
                    </div>
                    <!-- Footer -->
        
        
        
                </div>
            </div>
        </body>
        </html>`
    };
    return email;
}

export const PaymentDeclined = (price)=>{
    let email= {
        user:  "",
        subject: 'Payment Declined',
        text: `Food-Express informs yoy that your payment of ${price}usd has just been refused`,
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <style>
                p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
                h1{ font-size: 30px !important;}
                h2{ font-size: 25px !important;}
                h3{ font-size: 18px !important;}
                h4{ font-size: 16px !important;}
                p, a{font-size: 15px !important;}
        
                .claseBoton{
                    width: 30%;
                        background-color: #fcae3b;
                        border: 2px solid #fcae3b;
                        border-radius: 20px;
                        color: rgb(248, 246, 246); 
                        padding: 16px 15px;
                        text-align: center;
                        text-decoration: none;
                        font-weight: bold;
                        display: inline-block;
                        font-size: 16px;
                        margin: 4px 2px;
                        transition-duration: 0.4s;
                        cursor: pointer;
                }
                .claseBoton:hover{
                    background-color: #06556f;
                    color: #fcae3b;
                }
                .imag{
                    width: 40px;
                    height: 40px;
                }
                .contA{
                    margin: 0px 5px 0 5px;
                }
                .afooter{
                    color: #ffffff !important; 
                    text-decoration: none;
                    font-size: 13px !important;
                }
            </style>
        </head>
        <body>
            <div style="width: 100%; background-color: #f9fcfc;">
                <div style="padding: 20px 10px 20px 10px;">
                    <!-- Imagen inicial -->
                    <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                        <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669182852/recipes/logo_2_ucsgki.png" alt="" style="width: 200px; height: 200px;">
                    </div>
                    <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                        <img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669182670/recipes/mail_b3nwhe.png" alt="" style="width: 650px; height: 200px;">
                    </div>
                    <!-- Imagen inicial -->
        
                    <!-- Contenido principal -->
                    <div style="background-color: #f9fcfc;; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                        <h1>Alert!</h1>
                        <h1>Your payment was declined</h1>
                       
        
                        <!-- Gracias -->
                        <!-- <p>Gracias por tu tiempo.</p>
                        <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>Equipo Pretwor</p> -->
        
                        <!-- Botón -->
                        <a class="claseBoton" href="">Food-Express</a>
                    </div>
                    <!-- Contenido principal -->
        
                    <!-- Footer -->
                    <div style="background-color: #282828; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                        <!-- Redes sociales -->
                        <a href="https://www.facebook.com/profile.php?id=100087952037421" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184557/recipes/f1_ibqdnf.png" class="imag" /></a>
                        <a href="https://www.instagram.com/henry.foodexpress/" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184557/recipes/i1_l4ka5c.png" class="imag" /></a>
                        <a href="https://twitter.com/FoodExp35194109" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184557/recipes/t1_hrhfe1.png" class="imag" /></a>
                        <a href="mailto:henry.foodexpress@gmail.com?Subject=Info%20,Comments%20or%20Suggestions" class="contA"><img src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1669184959/recipes/ma1_fbsl74.png" class="imag" /></a>
                        <!-- Redes sociales -->
        
                        <h4>Contact</h4>
                        <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                            Contact us by the following means:<br>
                            Mail: <a class="afooter" href="mailto:henry.foodexpress@gmail.com?Subject=Info%20,Comments%20or%20Suggestions">henry.foodexpress@gmail.com</a><br>
                            Whatsapp: <a class="afooter" href="https://wa.me/528112290974">+52 811 229 0974</a><br>
                        </p>
                        <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                            © 2022 Food-Express, all rights reserved.
                        </p>
                    </div>
                    <!-- Footer -->
        
        
        
                </div>
            </div>
        </body>
        </html>`
    };
    return email;
}