import React from "react";
import { Route, Redirect, Link } from "react-router-dom";

const RedirectPage = () => {
  React.useEffect(() => {
    window.location.replace('https://www.google.com')
  }, [])
}

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated
      ? (
         <Component {...props} />
      )
      : window.location.replace('http://cyber-city.systems/login')
    )}
  />
  );
  
  export default PrivateRoute;