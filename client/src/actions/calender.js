import { CREATE, UPDATE, DELETE, FETCH_BY_ID } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getCalendarByID = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCalendarByID();

    dispatch({ type: FETCH_BY_ID, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCalendar = (calendar) => async (dispatch) => {
  try {
    const { data } = await api.createCalendar(calendar);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCalendar = (id, calendar) => async (dispatch) => {
  try {
    const { data } = await api.updateCategory(id, calendar);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteCalendar = (id) => async (dispatch) => {
  try {
    await api.deleteCalendar(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};