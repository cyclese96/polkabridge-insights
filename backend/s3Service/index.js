const AWS = require("aws-sdk");

const uploadSingleObject = async (req) => {
  const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  });

  // console.log("req ", req.file);
  const uploadedImage = await s3
    .upload({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: req.file.originalname,
      Body: req.file?.buffer,
      ContentType: req?.file?.mimetype,
    })
    .promise();



  // console.log("uploaded image ", uploadedImage);

  const uploadedImagePath = uploadedImage?.Location;

  return uploadedImagePath;
};

module.exports = uploadSingleObject;
