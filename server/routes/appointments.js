import express from 'express';
import { createAppointment, deleteAppointment, getAppointmentByID, getAppointments } from '../controllers/appointment.js';


const router = express.Router();

router.post('/:id', createAppointment);
router.get('/:id', getAppointments)
router.get('/:id/:appointment_id', getAppointmentByID);
router.delete('/:id/:appointment_id', deleteAppointment);

export default router;