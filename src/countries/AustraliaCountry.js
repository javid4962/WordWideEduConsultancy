import React from 'react'
import australia0 from '../assets/australia0.png'
import australia1 from '../assets/australia1.png'
import australia2 from '../assets/australia2.png'
import australia3 from '../assets/australia3.png'
import Banner from './Banner';



const data = {
  country:"australia",
  population: "19,731,984",
  capital: "Canberra",
  area: "7,682,300 sq km",
  language: "English",
  religion: "Anglican, Roman Catholic, Protestant",
  continent:"Australia",
  why:["Australia growing up quickly as a popular study destination among the students around the world. Most of the students go to Australia to study in the vocational education and training system and at university level. The most popular fields of study are business and management, information technology, engineering, and tourism and hospitality. Students these days are increasingly studying in a wide range of disciplines at Australian institutions.","Australia is the safe, multicultural and internationally recognized environment for further education, innovative research intensive culture and international rapport has made Australia a leading provider of top quality education to international students from all over the world.","Australia is one of the leading destinations for students who are looking to study abroad, and every year the number of international students increases. Over 500,000 international students, including 85,000 Indian students, chose to study in Australia last year. There are many factors that contribute to the popularity of Australia as a study abroad destination, with the low cost of living and tuition fees and excellent lifestyle and weather being important contributors."],
  iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61881630.54460335!2d87.2486435588796!3d-18.80015915602134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1728989729634!5m2!1sen!2sin"
};
const AustraliaCountry = () => {
  return (

     <Banner
      country={data.country}
        img={australia0}
        slides={[australia1,australia2,australia3]}
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

export default AustraliaCountry