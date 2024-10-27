# w3s - IPFS File Upload & Text-to-Speech Service

`w3s` is a server-side application that offers developers a streamlined way to upload files to IPFS via `@web3-storage`. It also provides a text-to-speech (TTS) service, converting raw text into audio and returning the content identifier (CID) for easy access and retrieval.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- **IPFS File Upload**: Effortlessly upload single or multiple files to IPFS with CIDs returned for easy retrieval.
- **Text-to-Speech Conversion**: Send raw text to the server, which returns an audio file as a CID after conversion.
- **Integrated Web3.Storage Client**: Utilizes `@web3-storage` for reliable IPFS file handling.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/rockyessel/w3s.git
   cd w3s
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Copy the provided `.env.example` file and fill in your Web3.Storage and AWS credentials.

   ```bash
   cp .env.example .env
   ```

## Configuration

Populate your `.env` file with the necessary configuration settings:

- `AWS_ACCESS_KEY_ID` - AWS Access Key for any AWS-based services.
- `AWS_REGION` - AWS region for accessing AWS resources.
- `AWS_SECRET_ACCESS_KEY` - AWS Secret Key for secure access.
- `WEB3STORAGE_EMAIL` - Registered email address with Web3.Storage.
- `WEB3STORAGE_SPACE_DID` - Decentralized Identifier (DID) for space in Web3.Storage.

These values are essential for the Web3.Storage integration and for accessing AWS services.

## Usage

Start the server with:
```bash
npm run dev
```

The server will be running on `http://localhost:8000` by default (or the port specified in your `.env` file).

## API Endpoints

### 1. File Upload - Single File
- **Endpoint**: `POST /api/v1/file`
- **Description**: Upload a single file to IPFS.
- **Request Body**: `file` - File to upload (multipart/form-data).
- **Response**: JSON containing the CID of the uploaded file.

### 2. File Upload - Multiple Files
- **Endpoint**: `POST /api/v1/files`
- **Description**: Upload multiple files to IPFS in a single request.
- **Request Body**: `files[]` - Array of files (multipart/form-data).
- **Response**: JSON array with CIDs for each uploaded file.

### 3. Text-to-Speech (TTS)
- **Endpoint**: `POST /api/v1/tts`
- **Description**: Convert raw text into an audio file and store it on IPFS.
- **Request Body**: `text` - Raw text to convert into audio.
- **Response**: JSON containing the CID of the generated audio file.

## Web3.Storage Client

To utilize Web3.Storage effectively, `w3s` comes with a helper function for initializing the client.

```javascript
import { w3sClient } from '/lib/configs/w3s.js';

const client = await w3sClient();
// Now you can use the client to upload files to IPFS
```

The client:
- Logs in to Web3.Storage using the configured email.
- Sets the current space based on the DID provided.
- Checks and ensures an active payment plan is in place. Offers free plan (5.0 GB)

## Example Usage

```bash
curl -X POST "http://localhost:8000/api/v1/file" \
     -H "Content-Type: multipart/form-data" \
     -F "file=@path/to/your-file"
```

## Contributing

Feel free to fork, contribute, or raise issues to improve the project. We welcome contributions to expand functionality and documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.