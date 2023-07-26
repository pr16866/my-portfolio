import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


//  user: process.env.mailId,
//     pass: process.env.passcode,




export const sendMail =async (data) => {

  let testAccount = await nodemailer.createTestAccount();


const transporter = nodemailer.createTransport({
  // service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  },
});




  const mailOptions = {
    from: data.email,
    to: "pr16866@gmail.com",
    subject: `${data.fullName} wants to contact you`,
    html: `<p style={{fontSize:"20px"}}><b>${data.message}</b> </p>`,
  };


  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      console.log("error");
    } else {
      console.log("Email sent : " + info.response);
    }
  });


};
