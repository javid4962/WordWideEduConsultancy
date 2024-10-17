// src/pages/About.js
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";



const Banner = (props) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the #about section if the URL contains #about
    if (location.hash === "#about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      }
    }
  }, [location]);

  return (
    <div className="grid grid-cols-5 gap-2 rounded-lg p-3 bg-[#effef6] rounded-lg max-w-[99vw] m-auto items-start">
      {/* Linkes aside section */}
      <aside className=" border border-r-0 border-black p-3 flex flex-col hidden md:block rounded-lg bg-black text-white sticky top-[5rem]">
        <div className="flex flex-col gap-2 ">
        <Link to='/about' className="block bg-gray-900 p-2 rounded-lg text-white hover:bg-gray-700 delay-[50ms]">About Us</Link>
        <Link to='/about/management' className="block bg-gray-900 p-2 rounded-lg text-white hover:bg-gray-700 delay-[50ms]">Management</Link>
        <Link to='/about/association' className="block bg-gray-900 p-2 rounded-lg text-white hover:bg-gray-700 delay-[50ms]">Association</Link>
        <Link to='/about/vision' className="block bg-gray-900 p-2 rounded-lg text-white hover:bg-gray-700 delay-[50ms]">Vision & Missions</Link>
       
        </div>
      </aside>
      <div
        className="min-h-20 border border-1 border-black p-4 col-span-5 md:col-span-4 sm:grid-cols-2 rounded-lg bg-black text-white"
        id="about"
      >
        
        
    <h2 className="text-4xl font-bold  mb-6">{props.title}</h2>
    <h4 className="text-2xl font-bold  mb-2 text-blue-500">{props.subTitle}</h4>
    {props.content.map((i,index)=>{
        return <p className="text-lg py-2" key={index}>{i}</p>
    })}

        {/* <Management /> */}
        <div className="flex gap-2 sm:block md:hidden flex-wrap m-y3">
        <Link to='/about' className="block bg-gray-900 p-2 rounded-lg text-white hover:bg-gray-700 delay-[50ms]">About Us</Link>
        <Link to='/about/management' className="block bg-gray-900 p-2 rounded-lg text-white hover:bg-gray-700 delay-[50ms]">Management</Link>
        <Link to='/about/association' className="block bg-gray-900 p-2 rounded-lg text-white hover:bg-gray-700 delay-[50ms]">Association</Link>
        <Link to='/about/vision' className="block bg-gray-900 p-2 rounded-lg text-white hover:bg-gray-700 delay-[50ms]">Vision & Missions</Link>
       
        </div>
      </div>
    </div>
  );
};

export default Banner;
