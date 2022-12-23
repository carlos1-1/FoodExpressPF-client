import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { PaymentConfirmed } from "./emailsDefault";
import { sendEmail } from "../redux/actions";

export default function Prueba() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const prueba = () => {
    emailPrueba.user = user.email;
    dispatch(sendEmail(emailPrueba));
  };
  return <button onClick={() => prueba()}>PRUEBA</button>;
}

