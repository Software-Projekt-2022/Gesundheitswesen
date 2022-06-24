import express from 'express';
import { createCalendar, getCalendarByID, updateCalendar } from '../controllers/calendar.js';


const router = express.Router();

router.post('/:id', createCalendar);
router.get('/:id', getCalendarByID);
router.patch('/:id', updateCalendar);

export default router;