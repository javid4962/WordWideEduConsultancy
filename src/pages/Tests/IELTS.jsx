import React from 'react'
import { Link } from 'react-router-dom'

const data = {
  main: "International English Language Testing System - IELTS",
  sub: [
    {
      title: "What is IELTS",
      content: ["IELTS or 'International English Language Testing System’ is an international standardised test of English language proficiency.   It is jointly managed by University of Cambridge ESOL Examinations,   the British Council and IDP Education Pty Ltd, and was established in   1989.", <br />, "IELTS tests are held in over 500 centres with tests up to   four times a month. IELTS respects international diversity and is   fair to anyone who sits the test, regardless of nationality.", <br />, <br />, " You can choose from two types of IELTS test: Academic or General   Training, depending on whether you want to study, work or migrate. Both   modules are made up of four parts – Listening, Reading, Writing and   Speaking. IELTS results are graded on the unique IELTS 9-band scale.", <br />, <br />, " To help you prepare, IELTS provides samples and practice tests.   The test covers the full range of ability from non-user to expert user.   You are not limited in how many times you can sit the test.", <br />, <br />, "IELTS is an English Language Proficiency test that is required to be   taken by non-native students for study in countries where the medium of   instruction is English. Among the popular study destinations IELTS is accepted   by universities in UK, Australia, New Zealand and Canada.", <br />, "The good news is now USA also says YES to IELTS."]
    },

    {
      title: "Why Choose IELTS",
      content: ["IELTS tests all four language skills – Listening, Reading, Writing   and Speaking. The Speaking test is a face-to-face interview with a   certified Examiner. It is interactive and as close to a real-life   situation as a test can get.", <br />, <br />, " Research shows that IELTS   motivates test-takers to develop real and well-rounded English rather   than learning by rote. This means your understanding of English is   improved and valid for real life in an English-speaking country.", <br />, <br />, " IELTS is owned by three reputable, international organisations. It has   the highest quality control and security procedures. More than 6000   organisations, including many government departments and universities,   rely on IELTS. The IELTS scoring system is recognised globally, giving   you a truly international result."]
    },

    {
      title: "The TEST Format",
      content: ["The test has different sections:", <br />, "The Listening Section - Duration: 30 minutes", <br />, "Academic reading/general training reading section - Duration: 60   minutes", <br />, "Academic writing/general training writing section - Duration: 60   minutes", <br />, "Speaking Section: Duration: 11 - 14 minutes"]
    },

    {
      title: " Total test   time: 2 hours and 45 minutes",
      content: ["You will receive a separate Band Score. The four Band Scores, one for   each section are added together and averaged for an Overall Band  Score.  Each Band has a statement giving a summary of the English at  that  level. There are nine Band levels, from one (non-user) to nine  (expert  user).",<br/>,"The minimum score accepted for a course ranges from 5.0 to 7.5,   depending upon courses and institutes you are applying to. The most   common requirement is a band score of 6 to 6.5. ",<br/>,<br/>," Test   Reports have a validity of two years.",<br/>,<br/>," You can retake the   test if you do not achieve the desired score but not before three   months of the first test date.",<br/>,"Academic – Institutions of Higher and Further Education",<br/>,"The   Academic format is, broadly speaking, for those who want to study or   train in an English-speaking university or Institutions of Higher and   Further Education. Admission to undergraduate and postgraduate courses   is based on the results of the Academic test."]
    },
    {
      title: "General Training – for school, work or migration",
      content: ["The   General Training format focuses on basic survival skills in broad social   and workplace contexts. It is typically for those who are going to   English-speaking countries to do secondary education, work experience or   training programs. People migrating to Australia, Canada and New   Zealand must sit the General Training test.",<br/>,"For more details you can visit any of the nearest BRITISH COUNCIL or   BRITISH LIBRARY."]
    },

  ]
}

function IELTS() {
  return (
    <div className="grid grid-cols-5 gap-2 rounded-lg p-3 bg-[#effef6] rounded-lg max-w-[99vw] m-auto items-start bg-white text-black">
      {/* Linkes aside section */}
      <aside className=" border border-black p-3 flex flex-col hidden md:block rounded-lg bg-white text-black sticky top-[5rem]">
        <div className="flex flex-col gap-2 ">
          {/* <Link to='/tests' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">Tests</Link> */}
          <Link to='/tests/GRE' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">GRE</Link>
          <Link to='/tests/GMAT' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">GMAT</Link>
          <Link to='/tests/SAT' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">SAT</Link>
          <Link to='/tests/TOEFL' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">TOEFL</Link>
          <Link to='/tests/IELTS' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">IELTS</Link>

        </div>
      </aside>
      <div className='min-h-20 border border-1 border-black p-4 col-span-5 md:col-span-4 sm:grid-cols-2 rounded-lg bg-white text-black'>
        <div className="flex gap-2 sm:block md:hidden flex-wrap m-y3 ">
          <Link to='/tests/GRE' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">GRE</Link>
          <Link to='/tests/GMAT' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">GMAT</Link>
          <Link to='/tests/SAT' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">SAT</Link>
          <Link to='/tests/TOEFL' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">TOEFL</Link>
          <Link to='/tests/IELTS' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-300 delay-[50ms]">IELTS</Link>

        </div>
        <h1 className="text-xl font-bold pb-4  md:text-2xl lg:text-4xl">{data.main}</h1>
        {data.sub.map((i, index) => {
          return (
            <div key={index} className='border border-1 border-black p-3 m-2 rounded-lg'>



              <h3 className='text-lg font-semibold my-2 bg-gray-100 rounded-lg p-3'>{i.title}</h3>
              <p className='text-sm'>{i.content}</p>
              <br />
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default IELTS