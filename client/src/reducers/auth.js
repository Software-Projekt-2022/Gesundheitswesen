import { CHECK_COOKIE } from "../constants/actionTypes";

const AuthReducer = (calendar = [], action) =>{
    switch (action.type) {
        case CHECK_COOKIE:
          return action.payload;
        default:
            return calendar;
    }
}

export default AuthReducer