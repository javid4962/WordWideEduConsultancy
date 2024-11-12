import React from "react";
import Banner from "./Banner";

const data = {
  title:"Tests",
  subTitle:"Worldwide Edu Consultants / Education and Careers",
  content:["Worldwide Education Consultants / Education and Careers is an organization which runs with a motto and running with a primary mission to help students to fulfil their abroad education dream with an ease."," Worldwide Edu Consultants / Education and Careers had forayed into the field of educational consulting in the year 2009. Since the day of inception, our primary objective was to provide the right kind of guidance and exposure to all our aspiring students. Our commitment is deep routed in the aspirations of our students to pursue their higher education.","Our constant effort lies in helping them mould their career by taking the right decisions and choosing the best universities/schools.At Worldwide Edu Consultants, we acknowledge the fact that the student’s effort is what takes them to focus, and we help them with our efforts to identify the pinnacle of success through our guidance and launching their career in the right direction. We are glad to be able to provide our services to so many students all round the year and it makes us feel proud to be one of the best Educational Consultants in India.","Each team member at Worldwide Educational Consultants knows the value of education and we work with utmost zeal to help each of our students to choose the best option.","Our success in the past years stands testimony to the effort and dedication by each of our team members and students!"]
}

function Tests() {
  return (
    <Banner title={data.title} subTitle={data.subTitle} content={data.content} />
  );
}

export default Tests;
