import React from "react";
import Banner from "./Banner";
import usa0 from '../assets/usa0.png'
import usa1 from '../assets/usa1.png'
import usa2 from '../assets/usa2.png'
import usa3 from '../assets/usa3.png'
import usa4 from '../assets/usa4.png'


const data = {
  country:"usa",
  population: "290,342,550",
  capital: "Washington DC",
  area: "9,629,047 sq km",
  language: "English, French, Spanish",
  religion: "Protestant, Roman Catholic",
  continent:"North America",
  why:["USA has been a dream land to Indian students from quite many years... still an American degree has a great demand.&nbsp; 60,000 are Indian students, chose to study in the US last year. The sheer number of world-class institutes of higher learning is one of the key factors that have made the US the premiere destination for Indian students from all over the world. Quality standards for US institutions are among the best in the world. Another major reason that draws international students in large numbers to study in the US is the array of courses on offer from highly academic programmes like nuclear physics to very creative courses like art and film direction.","And may be the large number of scholarships USA universities provide for their students or may be the culture USA has... that draws maximum number of students every year. US universities, US colleges and USA schools constantly rank very high in world rankings, just one of the reasons to study in the US. Schools such as Harvard University, Stanford University, MIT, Julliard, Berkley School of Music, West Point, are all world famous and welcome international students. The US offers international students the most exciting, rewarding and comprehensive array of study options in the world. International students who choose to study in the US have almost unlimited study choices. Furthermore, international students who successfully complete their US study are highly sought-after by employers worldwide."],
  iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52947273.78782228!2d-161.7819503549982!3d35.90670612284416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1728984703271!5m2!1sen!2sin"
};

const USAcountry = () => {
  return (

      <Banner
      country={data.country}
        img={usa0}
        slides={[usa1,usa2,usa3,usa4]}
        population={data.population}
        capital={data.capital}
        area={data.area}
        language={data.language}
        religion={data.religion}
        continent={data.continent}
        why={data.why}
        iframe={data.iframe}
      />

  );
};

export default USAcountry;
