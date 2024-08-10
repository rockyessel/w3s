import { w3sClient } from "../lib/configs/w3s.js";


export const PostFiles = async (request, response) => {
    try {
        const files = request?.files;
        if (Array.isArray(files)) {
            const createCIDs = files.map(async (file) => {
                try {
                    console.log('file: ', file);

                    const _file = new File([file.buffer], file.originalname, {
                        lastModified: new Date().getMilliseconds(),
                        type: request.file.type,
                    });


                    console.log('_file" ', _file)

                    const client = await w3sClient()

                    const CID = (await client.uploadFile(_file)).link().toString()

                    console.log('CID: ', CID)


                    return CID
                } catch (error) {
                    console.error('Error uploading file:', error);
                    response
                        .status(400)
                        .json({ error: 'Error uploading file.', success: false });
                    throw error;
                }
            });
            const cids = await Promise.all(createCIDs);
            response.status(201).json({ cids });
        }
    } catch (error) {
        const msg = 'Internal server error:';
        console.error(msg, error);
        response.status(500).json({ error: msg, success: false });
    }
};