import cloudenery from 'cloudinary';
let cloud = cloudenery.v2;
import dotenv from "dotenv";
dotenv.config();  



cloud.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.API_key,
  api_secret: process.env.API_secret,
  secure: true,
});
export default cloudenery;