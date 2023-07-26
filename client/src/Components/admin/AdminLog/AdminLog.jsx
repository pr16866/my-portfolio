import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../Home/Heading/Heading";
import { getAdmin } from "../../utils/api";


const AdminBox = styled.div`
 
 padding-top: 100px;
  .container {
    width: 50%;
    height: 50vh;
    background-color: rgb(0, 0, 0, 0.5);
    margin: 0 auto;
    color: white;
  }

  .inputBox {
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  .inputBox input {
    /* background-color: rgb(0, 0, 0, 0.5); */
    background-color: rgb(0, 0, 0,0.05);
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    display: inline-block;
    width: 99%;
    color: white;
    font-size: 20px;
    text-align: center;
  }

  button {
    width: 70%;
  }

  h2 {
    width: 30%;
    margin: 0 auto;
    text-align: center;
    border-bottom: 1px solid white;
  }
    @media screen and (max-width: 600px){
      .container{
        width: 90%;
      }
    }

`;


export default function AdminLog() {
  const [input, setinput] = useState("");
  const navigate = useNavigate();
  const LogIN = async (e) => {
    e.preventDefault();

    let resData = await getAdmin();

    if (resData.data == input) {
      navigate("/adminHome");
    } else {
      alert("Admin id is not verified");
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setinput(e.target.value);
  };

  return (
    <AdminBox>
      <div className="container">
        <Heading typo="Welcome To" heading="admin section" />
        <div className="inputBox">
          <input
            type="text"
            placeholder="Please enter the admin id"
            onChange={handleChange}
          />
          <Button variant="contained" onClick={LogIN}>
            Log In{" "}
          </Button>
        </div>
      </div>
    </AdminBox>
  );
}
