import { CREATE_EXPERT, DELETE_EXPERT, FETCH_ALL_EXPERTS, FETCH_EXPERT_BY_ID, UPDATE_EXPERT } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const fetchAllExperts = () => async (dispatch) => {
  try {
    const { data }  = await api.fetchExperts();
    console.log(data)

    dispatch({ type: FETCH_ALL_EXPERTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const fetchExpertByID = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchExpert(id);

    dispatch( {type: FETCH_EXPERT_BY_ID, payload: {expert: data } });
  } catch (error) {
    console.log(error.message);
  }
}


export const createExpert = (expert) => async (dispatch) => {
  try {
    
    const { data } = await api.createExpert(expert);

    dispatch({ type: CREATE_EXPERT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const updateExpert = (id, expert) => async (dispatch) => {
  try {
    const { data } = await api.updateExpert(id, expert);

    dispatch({ type: UPDATE_EXPERT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteExpert = (id) => async (dispatch) => {
  try {
    await api.deleteExpert(id);

    dispatch({ type: DELETE_EXPERT, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};