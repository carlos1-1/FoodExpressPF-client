import React from "react";
import useFavorites from "../../hooks/useFavorites.js";
import useLocalStorage from "../../hooks/useLocalStorage.js";
import Card from "../../components/Card/Card.jsx";

function FavoritesList(){
  const Favorites = useFavorites("FAVS");
  const Cart = useLocalStorage("CART", "");
  const addCartHandler  = (id, name, price, image) =>{
    Cart.add({id, name, price, image});
  }

  return (
    <>
      {!!Favorites.items.length && Favorites.items.map(fav => {
        return <Card
          key={fav.id}
          id={fav.id}
          name={fav.name}
          rating={fav.rating}
          price={fav.price}
          image={fav.image}
          onStock={fav.onStock}
          lisOfTypes={fav.lisOfTypes}
          addHandler={(id, name, price, image)=>addCartHandler(id, name, price, image)}
      />
      })}
    </>
  );
};

export default FavoritesList;