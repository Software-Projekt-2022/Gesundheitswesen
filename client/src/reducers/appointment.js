import { CREATE_APPOINTMENT, FETCH_APPOINTMENTS_BY_EXPERT } from "../constants/actionTypes";

const AppointmentReducer = (appointment = [], action) => {
    switch (action.type) {
      case CREATE_APPOINTMENT:
        return [...appointment, action.payload];
      case FETCH_APPOINTMENTS_BY_EXPERT:
        return action.payload;
      default:
        return appointment;
    }
  };

  export default AppointmentReducer