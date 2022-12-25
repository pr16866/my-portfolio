import { makeStyles, Box, Typography } from "@material-ui/core";
import React from "react";
// import FooterLinks from "./FooterLinks";
// import FooterSimillar from "./FooterSimillar";

const useStyle = makeStyles((theme) => ({
  container: {
'&>:nth-child(1)':{
    '&>:nth-child(1)':{
        fontSize:"15px",
        letterSpacing:"2px",
    },
    '&>:nth-child(2)':{
        fontSize:"14px", 
        color: "#a6a6a6",
        textAlign:"center",
        
    },
},
    
}

}));

export default function FooterMain() {
  const classes = useStyle();
  const { container, mainBox, footer } = classes;

  const contactInfo = {
    number: "8529745331",
    email: "pr16866@mail.com",
    address: "manjhli chowk madhubani purnea",
  };

  return (
    <>
      <Box className={mainBox}>
        <Box className={container}>
          <Box className="footer Col1">
            <h1>Piyush Priyam</h1>
            <Typography>
              A freelance web designer and full stack developer from Kolkata
              India. I always make a website that have unique designs and also
              has a good performance rate.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
