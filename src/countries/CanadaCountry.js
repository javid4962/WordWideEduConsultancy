import React from 'react'
import canada0 from '../assets/canada0.png'
import canada1 from '../assets/canada1.png'
// import canada2 from '../assets/canada2.png'
import canada3 from '../assets/canada3.png'
import canada4 from '../assets/canada4.png'
import Banner from './Banner';



const data = {
  country:"canada",
  population: "32,207,113",
  capital: "Ottawa",
  area: "9,970,610 sq km",
  language: "English, French",
  religion: "Roman Catholic, Anglican",
  continent:"North America",
  why:["Canada has always been a first-rated study-abroad destination for students from all over the world. Canada, as a country, has constantly been ranked as a good place to live, which is true in the field of education too. Those who seek high quality in education and life can opt Canada for their studies. The education system of Canada is no doubt an outstanding system. A wide range of quality educational Institutes that offer diverse disciplines and various options is yet another reason that makes Canada a preferred study abroad destination for many students. Besides all this, Canadian qualifications are recognized internationally for their standard. "],
  iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36553983.44087083!2d-96!3d56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1728986883136!5m2!1sen!2sin"
};
const CanadaCountry = () => {
  return (

     <Banner
      country={data.country}
        img={canada0}
        // slides={[canada1, canada2, canada3,canada4]}
        slides={[canada1,canada3,canada4]}
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

export default CanadaCountry