import React from 'react'
import uk0 from '../assets/uk0.png'
import uk1 from '../assets/uk1.png'
import uk2 from '../assets/uk2.png'
import uk3 from '../assets/uk3.png'
import uk4 from '../assets/uk4.png'
import Banner from './Banner';



const data = {
  country:"uk",
  population: "60,094,648",
  capital: "London",
  area: "244,110 sq km",
  language: "English",
  religion: "Anglican, Roman Catholic, Muslim, Sikh, Hindu, Jewish",
  continent:"Europe",
  why:["UK universities provide internationally - recognised qualifications of the highest standard. They also offer more opportunities than ever before: there are currently over 50,000 postgraduate taught courses and research opportunities to choose from.","The UK higher education system combines the best elements of tradition and modernity. Some UK universities are among the oldest in the world; others are among the newest. Many provide degrees with a strong vocational foundation and enjoy good links with businesses and professional organisations.","While the UK is home to some of the world's oldest and most established universities, and has been welcoming international students for generations, it also has some of the world's most modern facilities. There has been high investment in education over recent decades, which means you'll get access to cutting-edge technology, leading teachers and professors in their field and excellent academic support.","The UK is home to over 410,000 international students at any time, and over 23,000 Indians. However it isn't just the history of Indian students succeeding in the UK that make it a good choice to study, it's the diverse range of international students in the UK that makes it a unique study location."],
  iframe:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9585465.087626452!2d-15.030361079420851!3d54.087903797118194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sin!4v1728986525790!5m2!1sen!2sin"
};
const UKcountry = () => {
  return (

     <Banner
      country={data.country}
        img={uk0}
        slides={[uk1,uk2,uk3,uk4]}
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

export default UKcountry