import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import axios from 'axios';
import { COOKIE } from "../constants/actionTypes";

import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import isAuthenticated from "../actions/auth";



const PrivateRoute = ({ component: Component, open, ...rest}) => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    dispatch(isAuthenticated())
  }, [auth, dispatch]);

  const target = "https://gesundheitswesen.cyber-city.systems/"
  const redirect = `https://cyber-city.systems/login?target=${target}`

  console.log(auth)

  if(open){
    return(
      <Route
      {...rest}
      render={props => (
         <Component {...props} />
      )}
    />
    )
  }

  return (
    <Route
    {...rest}
    render={props => (
      auth ? <Component {...props} />
      : window.location.replace(redirect)
    )}
  />
  )
}

  export default PrivateRoute;