import { CREATE, UPDATE, DELETE, FETCH_BY_ID } from '../constants/actionTypes';

export default (calendar = [], action) => {
    switch (action.type) {
      case CREATE:
        return [...calendar, action.payload];
      case UPDATE:
        return calendar.map((calendar) => (calendar._id === action.payload._id ? action.payload : calendar));
      case DELETE:
        return calendar.filter((calendar) => calendar._id !== action.payload);
        case FETCH_BY_ID:
            return { calendar: action.payload.calendar}
      default:
        return calendar;
    }
  };