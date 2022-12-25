import cloudenery from "../cloudenerySetup/cloudenery.js";
import { sendMail } from "../Nodmailer/Nodmailer.js";
import projectCollection from "../Schema/projectSchema.js";
import ContactUscollection from "../Schema/ContactUs.js";
import env from "dotenv";
env.config();

// ============>> get all project data <<=======

export const getProjectData = async (req, res) => {
  try {
    const data = await projectCollection.find({});
    // const { p1, p2 } = req.query;
    // const data = await projectCollection.find({ _id: [p1, p2] });

    // console.log(req.query);
    res.send(data);
  } catch (er) {
    res.status(500).json({ error: er });
  }
};

// ============>> ***postproject data** <<=======
export const sendProjectData = async (req, res) => {
  try {
  } catch (er) {
    res.status(500).json({ error: er });
  }
};

// ======>> upload image on cloudenery <<========
export const addImage = async (req, res) => {
  try {
    const data = req.body.ImgData;

    const uploadedResponse = await cloudenery.uploader.upload(data, {
      upload_preset: "portfolio_projects_images",
    });

    res.send(uploadedResponse);
    // console.log(uploadedResponse);
  } catch (er) {
    res.status(500).json({ error: er });
  }
};

// ============>> post project data <<=======

export const addProject = async (req, res) => {
  try {
    let data = req.body.alldata;

    const resData = await projectCollection.insertMany([data]);

    res.send(resData);
  } catch (er) {
    console.log(er);
    res.status(500).json({ error: er });
  }
};

// ======>> contact post section <<======

export const contactusForm = async (req, res) => {
  try {
    const data = req.body;
    // sendMail(data);
    let resData = await ContactUscollection.insertMany([data]);
    // console.log(resData);
    resData ? res.send(true) : res.data(false);
  } catch (er) {
    res.status(500).json({ error: er });
  }
};

// ========>> delet project data <<========
export const dltProject = async (req, res) => {
  try {
    const findByid = await projectCollection.findById(req.params.id);
    const resData = await projectCollection.findByIdAndDelete(req.params.id);

    const uploadedResponse = findByid.publicIdimg
      ? await cloudenery.uploader.destroy(findByid.publicIdimg)
      : "";
    if (resData && uploadedResponse) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (er) {
    console.log(er);
  }
};

//  ==========>> upadate  project data <<========
export const editProject = async (req, res) => {
  try {
    const Data = req.body;
    const resData = await projectCollection.findByIdAndUpdate(req.params.id, {
      $set: Data,
    });
    // console.log(resData);
    // console.log(Data);
    // res.send("piyush");
    resData ? res.send(true) : res.send(false);
  } catch (er) {
    console.log(er);
  }
};

// ======>> update project image <<=======
export const updateImage = async (req, res) => {
  try {
    const preImgID = req.query.preImgid;
    console.log(preImgID);

    // if (preImgID) {
    const resDltimage = await cloudenery.uploader.destroy(preImgID);
    // console.log(resDltimage);
    // }

    const updateImg = req.body.imgData;
    const resNewImgUpload = await cloudenery.uploader.upload(updateImg);
    console.log(resDltimage);
    // console.log(preImgID);
    res.send(resNewImgUpload);
    console.log(resNewImgUpload);
  } catch (er) {}
};

//  ========>> get request admin section <<===========
export const adminSection = async (req, res) => {
  try {
    // console
    let adminCode = process.env.AdminCode;

    res.send(adminCode);
  } catch (er) {
    console.log(er);
  }
};

const fun1 = async () => {
  const data = await projectCollection.find({});
  console.log(data);
};

// fun1();
