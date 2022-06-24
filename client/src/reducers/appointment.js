import { CREATE, DELETE, FETCH_BY_ID, FETCH_ALL } from '../constants/actionTypes';

export default (appointment = [], action) => {
    switch (action.type) {
      case CREATE:
        return [...appointment, action.payload];
        case FETCH_ALL:
            return action.payload;
      case DELETE:
        return appointment.filter((appointment) => appointment._id !== action.payload);
        case FETCH_BY_ID:
            return { calendar: action.payload.calendar}
      default:
        return appointment;
    }
  };