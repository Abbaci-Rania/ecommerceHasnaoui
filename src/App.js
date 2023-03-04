import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/StockLimite/Data";
import Footer from "./common/footer/Footer";
import Cart from "./common/Cart/Cart";
import DetailsPage from "./components/ProductDetails/DetailsPage";
import Login from "./components/Connexion/Login ";
import Register from "./components/Connexion/Register";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";
import HeaderWrapper from "./common/header/HeaderWrapper";
import EditProfile from "./components/EditProfile/EditProfile";

function App() {
  const { productItems } = Data;
  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <AuthProvider>
          <HeaderWrapper CartItem={CartItem} />
          <Switch>
            <Route exact path="/">
              <Pages productItems={productItems} addToCart={addToCart} />
            </Route>
            {/* <PrivateRoute path="/" exact>
              <Pages productItems={productItems} addToCart={addToCart} />
            </PrivateRoute> */}
            <Route exact path="/connexion">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/cart">
              <Cart
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
            </Route>
            <Route exact path="/detail/:id">
              <DetailsPage />
            </Route>
            <Route exact path="/edit">
              <EditProfile />
            </Route>
          </Switch>
          {/* <Footer /> */}
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
