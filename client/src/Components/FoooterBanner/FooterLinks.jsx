import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  mainBox: {
    // border:"1px solid white",
    display: "flex",
    flexDirection: "column",
    // justifyContent:"center",
    // alignItems:"center",
    // color: "#a6a6a6",
    "&>:nth-child(1)": {
      fontSize: "14px",
      color: "white",
      letterSpacing: "2px",
    },
  },
  linksBox: {
    // fontSize:"13px",
  },
  navlink: {
    fontSize: "13px",
    color: "#a6a6a6",
    textDecoration: "none",
  },
}));

export default function FooterLinks() {
  const classes = useStyle();
  const { mainBox, linksBox, navlink } = classes;
  return (
    <>
      <Box className={mainBox}>
        <h2>
          Important <br /> link
        </h2>
        <Box className={linksBox}>
          <Typography>
            {" "}
            <NavLink to="/" className={navlink}>
              {" "}
              Home
            </NavLink>{" "}
          </Typography>
          <Typography>
            {" "}
            <NavLink to="/about" className={navlink}>
              {" "}
              About
            </NavLink>{" "}
          </Typography>
          <Typography>
            {" "}
            <NavLink to="/projects" className={navlink}>
              {" "}
              Projects
            </NavLink>{" "}
          </Typography>
          <Typography>
            {" "}
            <NavLink to="/contact" className={navlink}>
              {" "}
              Contact
            </NavLink>{" "}
          </Typography>
          <Typography>
            {" "}
            <NavLink to="/adminLog" className={navlink}>
              {" "}
              Admin Section{" "}
            </NavLink>{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
