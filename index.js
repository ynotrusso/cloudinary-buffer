// Packages
const cloudinary = require("cloudinary").v2;
const DataUri = require("datauri/parser");
const path = require("path");

// Function
module.exports = async function(config, file) {
  // Config Cloudinary
  cloudinary.config({
    cloud_name: config.cloudName,
    api_key: config.apiKey,
    api_secret: config.apiSecret,
    async: true
  });
  // From buffer to URI
  let dataUri = new DataUri();
  let uri = dataUri.format(
    path.extname(file.originalname).toString(),
    file.buffer
  ).content;
  // Upload URI to Cloudinary
  let cloudinaryFile = await cloudinary.uploader.upload(uri, {
    folder: config.folder
  });
  // Return file URL
  return cloudinaryFile.url;
};
