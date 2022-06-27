import { FETCH_APPOINTMENT_BY_ID, FETCH_APPOINTMENTS_BY_EXPERT, CREATE_APPOINTMENT, DELETE_APPOINTMENT } from '../constants/actionTypes';

import * as api from '../api/index.js';


export const fetchAppointmentsOfExpert = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchAppointments(id);
    
      dispatch({ type : FETCH_APPOINTMENTS_BY_EXPERT, payload: data })
    } catch (error) {
      console.log(error.message);
    }
  };

export const getAppointmentByID = (id, appointment_id) => async (dispatch) => {
  try {
    const { data } = await api.fetchAppointmentByID(id, appointment_id);

    dispatch({ type: FETCH_APPOINTMENT_BY_ID, payload: data });
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

    dispatch({ type: DELETE_APPOINTMENT, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};