import { CREATE_CALENDAR, FETCH_ALL_CALENDAR, UPDATE_CALENDAR, DELETE_CALENDAR, FETCH_CALENDAR_BY_EXPERT_ID } from '../constants/actionTypes';

const CalendarReducer =  (calendar = [], action) => {
    switch (action.type) {
      case FETCH_ALL_CALENDAR:
        return action.payload;
      case CREATE_CALENDAR:
        return [...calendar, action.payload];
      case UPDATE_CALENDAR:
        return calendar.map((calendar) => (calendar._id === action.payload._id ? action.payload : calendar));
      case DELETE_CALENDAR:
        return calendar.filter((calendar) => calendar._id !== action.payload);
      case FETCH_CALENDAR_BY_EXPERT_ID:
        return action.payload
      default:
        return calendar;
    }
  };

  export default CalendarReducer