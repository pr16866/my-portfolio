import {
    Box,
    Button,
    
    makeStyles,
    TextareaAutosize,
    
  } from "@material-ui/core";
  
  // import {Image} from "cloudinary-react";
  // import {Image} from 'cloudinary-react';
  
  import { updateData } from "../MinageProjects/ProjectDashbord";
  
  import React from "react";
  import { useState, useEffect } from "react";
  import Buttons from "../../Button/Button";
  import { edit, getAllData, makeRequest,updateImage  } from "../../utils/api";
  import clsx from "clsx";
  

  import { addProject } from "../../utils/api";
  import Loadanimation from "../../loadAnimation/Loadanimation";
  import AlertText from "../../alert/AlertText";
  import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalState } from "../../GlobaleState/GlobaleState";

  const useStyle = makeStyles((theme) => ({
    mainBox: {
      width: "100%",
      paddingBottom: "50px",
    },
  
    btn: {
      textTransform: "capitilize",
  
      border: "1px solid grey",
      borderRadius: "12px",
      display: "inline-block",
      padding: "6px 15px",
    },
  
    imageBox: {
      width: "70%",
      height: "50vh",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
      border: "1px solid white",
      "&>:nth-child(1)": {
        width: "100%",
        height: "100%",
      },
    },
  
    textarea: {
      width: "90%",
      height: "30px",
      border: "none",
      marginTop: 20,
      margin: "0 auto",
      display: "block",
      fontSize: 20,
      background: "rgb(0,0,0,0.5)",
      padding: "10px",
      color: "white",
      "&:focus-visible": {
        outline: "none",
      },
    },
    form: {
      display: "flex",
    },
  
    imageText: {
      textAlign: "center",
      width: "40%",
      height: "30vh",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
    },

    submit: {
      padding: "10px",
      background: "rgb(0,0,0,0.5)",
      width: "70%",
      marginTop: "20px",
      margin: "0 auto",
      outline: "none",
      fontWeight: "bold",
    },
  
    everyinput: {
      width: "90%",
      height: "30px",
      border: "none",
      marginTop: 20,
      margin: "0 auto",
      display: "block",
      fontSize: 17,
      background: "rgb(0,0,0,0.5)",
      padding: "10px",
      color: "white",
      "&:focus-visible": {
        outline: "none",
      },
    },
    image: {
      margin: "0 auto",
    },
    form: {},
    inputbox: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    innerbox: {
      width: "60%",
  
      margin: "0 auto",
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
  }));
  export default function UpdateForm() {
    const [fileinputState, setfileinputState] = useState("");
  
    const [selectedFile, setSelectedFile] = useState();
    const [publicId, setpublicId] = useState();
    const [PreviewSource, setPreviewSource] = useState("");
    const [flag, setFlag] = useState(false);
    const [Flagforproject, setFlagforproject] = useState(false);
    const [projects, setProjects] = useGlobalState("projects");
    const { search } = useLocation();
    const id = new URLSearchParams(search).get("id");
    const [updateData, setUpdateData] = useState({});
   const initialState = {
     projectName: "",
     sourcecodeurl: "",
     demourl: "",
     descrition: "",
     image: "",
     publicIdimg: "",
   };

    const [formData, setformData] = useState(initialState);
    

    useEffect(() => {
       projects.filter((item, index) => {
        
        if (item._id === id) {
          // console.log(item);
          setformData({
            ...formData,
            projectName: item.projectName,
            sourcecodeurl: item.sourcecodeurl,
            demourl: item.demourl,
            descrition: item.descrition,
            image: item.image,
            publicIdimg: item.publicIdimg,
          });
          setUpdateData(item)
          return item;
        }
      });
      
    }, [])
    

   
    
    
    // console.log(updateData);
    const classes = useStyle();
  
    // =========>>***Code for making image into base64 start***<<=========

    const handleimage = (e) => {
      const file = e.target.files[0];
      previewFile(file);
    };

    const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      };
    };

    // =========>>***Code for making image into base64 end***<<=========
  
  
    // =====>> Code for making post request for image <<=====

    useEffect(() => {
      updateImgFun(PreviewSource);
    }, [PreviewSource]);
