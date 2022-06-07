import { combineReducers } from "redux";

import categorys from "./categorys";
import experts from "./experts";

export const reducers = combineReducers({ categorys, experts });