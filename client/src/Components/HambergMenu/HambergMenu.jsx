import { Link, NavLink } from "react-router-dom";
import React from "react";

import { Typography, Box, makeStyles } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  Twitter,
  CloseOutlined,
  MenuOutlined,
} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  nav: {
    // background: "#000",
    position: "fixed",
    top: "0px",
    right: "0px",
    color: "#fff",
    borderRadius: "16px",
    margin: "10px 10px",
    zIndex: "100",
    width: "70px",
    // border: "1px solid red",
    zIndex: "100",
    background: "black",
   
    // boxShadow: "0px 0px 10px rgb(64, 64, 64)",
  },
  link: {
    display: "inline-block",
    padding: "10px 20px",
    textDecoration: "none",
    textTransform: "uppercase",

    color: "#b3b3b3",
    fontSize: "17px",
    wordSpacing: "4px",
    transition: "0.3s ease background-color",
    margin: "5px 0",

    "&:hover": {
      color: " #e6e6e6",
      backgroundColor: "black",
      boxShadow: "0px 0px 10px rgb(64, 64, 64)",
      borderRadius: "8px",
    },
    "&.active": {
      color: "white",
    },
  },

  mainMenu: {
    height: "400px",
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",
    zIndex: "100",

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    transition: " 1s ease top",
    display: "none",
  },
  openMenu: {
    fontSize: "2rem",
    background: "rgb(0,0,0,0.5)",
    padding: "1rem 20px",

    cursor: "pointer",
    display: "block",
    borderRadius: "16px",
  },

  closeMenu: {
    display: "block",
    position: "absolute",
    top: "0px",
    right: "0px",
    margin: "10px 10px",
    fontSize: "2rem",
    cursor: "pointer",
    background: "rgb(0,0,0,0.5)",
    padding: "1rem 22px",
    borderRadius: "16px",
    // boxShadow: "0px 0px 10px rgb(64, 64, 64)",
    // width: "70px",
  },

  fb: {
    color: "rgb(0, 110, 255)",
    fontSize: "2rem",

    cursor: "pointer",
  },
  insta: {
    color: "rgb(86, 154, 203)",
    fontSize: "2rem",

    cursor: "pointer",
  },
  twitter: {
    color: " rgb(255, 0, 191)",
    fontSize: "2rem",

    cursor: "pointer",
  },

  cmn_ico: {
    display: "inline-block",
    padding: "12px",
  },
}));
export default function HambergMenu() {
  const classes = useStyle();

  const show = () => {
    let mainMenu = document.getElementById("mainMenu");

    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
  };
  const close = () => {
    let mainMenu = document.getElementById("mainMenu");
    mainMenu.style.top = "-100%";
  };
  return (
    <>
      <Box className={classes.nav}>
        <Box className={classes.openMenu}>
          <MenuOutlined onClick={show} />
        </Box>
        <Box className={classes.mainMenu} id="mainMenu">
          <Typography>
            <NavLink  to="/" className={classes.link} onClick={close}>
              Home
            </NavLink>
          </Typography>

          <Typography>
            <NavLink to="/about" className={classes.link} onClick={close}>
              About
            </NavLink>
          </Typography>
          <Typography>
            <NavLink  to="/projects" className={classes.link} onClick={close}>
              Projects
            </NavLink>
          </Typography>
          <Typography>
            <NavLink  to="/contact" className={classes.link} onClick={close}>
              Contact
            </NavLink>
          </Typography>
         
          <Box className={classes.closeMenu}>
            <CloseOutlined onClick={close} />
          </Box>
          <span className={classes.icons}>
            <Facebook className={`${classes.fb} ${classes.cmn_ico}`} />
            <Instagram className={`${classes.insta} ${classes.cmn_ico}`} />
            <Twitter className={`${classes.twitter} ${classes.cmn_ico}`} />
          </span>
        </Box>
      </Box>
    </>
  );
}
