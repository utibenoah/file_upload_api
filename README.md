# File Upload API

A simple Express.js API for uploading image files. The project includes file validation using Multer, Cloudinary configuration support, request logging with Morgan and Winston, and central error handling.

## Features

- Accepts single image uploads via `/api/v1/file/uploadfile`
- Validates allowed image formats: `jpg`, `jpeg`, `png`, `webp`
- Limits file size to 5 MB
- Stores uploads in a local `uploads/` folder
- Cloudinary configuration available for future image cloud storage
- Logging to console and files under `logs/`

## Prerequisites

- Node.js installed
- npm available
- Cloudinary account (optional, for future cloud upload support)

## Installation

1. Clone or download the repository
2. Install dependencies

```bash
npm install
```

## Environment Variables

Copy `config.env` or create a `.env` file with the following values:

```env
PORT=3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> The Cloudinary values are loaded by `Cloudinary.js` and used by the app at startup.

## Running the App

Start the server:

```bash
node server.js
```

Or use nodemon if installed globally:

```bash
npx nodemon server.js
```

The API will run on `http://localhost:3000` by default.

## API Endpoint

### Upload Image

- URL: `/api/v1/file/uploadfile`
- Method: `POST`
- Content type: `multipart/form-data`
- Field name: `image`

### Response

- `200` or `201` on success: currently the controller validates the file and responds accordingly
- `400` when no file is provided, invalid file type, or file size exceeds limit
- `500` for internal server errors

### Example curl Request

```bash
curl -X POST http://localhost:3000/api/v1/file/uploadfile \
  -H "Content-Type: multipart/form-data" \
  -F "image=@/path/to/image.jpg"
```

## File Upload Rules

- Allowed file types: `jpg`, `jpeg`, `png`, `webp`
- Maximum file size: `5 MB`
- File field name: `image`

## Project Structure

- `app.js` - Express application configuration and route mounting
- `server.js` - Server startup and Cloudinary initialization
- `Routes/fileUploadRoutes.js` - Upload route definition
- `Controllers/fileUploadController.js` - Upload request handling and validation
- `Middlewares/multer.js` - Multer storage and file validation setup
- `Middlewares/globalErrorMiddleware.js` - Centralized error handling
- `Utils/` - Logging, error utilities, and async wrapper
- `Cloudinary.js` - Cloudinary SDK configuration

## Notes

- The current implementation validates incoming image uploads and stores files locally in `uploads/`.
- Cloudinary is configured at startup, but the current controller does not yet upload files to Cloudinary.
- Ensure the `uploads/` directory exists or create it before uploading files.

