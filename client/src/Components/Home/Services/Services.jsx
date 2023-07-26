import { Box, makeStyles, Typography } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  boxes: {
    textAlign: "center",
    position: "relative",
    // width: "1260px",
    
    "&>:nth-child(1)": {
      display: "block",
      float: "left",
      position: "relative",
      width: "400px",
      height: "350px",
      textAlign: "center",
      borderCollapse: "collapse",
      textDecoration: "none",
      color: "#b3b3b3",
      margin: "0 auto",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: "150px",
        // marginBottom: "20px",
      },
      // border:"1px solid white",
      "&>:nth-child(1)": {
        transition: "all 0.5s",
        paddingTop: "50px",
        paddingBottom: "60px",
        margin: "0",
        fontSize: "2em",
        textTransform: "uppercase",
        [theme.breakpoints.down("xs")]: {
          paddingTop: "10px",
          paddingBottom: "0px",
          margin: "0",
          fontSize: "1.2em",
        },
      },
      "&>:nth-child(2)": {
        transition: "all 0.4s",
        fontSize: "4em",
        [theme.breakpoints.down("xs")]: {
          fontSize:"1.8em"
        }
      },
      "&>:nth-child(3)": {
        transition: "all 0.5s",
        marginTop: "70px",
        [theme.breakpoints.down("xs")]: {
          paddingTop: "0px",
          paddingBottom: "0px",
          margin: "0",
          // fontSize: "2em",
        },
      },
      "&:before": {
        transition: "all 0.4s",
        position: "absolute",
        content: '""',
        width: "100%",
        height: "50%",
        left: "50%",

        
        marginLeft: "-50%",
        top: "25%",
        borderColor: "rgba(200,200,200,0)",
        borderStyle: "solid",
        borderWidth: "0 1px",
        // border:"1px solid white",
      },
      "&:after": {
        transition: "all 0.4s",
        position: "absolute",
        content: '""',
        width: "50%",
        height: "100%",
        left: "50%",
        marginLeft: "-25%",
        top: "0",
        borderColor: "rgba(200,200,200,0)",
        borderStyle: "solid",
        borderWidth: "1px 0",
      },
      "&:hover": {
        color: "#4099FF",
        cursor: "pointer",
        "&>:nth-child(1)": {
          paddingTop: "80px",
          paddingBottom: "30px",
          [theme.breakpoints.down("xs")]: {
            paddingTop: "0",
            paddingBottom: "0",
          },
        },
        "&>:nth-child(3)": {
          marginTop: "30px",
          [theme.breakpoints.down("xs")]: {
            marginTop: "0",
          },
        },
        "&:after": {
          width: "402px",
          marginLeft: "-50%",
          borderColor: "rgba(90,90,90,1)",
          [theme.breakpoints.down("xs")]: {
            width: "100%",
          },
        },
        "&:before": {
          height: "352px",
          top: "0%",
          borderColor: "rgba(90,90,90,1)",
          [theme.breakpoints.down("xs")]: {
            height: "150px",
          },
        },
      },
    },
  },

}));
export default function Services({props}) {
  const classes = useStyle();
  const { boxes} = classes;
  const { icon, heading, para } = props;
  return (
    <Box className={boxes} data-aos="fade-up">
      <Box className="box">
        <h3 className="h3">{ heading}</h3>
        {icon}
        <Typography
          className="typo
     ">
         {para}
        </Typography>
      </Box>
    </Box>
  );
}

// Services();
//  const { icon, heading, para } = props;
