import { w3sClient } from "../lib/configs/w3s.js";


export const PostFiles = async (request, response) => {
    try {
        const files = request.files;
        if (Array.isArray(files) && files.length > 0) {
            const createCIDs = files.map(async (file) => {
                try {
                    console.log('file: ', file);

                    const _file = new File([file.buffer], file.originalname, {
                        lastModified: new Date().getMilliseconds(),
                        type: file.mimetype,
                    });

                    console.log('_file: ', _file);

                    const client = await w3sClient();

                    const CID = (await client.uploadFile(_file)).link().toString();

                    console.log('CID: ', CID);

                    return CID;
                } catch (error) {
                    console.error('Error uploading file:', error);
                    throw error; // Rethrow error to handle it in the outer try-catch
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
