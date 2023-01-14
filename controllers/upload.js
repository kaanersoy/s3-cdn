const { uploadImage } = require("../services/s3");

const uploadController = async (req, res) => {
  const uploadedImage = await uploadImage(req.file);
  res.send(uploadedImage);
};

module.exports = { uploadController };
