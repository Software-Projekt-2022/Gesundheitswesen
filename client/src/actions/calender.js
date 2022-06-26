import { CREATE, UPDATE, DELETE, FETCH_BY_ID, FETCH_ALL } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getCalendarByID = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchCalendarByID(id);

    dispatch({ type: FETCH_BY_ID, payload: {calendar : data }});
  } catch (error) {
    console.log(error.message);
  }
};

export const getCalendar = () => async (dispatch) => {
  try {
    const calendars = await api.fetchCalendar();

    dispatch( {type : FETCH_ALL, payload: calendars.data} )
  } catch (error) {
    console.log(error.message);
  }
}

export const createCalendar = (calendar, id) => async (dispatch) => {
  try {
    const { data } = await api.createCalendar(id, calendar);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCalendar = (calendar, id) => async (dispatch) => {
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