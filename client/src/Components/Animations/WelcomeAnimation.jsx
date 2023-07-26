import React from 'react';
import styled from 'styled-components';

const Welcome=styled.div`
    p {
  font-weight: 700;
  text-align: center;
  font-size: 30px;
  font-family: Hack, sans-serif;
  text-transform: uppercase;
  background: linear-gradient(90deg, #000, #fff, #000);
  /* background: linear-gradient(90deg, #59b256, #fff, #59b256); */
  letter-spacing: 5px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 80%;
  animation: shine 8s linear infinite;
  position: relative;
}


@keyframes shine {
  0% {
    background-position-x: -300%;
  }
  100% {
    background-position-x: 500%;
  }
}
@media screen and (max-width: 600px){
   p {
font-size: 20px;
  }

}

` 
export default function WelcomeAnimation() {
  return <Welcome>

<p>Welcome to my  profile 



</p>


  </Welcome>;
}
