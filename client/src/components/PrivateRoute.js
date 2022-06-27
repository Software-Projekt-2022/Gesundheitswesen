import React from "react";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import { EMAIL, TOKEN } from "../constants/actionTypes";

import Cookies from 'js-cookie';



const PrivateRoute = ({ component: Component, ...rest}) => {


  const authURL = "https://auth.cyber-city.systems/api"


  const isAuthenticated = async () => {

    const coookie = Cookies.get("cybercity-auth")
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
              return true
            else 
              return false
          }
        )
      } catch (e) {
        console.log(e)
        return false
      }
      
  }

  const fetchToken = async () => {
    try {
      const loginData = {"email" : "none1@mail.com", "password" : "testpw"};

      await axios.post(`${authURL}/login`, loginData
      ).then((data) => { 
        const result = data.data
        const content = result.content
        window.localStorage.setItem(TOKEN, content.jwt.token)
        window.localStorage.setItem(EMAIL, loginData.email)
      })
    } catch (e){
      console.log(e)
    }
    
    return fetch
  }

  const target = "https://gesundheitswesen.cyber-city.systems/"
  const redirect = `https://cyber-city.systems/login?target=${target}`

  return (
    <Route
    {...rest}
    render={props => (
      isAuthenticated() ? <Component {...props} />
      : window.location.replace(redirect)
    )}
  />
  
  )


}




  
  export default PrivateRoute;