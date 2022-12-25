import { Box, makeStyles, Typography } from "@material-ui/core";

import HeroText from "../HeroText";
import myimg from "../../images/my image bw.jpeg";
import WebFont from "webfontloader";

import SocialMedia from "../SocialMedia";
import ScrollBar from "../ScrollBar";
import { useEffect } from "react";


const useStyle = makeStyles((theme) => ({
  container: {
    width: "55%",
    margin: "0px auto",
    textAlign: "center",
    position: "relative",
    paddingTop: "70px",
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
  },
  heroImage: {
    width: "100%",
    height: "75vh",
    margin: "0 auto",
    border: "2px solid grey",
    [theme.breakpoints.down("xs")]: {
      // width: "60vh",
    },
    // objectFit: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // objectPosition: "top",
    // filter: "contrast(180%)",
  },
  spn: {
    color: "#b3b3b3",
    // fontFamily: "Roboto",
  },
  // heroInfo: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // infoBox: {
  //   width: "55%",
  //   textAlign: "center",
  //   position: "absolute",
  //   bottom: "10px",

  //   color: "#cccccc",
  // },
  heroHeading: {
    fontSize: "2rem",

    textAlign: "center",

    width: "100%",
    position: "absolute",
    top: "-8px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  spnName: {
    fontSize: "40px",
    color: "white",
    fontFamily: "'Roboto', sans-serif",
  },
  TextBar: {
    marginTop: "20px",
  }

  //  =========>> css for side bar <<==========
}));
export default function HeroSection() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, [])
  const classes = useStyle();
  return (
    <>
      <Box className={classes.container}>
        <h1 className={classes.heroHeading}>
          <Typography className={classes.spn}>Hello, This is</Typography>
          <Typography className={classes.spnName}>Piyush Priyam</Typography>
        </h1>
        <Box className={classes.heroImage}>
          <img src={myimg} alt="" className={classes.img} />
        </Box>
        <Box className={classes.TextBar}>
          <HeroText />
        </Box>
      </Box>

   
    
   
    </>
  );
}
