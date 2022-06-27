import { DELETE, FETCH_BY_ID, FETCH_APPOINTMENTS, CREATE_APPOINTMENT } from '../constants/actionTypes';

import * as api from '../api/index.js';


export const fetchAppointments = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchAppointments(id);
    
      dispatch({ type : FETCH_APPOINTMENTS, payload: data })
    } catch (error) {
      console.log(error.message);
    }
  };

export const getAppointmentByID = (id, appointment_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchAppointmentByID(id, appointment_id);

    dispatch({ type: FETCH_BY_ID, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAppointment = (id ,appointment) => async (dispatch) => {
  try {
    const  data  = await api.createAppointment(id, appointment);

    dispatch({ type: CREATE_APPOINTMENT, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteAppointment = (id, appointment_id) => async (dispatch) => {
  try {
    await api.deleteAppointment(id, appointment_id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};