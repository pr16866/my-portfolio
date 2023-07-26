import { Box, makeStyles } from "@material-ui/core";

import React from "react";
import myimg from "../../images/3.png";
 import myimg2 from "../../images/my image bw.jpeg";
const useStyle = makeStyles((theme) => ({
  // mainBox: {
  // border: "5px solid white",
  // width: "50%",
  // height: "50vh",
  // textAlign: "center",
  // margin: "0 auto",
  // width: "100%",
  // display: "flex",
  // alignItems: "center",
  // justifyContent:"center",
  // },
  imageBox1: {
    width: "400px",
    height: "400px",
    // border: "1px solid red",
    // margin: "0 auto",
    position: "relative",
    borderRadius: "16px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      // border: "4px solid white",
    },
  },
  imageBox2: {
    width: "200px",
    height: "180px",

    // borderRadius:"16px",
    // display: "none",
    // border: "1px solid red",
    // margin: "0 auto",
    // marginLeft: "-100px",
    // marginTop: "-83px"
    position: "absolute",
    bottom: "0px",
    // left: "0px",
    right: "0px",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      // border: "4px solid white",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "16px",
  },
}));
export default function Image() {
  const classes = useStyle();
  const { mainBox, imageBox1, imageBox2,img } = classes;
  return (
    <>
      <Box className={mainBox} data-aos="fade-up">
        <Box className={imageBox1}>
          <img src={myimg} alt="" className={img} />
         
        </Box>
      </Box>
    </>
  );
}
