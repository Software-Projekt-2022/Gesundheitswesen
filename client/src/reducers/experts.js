import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (expert = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case CREATE:
        return [...expert, action.payload];
      case UPDATE:
        return expert.map((expert) => (expert._id === action.payload._id ? action.payload : expert));
      case DELETE:
        return expert.filter((expert) => expert._id !== action.payload);
      default:
        return expert;
    }
  };