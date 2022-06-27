import express from 'express';
import { createCalendar, deleteCalendar, updateCalendar, getCalendarByID, getCalendarByExpertID } from '../controllers/calendar.js';


const router = express.Router();

router.post('/:id', createCalendar);
router.get('/:id', getCalendarByExpertID);
router.get('/:id', getCalendarByID)
router.patch('/:id', updateCalendar);
router.delete('/:id', deleteCalendar)

export default router;