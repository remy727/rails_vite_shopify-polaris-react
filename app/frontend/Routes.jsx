import React from "react";
import { Routes as ReactRouterRoutes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </ReactRouterRoutes>
  );
}

export default Routes;
