import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import TTSRoutes from './routes/tts.js'
import FileRoutes from './routes/file.js'
import FilesRoutes from './routes/files.js'

const PORT = process.env.PORT || 8000;

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/api/v1/tts', TTSRoutes);
server.use('/api/v1/file', FileRoutes);
server.use('/api/v1/files', FilesRoutes);

server.listen(PORT, () =>
    console.log(`Server running on: http://localhost:${PORT}`)
);


export default server