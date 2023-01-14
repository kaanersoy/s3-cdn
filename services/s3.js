const AWS = require("aws-sdk");
require("dotenv").config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadImage = async (file) => {
  const name = file.originalname;
  const extension = file.originalname.split(".")[1];

  return s3
    .putObject({
      Bucket: process.env.BUCKET_NAME,
      Key: name,
      Body: file.buffer,
      ContentType: `image/${extension}`,
    })
    .promise();
};

const getImage = async (filename) => {
  const params = { Bucket: process.env.BUCKET_NAME, Key: filename };
  const pureImage = await s3.getObject(params).promise();

  return pureImage;
};

module.exports = { s3, uploadImage, getImage };
