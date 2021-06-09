import { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import Products from "./products/Products";
import DetailProduct from "./detailProduct/DetailProduct";
import Login from "./auth/Login";
import Register from "./auth/Register";
import OrderHistory from "./history/OrderHistory";
import OrderDetails from "./history/OrderDetails";
import Cart from "./cart/Cart";
import NotFound from "./utils/not_found/NotFound";
import Categories from "./categories/Categories";
import CreateProduct from "./createProduct/CreateProduct";

import { GlobalState } from "../../GlobalState";

function Pages() {
  const state = useContext(GlobalState);
  const isLogged = state.userAPI.isLogged;
  const isAdmin = state.userAPI.isAdmin;

  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/detail/:id" exact component={DetailProduct} />

      <Route path="/login" exact component={isLogged[0] ? NotFound : Login} />
      <Route
        path="/register"
        exact
        component={isLogged[0] ? NotFound : Register}
      />

      <Route
        path="/category"
        exact
        component={isAdmin[0] ? Categories : NotFound}
      />

      <Route
        path="/create_product"
        exact
        component={isAdmin[0] ? CreateProduct : NotFound}
      />

<Route
        path="/edit_product/:id"
        exact
        component={isAdmin[0] ? CreateProduct : NotFound}
      />

      <Route
        path="/history"
        exact
        component={isLogged[0] ? OrderHistory : NotFound}
      />

      <Route
        path="/history/:id"
        exact
        component={isLogged[0] ? OrderDetails : NotFound}
      />

      <Route path="/cart" exact component={Cart} />

      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}

export default Pages;
