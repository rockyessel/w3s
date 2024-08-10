import express from 'express';
import { createTTS } from '../controllers/tts.js';

const router = express.Router();
router.post('/', createTTS);

export default router;