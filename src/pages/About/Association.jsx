import React from 'react'
import Banner from '../Banner'

const data = {
  title:"For Associates",
  subTitle:"",
  content:["We at WWEC consistently work on sustainable development and immense growth. We have gained lots of expertise in this field and enthusiastically looking for same kind of people for a beautiful journey.","The Worldwide Edu consultant’s invites highly motivated entrepreneurs and companies to become part of this exciting field of work – to provide global education services to the student community within their area of operations. While it is not mandatory to have relevant experience, commitment and dedication to this demanding activity is absolutely essential.","We are looking for Associates and franchisees to be part of our dream and share our success. We are planning to expand our operations throughout Andhra Pradesh and subsequently all over the country.","If you have the zeal and believe that you could contribute for mutual success of our endeavour in the field of International education, you are welcome to join hands with us. please "]
}

function Association() {
  return (
    <Banner title={data.title} subTitle={data.subTitle} content={data.content} />
  )
}

export default Association