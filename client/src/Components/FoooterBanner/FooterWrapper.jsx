import { Box, makeStyles } from "@material-ui/core";
// import {  } from '@mui/material';
import React from "react";
import FooterLinks from "./FooterLinks";
import FooterMain from "./FooterMain";
import FooterSimillar from "./SoicialLinks";
// import FooterSocial from "./";
const useStyle = makeStyles((theme) => ({
  container: {
    background: "rgb(0,0,0,0.5)",
    color: "white",
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    margin:"0 auto",
    flexWrap:"wrap",
    padding: "20px 0px",
    // height: "20px",

    "&>*": {
      // border: "1px solid white",
      // padding: "30px"
    },
    '&>:nth-child(1)':{
        width:"350px",
        [theme.breakpoints.down("xs")]:{
            width: "90%",
            marginBottom:"20px",
        }
    }
  },
}));
export default function FooterWrapper() {
  const classes = useStyle();
  const { container, footermain, footerlinks, footersoical,footersimillar } = classes;
  return (
    <>
     <Box className={container}>
        <Box className={footermain}>
          <FooterMain />
        </Box>
        <Box className={footerlinks}>
          <FooterLinks />
        </Box>
        <Box className={footersimillar}>
          <FooterSimillar />
        </Box>
        
      </Box> 
    </>
  );
}
