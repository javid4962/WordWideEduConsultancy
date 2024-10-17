import React from 'react'
import Banner from '../Banner'

const data = {
  title:"Our Company",
  subTitle:"Our Management Team",
  content:["Worldwide Edu Consultants has assembled a highly experienced management team with over 15 years of combined experience to execute its Academic plan.",<b className='text-red-400'>Venkat Udumula (Founder & Managing Partner) :</b>,"Venkat has over 15 years of Experience in Overseas education Industry, and is building meridian to become prominent Overseas education processing company.At WWEC ,Venkat udumula managed to assemble a team of professionals coming from various spectrums of the Overseas education industry with the objective of managing its fast growth. As he finished his Bachelor of engineering from CBIT,and then he did his Masters from UK and returned with International exposure to serve students .Then stepped into business with a motto.",<b className='text-red-400'>Raghava Udumula (Founder &amp; Working Partner) :</b>,"Raghava is qualified professional possessing rich experience in the field of overseas education since 12 years ,He has immense knowledge and insight into education abroad and this helps him identify a student's aptitude, analyse the profile and recommend the best options available to the student. He did his masters in Computer applications from Kakatiya University. Then he stepped into consultancy business, after having an professional experience working with CISCO, Making students aware of abroad education by embedding the information technology into it."]
}

function Management() {
  return (
    <Banner title={data.title} subTitle={data.subTitle} content={data.content} />
  )
}

export default Management