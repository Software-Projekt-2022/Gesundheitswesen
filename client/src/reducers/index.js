import { combineReducers } from "redux";

import categorys from "./categorys";
import experts from "./experts";
import calendar from "./calender";
import appointment from "./appointment";
export const reducers = combineReducers(
    {   categorys,
        experts,
        calendar,
        appointment,
   
    });