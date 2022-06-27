import { CREATE,  DELETE, FETCH_BY_ID, FETCH_ALL } from '../constants/actionTypes';

import * as api from '../api/index.js';


export const getAppointments = () => async (dispatch) => {
    try {
      const { data } = await api.fetchCategorys();
  
      dispatch({ type: FETCH_ALL, payload: data });
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
    console.log(data)
    dispatch({ type: CREATE, payload: data.data });
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