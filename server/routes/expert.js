import express from 'express';

import { createExpert, deleteExpert, getExpert, updateExpert } from '../controllers/expert.js';


const router = express.Router();

router.get('/', getExpert);
router.post('/', createExpert)
router.patch('/:id', updateExpert)
router.delete('/:id', deleteExpert)

export default router;