import { Box, makeStyles, Typography } from '@material-ui/core';
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import React from 'react'
import { NavLink } from 'react-router-dom';



const useStyle=makeStyles((theme)=>({
    mainBox:{
        // border:"1px solid white",
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
      
    },
    linksBox:{
       
//         color: "#a6a6a6",
        '&>:nth-child(1)':{
            fontSize:"14px",
            color : "white",
            letterSpacing:"2px",
          },
//           '&>*':{
// fontSize:"13px"
//           },
    },
    navlink:{
        color:"#a6a6a6",
        fontSize:"13px",
    }
    
}))

export default function FooterSimillar() {
    const classes=useStyle();  
    const {mainBox,linksBox,navlink}=classes;
 
  
    return (
        <>
           <Box className={mainBox}>
            
             <Box className={linksBox}>
                  <h2>Socila<br /> Links</h2>
                <Typography> <a href="https://www.facebook.com/piyush.shandilya.7927"target="_blank"  className={navlink}><Facebook/></a> </Typography> 
                 <Typography>  <a href="https://www.instagram.com/prt_0003/" target="_blank" className={navlink}><Instagram/></a> </Typography>
                 <Typography> <a href="https://www.linkedin.com/in/piyush-priyam-189a161a2/"target="_blank"  className={navlink}><LinkedIn/></a> </Typography>
                 <Typography><a href="" target="_blank" className={navlink}><Twitter/></a> </Typography>
             </Box>
           </Box>
        </>
    )
}
