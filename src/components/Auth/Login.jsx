import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import { Link } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0(); //loginWithRedirect redirecciona al usuario al formulario de Auth0 para iniciar o crear una cuenta
  return (
    <div className="nav-item">
      <button
        onClick={() => loginWithRedirect()}
        className="btn btn-outline-light me-2"
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;