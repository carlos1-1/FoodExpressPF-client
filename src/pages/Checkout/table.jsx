import useLocalStorage from "../../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import "./Checkout.css";


const CheckoutTable = () => {
    const Cart = useLocalStorage("CART", "");

      if(!Cart.items.length){
        return(
          <>
            <div>
              <div className="checkout_container">
                Your shop cart is empty,
                go back and fill it
                <div>
                <Link to="/home">
                  <div className="d-flex gap-2 col-6 mx-auto p-5 p-md-3">
                    <button
                    className="btn btn-primary"
                    type="button">
                      Back
                    </button>
                  </div>
                </Link>
                </div>
              </div>
            </div>
          </>
        )
      }

    return (
      <div className="table-responsive ">
        <table className="table table-hover text-center">
            <thead>
              <tr>
                <th scope="col">Photo</th>
                <th scope="col">Qty</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
            {Cart.items &&
            Cart.items.map((item) => {
            return (
            <tr>
              <td>
                  <img src={item.image} alt="" className="checkoutImage"/>
              </td>
              <td class="botones btn-group rounded-0 p-0 p-md-5 pt-4">
                  <button
                    className="btn btn-warning m-0 m-md-1"
                    type="button"
                    onClick={() => Cart.discount(item)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <button class="btn btn-warning bg-white px-0 m-0 m-md-1" disabled>{item.count}</button>
                  <button
                    className="btn btn-warning m-0 m-md-1"
                    type="button"
                    onClick={() => Cart.add(item)}
                  >
                    {" "}
                    +{" "}
                  </button>
              </td>
              <td className="pt-4 p-md-5">{item.name}</td>
              <td className="pt-4 p-md-5">${item.price * item.count}</td>
              <td><button className="remove bg-transparent border-0 pt-3 p-md-5"><img src="https://i.imgur.com/h1ldGRr.png" alt="X" onClick={() => Cart.remove(item)}/></button></td>
              </tr>
              
            );
          })}
          <tr className="totalprice">
            <td className="light">Total:</td>
            <td colSpan="2">&nbsp;</td>
            <td colSpan="2">$
            {Cart.items &&
              Cart.items.reduce((acum, act) => {
                return acum + act.price * act.count;
              }, 0)}
              </td>
          </tr>
          <br/>
          </tbody>
        </table>
      </div>
    );
}

export default CheckoutTable;
