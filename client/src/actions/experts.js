import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_ID } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getExperts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchExperts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getExpertByID = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchExpert(id);

    dispatch( {type: FETCH_BY_ID, payload: {expert: data } });
  } catch (error) {
    console.log(error.message);
  }
}

export const createExpert = (expert) => async (dispatch) => {
  try {
    
    const { data } = await api.createExpert(expert);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateExpert = (id, expert) => async (dispatch) => {
  try {
    const { data } = await api.updateExpert(id, expert);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteExpert = (id) => async (dispatch) => {
  try {
    await api.deleteExpert(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};