// src/pages/About.js
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";



const Banner = (props) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the #about section if the URL contains #about
    if (location.hash === "#tests") {
      const testsSection = document.getElementById("tests");
      if (testsSection) {
        testsSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      }
    }
  }, [location]);

  return (
    <div className="grid grid-cols-5 gap-2 rounded-lg p-3 bg-[#effef6] rounded-lg max-w-[99vw] m-auto items-start bg-white text-black">
      {/* Linkes aside section */}
      <aside className=" border border-black p-3 flex flex-col hidden md:block rounded-lg bg-white text-black sticky top-[5rem]">
        <div className="flex flex-col gap-2 ">
          {/* <Link to='/tests' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">Tests</Link> */}
          <Link to='/tests/GRE' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">GRE</Link>
          <Link to='/tests/GMAT' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">GMAT</Link>
          <Link to='/tests/SAT' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">SAT</Link>
          <Link to='/tests/TOEFL' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">TOEFL</Link>
          <Link to='/tests/IELTS' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">IELTS</Link>

        </div>
      </aside>
      <div
        className="min-h-20 border border-1 border-black p-4 col-span-5 md:col-span-4 sm:grid-cols-2 rounded-lg bg-white text-black"
        id="tests"
      >
        <div className="flex gap-2 sm:block md:hidden flex-wrap m-y3 ">
          <Link to='/tests/GRE' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">GRE</Link>
          <Link to='/tests/GMAT' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">GMAT</Link>
          <Link to='/tests/SAT' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">SAT</Link>
          <Link to='/tests/TOEFL' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">TOEFL</Link>
          <Link to='/tests/IELTS' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">IELTS</Link>

        </div>

        <h2 className="text-4xl font-bold  mb-6">{props.title}</h2>
        <h4 className="text-2xl font-bold  mb-2 text-blue-500">{props.subTitle}</h4>
        {props.content.map((i, index) => {
          return <p className="text-lg py-2" key={index}>{i}</p>
        })}

        {/* <Management /> */}

      </div>
    </div>
  );
};

export default Banner;
