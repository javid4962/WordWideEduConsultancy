import React from 'react'
import nz from '../assets/nz.png'
import nz2 from '../assets/nz2.png'
import nz3 from '../assets/nz3.png'
import nz4 from '../assets/nz4.png'
import Banner from './Banner';



const data = {
  country:"new zealand",
  population: "3,951,307",
  capital: "Wellington",
  area: "270,534 sq km",
  language: "English, Maori",
  religion: "Protestant, Buddhist",
  continent:" Australasia",
  why:["New Zealand is a beautiful and sparsely populated multicultural nation with a population of approximately 3.5 million people. Most New Zealanders are of British or European descent, with approximately 18% of the population having Maori or Pacific Island origins. There are also large numbers of other nationalities in New Zealand and recently, increasing numbers of people from Asian countries have taken up residence in New Zealand."," The dramatic and varied landscapes draw visitors from all over the world. There are high snow-clad mountains, fiords, large forests, lakes, lush plains, surf beaches and quiet coastal inlets. In New Zealand the tourist and recreational areas are often only one or two hours’ drive from major cities and can be accessed without great expense."," Most visitors find New Zealanders friendly, easy-going people who are interested in meeting those from other cultures and in travelling overseas. NZ is a very sports-oriented country, most New Zealanders take part in or watch a wide variety of games. The best known sports are rugby and cricket, with netball, badminton, squash, skiing, tennis, basketball, athletics, soccer, and hockey also very popular."," New Zealand’s major export products include fish, meat, fruit, dairy products and timber. It also produces a wide range of manufactured goods and is at the forefront in many areas of information technology and in biological and medical research. Tourism and education are also becoming increasingly important to the economy."],
  iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24695483.68363527!2d175.00390869999998!3d-40.924835399999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNew%20Zealand!5e0!3m2!1sen!2sin!4v1728988104168!5m2!1sen!2sin"
};
const NewzealandCountry = () => {
  return (

     <Banner
      country={data.country}
        img={nz}
        slides={[nz2,nz3,nz4]}
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

export default NewzealandCountry