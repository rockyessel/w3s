import { w3sClient } from "../lib/configs/w3s.js";


export const PostFiles = async (request, response) => {
    try {
        const files = request.files;
        if (Array.isArray(files) && files.length > 0) {
            const createCIDs = files.map(async (file) => {
                try {

                    const _file = new File([file.buffer], file.originalname, {
                        lastModified: new Date().getMilliseconds(),
                        type: file.mimetype,
                    });

                    const client = await w3sClient();

                    const CID = (await client.uploadFile(_file)).link().toString();

                    return CID;
                } catch (error) {
                    console.error('Error uploading file:', error);
                    response.status(500).json({ error: 'Error uploading file.', success: false });
                }
            });

            try {
                const cids = await Promise.all(createCIDs);
                response.status(201).json({ cids });
            } catch (error) {
                console.error('Error creating CIDs:', error);
                response.status(500).json({ error: 'Error creating CIDs.', success: false });
            }
        } else {
            response.status(400).json({ error: 'No files provided.', success: false });
        }
    } catch (error) {
        console.error('Internal server error:', error);
        response.status(500).json({ error: 'Internal server error.', success: false });
    }
};
