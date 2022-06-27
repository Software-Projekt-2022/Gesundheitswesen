import { FETCH_ALL_CATEGORY, CREATE_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../constants/actionTypes';

const CategoryReducer = (category = [], action) => {
    switch (action.type) {
      case FETCH_ALL_CATEGORY:
        return action.payload;
      case CREATE_CATEGORY:
        return [...category, action.payload];
      case UPDATE_CATEGORY:
        return category.map((category) => (category._id === action.payload._id ? action.payload : category));
      case DELETE_CATEGORY:
        return category.filter((category) => category._id !== action.payload);
      default:
        return category;
    }
  };

  export default CategoryReducer