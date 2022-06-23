import { combineReducers } from "redux";

import categorys from "./categorys";
import experts from "./experts";
import calender from "./calender";

export const reducers = combineReducers({ categorys, experts, calender });