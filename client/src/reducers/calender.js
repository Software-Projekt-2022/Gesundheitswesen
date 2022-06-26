import { CREATE, UPDATE, DELETE, FETCH_BY_ID, FETCH_ALL } from '../constants/actionTypes';

export default (calendar = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case CREATE:
        return [...calendar, action.payload];
      case UPDATE:
        return calendar.map((calendar) => (calendar._id === action.payload._id ? action.payload : calendar));
      case DELETE:
        return calendar.filter((calendar) => calendar._id !== action.payload);
      default:
        return calendar;
    }
  };