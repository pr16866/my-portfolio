import React from 'react'
import ContactForm from './ContactForm';
import styled from 'styled-components';
import { Email, LocationCity, PhoneAndroid } from '@material-ui/icons';
const Contacttext=styled.div`
    /* border:1px solid white; */
    cursor:pointer;
    color: white;
  .text p{
      background-color: rgb(0,0,0,0.5);
      display: flex;
      align-items: center;
      /* justify-content: center; */
      border-radius: 7px;
      gap:30px;
      padding: 10px 20px;
  }

  @media only screen and (max-width: 714px){
      
   
}
`


export default function ContactText() {
    
    return (
        <Contacttext>
         <div className="text" data-aos="fade-right">
 
  <p><span><PhoneAndroid/></span> <span>8529745331</span></p>
  <p><span><Email/></span> <span>pr16866@gmail.com</span></p>
  <p><span><LocationCity/></span> <span>Kolkata, India</span></p>
        
         </div>
           
        </Contacttext>
    )
}
