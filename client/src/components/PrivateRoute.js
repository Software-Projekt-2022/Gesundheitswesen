import React from "react";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import { EMAIL, TOKEN } from "../constants/actionTypes";




const PrivateRoute = ({ component: Component, isAuthenticated, ...rest}) => {

  const authURL = "https://auth.cyber-city.systems/api"

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

  const proofToken = async () => {
    const token = window.localStorage.getItem(TOKEN)
    const data  = {}
    const config = {
      headers: {
        'Authorization': token
      }
    }
    
    try {
      await axios.get(`${authURL}/validate_token`, config).then(
        (data) => console.log(data)
      )

    } catch (e) {
      console.log(e)
    }
  }
  
  useEffect(() => {
   fetchToken()
   proofToken()
  }, []);

  return (
    <Route
    {...rest}
    render={props => (
      isAuthenticated ? <Component {...props} />
      : window.location.replace('http://cyber-city.systems/login')
    )}
  />
  
  )


}




  
  export default PrivateRoute;