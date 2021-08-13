# Cloudinary Buffer

Uploads a buffer file (usually coming from a submitted form) to Cloudinary.com in a specific folder

## Install

```
$ npm install @ynotrusso/cloudinary-buffer
```

## Usage

```js
const uploadFile = require("@ynotrusso/cloudinary-buffer");

const fileURL = await uploadFile(
  {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
    folder: process.env.CLOUDINARY_AVATARS_FOLDER
  },
  req.file
);
```
