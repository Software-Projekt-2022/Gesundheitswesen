import { CREATE_EXPERT, DELETE_EXPERT, FETCH_ALL_EXPERTS, FETCH_EXPERT_BY_ID, UPDATE_EXPERT } from '../constants/actionTypes';

const ExpertReducer =  (expert = [], action) => {
    switch (action.type) {
      case FETCH_ALL_EXPERTS:
        return action.payload;
      case CREATE_EXPERT:
        return [...expert, action.payload];
      case FETCH_EXPERT_BY_ID:
        return { expert: action.payload.expert}
      case UPDATE_EXPERT:
        return expert.map((expert) => (expert._id === action.payload._id ? action.payload : expert));
      case DELETE_EXPERT:
        return expert.filter((expert) => expert._id !== action.payload);
      default:
        return expert;
    }
  };

  export default ExpertReducer