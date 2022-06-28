import React, {useState} from "react";
import { Route } from "react-router-dom";
import axios from 'axios';
import { COOKIE } from "../constants/actionTypes";

import Cookies from 'js-cookie';



const PrivateRoute = ({ component: Component, open, ...rest}) => {


  const authURL = "https://auth.cyber-city.systems/api"

  const [auth, setAuth] = useState(false);

  const setAuthentication = (bool) => setAuth(bool)

  const isAuthenticated = async () => {

    const coookie = Cookies.get(COOKIE)
    console.log(coookie)
    if(coookie === undefined)
      return false
    const config = {
        headers: {
          'Authorization': coookie
        }
      }
      try {
        await axios.get(`${authURL}/validate_token`, config).then((data) => {
            console.log(data)
            if(data.status === 200)
              setAuthentication()
            else
              setAuthentication(false)
          }
        )
      } catch (e) {
        console.log(e)
      }
  }

  const target = "https://gesundheitswesen.cyber-city.systems/"
  const redirect = `https://cyber-city.systems/login?target=${target}`

  console.log(auth)

  isAuthenticated()

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