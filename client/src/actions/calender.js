import { CREATE_CALENDAR, DELETE_CALENDAR, FETCH_CALENDAR_BY_EXPERT_ID, FETCH_CALENDAR_BY_ID, UPDATE_CALENDAR } from '../constants/actionTypes';

import * as api from '../api/index.js';

/**
 * 
 * @param {String} id of the calendar 
 * @returns 
 */
export const fetchCalendarByID = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchCalendarByID(id);

    dispatch({ type: FETCH_CALENDAR_BY_ID, payload: {calendar : data }});
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * 
 * @param {String} id of the expert 
 * @returns 
 */
export const fetchCalendarByExpertID = ( id ) => async (dispatch) => {
  try {
    const calendars = await api.fetchCalendarByExpertID(id);

    dispatch( {type : FETCH_CALENDAR_BY_EXPERT_ID, payload: calendars.data} )
  } catch (error) {
    console.log(error.message);
  }
}

/**
 * 
 * @param {String} id of the expert
 * @param {calendar} calendar obj, which will used to create a new calendar
 * @returns 
 */
export const createCalendar = (id, calendar) => async (dispatch) => {
  console.log(calendar)
  try {
    const { data } = await api.createCalendar(id, calendar);

    dispatch({ type: CREATE_CALENDAR, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * 
 * @param {String} id of the expert
 * @param {calendar} calendar obj, which will used to create a new calendar
 * @returns 
 */
export const updateCalendar = (id, calendar) => async (dispatch) => {
  try {
    const { data } = await api.updateCategory(id, calendar);

    dispatch({ type: UPDATE_CALENDAR, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


/**
 * 
 * @param {String} id of the calendar 
 * @returns 
 */
export const deleteCalendar = (id) => async (dispatch) => {
  try {
    await api.deleteCalendar(id);

    dispatch({ type: DELETE_CALENDAR, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};