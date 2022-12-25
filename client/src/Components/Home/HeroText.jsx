import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ServicesAnimation from "../Animations/Services";
import Buttons from "../Button/Button";

const Herotext = styled.div`
  .container {
    color: #a6a6a6;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border-top: 1px solid #a6a6a6;
    border-bottom: 1px solid #a6a6a6;
    border-radius: 16px; */
    /* width: 400px; */
    gap: 10px;
  }
  h1 {
    letter-spacing: 3px;
    font-size: 40px;
    line-height: 10px;
  }

  h2 {
    font-size: 20px;
    letter-spacing: 3px;
    line-height:40px;
  }
  .text{
    letter-spacing: 2px;
  font-size: 16px;
  }
  @media screen and (max-width: 600px){
    h1{
      font-size: 30px;
    }
  }
`;

export default function HeroText() {
  // const classes = useStyle();
  return (
    <Herotext>
      <div className="container">
        <div className="nameHeading">
          <h2>Hellow, This is </h2>
          <h1 style={{ fontFamily: "ui-serif" }}>Piyush Thakur</h1>
        </div>
        <div className="service-box">
          <ServicesAnimation />
        </div>

        <div className="text">
          This is my official portfolio website <br /> to showcase my all works
          related to web development
          <br /> and ui design
        </div>
      </div>
    </Herotext>
  );
}
