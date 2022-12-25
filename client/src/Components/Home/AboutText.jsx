import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Buttons, { WpButton } from '../Button/Button';
const useStyle = makeStyles((theme) => ({
  headingSecondary: {},
  mainHeading: {
    lineHeight: "0px",
  },
  aboutHeading: {
    color: "#a6a6a6",
    textAlign: "center",
    width: "400px",
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  btnBox: {
    display: "flex",
    width: "100%",
    // border: "1px solid black",
    justifyContent: "space-around",
    // alignItems:"space-arround",
    flexWrap:"wrap",
  }
  // ========>>rough<<===========
}));
export default function Text() {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.mainBox} data-aos="fade-up">
        <Box className={classes.aboutHeading}>
          <Typography className={classes.headingSecondary}>
            Let me Introduce myself
          </Typography>
          <h1 className={classes.mainHeading}>ABOUT ME</h1>
          <Typography className={classes.mainText}>
            {/* Full stack web developer with background knowledge of MERN stack with redux, along with a knack of building aplications with outmost efficiency. Strong professional with a B.TECH willing to be an asset for an orginization. */}
            Hi I am Piyush Priyam, a 23 year old Web developer, living in
            Kolkata, West Bengal, India. I am an Computer Science Engineeer
            (CSE) , currently looking for opportunities to work with awesome
            organisation and folks.
            <Box className={classes.btnBox}>
              <Buttons props="See my works" redirectPath="/projects" />
           
                <WpButton
                  props="Whatsapp Me"
                  redirectPath="whatsapp://send?phone='+91 8529745331'&text=Hellow i m interested  in your service please guide me... "
                />
            
            </Box>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
