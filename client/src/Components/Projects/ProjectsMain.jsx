import React, { useEffect, useState } from "react";
import Projects from "../Home/Projects/Projects";
import { getAllData } from "../utils/api";
import styled from "styled-components";


const Mainbox = styled.div`
  .box {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;

    align-items: center;
    justify-content: center;
  }
  .projectbox {
    width: 400px;
    height: 400px;
  }

  /* ==========>> css for styled search baar starts <<=========== */

  #searchBar {
    width: 130px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: white;
    background-color: #000000;
    background-image: url("searchicon.png");
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    margin: 30px 20px;

    -webkit-transition: width 0.4s ease-in-out;
    border: none;
    outline: none;
    transition: width 0.4s ease-in-out;
    border-radius: 13px;
  }
  #searchBar:focus {
    width: 50%;
  }

  /* ==========>> css for styled search baar end <<=========== */

  /* ===========>> responsive css start<<=========== */

  @media screen and (max-width: 600px) {
    .projectbox {
      width: 80%;
      margin-bottom: -50px;
    }
    .box{
gap: 0;
margin-bottom: -10px;
    } 
    #searchBar:focus {
      width: 70%;
    }
  }

  /* ===========>> responsive css end<<=========== */
`;

export default function ProjectsMain() {
  const [details, setdetails] = useState([]);
  const [ddetails, setdDetails] = useState([]);
  const [Input, setInput] = useState();
  useEffect(() => {
    fun1();
  }, []);

  // useEffect(() => {
  //   keywordSearch();
  // }, [Input]);

  // const keywordSearch = () => {
  //   if (!Input) {
  //     setdetails(resetDetails);
  //   } else {
  //     setdetails(
  //       details.filter((item) => {
  //         return item.projectName
  //           .toUpperCase()
  //           .trim()
  //           .includes(Input.toUpperCase().trim());
  //       })
  //     );
  //   }
  // };

  const fun1 = async () => {
    try {
      const res = await getAllData();
      setdDetails(res.data);
      setdetails(res.data);
    } catch (er) {
      console.log(er);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value) {
      let data = ddetails.filter((item, index) => {

        let numval = item.projectName
          .toUpperCase()
          .trim()
          .search(e.target.value.toUpperCase());
        console.log(numval);

        if (numval >= 0) {
          return item;
        }
      });
      setdetails(data);
      
    } 
    else {
      setdetails(ddetails);
    }
   
  };

 

  return (
    <Mainbox>
      <input
        type="text"
        name=""
        id="searchBar"
        onChange={handleChange}
        placeholder="Search.."
      />
      

      <div className="box">
        {details.map((item, index) => {
          return (
            <div className="projectbox" key={item._id} data-aos="fade-up">
              <Projects props={item} />
            </div>
          );
        })}
      </div>
    </Mainbox>
  );
}
