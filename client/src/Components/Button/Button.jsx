import { Box,Button,createTheme,makeStyles } from '@material-ui/core'
import { HourglassFullTwoTone } from '@material-ui/icons';

import React from 'react'
import { Link, NavLink } from 'react-router-dom';







const useStyle = makeStyles((theme) => ({
  navlink: {
    textDecoration: "none",
    color: "#a6a6a6",
    cursor: "pointer",
    display: "inline-block",
    padding: "12px 31px",
    border: "0.1px solid #a6a6a6",
    transitionProperty: "all",
    transitionDuration: "0.8s",

    zIndex: "1",
    fontStyle: "italic",

    fontSize: "17px",
    borderRadius: "8px",
    marginTop: "20px",
    fontWeight: "bold",
    "&:hover > *": {
      width: "100%",
      background: "rgba(255, 253, 253, 0.7)",
    },
    "&:hover": {
      transform: "translateX(10px)",
      color: "rgb(0, 0, 0)",
    },
  },
  spn: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "0",
    height: "100%",
    borderRadius: "8px",
    transitionProperty: "all",
    transitionTimingFunction: "linear",
    transitionDuration: "1s",
    zIndex: "-1",
  },
  [theme.breakpoints.down("xs")]: {
    navlink: {
      fontSize: "13px",
      padding: "10px 12px",
    },
  },
}));
export default function Buttons({ props, redirectPath }) {
  const classes = useStyle();
  
  return (
    <>
      <Box className="">
        <NavLink to={redirectPath} className={classes.navlink}>
          <span className={classes.spn}></span>
          {props}
        </NavLink>
      </Box>
    </>
  );
}

export const WpButton = ({ props, redirectPath }) => {
   const classes = useStyle();
  return (
    <>
      <Box className="">
        <a href={redirectPath} className={classes.navlink} target="_blank">
          <span className={classes.spn}></span>
          {props}
        </a>
      </Box>
    </>
  );
}