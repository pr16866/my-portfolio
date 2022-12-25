import { Box, makeStyles,Typography } from '@material-ui/core'
import React from 'react'
import AlertText from '../../alert/AlertText';
const useStyle = makeStyles((theme) => ({
  serviceHeading: {
    color: "#a6a6a6",
    textAlign: "center",
    marginBottom: "60px",
  },
  servH1: {
    textTransform: "uppercase",
    lineHeight: "5px",
    letterSpacing: "3px",
  },
  serviceBox: {
    marginTop: "30px",
    paddingBottom: "20px",
  },
  servTypo: {
    wordSpacing: "4px",
    letterSpacing: "2px",
  },
  border: {
    width: 100,
    padding: "1px",
    border: "1px solid  #b3b3b3",
    background: " #b3b3b3",
    textAlign: "center",
    margin: "0 auto",
    borderRadius: "20px",
  },

}));

export default function Heading({ typo, heading }) {
  const classes = useStyle();
  return (
    <>
      <AlertText color="success" msg="data added sucessfully" />
      <Box>
        <Box className={classes.serviceHeading}>
          <Typography className={classes.servTypo}>{typo}</Typography>
          <h1 className={classes.servH1}>{heading}</h1>
          <p
            style={{
              width: "100px",
              height: "4px",
              margin: "0 auto",
              borderRadius: "10px",
              backgroundColor: "#b3b3b3",
              marginTop: "25px",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",
            }}>
            <span
              style={{
                width: "28px",
                height: "9px",
                borderRadius: "10px",
                backgroundColor: "#ada9a9",
              }}></span>
          </p>
          {/* <Typography className={classes.border}></Typography> */}
        </Box>
      </Box>
    </>
  );
}
// #737373
// #ada9a9