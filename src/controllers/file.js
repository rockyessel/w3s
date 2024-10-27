import { w3sClient } from "../lib/configs/w3s.js";


export const PostFile = async (request, response) => {
    try {
        if (!request.file) {
            return response.status(400).json({ error: 'No file' });
        }
        const fileBuffer = request.file.buffer;
        const _file = new File([fileBuffer], request.file.originalname, {
            lastModified: new Date().getMilliseconds(),
            type: request.file.mimetype,
        });

        const client = await w3sClient()

        const CID = (await client.uploadFile(_file)).link().toString()

        return response.json({ cids: CID });

    } catch (error) {
        const msg = 'Internal server error:';
        console.error(msg, error);
        return response.status(500).json({ error: msg, success: false });
    }
};
