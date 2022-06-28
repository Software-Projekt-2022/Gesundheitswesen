import { CHECK_COOKIE, COOKIE } from "../constants/actionTypes";

import * as api from '../api/index.js';
import Cookies from "js-cookie";

const isAuthenticated = () => async (dispatch) => {

    const cookie = Cookies.get(COOKIE);
    console.log(cookie);

    const config = {
        headers: {
            'Authorization': cookie
        }
    }

    try {
      await api.checkCookie(config);

      dispatch({ type : CHECK_COOKIE, payload: true })

    } catch (error) {
      console.log(error.message);
      dispatch({ type : CHECK_COOKIE, payload: false })
    }
  };

  export default isAuthenticated