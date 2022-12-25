import express from "express";

// import { postTestiomonial } from "../../client/src/Components/utils/api.js";
// let app = express();

let route = new express.Router();

// route.use(express.urlencoded({ extended: true }));

// route.use(express.json({ extended: true }));

route.use(express.json({ limit: "50mb" }));

route.use(express.urlencoded({ limit: "50mb" }));

import {
  addImage,
  getProjectData,
  sendProjectData,
  addProject,
  contactusForm,
  dltProject,
  editProject,
  updateImage,
  adminSection,
} from "../routesRequests/Requests.js";
// import upload from "../cloudenerySetup/cloudenery.js";

// =====> Projects routes starts<<=======

route.get("/getAllData", getProjectData);
route.get("/admin", adminSection);
route.post("/sendData", sendProjectData);
route.post("/addImage", addImage);
route.post("/addProject", addProject);

route.post("/updateImage", updateImage);
route.post("/submit", contactusForm);
route.delete("/dltProject/:id", dltProject);
route.post("/editProject/:id", editProject);
// route.post("keyWord",SearchKeyword)

// =====> Projects routes end<<=======
export default route;
