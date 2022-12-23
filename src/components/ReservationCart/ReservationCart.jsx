import React from "react";
import { useDispatch } from "react-redux";
import { buy, buyPaypal } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./ReservationCart.css";
//import {  } from "react-icons/";

function ReservationCart({ Cart }) {
  const dispatch = useDispatch();

  const mp = () => {
    let total = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);

    dispatch(buy({ total })).then((url) => window.open(url, `${url}`));
  };
  const paypal = () => {
    let price = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);

    dispatch(buyPaypal({ price })).then((url) => window.open(url, `${url}`));
  };

  if(!Cart.items.length){
    return(
      
      <div className="cartContainer_vacio">
      <img src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
      className="decoration_image"
      />
      <h3 className="cart_title"></h3>
      <img className="cart_image"
        src="https://res.cloudinary.com/dbepwtmru/image/upload/v1668744345/foods_sketch_fkwkau.png"
      />
      </div>
    )
  }
  return (
    <div className="cartContainer">
      <img src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"
      className="decoration_image"
      />
      <h3 className="cart_title"/>
      <span>
        {/*cantidad carrito: {Cart.items?.length} Hacer lo de la bolita*/}
      </span>
      <article>
        {Cart.items &&
          Cart.items.map((item) => {
            return (
              <div key={item.id}>
                <hr className="cart_hr"/>
                <span>
                  <h5 className="item_name">{item.name}</h5>
                  <span className="d-flex justify-content-end">
                    <button
                      className="remove_button"
                      type="button"
                      onClick={() => Cart.remove(item)}
                    >
                      {" "}
                      X{" "}
                    </button>
                  </span>
                </span>
                <div className="d-flex justify-content-center">
                  <button
                    className="amount_button"
                    type="button"
                    onClick={() => Cart.discount(item)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span> <h5 className="item_quantity">{item.count}u </h5></span>
                  <button
                    className="amount_button"
                    type="button"
                    onClick={() => Cart.add(item)}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <br />
                </div>
                <span className="item_subtotal">Subtotal: ${item.price * item.count}</span>
              </div>
            );
          })}
      </article>
      {!!Cart.items.length && (
        <div>
          <hr />
          <h5 className="allitems_total">
            Total: $
            {Cart.items &&
              Cart.items.reduce((acum, act) => {
                return acum + act.price * act.count;
              }, 0)}
          </h5>
          <Link className="linkTo" to="/checkout">
          <button className="toPayment_button mx-auto">
            Proceed to payment $
            {Cart.items &&
              Cart.items.reduce((acum, act) => {
                return acum + act.price * act.count;
              }, 0)}
          </button>
          </Link>
          {/* <br/>
          <button className="toPayment_button" onClick={() => paypal()}>buy PayPal</button> */}
          {/* {Cart.items && (
            <button className="end_buttons" type="button" onClick={() => Cart.reset()}>
              {" "}
              Reset{" "}
            </button>
          )} */}
        </div>
      )}
    </div>
  );
}

export default ReservationCart;
