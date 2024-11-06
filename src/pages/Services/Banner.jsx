// src/pages/About.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";



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
    <div className="rounded-lg p-3 bg-[#effef6] rounded-lg max-w-[99vw] m-auto items-start">

      <div
        className="min-h-20 border border-1 border-black p-4 col-span-5 md:col-span-4 sm:grid-cols-2 rounded-lg bg-white text-black"
        id="services"
      >


        <h2 className="text-4xl font-bold  mb-6">{props.title}</h2>
        {props.content.map((i, index) => {
          return <p className="text-lg py-2" key={index}>{i}</p>
        })}

        <div className="m-3 text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <ul style={{ listStyle: 'disc' }} >
            <h1 className="text-lg text-blue-700 font-bold">Career Counseling</h1>
            <div className="m-2">
              <li>About Specialization</li>
              <li>About Different Countries </li>
              <li>About Scores</li>
              <li>Coaching</li>
              <li>Right time to Apply</li>
              <li>Expenditur</li>
            </div>
          </ul>
          <ul style={{ listStyle: 'disc' }} >
            <h1 className="text-lg text-blue-700 font-bold">University Selection According to Profile</h1>
            <div className="m-2">
              <li>GRE / GMAT / SAT / USMLE / PLAB</li>
              <li>TOEFL / IELTS / PTE</li>
              <li>Academic Percentage</li>
              <li>Number of Backlogs</li>
            </div>
          </ul>
          <ul style={{ listStyle: 'disc' }} >
            <h1 className="text-lg text-blue-700 font-bold">Online Application</h1>
            <div className="m-2">
              <li>Filling</li>
              <li>University Application Form</li>
              <li>Departmental Forms</li>
              <li>Scholarship Forms</li>
              <li>Additional Forms</li>
            </div>
          </ul>
          <ul style={{ listStyle: 'disc' }} >
            <h1 className="text-lg text-blue-700 font-bold">Mailing / Courier the Documents to Universities</h1>
            <div className="m-2">
              <li> Check List</li>
              <li> By DHL / Blue Dart</li>
              
            </div>
          </ul>
          <ul style={{ listStyle: 'disc' }} >
            <h1 className="text-lg text-blue-700 font-bold">Tracking with the Universities</h1>
            <div className="m-2">
              <li>  Mailing to International Students Admission Department</li>
              <li>  Calling to International Students Admission Department</li>
              
            </div>
          </ul>
          <ul style={{ listStyle: 'disc' }} >
            <h1 className="text-lg text-blue-700 font-bold">Complete Visa Guidance</h1>
            <div className="m-2">
              <li> Visa Fee</li>
              <li> Visa Forms (DS-160) Filling</li>
              <li> SEVIS Fee </li>
              <li> Visa Appointment </li>
              <li> Guidance for VISA Documentation</li>
            </div>
          </ul>
          <ul style={{ listStyle: 'disc' }} >
            <h1 className="text-lg text-blue-700 font-bold">Post Visa Guidance</h1>
            <div className="m-2">
              <li>Flight ticket booking</li>
              <li>Accommodation</li>
              <li>Scholarships</li>
              <li>Part time jobs </li>
              <li>CPT / Internships</li>
              <li>Industrial Projects</li>
              <li>Real Time Jobs</li>
              <li>OPT / PSW</li>
              <li>H1B / HSMP / Work Permit</li>
              <li>Green card / PR</li>
              <li> Citizenship</li>
            </div>
          </ul>
          <ul style={{ listStyle: 'disc' }} >
            <h1 className="text-lg text-blue-700 font-bold">Visa Mock-Interviews</h1>
            <div className="m-2">
              <li>Training on all types of VISA FAQ’S</li>
            </div>
          </ul>
        

        </div>

      </div>
    </div>
  );
};

export default Banner;
