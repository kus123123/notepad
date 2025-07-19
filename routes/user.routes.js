import express from 'express';
import { Router } from 'express';
import { getDogs } from '../controllers/user.controller.js';
const router = Router();

router.get('/', (req, res) => {
    res.send('User route is done');
    });

router.get('/dogs', getDogs);

export default router;

