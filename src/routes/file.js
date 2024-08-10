import express from 'express';
import { upload } from '../lib/configs/multer.js';
import { PostFile } from '../controllers/file.js';

const router = express.Router();

router.post('/', upload.single('file'), PostFile);

export default router;