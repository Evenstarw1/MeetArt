require("dotenv").config();
const cloudinary = require ('cloudinary');
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer"); 


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  var storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "MeetArt",
    allowedFormats: ["jpg", "png"],
    filename: function(req, file, cb) {
      image = new Date().getTime();
      cb(undefined, image);
    }
  });
  
  const uploadCloud = multer({ storage: storage })
  module.exports = uploadCloud;
  

