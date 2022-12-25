import Mongoose from "mongoose";
const projectSchema =new Mongoose.Schema({
  projectName: {
    type: String,
    // required: true,
  },
  sourcecodeurl: {
    type: String,
    // required: true,
  },
  demourl: {
    type: String,
    // required: true,
  },
  descrition: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  publicIdimg:{
    type: String,
  }
});

const projectCollection =  Mongoose.model("projectCollection", projectSchema);
export default projectCollection;

// projectName: "",
//     sourcecodeurl: "",
//     demourl: "",
//     descrition: "",
//     image: "",