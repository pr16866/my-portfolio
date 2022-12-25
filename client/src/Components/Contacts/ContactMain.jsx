import React from 'react'
import Heading from '../Home/Heading/Heading';
import ContactText from './ContactText';
import ContactForm from './ContactForm';
import styled from 'styled-components';
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'


const Contactmain=styled.div`
padding-top:50px;
.box{
  display:flex;
  width:90%;
  /* border:1px solid white; */
  align-items:center;
  justify-content:center;
  margin:0 auto;
  flex-wrap: wrap;
  gap:40px;

}
.seperator{
  height: 300px;
  padding: 3px;
  /* border: 14px solid black; */
  background-color: rgb(0,0,0,0.5);
  border-radius: 20px;
}
  
@media only screen and (max-width: 600px){
  .box{
    width: 100%;
  }

}
@media only screen and (max-width: 714px){
  .seperator{
    display: none;
  }
}
  
`
export default function ContactMain() {
  return (

<Contactmain>
  <Heading  typo="Get in touch" heading="Contact"/>
<div className="box">
  <ContactText/>
  <div className="seperator">
    
    </div>
<ContactForm/>

</div>
     </Contactmain>

    
    
   
  );
}