//   console.log(PreviewSource);
    const updateImgFun = async (PreviewSource) => {
      if (PreviewSource) {
        let ResData = await updateImage(PreviewSource,updateData.publicIdimg);
        setSelectedFile(ResData.data.url);
        setpublicId(ResData.data.public_id);
        // console.log(ResData.data.url,ResData.data.public_id);
      }
    };

//  =======>> This is for handle change function for input <<=======
   
    const handleOnChange = (e) => {
      setformData({ ...formData, [e.target.name]: e.target.value });
    };

//  =======>> This is for onclick function <<=======

    const addProject1 = (e) => {
      if (selectedFile) {
        setformData({ ...formData, image: selectedFile,publicIdimg:publicId });
      }
      
      setFlagforproject(true);
    };
  
    useEffect(() => {
  
      fun1();
  
    }, [Flagforproject]);
  
    const fun1 = async () => {

      if (Flagforproject) {

        let resData = await edit(updateData._id,formData);
        if(resData.data){
            alert("Project updated sucessfully");
            navigate("/customizeProject");
            // window.location.reload();
        }
        else{
            alert(" project not updated!! try again");
        }
      }
    };
  

    const {
      projectName,
      sourcecodeurl,
      demourl,
      descrition,
      image,
      _id
    }
      = formData;
    const {
      submit,
      mainBox,
      innerbox,
      btn,
      imageText,
      imageBox,
      aboutProject,
      textarea,
      inputbox,
      everyinput,
    } = classes;
  
  const navigate =useNavigate();
    const viewAllProject=()=>{
  navigate("/customizeProject");
    }
  
  
  
    // console.log(selectedFile);
    return (
      <>
        {flag && (
          <AlertText color="success" msg="Sucess!! Project added sucessfully" />
        )}
  
        <Box className={mainBox}>
          <Box className={innerbox}>
            <label htmlFor="imageInput">
              {PreviewSource ? (
                selectedFile ? (
                  <Box className={imageBox}>
                    <img src={PreviewSource} alt="Project-File" />
                    {/* <Image publicId={selectedFile} /> */}
                  </Box>
                ) : (
                  <Box className={imageText}>
                    <Loadanimation />
                  </Box>
                )
              ) : (
                // <Box className={imageText}>
                //   <h3> Upload project image </h3>
                //   <Typography className={btn}>Add File </Typography>
                // </Box>
                <Box className={imageBox}>
                    <img src={image} alt="Project-File" />
                   
                  </Box>
              )}
            </label>
            <input
              type="file"
              id="imageInput"
              style={{ display: "none" }}
              onChange={handleimage}
              name="image"
            />
            
  
            <Box className={inputbox}>
              <input
                placeholder="Project name..."
                name="projectName"
                style={{ outline: "none", border: "none" }}
                value={projectName}
                className={everyinput}
                
                onChange={handleOnChange}
              />
  
              <input
                placeholder="Project source code link..."
                name="sourcecodeurl"
                value={sourcecodeurl}
                onChange={handleOnChange}
                className={everyinput}
             
              />
  
              <input
                placeholder="Project demo link..."
                name="demourl"
                onChange={handleOnChange}
                value={demourl}
                className={everyinput}
                
              />
  
              <Box className={aboutProject}>
                <TextareaAutosize
                  placeholder="About project..."
                  minRows={5}
                  className={textarea}
                  name="descrition"
                  onChange={handleOnChange}
                  value={descrition}
                ></TextareaAutosize>
              </Box>
  
              <Button
                type="button"
                variant="contained"
                color="primary"
                className={clsx(submit)}
                onClick={addProject1}
              >
                Update Project
              </Button>
              <Button
                type="button"
                variant="contained"
                color="primary"
                className={clsx(submit)}
                onClick={viewAllProject}
              >
                View all project
              </Button>
            </Box>
          </Box>
  
          
      
        </Box>
      </>
    );
  }
  