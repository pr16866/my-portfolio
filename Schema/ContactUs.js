import Mongoose from "mongoose";
const Schema =new Mongoose.Schema({
  fullName: {
    type: String,
    required: false,
  },
  email:{
    type: String,
    required: false,
  },
  phoneNo:{
    type: String,
    required: false,
  },
  message :{
    type: String,
    required: false,
  },
});

const ContactUscollection= Mongoose.model("ContactUscollection",Schema);
export default ContactUscollection;