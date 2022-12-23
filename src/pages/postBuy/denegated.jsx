import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { sendEmail } from "../../redux/actions";
 import { PaymentDeclined } from "../../emails/emailsDefault.jsx";
import s from "../postBuy/passed.module.css"

function Denegated() {
  const Cart = useLocalStorage("CART", "");
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const history = useHistory();

  const email = () => {
    let price = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);
    let email = PaymentDeclined(price);
    email.user = user.email;
    dispatch(sendEmail(email));
    history.push("/");
  };
  return (
    <>
    <div className={s.background}>
      <div className={s.recipt_container}>
        <img src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669043972/Pngtree_wrong_and_cancle_symbol_8742801_h75suz.png"
        className={s.error_image}
        />      
        <h1 class="text-center text-danger">Payment declined</h1>
        <p class="text-center">We are unable to process your online payment from the account provided.
          Please update it and try again later.</p>
        <button className={s.denegated_button} onClick={() => email()}>Back to home</button>
      </div>
    </div>
    </>
  );
}

export default Denegated;
