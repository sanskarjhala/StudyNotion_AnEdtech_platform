const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY_CLOUDINARY,
			api_secret: process.env.API_SECRET_CLOUDINARY,
		});
	} catch (error) {
		console.log(error);
	}
};