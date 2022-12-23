import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0(); //logout es una funcion que permite cerrar la cuenta, su returnTo recibe la url a la que es redirigido el cliente luego de cerrar su cuenta(cambiarla a la deseada por ustedes)

  return (
    <div className="nav-item">
      <button onClick={() => logout()} className="btn btn-outline-light me-2 mt-1">
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
/*
   <li className="nav-item">
      <Link
        onClick={() => loginWithRedirect()}
        className="nav-link active fs-5"
      >
        login
      </Link>
    </li>
*/
