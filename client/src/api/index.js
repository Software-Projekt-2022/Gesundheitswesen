import axios from 'axios';


//const url = 'http://localhost:5000/api'
const url = 'https://gesundheitswesen.cyber-city.systems/api'
const categoryUrl = `${url}/category`
const expertUrl = `${url}/expert`
const appointmentURL = `${url}/appointment`
const calendarURL = `${url}/calendar`
const authURL = "https://auth.cyber-city.systems/api"


export const fetchCategorys = () => axios.get(categoryUrl);
export const createCategory = (category) => axios.post(categoryUrl, category);
export const updateCategory = (id, updatedCategory) => axios.patch(`${categoryUrl}/${id}`, updatedCategory);
export const deleteCategory = (id) => axios.delete(`${categoryUrl}/${id}`);

export const fetchExperts = () => axios.get(expertUrl);
export const fetchExpert = (id) => axios.get(`${expertUrl}/${id}`);
export const createExpert = (expert) => axios.post(expertUrl, expert);
export const updateExpert = (id, updatedCategory) => axios.patch(`${expertUrl}/${id}`, updatedCategory);
export const deleteExpert = (id) => axios.delete(`${expertUrl}/${id}`);

export const fetchAppointments = (id) => axios.get(`${appointmentURL}/${id}`);
export const createAppointment = (id, appointment) => axios.post(`${appointmentURL}/${id}}`, appointment);
export const fetchAppointmentByID = (id, appointment_id) => axios.get(`${appointmentURL}/${id}/${appointment_id}`);
export const deleteAppointment = (id, appointment_id) => axios.delete(`${appointmentURL}/${id}/${appointment_id}`);


export const createCalendar = (id, calendar) => axios.post(`${calendarURL}/${id}`, calendar);
export const fetchCalendarByID = (id) => axios.get(`${calendarURL}/${id}`);
export const fetchCalendarByExpertID = (id) => axios.get(`${calendarURL}/${id}`)
export const updateCalendar = (id) => axios.patch(`${calendarURL}/${id}`);
export const deleteCalendar = (id) => axios.delete(`${calendarURL}/${id}`);

export const checkCookie = (config) => axios.get(`${authURL}/validate_token`, config);