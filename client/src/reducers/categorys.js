import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (category = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case CREATE:
        return [...category, action.payload];
      case UPDATE:
        return category.map((category) => (category._id === action.payload._id ? action.payload : category));
      case DELETE:
        return category.filter((category) => category._id !== action.payload);
      default:
        return category;
    }
  };