import React from 'react';
import styled from 'styled-components';



const Services=styled.div`

.title{
    height: 50px;
    overflow: hidden;
    /* border: 1px solid white; */
    text-align: center;
  }
.title-wrapper{
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;
}

@keyframes move {
  25%{
transform: translateY(-50px);
  }
  50%{
    transform: translateY(-100px);
  }
  75%{
    transform: translateY(-150px);
  }
  100%{
    transform: translateY(-200px);
  }
}
.wrapper-item{
  height: 50px;
  font-size: 30px;
  letter-spacing: 3px;
  font-weight: bold;
  color: #59b256;
  display: flex;
  align-items: center;
  justify-content: center;
}



.mainTitle{
  display: flex;
 gap: 20px;
}
.work-Heading{
  height: 50px;
  font-size: 30px;
  letter-spacing: 3px;
  font-weight: bold;
}
@media screen and (max-width: 600px){
  .wrapper-item,.work-Heading{
  font-size: 20px;
}
}
@media screen and (max-width: 400px){
  .wrapper-item,.work-Heading{
  font-size: 17px;
}
}

`
export default function ServicesAnimation() {
  return <Services>

<div className="mainTitle">
          <div className="work-Heading">I am a</div>
        <div className="title">
          <div className="title-wrapper">
            <div className="wrapper-item">Web Developer</div>
            <div className="wrapper-item">FrontEnd Developer</div>
            <div className="wrapper-item">BackEnd Developer</div>
            <div className="wrapper-item">React Developer</div>
            <div className="wrapper-item">MERNstack Developer</div>
          </div>
        </div>
        </div>
  </Services>;
}
