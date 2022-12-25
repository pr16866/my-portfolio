import React from "react";
import HeroText from "../HeroText";
import img from "../../../images/2.png";
import styled from "styled-components";
// import HeroText from "./HeroText";
// import {  } from "../../../images";
import myimg from "../../../images/4.png";
const HeroDiv = styled.div`
  .conatiner {
    /* border: 1px solid white; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap:70px;

  }
  .imgBox{
      width: 400px;
      height: 500px;
      /* border: 1px solid white; */
  }
  img{
      width: 100%;
      height: 100%;
  }
  @media screen and (max-width: 600px){
    .conatiner {
   
  
    gap:10px;

  }
  .imgBox{
    height: 400px;
  }

}
.srvgif{
  width: 300px;

}



`;
export default function HeroSection() {
  return (
    <HeroDiv>
      {/* <img  className="srvgif" src="https://sourav1998.github.io/img/plane.gif" alt=""  / > */}
      <div className="conatiner">
        <div className="TextBox" data-aos="fade-right">
          <HeroText />
        </div>
        <div className="imgBox" data-aos="fade-left">
          <img src={img} alt="" />
        </div>
      </div>
    </HeroDiv>
  );
}
