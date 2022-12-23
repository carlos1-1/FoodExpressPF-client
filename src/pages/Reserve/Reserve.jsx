import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import NavBar from "../../components/NavBar/NavBar.jsx";
import {
  buy,
  buyPaypal,
  getAllTables,
  getUser,
  postReserve,
} from "../../redux/actions";
import "./Reserve.css";

function Reserve() {
  const dispatch = useDispatch();
  const Cart = useLocalStorage("CART", "");
  const table = useSelector((state) => state.allTables);
  const numberTables = useSelector((state) => state.tables.capacity)

  const [date, setDate] = useState("not specified");
  const [capacity, setCapacity] = useState("not specified");
  const [Time, setTime] = useState("not specified");
  const { user, isAuthenticated } = useAuth0();
  const [buySelect, setBuySelect] = useState(1);
  const history = useHistory();
  const emailUser = isAuthenticated ? { email: user.email } : "";
  const foodsCartId = [];
  for (let i = 0; i < Cart.items.length; i++) {
    foodsCartId.push(Cart.items[i].id);
  }
  const paypal = () => {
    let price = Cart.items.reduce((acum, act) => {
      return acum + act.price * act.count;
    }, 0);
    const redirect = "/reserved";
    buySelect == 1
      ? dispatch(buyPaypal({ price, redirect })).then((url) =>
          window.open(url, `${url}`)
        )
      : dispatch(buy({ price, redirect })).then((url) =>
          window.open(url, `${url}`)
        );
  };
  let available = [];

  useEffect(() => {
    if (table.length === 0) dispatch(getAllTables());
    available = table.filter((obj) => obj.reservation_data === date);
    if (available.length >= numberTables) alert("available");
  });

  const tables = async () => {
    if (
      capacity === "not specified" ||
      Time === "not specified" ||
      date === "not specified" ||
      available.length >= 2
    )
      return alert("please complete all required information");
    else {
      available = await table.filter((obj) => obj.reservation_data === date);
      if (available.length >= tables) return alert("table occupied that date");
      else {
        dispatch(getUser(emailUser)).then((data) =>
          dispatch(
            postReserve({
              status: "reserved",
              capacity: parseInt(capacity),
              hour: Time,
              reservation_data: date,
              reserve_owner: data.payload.id,
              foods: foodsCartId,
            })
          )
        );
        paypal();
        alert("orden creada");
        history.push("/home");
      }
    }
  };

  const onChangeHandlerDate = (e) => setDate(e.target.value);

  const onChangeHandlerChair = (e) => setCapacity(e.target.value);
  const onChangeHandlerTime = (e) => setTime(e.target.value);
  const select = (e) => {
    setBuySelect(e.target.value);
  };
  return (
    <>
      <NavBar Cart={Cart} />

      <div className="reserve_container">
        <h1 className="reserve_title">Booking</h1>
        <div className="inputsAndImage">
          <div className="inputs_container">
            <p className="reserve_text">Date*</p>
            <input
              className="reserve_inputs"
              type="date"
              name="name"
              onChange={onChangeHandlerDate}
              placeholder="Shipping Address"
              value={date}
            />
            <p className="reserve_text">Time *</p>
            <input className="reserve_inputs" type="time" onChange={onChangeHandlerTime}></input>
            <p className="reserve_text">People *</p>
            <select className="reserve_inputs" onChange={onChangeHandlerChair}>
              <option value="not specified">number of chairs</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <p className="reserve_text text-center">Choose payment method:</p>
            <div className="Pagos">
              <div className="form-check">
                <input
                  class="payment_method_inputPP"
                  type="radio"
                  name="flexRadioDefault"
                  id="PayPal"
                  value="1"
                  checked={buySelect == "1" ? true : false}
                  onChange={select}
                />
                <label class="form-check-labelPP" for="PayPal" value="PayPal">
                  <img
                    className="reserve_image"
                    src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669739509/paypalhoover_ojruhq.png"
                  />
                </label>
              </div>
              <div class="form-check">
                <input
                  class="payment_method_inputPP"
                  type="radio"
                  name="flexRadioDefault"
                  id="MercadoPago"
                  value="2"
                  checked={buySelect == "2" ? true : false}
                  onChange={select}
                />
                <label
                  class="form-check-labelPP"
                  for="MercadoPago"
                  value="MercadoPago"
                >
                  <img
                    src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669739509/mercadopago_hoover_wx4egf.png"
                    width="100"
                    height="100"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="image_container">
            <img
              src="https://res.cloudinary.com/dbepwtmru/image/upload/v1669737776/pngwing.com_3_nqopad.png"
              width="500px"
              height="500px"
              className="reserve_decoration_image"
            />
          </div>
        </div>

        <div class="d-grid gap-2 col-3 mx-auto p-5">
          <button class="btn btn-primary" onClick={() => tables()}>
            Reserve now
          </button>
        </div>
      </div>
    </>
  );
}

export default Reserve;
