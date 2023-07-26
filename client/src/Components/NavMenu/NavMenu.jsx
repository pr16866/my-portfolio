import { Box, Typography, makeStyles, List, AppBar,Toolbar } from "@material-ui/core";
import '../../App.css'
import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
import  { useState } from 'react'

const useStyle = makeStyles((theme) => ({
  mainBox: {
    position: "fixed",
    zIndex: "100",
    top: 0,
    left: 0,
    width: "100%",
    padding: "1rem 0",
    background: "#262626",
  },
  innerBox: {
    // maxWidth: "1200px",
    margin: "0 auto",
    width: "95%",
    textAlign: "center",
    // border: "1px solid white",

  },
  li: {
    display: "inline-block",
    borderRadius: "8px",
    transition: "0.3s ease background-color",
    // border: "1px solid white",
    margin: "0 5px",
    "&:hover": {
      backgroundColor: "black",
      boxShadow: "0px 0px 10px rgb(64, 64, 64)",
    },
  },
  a: {
    display: "inline-block",
    padding: "0.3rem 0.8rem",
    outline: "none",
    color: "#b3b3b3",
    textDecoration: "none",
    fontSize: "15px",

    "&:hover": {
      color: " #e6e6e6",
    },
    "&.active": {
      color: "white",
    },
    
  },

}));

// const useStyle = makeStyles((theme) => ({}));
// const classes = useStyle();
export default function NavMenu() {
  const [state, setstate] = useState(true);
  const classes = useStyle();
  
  const home = (e) => {
    // e.preventDefault();

    console.log(e.key);
 }
  return (
    <>
      <Box className={classes.nav}>
        <Box className={classes.mainBox}>
          <Box className={classes.innerBox} onKeyDown={home}>
            <List className={classes.li} >
            
              
              <NavLink to="/" className={clsx(classes.a)} >
                Home
              </NavLink>
            </List>

            <List className={classes.li} >
              
              <NavLink to="/about" className={classes.a}>
                About
              </NavLink>
            </List>

            <List className={classes.li}>
              <NavLink to="/projects" className={classes.a}>
                Projects
              </NavLink>
            </List>

            <List className={classes.li}>
              
              <NavLink to="/contact" className={classes.a}>
                Contact
              </NavLink>
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
}
