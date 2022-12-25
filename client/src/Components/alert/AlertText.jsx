import React, { useState } from 'react'

// import * as React from 'react';
// import {Alert,Stack } from '@mui/material';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert'
// import Alert from "@material-ui/lab/Alert";
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyle=makeStyles((theme)=>({
    mainbox:{
        position:"fixed",
        top:"82px",
        right:"0px",


    },

}));
export default function AlertText({color,msg}) {
    const [transitionEffect, settransitionEffect] = useState({});
    const classes=useStyle();
   

    

const addeffect=()=>{
       settransitionEffect({
        transform: 'translate(400px)',
       
    }) 
}
const myTimeout = setTimeout(addeffect, 3000);



    return (
        <>


  <Box className={classes.mainbox} style={{...transitionEffect,tranistion:"0.5s transform ease",}}>
    <Stack sx={{ width: '100%',background:"black" }} spacing={2} >
   
           {/* <Alert severity={color} style={{ backgroundColor:"black",color:"green",fontSize:"16px",fontWeight:"bold",wordSpacing:"4px"}}  className={classes.alert}>{msg}</Alert> */}
           
    </Stack>
 
</Box>

        </>
    )
}
//     {/* <Stack sx={{ width: '40%',background:"black" }} spacing={2} > */}
// {/* <Box classsName={classes.mainbox}>
//     <Alert severity={color}>{msg}</Alert>
// </Box> */}
      
//       {/* <Alert severity="warning">This is a warning alert — check it out!</Alert>
//       <Alert severity="info">This is an info alert — check it out!</Alert>
//       <Alert severity="success">This is a success alert — check it out!</Alert> */}
//     {/* </Stack> */}