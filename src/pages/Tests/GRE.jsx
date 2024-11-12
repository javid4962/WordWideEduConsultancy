import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'


const data = {
  main: "Graduate Record Examination - GRE",
  sub: [
    {
      title: "What is GRE",
      content: ["The GRE tests are your gateway to graduate programs, business schools  and fellowships.", " GRE General Test scores are used to evaluate your  readiness for graduate level work.", <br />, "The Graduate Record Examination is a Standardized test that measures  verbal, mathematical and analytical skills. It is intended to help the  graduate schools (of all fields other than business) assess the  potential of applicants for advanced study. Nearly 2300 universities in  the US require GRE® scores from each applicant.", "The GRE tests the fundamental skills - Reasoning and Comprehension  included - and does not require any subject-specific theoretical study.  (This is true only for the General GRE Test, and not the GRE Subject,  which is required by certain universities. In this section, we mean the  General GRE Test whenever we refer to the GRE Test)", <br />, "The test is designed in such a way that it would be unlike any other  test you would have taken at school or college. First, the test has no  question paper or answer sheets, nor does it have the same set of  questions for all the examinees. Further, it does not give you the  option of not answering a question (unless, of course, you run out of  time at the end). All this because the GRE Test is an entirely Computer  based test - the keyboard and mouse do the work of a pen or pencil. The  test is scored out of 1600 (in multiples of 10).", "The GRE Test is only one of several parameters which the graduate  schools look at to determine the selection of an applicant. A high score  alone does not translate into an admission offer from a great school.  But the test can be looked upon as the first major hurdle to be cleared  in the process of getting admission into a Graduate school of your choice."]
    },

    {
      title: "Who Takes It and Why?",
      content: ["Each year, more than 600,000 prospective graduate school applicants  from approximately 230 countries take the GRE General Test. Applicants  come from varying educational backgrounds and countries, and the GRE  General Test provides the only common measure for comparing their  qualifications.", "GRE scores are used by admissions or fellowship panels to supplement  undergraduate records, recommendation letters and other qualifications  for graduate study.", ""]
    },

    {
      title: "Computer Based GRE Test",
      content: ["The computer-based GRE General Test is composed of Analytical  Writing, Verbal Reasoning and Quantitative Reasoning sections. The  Analytical Writing section is always first. In addition, one  unidentified unscored section may be included and can appear in any  position in the test after the Analytical Writing section. Questions in  the unscored section are being tested for possible use in future tests  and answers will not count toward your scores. An identified research  section that is not scored may also be included, and if so, it is always  at the end of the test.", "The Verbal and Quantitative sections, including the unidentified  unscored section, may appear in any order. Treat each section presented  during your test as if it counts.", "Total testing time is three hours, not including the research  section. The directions at the beginning of each section specify the  total number of questions in the section and the time allowed for the  section."]
    },

    {
      title: "ETS (Education Testing System)",
      content: ["The GRE Test is developed and administered by the US-based  'Educational Testing Service' (ETS) under the direction of the Graduate  Record Examination Board, a non-profit organization of graduate business  schools worldwide. This implies that ETS sets the questions, conducts  the test, and sends each examinee the score report. For the conduct of  the test, ETS has appointed Testing Agencies in various countries, which  act as franchisee for ETS."]
    },
    {
      title: "When the Test will be held?",
      content: ["ETS gives the students flexibility to write the test  All-round-the-year. Unlike other exams, you can choose your own date and  time for taking the GRE Test! The test is administered in the above  cities five-days-a-week (Monday through Friday), twice-a-day. September  to December is the high season for GRE Test, so in case you intend to  take the test during this period, you need to register very early (say  90 days in advance) to get a date of your choice. Otherwise, registering  at least 15 days in advance is mandatory. The test lasts roughly  three-and-a-half hours, and most centres offer two slots: 9 A.M. and 2  P.M."]
    },
    {
      title: "Eligibility Criteria",
      content: ["Anyone and everyone is eligible for taking the GRE Test - there are  no restrictions based on age or qualifications. The test scores are  valid for five years, i.e., most universities accept scores up to five  years old. But it is always better if your scores are recent (not older  than 2 years)."]
    },
    {
      title: "Fee Structure",
      content: ['GRE General Test — all Indian students have to pay $190 to write the  test. You have to pay in American currency. The fees has to be paid  through a US Dollar denominated draft, made out in favour of "ETS - GRE"  payable in the U.S. Such a draft is usually available with the Main  Branches of most banks (which have a foreign exchange counter) in most  of the big cities for a nominal charge (around Rs. 200). Alternately,  the payment can also be made through a credit card which has global  acceptance. The credit card need not necessarily!', "At WWEC student Service Desk we assist all our students in this whole  Process."]
    },
    {
      title: "What is a Computer-Adaptive Test (CAT) ?",
      content: ["In a computer-adaptive test, the computer screen displays one  question at a time, which is chosen from a very large pool of questions  categorized by content and difficulty. The first question is always of a  medium difficulty, and each subsequent question is determined by your  responses to all the previous questions. In other words, the CAT adjusts  itself to your ability level - you’ll get few questions that are either  too easy or too difficult for you.", <br />, <br />, "Each question in the GRE CAT has five answer options, and you are  required to select one of these five as the correct answer by clicking  on it. A subsequent question is displayed on the screen only after you  have answered the previous question, so you cannot skip a question. You  cannot also go back to a previously answered question to change your  answer. Thus, if you guess a correct answer or answer a question  incorrectly by mistake, your answers to subsequent questions will lead  you back to questions that are at the appropriate level of difficulty  for you."]
    },
    {
      title: "The General Test Pattern",
      content: ["The test has three distinct sections: Writing Assessment (WA),  Quantitative, and Verbal. The Quantitative section has Problem Solving  questions, which test your mathematical skills and concepts of roughly  the high-school level. The Verbal Section has four types of questions :  Antonyms, Analogies, Reading Comprehension, and Sentence Completion. The  questions of each type appear in no set sequence. There are a total of  58 questions, 28 in Quantitative and 30 in Verbal.", <br />, "The third section, Analytical Writing Assessment measures critical  thinking and analytical writing skills. It consists of two analytical  writing tasks: (1) 'Present your perspective on an issue', and (2)  'Analyze an Argument'.", <br />, "There is a one-minute break between each test section. Midway through  the testing session, an on-screen message will inform you of the  opportunity to take a 10-minute break. Section timing will not stop if  you take an unscheduled break.",
        <table style={{ border: '1px solid black' }}>
          <tbody>
            <tr>
              <td width="33%">
                <p><b>Section</b></p>
              </td>
              <td width="33%">
                <p><b>Number of questions</b></p>
              </td>
              <td width="34%">
                <p><b>Time</b></p>
              </td>
            </tr>
            <tr>
              <td width="58%">
                <p><b>Analytical Writing:</b><br /> Analysis of an issue<br /> Analyze an  Argument<b> </b></p>
              </td>
              <td width="23%">
                <p><br /> 1 Topic <br /> 1 Topic</p>
              </td>
              <td width="19%">
                <p><br /> 45 min.<br /> 30 min.</p>
              </td>
            </tr>
            <tr>
              <td width="33%">
                <p>Verbal Section</p>
              </td>
              <td width="33%">
                <p>30</p>
              </td>
              <td width="34%">
                <p>30 min.</p>
              </td>
            </tr>
            <tr>
              <td width="33%">
                <p>Quantitative</p>
              </td>
              <td width="33%">
                <p>28</p>
              </td>
              <td width="34%">
                <p>45 min.</p>
              </td>
            </tr>
            <tr>
              <td width="33%">
                <p>Experimental Section</p>
              </td>
              <td width="33%">
                <p>Varies</p>
              </td>
              <td width="34%">
                <p>varies</p>
              </td>
            </tr>
          </tbody>
        </table>,
        "An unidentified verbal or quantitative experimental section may be  included and may appear in any order after the analytical writing  section. It is not counted as part of your score."]
    },
    {
      title: "Quantitative Section",
      content: ["The section tests you on a level of Maths that is comparable to Class  10 mathematics, with questions on Number Systems, Percentages,  Fractions & Decimals, Algebra (including Quadratic Equations),  Geometry (including Basic Coordinate Geometry), Ratio & Proportion,  Area & Volume of 2-D and 3-D figures, and Probability. This list is  not exhaustive; questions from beyond these topics may also be asked.", <br />, "The section has 28 questions to be completed in 45 minutes."]
    },
    {
      title: "Verbal Section",
      content: ["The verbal section in GRE Test requires a good vocabulary level, the  basic skills of correct English coupled with reasoning and analysis. The  30 questions, to be attempted in 30 minutes, consist of four types:  Antonyms, Analogies, Sentence Completion, and Reading Comprehension. The  four types are intermingled, with no fixed number for each type."]
    },
    {
      title: "Analytical Writing Assessment ",
      content: ["The writing assessment section requires you to write - or type - two  short essays. The first is the Issue task, in which you need to analyze  the issue presented and explain your views on it. For the Issue task,  you will be able to choose 1 of 2 essay topics selected by the computer  from the pool of topics. You will get 45 minutes to do write or type  this essay.", "The second essay is Analysis of an Argument, in which a given  argument has to be critically analyzed and evaluated. The Argument task  does not offer a choice of topics; the computer will present you with a  single topic selected from the topic pool. You will get 30 minutes to  write or type this essay. ", <br />, <br />, " For both the essays, the emphasis is  on the 'Analytical' part, and not on the 'Writing' part. This implies  that a concise essay with well-reasoned points written in simple English  will be looked upon more favourably than an essay which falls short on  the analytical aspects even though it is high on writing skills.", <br />, <br />, " A ten-minute break follows the two essays. The computer gives you the  option to take this break, or to move directly to the subsequent  section. Even if you finish the essays before the stipulated sixty  minutes, the break will still be of five minutes. It is advisable to  utilize this break by gearing yourself up for the tougher sections that  follow."]
    },
    {
      title: "Reporting the Score",
      content: ["ETS has the provision of reporting your GRE scores to a maximum of  four universities of your choice, the cost of which is built into the  fee you pay. You have to indicate the four universities where you wish a  copy of your GRE score to be sent after you get to know your scores.  For reporting to each additional university, the ETS charges you $13,  payable by an international credit card or a dollar denominated draft.", <br />, <br />, "The GRE Test results comprise four different scores: a total score,  and separate scores for Verbal, Quantitative, and Analytical Writing  Assessment sections. The total score is reported out of 1600 and the  sectional scores are out of 800. The Writing Assessment section is  scored separately on 6"]
    },

  ]
}

function GRE() {
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

export default GRE