import React from 'react'
import styled from "styled-components"


const EducationSection=styled.div`
margin-bottom: -50px;
.mainBox{
    width: 60%;
 height: 40vh;
margin: 0 auto;
  
  color: #a6a6a6;
  letter-spacing: 2px;
  font-weight: bolder;


}
 .box{
     /* border: 1px solid white; */
     display: flex;
     
     gap: 30px;
     /* flex:3; */
  
 }
 .box:nth-child(4){
     /* border: 1px solid white; */
     margin-left:-15px;
     
     /* flex:5; */
 }
.box p:nth-child(2){
    /* background-color: black; */
    /* padding: 5px 10px; */
    font-size: 14px;
    flex-wrap: wrap;
    display: flex;
    gap: 20px;
} 
.box p:nth-child(2) span{
    background-color: rgb(0,0,0,0.5);
    border-radius: 6px;
    padding: 5px 10px;
    letter-spacing: 3px;
}
h2{
    margin-left:-25px;
    text-transform: uppercase;
    letter-spacing: 4px;
}
/* ============>>when media size is less than or equal to 600px<<=========== */
@media only screen and (max-width: 600px) {
    .mainBox{
        /* margin-bottom: -81px; */
    width: 90%;
 height: 40vh;}
 h2{
    margin-left:0px;
    /* text-transform: uppercase;
    letter-spacing: 4px; */
}

}

`
export default function SkillSection() {
    return (
        <EducationSection>
           <div className="mainBox " data-aos="fade-up">

          <h2>MY SKills</h2>
          <div className="school box">
              <p>FrontEnd</p>
              <p>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
              </p>
          </div>
        <div className="college box">
            <p>BackEnd</p> 
            <p><span>Node</span>
            <span>Express</span>
            <span>MogoDB</span>
            </p>
        </div>
   

           </div>
        </EducationSection>
    )
}
