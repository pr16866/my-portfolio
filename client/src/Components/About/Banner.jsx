import { Button } from "@material-ui/core";
import React from "react";
// import img1 from "../../images/my image bw.jpeg";
import myimg from "../../images/4.png";
import styled from "styled-components";
import ServicesAnimation from "../Animations/Services";
const AboutPage = styled.div`
  /* border: 1px solid white; */
  /* width: 98vw; */
  padding: 90px 30px 10px 30px;
  /* padding-top: 50px; */
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  .text {
    color: #a6a6a6;
    width: 500px;
  }

  p:nth-child(1) {
    color: white;
  }

  p:nth-child(3) {
    font-size: 15px;
  }

  p:nth-child(1) span {
    text-align: center;
    display: inline-block;
    background-color: rgb(0,0,0,0.5);
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 3px;
  }

  .img {
    width: 300px;
    height: 350px;
    border: 1px solid grey;
    border-radius: 16px;
  }

  .img img {
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    border-radius: 16px;
  }

  h2 {
    letter-spacing: 2px;
    font-size: 20px;
    /* line-height: 10px; */
  }

  
  /* =======>> responsive design <<====== */
  @media only screen and (max-width: 600px) {
    .text {
      color: #a6a6a6;
      width: 100%;
    }
    .img {
      width: 100%;
    }
  }
`;
export default function Banner() {
  return (
    <AboutPage>
      <div className="container ">
        <div className="text" data-aos="fade-right">
          <p>
            Hey i am <span>Piyush Priyam</span>{" "}
          </p>
          {/* <h2>A Full Stack Mern Developer</h2> */}
          <ServicesAnimation />
          <p>
            <br /> Full stack web developer with background knowledge of MERN
            stack with redux, along with a knack of building aplications with
            outmost efficiency. Strong professional with a B.TECH willing to be
            an asset for an orginization.
          </p>
          {/* ../../images/Piyush_PRIYAM_MANUAL_CV.pdf */}
          <a
            href="/Piyush_PRIYAM_MANUAL_CV.pdf"
            download="Piyush Thakur CV"
            style={{ textDecoration: "none" }}>
            {" "}
            <Button variant="contained">Download Cv</Button>
          </a>
        </div>
        <div className="img" data-aos="fade-left">
          <img src={myimg} alt="" />
        </div>
      </div>
    </AboutPage>
  );
}
