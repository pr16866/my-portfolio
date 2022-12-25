import { Box, makeStyles, Typography } from '@material-ui/core';
import { ArrowBack, ArrowBackRounded, ArrowBackSharp, ArrowForward, ArrowRight } from '@material-ui/icons';
import React, { useState } from 'react'
import {SwitchTransition,CSSTransition }from 'react-transition-group'
import { quotesConst } from './quotesConst';
const useStyle=makeStyles((theme)=>({
    container:{

'&>.fade-enter':{
opacity:"0"
},
'&>.fade-enter-active':{
    opacity:"1",
    transition:"250ms ease-in opacity",
    },

    '&>.fade-exit':{
        opacity:"1"
        },
        '&>.fade-exit-active':{
            opacity:"0",
            transition:"250ms ease-in opacity",
            }, 
    },
    test_info:{
borderBottom:"1px solid #a6a6a6",

        width:"37%",
        // height:"fit-content",
        
        height:"20%",
        minHeight:"20vh",
        padding:"3rem",
        display:"flex",
        flexDirection:"column",
        margin:"0px auto",
        background:"rgb(0,0,0,0.5)",
        borderRadius:"12px",
        marginTop:"5rem",
        [theme.breakpoints.down("xs")]:{
            width:"60%",
        },
        // [theme.breakpoints.down("sm")]:{

        //     width:"70%",
        // },
        '&>:nth-child(2)':{
            marginTop:"4rem",
            fontSize:"18px",
            color:"white",
            textAlign:"center",
            lineHeight:"0px",
            wordSpacing: "2px",
            letterSpacing:"3px",
        },
        '&>:nth-child(3)':{
            fontSize:"15px",
            // marginTop:"0.3rem",
            wordSpacing: "2px",
            letterSpacing:"3px",
            
            color:"#a6a6a6",
            textAlign:"center",
        }
    },
    test_desc:{
        '&>:nth-child(1)':{
            textAlign:"center",
            color:"#a6a6a6",
        }
    },
    arrows:{
color:"white",
marginTop:"10px",
display:"flex",
gap:"15px",
justifyContent:"center",
'&>:nth-child(1)':{
    background:"black",
    padding:"5px",
    border:"1px solid #a6a6a6",
    cursor:"pointer",
    color:"#a6a6a6",
},
'&>:nth-child(2)':{
    background:"black",
    padding:"5px",
    cursor:"pointer",
    border:"1px solid #a6a6a6",
    color:"#a6a6a6",
}

    }
    
}));

export default function TestimonialSection() {
    const [activeIndex, setactiveIndex] = useState(0) ;
    const activeSlide=quotesConst[activeIndex];
    const classes=useStyle();
    const {container,test_desc,test_info,arrows,prev,next}=classes;
    const handlePrev=()=>{
        if(activeIndex<=0){
            setactiveIndex(quotesConst.length-1);
        }else{
            setactiveIndex((oldIndex)=>oldIndex-1)
        }
    }
    const handleNext=()=>{
        if(activeIndex>=quotesConst.length-1){
            setactiveIndex(0);
        }else{
            setactiveIndex((oldIndex)=>oldIndex+1)
        }
    
    }
    return (
        <>
            <Box className={container}>
            <SwitchTransition>
     <CSSTransition
     key={activeSlide.id}
     timeout={300}
     classNames="fade"
     >
      <Box className={test_info}>
      <Box className={test_desc}>
<Typography>
    {activeSlide.desc}
</Typography>
          </Box>
          <h2>{activeSlide.name}</h2>
{/* <Typography>CEO, world ek pariwar</Typography> */}
      </Box>
     </CSSTransition>
   </SwitchTransition>
   <Box className={arrows}>

       <Box className={prev}
       
       onClick={handlePrev}
       role="button"
       tabIndex={0}
       onKeyDown={handlePrev}
       >
        <ArrowBack/>
       </Box>
       <Box className={next}
       onClick={handleNext}
       role="button"
       tabIndex={0}
       onKeyDown={handleNext}
       >
<ArrowForward/>
       </Box>

   </Box>

            </Box>
            
        </>
    )
}
