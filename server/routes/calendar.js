import express from 'express';
import { createCalendar, deleteCalendar, getCalendar, updateCalendar, getCalendarByID } from '../controllers/calendar.js';


const router = express.Router();

router.post('/:id', createCalendar);
router.get('/', getCalendar);
router.get('/:id', getCalendarByID)
router.patch('/:id', updateCalendar);
router.delete('/:id', deleteCalendar)

export default router;