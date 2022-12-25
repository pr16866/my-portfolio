import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../images/my image bw.jpeg";

const useStyle = makeStyles((theme) => ({
  projectImage: {
    width: "100%",
    height: "220px",
    // borderRadius: "17px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "1px solid grey",
    borderTopRightRadius: "17px",
    borderTopLeftRadius: "17px",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
  },
  image1: {
    width: "100%",
    height: "100%",
    // borderRadius: "17px",
    border: "1px solid grey",
  },
  projectItemInfo: {
    position: "relative",
    // marginTop: "1rem",
    background: "rgb(0,0,0,0.5)",
    color: "#a6a6a6",
    height: "100px",
    borderBottomRightRadius: "17px",
    borderBottomLeftRadius: "17px",
    // borderRadius: "16px",
    padding: "5px 15px",
    textAlign: "center",
    // border: "1px solid grey",
    "&>:nth-child(1)": {
      // fontSize: "2.2rem",
      // lineHeight: "0px",
    },
    "&>:nth-child(2)": {
      // lineHeight: "20px",
      fontSize: "13px",
    },
  },
  button: {
    // position: "fixed",
    // bottom: "0px",
    width: "96%",
    // left: "25%",
    display: "flex",
    gap: "10px",
    // border: "1px solid white",
    color: "white",
    justifyContent: "center",
    // margin: "0 auto",
  },
  projectname: {
    fontWeight: "bold",
    fontSize: "18px",
    // marginBottom:"10px",
  },
}));

export default function Projects({ props }) {
  const { projectName, sourcecodeurl, demourl, descrition, image } = props;

  const classes = useStyle();
  const { projectBox, projectImage, projectItemInfo, button, image1,projectname } = classes;
  return (
    <div>
      <Box className={classes.projectBox} data-aos="fade-up">
        <Link to="/projects" className={projectImage}>
          <img src={image ? image : img1} alt="" className={image1} />
        </Link>
        <Box className={projectItemInfo}>
          <Typography className={projectname}> {projectName.length>26?projectName.substring(0,25)+"...":projectName}</Typography>
          <Typography>{descrition.length>66?descrition.substring(0,65)+"...":descrition}</Typography>
          <Box className={button}>
            <a
              href={demourl}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
         
              <Button style={{ color: "#4d4dff" }}> Demo</Button>
            </a>
            <a
              href={sourcecodeurl}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
             
              <Button variant="outlined" style={{ color: "#4d4dff" }}>
                
                Source Code
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
