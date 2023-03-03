import { BrowserRouter as Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import Login from "../components/Connexion/Login ";

const PrivateRoute = ({ children, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Route {...rest}>
      {(() => {
        if (!authenticated) {
          console.log("Here");
          {
            /* return <Redirect to='/connexion' />; <Login></Login> */
          }
        } else {
          return children;
        }
      })()}
    </Route>
  );
};

export default PrivateRoute;
