import express from 'express';
import { upload } from '../lib/configs/multer.js';
import { PostFiles } from '../controllers/files.js';

const router = express.Router();

router.post('/', upload.array('files', 10), PostFiles);

export default router;