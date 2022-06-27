import {  CREATE_APPOINTMENT,  FETCH_APPOINTMENTS } from '../constants/actionTypes';

export default (appointment = [], action) => {
    switch (action.type) {
      case CREATE_APPOINTMENT:
        return [...appointment, action.payload];
      case FETCH_APPOINTMENTS:
        return action.payload;
      default:
        return appointment;
    }
  };