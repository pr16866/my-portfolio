import React from "react";
import styled from "styled-components";

const EducationSection = styled.div`
  .mainBox {
    width: 60%;
    height: 40vh;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 50px;
    /* border   : 1px solid white; */
    color: #a6a6a6;
    letter-spacing: 2px;
    font-weight: bolder;
    text-transform: capitalize;
  }
  .box {
    /* border: 1px solid white; */
    display: flex;
    /* flex-wrap: wrap; */
    gap: 30px;
    /* flex:3; */
  }
  .box:nth-child(4) {
    /* border: 1px solid white; */
    margin-left: -15px;

    /* flex:5; */
  }
  .box p:nth-child(2) {
    background-color: rgb(0, 0, 0, 0.5);
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 6px;
  }
  h2 {
    margin-left: -25px;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
  /* ============>>when media size is less than or equal to 600px<<=========== */
  @media only screen and (max-width: 600px) {
    .mainBox {
      width: 90%;
      height: 40vh;
    }
  }
  h2 {
    margin-left: 0px;
  }
`;
export default function Education() {
  return (
    <EducationSection>
      <div className="mainBox " data-aos="fade-up">
        <h2>Education</h2>
        <div className="school box">
          <p>school</p>
          <p>Sr d.a.v public school purnea bihar</p>
        </div>
        <div className="college box">
          <p>collage</p>
          <p>r.l madho nager college purnea bihar</p>
        </div>
        <div className="university box">
          <p>university</p>
          <p>
            Maulana abul klam azad university of technology, kolkata west bengal
          </p>
        </div>
      </div>
    </EducationSection>
  );
}
