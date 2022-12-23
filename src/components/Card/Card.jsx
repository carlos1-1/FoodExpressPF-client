import React from "react";
import { Link } from 'react-router-dom';
import useFavorites from "../../hooks/useFavorites.js";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import DietTypes from "../DietTypes";

import "./Card.css";

function Card({ id, name, price, rating, image, addHandler, onStock, lisOfTypes }) {
  const Favorites = useFavorites("FAVS");

  return (
    <div className="card_container">
      <div>
        <Link to={`/foods/${id}`}>
          <div className="fancy-border">
            <img className="cardImage" src={image} alt="..." />
          </div>
        </Link>
      </div>
      <div className="card-body">
        <h5 className="title-text">{name}</h5>
        <p className="card-text">  Price: ${price}</p>
        <hr className="line-hr"/>
        <div className="card-text">
          {/* <strong className="d-flex align-items-center">
            {rating}/5
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            </strong> */}

          <DietTypes listOfItems={lisOfTypes}/>

          {
            onStock === true ?
              <h5 className='cardActivado'>In stock</h5> :
              <h5 className='desactivado'>Not in stock</h5>
          }
        </div>
      </div>
        {onStock === true &&
          <div className="add_to_cartContainer">
            <button
              className="add_to_cart"
              type="button"
              onClick={() => addHandler(id,name,price,image)}
            />
          </div>
        }
      <button
        className="favorites-button"
        onClick={() => Favorites.toggle({id, name, price, rating, image, onStock, lisOfTypes})}
      >
        {/*Logo de corazoncito*/}
        {Favorites.items && Favorites.items.find(el => el.id === id)
          ? <BsHeartFill className="favorite-icon"/>
          : <BsHeart className="favorite-icon"/>
        }
      </button>
    </div>
  );
}

export default Card;
