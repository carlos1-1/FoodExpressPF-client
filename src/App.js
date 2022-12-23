// Libraries
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Pages & Components
import Landing from "./pages/Landing/Landing.jsx";
import Home from "./pages/Home/index.jsx";
import Detail from "./pages/Detail/Detail.jsx";
import AdminRoutes from "./pages/AdminDashboard/AdminRoutes.js";
import ClientDashboard from "./pages/ClientDashboard/index.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Banned from "./pages/Banned";

// Styles
import "./assets/styles/globalStyles.css";
import "./assets/fonts/fonts.css";
import Passed from "./pages/postBuy/passed.jsx";
import Denegated from "./pages/postBuy/denegated.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Reserve from "./pages/Reserve/Reserve.jsx";
import useCheckRoles from "./utils/checkRoles.js";
import { useEffect } from "react";
import Reserved from "./pages/postBuy/reserved.jsx";

function App() {
  const history = useHistory();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const RequireAuth = ({ children }) => {
    if (!isAuthenticated) return <Redirect to="/" />;
    return children;
  };

  const RequireAdmin = ({ children }) => {
    let access = false;
    useCheckRoles(user.email).then((response) => {
      if (response === true) return;
      else if (!response) history.replace("/home");
      else if (response == "banned") history.replace("/banned");
    });
    return children;
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/reserve" component={Reserve} />
        <Route path="/passed" component={Passed} />
        <Route path="/denegated" component={Denegated} />
        <Route path="/banned" component={Banned} />
        <Route path="/reserved" component={Reserved} />

        <RequireAuth>
          <Route path="/home" component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/foods/:id" component={Detail} />
          <Route path="/client" component={ClientDashboard} />

          <RequireAdmin>
            <Route path="/admin" component={AdminRoutes} />
          </RequireAdmin>
        </RequireAuth>
      </Switch>
    </>
  );
}

export default App;
