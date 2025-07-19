import express from 'express';
import { getCatNames } from '../controllers/cat.controller.js';

const router = express.Router();

// GET /api/cats - returns cat names
router.get('/', getCatNames);

export default router;
