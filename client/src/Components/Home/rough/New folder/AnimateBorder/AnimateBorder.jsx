import { Box, makeStyles, Typography } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  boxes: {
    textAlign: "center",
    position: "relative",
    // width: "1260px",
    margin: "0 auto",
    "&>:nth-child(1)": {
      display: "block",
      float: "left",
      position: "relative",
      width: "400px",
      height: "350px",
      textAlign: "center",
      borderCollapse: "collapse",
      textDecoration: "none",
      color: "#fff",
      margin: "0 10px",
      // border:"1px solid white",
      "&>:nth-child(1)": {
        transition: "all 0.5s",
        paddingTop: "50px",
        paddingBottom: "60px",
        margin: "0",
        fontSize: "2em",
        textTransform: "uppercase",
      },
      "&>:nth-child(2)": {
        transition: "all 0.4s",
        fontSize: "4em",
      },
      "&>:nth-child(3)": {
        transition: "all 0.5s",
        marginTop: "70px",
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
        '&>:nth-child(1)': {
           paddingTop:'80px',
        paddingBottom:'30px',
        },
        '&>:nth-child(3)': {
     marginTop:"30px",
        },
        "&:after": {
          width:'402px',
        marginLeft:'-50%',
        borderColor:'rgba(90,90,90,1)',
        },
        '&:before': {
          height:'352px',
        top:'0%',
        borderColor:'rgba(90,90,90,1)',
        }

      },
    },
  },

  // boxes: {
  //   "&>:nth-child(1)": {
  //     color: "red",
  //     '&>:nth-child(1)': {
  //       color:"pink",
  //     }
  //   },
  // },
}));
export default function AnimateBorder() {
  const classes = useStyle();
  const { boxes, box, h3, icon, typo } = classes;
  return (
    <Box className={boxes}>
      <Box className="box">
        <h3 className="h3">web design</h3>
        <Facebook className="icon" />
        <Typography
          className="typo
     ">
          I m also MERN Stack developer. I create high performance website
          blazing fast speed.
        </Typography>
      </Box>
    </Box>
  );
}
