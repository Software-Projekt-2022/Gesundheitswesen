import express from 'express';

import { createExpert, deleteExpert, getExpert, updateExpert, getExpertByID } from '../controllers/expert.js';


const router = express.Router();

router.get('/', getExpert);
router.post('/', createExpert)
router.get('/:id', getExpertByID)
router.patch('/:id', updateExpert)
router.delete('/:id', deleteExpert)

export default router;