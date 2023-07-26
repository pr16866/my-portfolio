import { Box, Typography,makeStyles } from '@material-ui/core'
import React from 'react'
import Downpng from "../../images/10.png";

const useStyle = makeStyles((theme) => ({
  mainBox: {},
  typography: {
    color: "#cccccc",
    transform: "translateY(-35px) rotate(90deg)",
    fontSize: "14px",
    letterSpacing: "3px",
  },
  arrowDownward: {
    height: "79px",
    width: "39px",
  },
  a: {
    color: "white",
    textDecoration: "none",
  },
  innerBox: {
    // border:"1px solid white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  position: "fixed",
  bottom: "227px",
    right: "-20px",
     zIndex:"10",
  },
}));
export default function ScrollBar() {
    const classes = useStyle();
  return (
    <>
      <Box className={classes.innerBox}>
        <Typography className={classes.typography}>SCROLL</Typography>
        <img src={Downpng} alt="" className={classes.arrowDownward} />
      </Box>
    </>
  );
}
