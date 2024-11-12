import React from 'react'

const data = {
    title:"Work with Us",
    // subTitle:"Worldwide Edu Consultants / Education and Careers",
    content:["At WWEC you will find an amazing work atmosphere. We have ambitious growth plans and foresee setting up offices in many places across the globe. We will be constantly looking at expanding our team. We need people with the right mix of attitude, understanding client requirements, good knowledge in latest information technology, proactive contribution to the company. If you have this combo, then mail us at careers@wweconline.com, and be a part of our WWEC family.",<span><br></br>We will guarantee:</span>,"",<span><br></br>Growth (Personal &amp; Organizational)</span>,<span>Constant learning</span>,"Passion"]
  }


function Careers() {
  return (
    <div className="rounded-lg p-3 bg-[#effef6] rounded-lg max-w-[99vw] m-auto items-start">

    <div
      className="min-h-20 border border-1 border-black p-4 col-span-5 md:col-span-4 sm:grid-cols-2 rounded-lg bg-white text-black"
      id="careers"
    >


      <h2 className="text-4xl font-bold  mb-6">{data.title}</h2>
      {data.content.map((i, index) => {
        return <p className="text-lg" key={index}>{i}</p>
      })}

      

    </div>
  </div>
  )
}

export default Careers