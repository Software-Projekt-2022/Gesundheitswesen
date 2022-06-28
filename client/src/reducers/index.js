import { combineReducers } from "redux";

import CategoryReducer from "./categorys";
import ExpertReducer from "./experts";
import CalendarReducer from "./calender";
import AppointmentReducer from "./appointment";
import AuthReducer from "./auth";

export const reducers = combineReducers(
    {   CategoryReducer,
        ExpertReducer,
        CalendarReducer,
        AppointmentReducer,
        AuthReducer
    });