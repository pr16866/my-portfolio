import { Box, Typography,makeStyles, Button } from '@material-ui/core'

import React from 'react'
import { useNavigate } from 'react-router-dom';




const useStyle=makeStyles((theme)=>({

mainBox:{

display:"flex",

flexDirection:"column",

width:"30%",

height:"30%",
marginBottom:"20px",
// border:"1px solid white",

alignItems:"center",

gap:"0px",

margin:"0 auto",

// color:"white",

background:"rgb(0,0,0,0.5)",

borderRadius:"16px",
color: "#a6a6a6",

padding:"20px 0",
[theme.breakpoints.down("xs")]:{

    width:"90%",
},
[theme.breakpoints.down("sm")]:{

    width:"80%",
},
'&>:nth-child(2)':{
    lineHeight:"0px",
    letterSpacing: "3px",
    wordSpacing:"2px",
    fontSize:"25px",
},
'&>:nth-child(1)':{
    
    letterSpacing: "2px",
    fontSize:"12px",
},
'&>:nth-child(3)':{
    // lineHeight:"0px",
    // marginBottom:"10px",
    marginTop:"10px",
},
},

}));

export default function FooterBanner() {
    const classes=useStyle();
    const {mainBox}=classes;
    const navigate=useNavigate();
const contactBtn=()=>{
navigate("/contact");
}

    return (
        <>
        <Box className={mainBox}>
           
         
        <Typography>Have a project in mind</Typography>
              <h2>Let me help you</h2>
        {/* <Buttons props="Contact Now" redirectPath="/" /> */}
        <Button variant="contained"onClick={contactBtn}>Contact Now</Button>



        </Box>
            
        </>
    )
}
