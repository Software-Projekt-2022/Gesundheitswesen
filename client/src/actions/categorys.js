import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getCategory = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategorys();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.createCategory(category);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCategory = (id, category) => async (dispatch) => {
  try {
    const { data } = await api.updateCategory(id, category);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteCategory = (id) => async (dispatch) => {
  try {
    await api.deleteCategory(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};