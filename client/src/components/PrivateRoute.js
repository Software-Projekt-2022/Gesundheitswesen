import React from "react";
import { Route } from "react-router-dom";


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated ? <Component {...props} />
      : window.location.replace('http://cyber-city.systems/login')
    )}
  />
  );
  
  export default PrivateRoute;