import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  //user da la info del usuario
  //isAuthenticated devuelve true o false dependiendo de si la sesion esta iniciada
  //isLoading marca cuando se esta cargando la informacion del user(recomendable poner alguna animacion de carga)

  // return <pre>{JSON.stringify(user, null, 2)}</pre>;
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />;
      </div>
    )
  );
};

export default Profile;
/*
   const { isLoading } = useAuth0(); es la forma de traer isLoading, el mismo devuelve true cuando los datos del usuario se estan cargando 

  if (isLoading) {
    return <h1>Is Loading</h1>;
  } */
