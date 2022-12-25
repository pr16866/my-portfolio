import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import AboutText from "./AboutText";


import AboutImage from "./AboutImage";
import Services from "./Services/Services";
import { serviceConstant } from "./Services/ServicesConst";
import Projects from "./Projects/Projects";
import clsx from "clsx";

// =========>Swiper code start <<========

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// =========>swiper code end<<================

import Heading from "./Heading/Heading";
import { getAllData } from "../utils/api";
import Loadanimation from "../loadAnimation/Loadanimation";
import TestimonialSection from "../Testimonial/TestimonialSection";
import HeroText from "./HeroText";
import WelcomeAnimation from "../Animations/WelcomeAnimation";
import HeroSection from './HeroSection/HeroSection'





SwiperCore.use([Navigation]);
 SwiperCore.use([Autoplay]);

const useStyle = makeStyles((theme) => ({
  mainBox: {
    paddingTop: "40px",
    width: "95%",
    // border: "1px solid white",
    margin: "0 auto",
    // paddingBottom: "200px",

    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  aboutBox: {
    margin: "100px 0px",

    textAlign: "center",

    gap: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      gap: "30px",
    },
  },

  textBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  ourServices: {
    display: "flex",
    justifyContent: "center",

    margin: "0 10px",
    gap: "40px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  serviceHeading: {
    color: "#a6a6a6",
    textAlign: "center",
    marginBottom: "60px",
  },
  servH1: {
    textTransform: "uppercase",
    lineHeight: "5px",
    letterSpacing: "3px",
  },
  serviceBox: {
    marginTop: "30px",
    paddingBottom: "20px",
  },
  servTypo: {
    wordSpacing: "4px",
    letterSpacing: "2px",
  },
  // ======>>css for projects<<=======

  projectBox: {
    width: "60%",
    margin: "100px auto",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  swiper: {
    "&>.swiper-button-prev": {
      color: "white",

      fontWeight: "bolder",
    },
    "&>.swiper-button-next": {
      color: "white",

      fontWeight: "bolder",
    },
  },
  footer: {
    marginTop: "100px",
  },
}));

export default function Home() {
  const classes = useStyle();

  const [details, setdetails] = useState([]);
  useEffect(() => {
    fun1();
  }, []);


  const fun1 = async () => {
    try {
      const res = await getAllData();
      // const projectdata=res.data;

      setdetails(res.data);
    } catch (er) {
      
      console.log(er);
    
    }
  };

    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      slidesPerView: 3,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
        direction:"horizontal",
            // navigation
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    };
 
  return (
    <>
      <Box className={clsx(classes.mainBox)}>
        <div className="">
          <HeroSection />
        </div>

        <Box className={classes.aboutBox}>
          <Box className={classes.textBox}>
            <AboutText />
          </Box>

          <Box className={classes.imageBox}>
            <AboutImage />
          </Box>
        </Box>
        <Box className={classes.serviceBox}>
          <Heading typo="What i Will Do For You" heading="SERVICES" />

          <Box className={clsx(classes.ourServices)}>
            {serviceConstant.map((item, index) => {
              return (
                <Box key={item.id}>
                  <Services props={item} />
                  <br /> <br />
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box className={classes.projectBox}>
          <Heading typo="See some of my projects" heading="PROJECTS" />
     {/* ================>> Swiper code start<<========== */}
          <Swiper
            className={classes.swiper}
            spaceBetween={20}
            slidesPerView={1}
            direction="horizontal"
            navigation
            // ==========>> responsivness of swiper <<============
            // autoplay
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {details.map((item, index) => {
              // if (index >= 5) return;
              return (
                <SwiperSlide key={item._id}>
                  {details ? <Projects props={item} /> : <Loadanimation />}
                </SwiperSlide>
              );
            })}
          </Swiper>

         

          {/* ==============>>Swiper code end<<============== */}
        </Box>
        {/* ==============>>testimonial code start <<=============== */}
        {/* <Box className={classes.testimonial}>
          <Heading typo="libero fuga, eius sequi" heading="quotes" />
          <TestimonialSection />
        </Box> */}

        {/* <Box className={classes.footer}>
          <FooterBanner />
          <FooterMain/>
        </Box> */}
        {/* =============>>Testimonial code end<<================ */}
      </Box>
    </>
  );
}
