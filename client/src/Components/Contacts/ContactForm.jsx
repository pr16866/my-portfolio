import { Button } from "@material-ui/core";
import { Email, Message, Person, PhoneAndroid } from "@material-ui/icons";
import React, { useState,useRef } from "react";
import styled from "styled-components";
import { contactusForm } from "../utils/api";

import emailjs from "@emailjs/browser";

const Contact = styled.div`
  width: 50%;
  @media only screen and (max-width: 714px) {
    width: 85%;
  }

  .ccform {
    margin: 0 auto;
  }
  .ccfield-prepend {
    margin-bottom: 10px;
  }

  .ccform-addon {
    color: #ffffff;
    float: left;
    padding: 8px;
    border-radius: 8px;
    width: 8%;
    background: rgb(0,0,0,0.5);
    text-align: center;
    border-top-right-radius: 100px;
  }

  .ccformfield {
    color: #ffffff;
    background: rgb(0,0,0,0.5);
    border: none;
    padding: 15.5px;
    width: 91.9%;
    display: block;
    font-family: "Lato", Arial, sans-serif;
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 17px;
    border-top-left-radius: 0;
  }

  .ccformfield {
    font-family: "Lato", Arial, sans-serif;
  }
  .ccbtn {
    display: block;

    outline: transparent;
    background: transparent;
    cursor: pointer;

    padding: 10px 0;
    margin: 20px auto;
    background-color: #e0e0e0;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    width: 60%;
  }
  .ccbtn:hover {
    background-color: #e0d4d4;
  }
  .credit {
    color: #fff;

    clear: both;
    margin: 0 auto;
    line-height: 25px;
    padding: 25px 50px;
  }
  .credit em {
    margin-right: 5px;
  }
  .credit a {
    color: #0d2ed5;
    font-weight: bold;
    text-decoration: none;
  }
`;

export default function ContactForm() {
  const initialState = {
    fullName: "",
    email: "",
    phoneNo: "",
    message: "",
  };

  const formRef = useRef();
  // console.log(formRef);

  const [contactData, setcontactData] = useState(initialState);

  const handleChange = (e) => {
    setcontactData({ ...contactData, [e.target.name]: e.target.value });
  };

  
//  ========>> function for send Email<<==========
  

  const sendEmail = () => {
    // console.log(formRef.current);
    emailjs
      .sendForm(
        "service_fuit5pr",
        "template_o4evz5l",
        formRef.current,
        "user_8h1LVL9XNtZbvD6aeaUs0"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent to the admin sucessfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  

// =========>> function for submit form <<=============
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await contactusForm(contactData);
    console.log(res.data);
    // if (res.data){
    //   sendEmail();
    // }
    // else {
    //   alert("Message not sent to the adimn, try again");
    // }


    // res.data
    //   ? alert("Message sent to the admin sucessfully")
    //   : ;

    setcontactData(initialState);
  };
  const { fullName, email, phoneNo, message } = contactData;

  return (
    <Contact>
      <div className="wrapper" data-aos="fade-left">
        <form
          className="ccform"
          onSubmit={submitForm}
          autoComplete="off"
          ref={formRef}>
          <div className="ccfield-prepend">
            <span className="ccform-addon">
              <Person />
            </span>
            <input
              className="ccformfield"
              type="text"
              placeholder="Full Name"
              name="fullName"
              required
              value={fullName}
              onChange={handleChange}
            />
          </div>
          <div className="ccfield-prepend">
            <span className="ccform-addon">
              {" "}
              <Email />
            </span>
            <input
              className="ccformfield"
              type="email"
              name="email"
              value={email}
              required
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="ccfield-prepend">
            <span className="ccform-addon">
              <PhoneAndroid />
            </span>
            <input
              className="ccformfield"
              type="number"
              placeholder="Phone"
              name="phoneNo"
              value={phoneNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="ccfield-prepend">
            <span className="ccform-addon">
              <Message />
            </span>
            <textarea
              className="ccformfield"
              // name="comments"
              rows="8"
              placeholder="Message"
              name="message"
              onChange={handleChange}
              required
              value={message}></textarea>
          </div>
          <div className="ccfield-prepend">
            <input id="submit" className="ccbtn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Contact>
  );
}
