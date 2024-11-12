import React from 'react'
import { Link } from 'react-router-dom'

const data = {
  main: "Scholastic Assessment Test - SAT",
  sub: [
    {
      title: "What is SAT",
      content: ["The SAT Reasoning Test (formerly Scholastic Aptitude Test and Scholastic Assessment Test) is a standardized test for college admissions in the United States. The SAT is owned, published, and developed by the College Board, a non-profit organization in the United States. It was formerly developed, published, and scored by the Educational Testing Service", <br />, "which still administers the exam. The College Board claims the test can assess a student's readiness for college. The test was first introduced in 1901, and its name and scoring have changed several times.", <br />, "The SAT (technically known as the SAT I) is a general test of verbal and quantitative reasoning accepted for U. S. college admissions.  The test is required for admission to undergraduate programs of most US universities. Many universities also require you to take SAT-II tests."]
    },

    {
      title: "SAT-1-Reasoning-Test",
      content: [" The SAT-I is a three hour, primarily multiple-choice test that measures verbal and mathematical reasoning abilities that develop over time. Most colleges require SAT-I scores for admission."]
    },

    {
      title: "SAT-II-Subject-Tests",
      content: [" The SAT-II subject tests are one hour, primarily multiple-choice tests that measure your knowledge of particular subjects and your ability to apply that knowledge. Many universities may require you to take this along with SAT-I."]
    },

    {
      title: "Who Conducts SAT ",
      content: ['The SAT is developed and administered by the US-based "College Entrance Examination Board". This implies that Collegeboard sets the questions, conducts the test, and sends each examinee the score report.', <br />, "In India, SAT is conducted at the following cities: Bangalore, Calcutta, Cochin, Chennai, Hyderabad, Kodaikanal, Mumbai, Mussoorie, New Delhi, and Pune.", <br />, <br />, "For more information you can visit the official website of Collegeboard. At", <a href="//sat.collegeboard.com/home" mce_href="//sat.collegeboard.com/home"> sat.collegeboard.com/home</a>, <br />, "Our you can visit our office anytime for more information."]
    },
    {
      title: "The Exam Schedule",
      content: ["SAT is held about 6-7 times a year. The 2003-2004 testing calendar is displayed here.",
        <table border="1">
          <tbody>
            <tr>
              <td>
                <p><b>Test   Date</b></p>
              </td>
              <td>
                <p><b>Tests</b></p>
              </td>
              <td>
                <p><b>Registration   Deadline</b></p>
              </td>
            </tr>
            <tr>
              <td>
                <p>October   9, 2004</p>
              </td>
              <td>
                <p>SAT and   Subject Tests</p>
              </td>
              <td>
                <p>September   7, 2004</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>November   6, 2004</p>
              </td>
              <td>
                <p>SAT and   Subject Tests</p>
              </td>
              <td>
                <p>October   1, 2004</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>December   4, 2004</p>
              </td>
              <td>
                <p>SAT and   Subject Tests</p>
              </td>
              <td>
                <p>October   29, 2004</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>January   22, 2005</p>
              </td>
              <td>
                <p>SAT and   Subject Tests</p>
              </td>
              <td>
                <p>December   20, 2004</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>May 7,   2005<br /> <u>New SAT</u></p>
              </td>
              <td>
                <p>SAT and   Subject Tests</p>
              </td>
              <td>
                <p>March   25, 2005</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>June 4,   2005<br /> <u>New SAT</u></p>
              </td>
              <td>
                <p>SAT and   Subject Tests</p>
              </td>
              <td>
                <p>April   29, 2005</p>
              </td>
            </tr>
          </tbody>
        </table>
      ]
    },
    {
      title: "Fee Structure and Eligibility Criteria",
      content: ["Anyone and everyone interested is eligible for taking the SAT. The SAT test scores are valid for Five  years, i.e., most universities accept scores up to five years old.", <br />, "Test fees for SAT for Indian students:", <br />, "SAT FEE", <br />, <br />,
        <table border="1">
          <tbody>
            <tr>
              <td valign="top">
                <p>SAT Reasoning Test Fee</p>
              </td>
              <td>
                <p align="center">$29.50</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>International processing fee</p>
              </td>
              <td>
                <p align="center">$20.00</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Security surcharge to test in India&nbsp; &amp;   Pakistan</p>
              </td>
              <td>
                <p align="center">$20.00</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Total Amount</p>
              </td>
              <td>
                <p align="center">$ 69.50</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Late registration fee <br /> (If registering late, add this amount)</p>
              </td>
              <td>
                <p align="center">$20.00</p>
              </td>
            </tr>
          </tbody>
        </table>
      ]
    },
    {
      title: "SAT Subject Tests",
      content: [<table border="1" >
        <tbody>
          <tr>
            <td valign="top">
              <p>Registration Fee</p>
            </td>
            <td>
              <p>$17.00</p>
            </td>
          </tr>
          <tr>
            <td valign="top">
              <p>International processing fee</p>
            </td>
            <td>
              <p>$20.00</p>
            </td>
          </tr>
          <tr>
            <td valign="top">
              <p>Security surcharge to test in India &amp;   Pakistan</p>
            </td>
            <td>
              <p>$20.00</p>
            </td>
          </tr>
          <tr>
            <td valign="top">
              <p>Writing Test (If taken)</p>
            </td>
            <td>
              <p>$17.00</p>
            </td>
          </tr>
          <tr>
            <td valign="top">
              <p>Language Tests with Listening (If   taken)</p>
            </td>
            <td>
              <p>$&nbsp;18.00</p>
            </td>
          </tr>
          <tr>
            <td valign="top">
              <p>All other Subject Tests (per subject)</p>
            </td>
            <td>
              <p>$&nbsp;8.00 each</p>
            </td>
          </tr>
          <tr>
            <td colspan="2" valign="top">
              <p><b>Others</b></p>
            </td>
          </tr>
          <tr>
            <td valign="top">
              <p>Late registration fee <br /> (If registering late, add this amount)</p>
            </td>
            <td>
              <p>$20.00</p>
            </td>
          </tr>
        </tbody>
      </table>,
      "You can pay online through any international Debit and Credit card."
    ]
    },
    {
      title: "The Scoring Pattern",
      content: ["The SAT results comprise three different scores: a total score (400-1600), a separate score for Verbal section (200-800) and a separate score for Mathematics section (200-800)."]
    },


  ]
}

function SAT() {
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

export default SAT