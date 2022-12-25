import  Mongoose  from "mongoose";
export const connection = async(URL) => {
  try {
     await Mongoose.connect(URL, {
       useNewUrlParser: true,
     });
         console.log("db is connected");
  } catch (er) {
    console.log(er);
  }
}
