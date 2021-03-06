import { CREATE_CATEGORY, DELETE_CATEGORY, FETCH_ALL_CATEGORY, UPDATE_CATEGORY } from '../constants/actionTypes';

import * as api from '../api/index.js';


export const fetchAllCategories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategorys();

    dispatch({ type: FETCH_ALL_CATEGORY, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCategory = (category) => async (dispatch) => {
  try {
    const { data } = await api.createCategory(category);

    dispatch({ type: CREATE_CATEGORY, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCategory = (id, category) => async (dispatch) => {
  try {
    const { data } = await api.updateCategory(id, category);

    dispatch({ type: UPDATE_CATEGORY, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteCategory = (id) => async (dispatch) => {
  try {
    await api.deleteCategory(id);

    dispatch({ type: DELETE_CATEGORY, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};