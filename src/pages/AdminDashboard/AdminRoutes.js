// Libraries
import { Route } from "react-router-dom";

import React from 'react';
import AdminDashboard from ".";
import Users from "./Users";
import Products from "./Products/Products";
import Orders from "./Orders";
import Stats from "./Stats";
import NavBar from "../../components/NavBar/NavBar";
import useLocalStorage from "../../hooks/useLocalStorage";

const AdminRoutes = () => {
  const Cart = useLocalStorage("CART", "");

  return (
    <>
    <NavBar Cart={Cart}/>
    <AdminDashboard />

      <Route path="/admin/stats" component={Stats} />

      <Route path="/admin/users" component={Users} />

      <Route path="/admin/products" component={Products} />

      <Route path="/admin/orders" component={Orders} />

    </>
  )
};

export default AdminRoutes;