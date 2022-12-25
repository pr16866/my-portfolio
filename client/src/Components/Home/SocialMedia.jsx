import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import Downpng from '../../images/10.png'
import { Facebook, Instagram, Twitter, LinkedIn } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  typography: {
    color: "#cccccc",
    transform: "translateY(-35px) rotate(90deg)",
    fontSize: "14px",
    letterSpacing: "3px",
  },
  arrowDownward: {
    // backgroundColor:"white",
    // webkitFilter: "invert(1)",
    height: "79px",
    width: "39px",
  },
  a: {
    color: "#cccccc",
    textDecoration: "none",

    "& > *": {
      fontSize: "14px",
    },
    "&:hover": {
      
    }
  },
  innerBox: {
    // border:"1px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mainBox: {
    position: "fixed",
    bottom: "0px",
    left: "-20px",
  },
}));
export default function SocialMedia() {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.mainBox}>
        <Box className={classes.innerBox}>
          <Typography className={classes.typography}>FOLLOW</Typography>

          <img src={Downpng} alt="" className={classes.arrowDownward} />

          <Box className={classes.fbBox}>
            <a href="https://www.facebook.com/piyush.shandilya.7927" target="_blank" className={classes.a}>
              <Facebook />
              
            
            </a>
          </Box>
          <Box className={classes.instaBox}>
            <a href="https://www.instagram.com/prt_0003/" target="_blank" className={classes.a}>
              <Instagram/>
            </a>
          </Box>
          <Box className={classes.twitterBox}>
            <a href="#" target="_blank" className={classes.a}>
              <Twitter/>
            </a>
          </Box>
          <Box className={classes.lkndnBox}>
            <a href="https://www.linkedin.com/in/piyush-priyam-189a161a2/" target="_blank" className={classes.a}>
            <LinkedIn/>
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
}
