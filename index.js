import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { createTTS } from './control.js';

const PORT = process.env.PORT || 8000;

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.post('/api/v1/tts', createTTS);

server.listen(PORT, () =>
    console.log(`Server running on: http://localhost:${PORT}`)
);


export default server