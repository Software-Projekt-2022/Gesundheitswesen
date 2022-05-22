import express from 'express';

import { getCategory, createCategory, updateCategory } from '../controllers/category.js'


const router = express.Router();

router.get('/', getCategory);
router.post('/', createCategory)
router.patch('/:id', updateCategory)

export default router;