const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

exports.connect = () => {
  return mongoose 
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => {
      console.error("DB Connection Failed");
      console.error(err);
      process.exit(1);
    });
};