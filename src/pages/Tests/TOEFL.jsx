import React from 'react'
import { Link } from 'react-router-dom'

const data = {
  main: "Test Of English a Foreign Language - TOEFL",
  sub: [
    {
      title: "What is TOEFL",
      content: ["TOEFL-Test of English a Foreign language is the world’s very famous English test. If you are planning to study abroad, the TOEFL test is the one test that can take you anywhere.", <br />, "In fact, more institutions accept TOEFL test scores than any other test scores in the world — more than 7,000 colleges, universities and licensing agencies in more than 130 countries, to be exact.", <br />, "Test of English a Foreign Language is a Standardized test that evaluates the English Proficiency of people whose native language is not English. Nearly 2400 education institutes in the United States and Canada require TOEFL® scores from each applicant. The test is also used by institutions in other countries where English is the language of Instruction. The TOEFL tests the ability to understand North American English.", <br />, "TOEFL test is administered as a computer based test in India."]
    },

    {
      title: "Computer Based TOEFL test",
      content: [" TOEFL test is designed in such a way that it would be unlike any other test you would have taken at school or college. First, the test has no question paper or answer sheets, nor does it have the same set of questions for all the examinees. Further, it does not give you the option of not answering a question (unless, of course, you run out of time at the end). All this because the TOEFL test is now an entirely Computer based test - the keyboard and mouse do the work of a pen or pencil. The test is scored out of 300, and most scores fall in the range of 200-250. ", "The TOEFL test is only to test your English proficiency. A high score alone does not translate into an admission offer from a great school. But the test is mandatory and cannot be overlooked."]
    },

    {
      title: "ETS (Education Testing System)",
      content: ['The TOEFL Test is developed and administered by the US-based "Educational Testing Service" (ETS) under the direction of the Graduate Record Examination Board, a non-profit organization of graduate business schools worldwide. This implies that ETS sets the questions, conducts the test, and sends each examinee the score report. For the conduct of the test, ETS has appointed Testing Agencies in various countries, which act as franchisee for ETS.']
    },

    {
      title: "When can you write?",
      content: ["Computer based TOEFL test is held all-round-the-year. Unlike other exams, you can choose your own date and time for taking the TOEFL test! The test is administered in the above cities five-days-a-week (Monday through Friday), twice-a-day. September to December is the high season for TOEFL test, so in case you intend to take the test during this period, you need to register very early (say 90 days in advance) to get a date of your choice. Otherwise, registering at least three days in advance is mandatory."]
        },
    {
      title: "Fee Structure",
      content: ["Item Fees Registration Fees vary by country.", <br />, "Late registration US$35 Rescheduling US$60 Reinstatement of cancelled scores US$20 Additional score reports (per institution or agency) US$17 each Speaking or Writing Section rescore US$60 Speaking and Writing Section rescore US$120 Returned personal check (paper or electronic) US$20"]
    },
    {
      title: "What is a Computer-Adaptive Test (CAT) ?",
      content: ["In a computer-adaptive test, the computer screen displays one question at a time, which is chosen from a very large pool of questions categorized by content and difficulty. The first question is always of a medium difficulty, and each subsequent question is determined by your responses to all the previous questions. In other words, the CAT adjusts itself to your ability level - you’ll get few questions that are either too easy or too difficult for you. The number of questions you get also depends on your previous answers.", <br />, "In one section of TOEFL test, you are allowed to go back to the previous questions.", <br />, "Most questions in the TOEFL CAT has four answer options, and you are required to select one of these four as the correct answer by clicking on it. A subsequent question is displayed on the screen only after you have answered the previous question, so you cannot skip a question. You cannot also go back to a previously answered question to change your answer. Thus, if you guess a correct answer or answer a question incorrectly by mistake, your answers to subsequent questions will lead you back to questions that are at the appropriate level of difficulty for you.", <br />, "Some questions may have special directions which appear in a box under the question. Like some questions may have two answers and some may require you to make more than two selections."]
    },
    {
      title: "The TOEFL Ibt",
      content: ["The test has four sections: Listening, Structure, Reading and Writing.", <br />, "The number of questions and the time allocated to each question may vary. Therefore, one student may get 35 questions in Listening section while another may get 45. But, the additional questions are for research purposes only and the scores of all test takers are based on the same number of questions.", <br />, "The following table gives out the format of the TOEFL-CAT:",

        <table border="1" >
          <tbody>
            <tr>
              <td>
                <p><br /></p>
              </td>
              <td>
                <p><b>Questions</b></p>
              </td>
              <td>
                <p><b>Timing</b></p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Computer Tutorial</p>
              </td>
              <td>
                <p>NA</p>
              </td>
              <td>
                <p>NA</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><b>Listening Section</b></p>
              </td>
              <td>
                <p>30 - 50 questions</p>
              </td>
              <td>
                <p>40 - 60 min.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><b>Structure Section</b></p>
              </td>
              <td>
                <p>20 - 25 questions</p>
              </td>
              <td>
                <p>15 - 20 min.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><b>Reading Section</b></p>
              </td>
              <td>
                <p>44 - 60 questions</p>
              </td>
              <td>
                <p>70 - 90&nbsp; min.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><b>Writing Section</b></p>
              </td>
              <td>
                <p>1 Essay</p>
              </td>
              <td>
                <p>30 min.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><b>Total</b></p>
              </td>
              <td>
                <p>94 - 135 question + 1 Essay</p>
              </td>
              <td>
                <p>4 hrs. (approx.)</p>
              </td>
            </tr>
          </tbody>
        </table>,
        "The tutorial is meant to make you feel comfortable with the infrastructure and the environment and does not have a prescribed time limit. You are expected to be through with it in 40 minutes or so : it makes sense to acclimatize yourself fully with the setting even after you think you have understood how the system works."
      ]
    },
    {
      title: "Reporting Score",
      content: [<p>ETS has the provision of reporting your TOEFL scores to a maximum of four universities of your choice, the cost of which is built into the TOEFL fee you pay. But the catch is : you have to select these four universities which will receive copies of your score report <b>BEFORE</b> you begin to take the test. This implies that even before taking the TOEFL test, you need to do some homework on which universities you’re finally going to apply, based on the score that you expect to attain. For reporting to each additional university, the ETS charges you $15, payable by an international credit card or a dollar denominated draft.</p>]
    },
    {
      title: "The Pattern",
      content: ["The TOEFL results comprise four different scores : a total score (0-300), a separate score for Listening section (0-30), a separate score for Structure/Writing section (0-30) and a separate score for Reading section (0-30). The total score is reported on a scale from 0 to 300.", <br />, <br />, "Note that your Essay score will individually be rated (0-6). However the essay score is incorporated into the Structure/Writing scaled score with the rating of essay constituting approximately one half of the Structure/Writing scaled score. You get to know your Listening and Reading section scores immediately after taking the test. You will also see your Structure/Writing scores as score ranges because your essay will not yet have been read and rated. Your final score will be within the range shown on the screen after you finish the test. As the evaluation of essays take about 2 to 4 weeks, your Official TOEFL score reports, which include the Writing scores, are mailed approximately two to four weeks after you take the test and take another ten days or so to reach your address."]
    },
    {
      title: "Cancellation or Rescheduling",
      content: ["If you would like to reschedule your exam or need to cancel you must contact us before 12:00 PM, THREE   BUSINESS days prior to your exam date.  You will receive a partial refund of US $ 65 on request when cancelling before the deadline. There is a US $ 40 fee to reschedule the exam."]
    },
    {
      title: "Things you need prior the Exam",
      content: [<ul>
        <li>-&gt; You are required to bring your valid passport on the day of your exam. This      is mandatory.</li>
        <li>-&gt; Confirmation      letter or Number</li></ul>]
    },

  ]
}

function TOEFL() {
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

export default TOEFL