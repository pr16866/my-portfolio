// import logo from './logo.svg';
import "./App.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();
import Home from "./Components/Home/Home";
import NavMenu from "./Components/NavMenu/NavMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMain from "./Components/About/AboutMain";
import ProjectsMain from "./Components/Projects/ProjectsMain";
import ContactMain from "./Components/Contacts/ContactMain";
import { Box, makeStyles } from "@material-ui/core";
import HambergMenu from "./Components/HambergMenu/HambergMenu";
import FooterBanner from "./Components/FoooterBanner/FooterBanner";
// import FooterMain from './Components/FoooterBanner/FooterMain';
import FooterWrapper from "./Components/FoooterBanner/FooterWrapper";
import SocialMedia from "./Components/Home/SocialMedia";
import ScrollBar from "./Components/Home/ScrollBar";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ProjectsForm from "./Components/admin/addProjects/ProjectsForm";
import MapProjects from "./Components/admin/MinageProjects/MapProjects";
import UpdateForm from "./Components/admin/Update/UpdateForm";
import AdminLog, { adminVerified } from "./Components/admin/AdminLog/AdminLog";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const useStyle = makeStyles((theme) => ({
  mainBox: {
    // marginTop: 76,
    width: "100%",
    height: "100%",

    backgroundColor: "#262626",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },

  footer: {
    marginTop: "60px",
    // paddingBottom: "200px",
  },
  navMenu: {
    display: "block",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  hambergMenu: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));
function App() {
  const classes = useStyle();
  // AOS.init(
  //   {
  //     offset:180,
  //   duration:1000
  //   }

  // );
  // const adminSection = adminVerified;
  // console.log(adminSection);
  return (
    <>
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
     
        <Box className={classes.mainBox}>
          <Box className={classes.navMenu}>
            <NavMenu />
          </Box>
          <Box className={classes.hambergMenu}>
            <HambergMenu />
          </Box>

          <ScrollToTop />
          <div style={{paddingTop:"80px"}}>

         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactMain />} />
            <Route path="/about" element={<AboutMain />} />
            <Route path="/projects" element={<ProjectsMain />} />
            {/* ==================>>admin section<<========== */}

            <Route path="/adminLog" element={<AdminLog />} />

            <Route path="/adminHome" element={<ProjectsForm />} />
            <Route path="/customizeProject" element={<MapProjects />} />
            <Route path="/updateP" element={<UpdateForm />} />
          </Routes>

          <Box className={classes.footer} data-aos="fade-up">
            <FooterBanner />
            <FooterWrapper />
          </Box>
           </div>
        </Box>
        <ScrollBar />
        <SocialMedia />
     
    </>
  );
}

export default App;
