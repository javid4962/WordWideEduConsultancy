import React from 'react'
import ireland0 from '../assets/ireland0.png'
import ireland1 from '../assets/ireland1.png'
import ireland2 from '../assets/ireland2.png'
import ireland3 from '../assets/ireland3.png'
import Banner from './Banner';



const data = {
  country:"ireland",
  population: "3,924,140",
  capital: "Dublin",
  area: "70,273 sq km",
  language: "Irish, English",
  religion: "Anglican, Roman Catholic, Protestant",
  continent:"Europe",
  why:["Irish universities offer program right from the Certificate level to the Doctoral level, and in almost all fields of study. Engineering and Technology are two areas which are quite popular among international students. One surprising fact is that Ireland is touted to be the largest exporter of IT software, worldwide!"," There are seven universities, 14 technical institutes and 24 recognised independent institutions in Ireland. There is a close association between universities and industries in Ireland, which translates into internships and employment for students after completion of their education.","The Irish education system costs of primary education upto class 8 and secondary education costs of classes 9 to 12. After a 'Senior Cycle' period of one to two years, students take up further education in universities, Institutes of Technology or colleges.","Bachelor's degrees are of three to four years duration. A subsequent Graduate diploma is of one year duration. Further, a master's level degree is from one to two years duration."],
  iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438536.57873987!2d-10.738078755149608!3d53.354293437679466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485e619e5d73698f%3A0xca9b39444d6ac68d!2sIreland!5e0!3m2!1sen!2sin!4v1728989072321!5m2!1sen!2sin"
};
const IrelandCountry = () => {
  return (

     <Banner
      country={data.country}
        img={ireland0}
        slides={[ireland1,ireland2,ireland3]}
        population={data.population}
        capital={data.capital}
        area={data.area}
        language={data.language}
        religion={data.religion}
        continent={data.continent}
        why={data.why}
        iframe={data.iframe}
      />

  )
}

export default IrelandCountry