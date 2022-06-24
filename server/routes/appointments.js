import express from 'express';
import { createAppointment, deleteAppointment, getAppointmentByID, getAppointments } from '../controllers/appointment.js';
import { createCalendar, getCalendarByID, updateCalendar } from '../controllers/calendar.js';


const router = express.Router();

router.post('/:id', createAppointment);
router.get('/:id/:appointment_id', getAppointmentByID);
router.get('/:id', getAppointments)
router.delete('/:id', deleteAppointment);

export default router;