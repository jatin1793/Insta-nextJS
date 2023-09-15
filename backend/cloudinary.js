const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: 'dpuawml6e', 
  api_key: '132717951844387', 
  api_secret: 'EHvktTK1w09muh-pMghBcuCA7sg' 
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

const uploadImage = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      console.log(error.message);
      return reject({ message: error.message });
    });
  });
};

module.exports = uploadImage;
