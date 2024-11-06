// src/pages/Services.js
import React, { useEffect } from "react";
import {  useLocation } from "react-router-dom";
import Banner from "./Banner";

const data = {
  title:"How can WWEC help you",
  // subTitle:"Worldwide Edu Consultants / Education and Careers",
  content:["We are well qualified consultants in international education. We provide complete assistance to students from scratch. Filling up application process to getting the VISA we help you out completely in every single process. Our well qualified team will guide you to the right way."]
}

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the #services section if the URL contains #services
    if (location.hash === "#services") {
      const aboutSection = document.getElementById("services");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      }
    }
  }, [location]);

  return (
    // <Banner title={data.title} subTitle={data.subTitle} content={data.content} />
    <Banner title={data.title} content={data.content} />
  );
};

export default Services;
