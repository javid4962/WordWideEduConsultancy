import React from 'react'
import { Link } from 'react-router-dom'

const data = {
  main: "Graduate Management Admission Test - GMAT",
  sub: [
    {
      title: "What is GMAT",
      content: ["The Graduate Management Admission Test (GMAT, pronounced G-mat, is a computer adaptive standardized test in mathematics and the English language for measuring aptitude to succeed academically in graduate business studies.", <br />, <br />, "The Graduate Management Admission Test is a Standardized test that measures verbal, mathematical and analytical writing skills. It is intended to help the graduate schools of business assess the potential of applicants for advanced study in business and management. Nearly 900 management institutes all over the world (almost all of them in the US) require GMAT scores from each applicant. The GMAT tests the fundamental skills - Reasoning and Comprehension included - and does not require any subject-specific theoretical study.", <br />, <br />, "GMAT is now an entirely Computer based test - the keyboard and mouse do the work of a pen or pencil. The test is scored out of 800 (in multiples of 10). Like GRE, it is also became the CBT (Computer Based Test)"]
    },

    {
      title: "PEARSON VUE",
      content: ["The GMAT test is developed and administered by the US-based Pearson VUE under the direction of the Graduate Management Admission Council (GMAC), a non-profit organization of graduate business schools worldwide. This implies that Pearson VUE conducts the test, and sends each examinee the score report. For the conduct of the test, Pearson VUE has appointed testing centres in various countries.", <br />, <br />, "When it will be held", "All-round-the-year. Unlike other exams, you can choose your own date and time for taking the GMAT! The test is administered in the above cities five-days-a-week (Monday through Friday), twice-a-day. September to December is the high season for GMAT, so in case you intend to take the test during this period, you need to register very early (say 90 days in advance) to get a date of your choice. Otherwise, registering at least 15 days in advance is mandatory. The GMAT test lasts roughly four hours, and most centres offer two slots: 9 A.M. and 2 P.M."]
    },

    {
      title: "Fee Structure and Eligibility Criteria",
      content: ["Everyone is eligible for taking the GMAT - there are no restrictions based on age or qualifications. The test scores are valid for five years, i.e., most universities accept scores up to five years old. But it is always better if your scores are recent (not older than 2 years).", <br />, "The fee to take the Graduate Management Admission Test® (GMAT) is US$250 worldwide. You will incur taxes when you schedule an exam in certain countries.", <br />, "You can pay online with credit or debit card.", <br />, "-> By money order (mailed forms only)", <br />, "-> Personal check (mailed forms only)", <br />, <br />, "All payments must be made in full, include the correct numeric and written fee amount, have the appropriate signature(s), and be made payable to Pearson VUE-GMAT.  Payments must be in US Dollar.", <br />, <br />, <h4 className='text-blue-500 font-bold'>India</h4>, <br />, <p>Email : <a href='mailto:GMATCandidateServicesAPAC@pearson.com'>GMATCandidateServicesAPAC@pearson.com</a></p>, <p>Telephone: +91 (0) 120 532 4628, 9 a.m. to 6 p.m. Indian Standard Time</p>, <p>Fax: +61 2 9901 3330</p>]
    },
    {
      title: "The CAT",
      content: ["In a computer-adaptive test, the computer screen displays one question at a time, which is chosen from a very large pool of questions categorized by content and difficulty. The first question is always of a medium difficulty, and each subsequent question is determined by your responses to all the previous questions. In other words, the CAT adjusts itself to your ability level - you’ll get few questions that are either too easy or too difficult for you.", <br />, <br />, "Each question in the GMAT CAT has five answer options, and you are required to select one of these five as the correct answer by clicking on it. A subsequent question is displayed on the screen only after you have answered the previous question, so you cannot skip a question. You cannot also go back to a previously answered question to change your answer. Thus, if you guess a correct answer or answer a question incorrectly by mistake, your answers to subsequent questions will lead you back to questions that are at the appropriate level of difficulty for you."]
    },
    {
      title: "The Format",
      content: ["The test has three distinct sections : Analytical Writing Ability (AWA), Quantitative, and Verbal. The Quantitative section has two types of questions, Problem Solving and Data Sufficiency, mingled throughout the section. The Verbal Section has three types : Sentence Correction, Critical Reasoning, and Reading Comprehension; here too, the questions of each type appear in no set sequence. There are a total of 78 questions, 37 in Quantitative and 41 in Verbal. These have to be done in 75 minutes each.",
        <table border="1">
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
                <p><b> Analysis   of an Issue&nbsp;<br /> Analysis of an Argument</b></p>
              </td>
              <td>
                <p>1 Topic&nbsp;<br /> 1 Topic</p>
              </td>
              <td>
                <p>30 min.<br /> 30 min.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Optional Rest Break</p>
              </td>
              <td>
                <p>NA</p>
              </td>
              <td>
                <p>5 min.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><b>Quantitative</b> (Problem   Solving &amp; Data Sufficiency)</p>
              </td>
              <td>
                <p>37</p>
              </td>
              <td>
                <p>75 min.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Optional Rest Break</p>
              </td>
              <td>
                <p>NA</p>
              </td>
              <td>
                <p>5 min.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><b>Verbal</b> (Reading   Comprehension, Critical Reasoning, &amp; Sentence Correction)</p>
              </td>
              <td>
                <p>41</p>
              </td>
              <td>
                <p>75 min.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p><br /></p>
              </td>
              <td>
                <p>78+2 Essays&gt;</p>
              </td>
              <td>
                <p>4hrs.(approx.)</p>
              </td>
            </tr>
          </tbody>
        </table>, <br />,  "The tutorial is meant to make you feel comfortable with the infrastructure and the environment and does not have a prescribed time limit. You are expected to be through with it in 15 minutes or so: it makes sense to acclimatize yourself fully with the setting even after you think you have understood how the system works."
      ]
    },
    {
      title: "Analytical Writing Assessment",
      content: ['The analytical writing section requires you to write - or rather type - two short essays in thirty minutes each. The first is the Analysis of an Issue, in which you need to analyze the issue presented and explain your views on it. The second essay is Analysis of an Argument, in which a given argument has to be critically analyzed and evaluated.',<br />,<br />,' For both the essays, the emphasis is on the "Analytical" part, and not on the "Writing" part. This implies that a concise essay with well-reasoned points written in simple English will be looked upon more favourably than an essay which falls short on the analytical aspects even though it is high on writing skills.',<br />,<br />," A five-minute break follows the two essays. The computer gives you the option to take this break, or to move directly to the subsequent section. Even if you finish the essays before the stipulated sixty minutes, the break will still be of five minutes. It is advisable to utilize this break by gearing yourself up for the tougher sections that follow."]
    },
    {
      title: "Quantitative Section",
      content: ["The 37 questions in this section comprise two kinds of questions : Problem Solving (PS) and Data Sufficiency (DS). The two kinds do not have a definite break-up, usually there are around 20 PS and 17 DS questions. The section tests you on a level of Maths that is comparable to the level of Class 10 exams, with questions on Number Systems, Percentages, Fractions & Decimals, Algebra (including Quadratic Equations), Geometry (including Basic Coordinate Geometry), Ratio & Proportion, Area & Volume of 2-D and 3-D figures, and Probability. This list is not exhaustive; questions from beyond these topics may also be asked. ", <br />, <br />, " While the Problem Solving questions require you to solve a mathematical problem directly and choose the right answer, the Data Sufficiency is of a trickier variety. Each problem comprises a question followed by two statements, which may or may not lead to the answer to the given question. This is what you need to ascertain - whether the given statements can be used to answer the question or not, and if so, whether the statements can be used independently or in conjunction. Each of the five answer options present the five possibilities that arise in this case, and you have to apply the basic principles of mathematics with a strong dose of logic to get these right."]
    },
    {
      title: "Verbal Section",
      content: ["The verbal section in GMAT test requires the basic skills of correct English coupled with reasoning and analysis. The 41 questions, to be attempted in 75 minutes, consist of three types : Sentence Correction (SC), Critical Reasoning (CR), and Reading Comprehension (RC). The three types are intermingled, with no fixed number for each type. The break-up of questions among SC, CR, and RC could be 14-14-13 or 15-13-13, or any such combination."]
    },
    {
      title: "Reporting the Score",
      content: ["There is a provision of reporting your GMAT test scores to a maximum of five universities of your choice, the cost of which is built into the GMAT test fee you pay. But the catch is : you have to select these five universities/business-schools which will receive copies of your score report BEFORE you begin to take the test. This implies that even before taking the GMAT, you need to do some homework on which universities you’re finally going to apply based on the score that you expect to attain.", <br />, "For reporting to each additional university, the charge is US $28, payable by an international credit card or a dollar denominated draft. You will incur taxes when you request Additional Score Reports (ASRs) in certain countries. Please click tax rates to determine the tax you will have to pay in certain countries."]
    },
    {
      title: "The Scoring Pattern",
      content: ["The GMAT test results comprise four different scores: a total score (which is the combined verbal and quantitative scores), a separate Verbal score, a separate Quantitative score, and an Analytical Writing score. The total score is reported on a scale from 200 to 800. The Verbal and Quantitative Scores are reported on a scale of 0 to 60. For the AWA score, the scale is from 0 to 6. Note that your AWA performance is not reflected in your total GMAT score (on 800). You get to know your total, verbal, and quantitative score immediately after taking the test. Official GMAT score reports, which include the AWA scores, are mailed approximately two weeks after you take the test and take another ten days or so to reach your address.",<br />,'In addition to these scores, the score report also contains percents (%) below. These "% below" indicate the percentage of examinees that scored below you based on the scores of the entire GMAT testing population for the most recent three-year period. These percentages are important in considering how an applicant for admission to a particular management school compares with everyone in the specified period, with all other applicants to the same school, and with students already enrolled at the school.',<br />,"You may not take the GMAT more than once during any calendar month, even if the scores are cancelled."]
    },


  ]
}

function GMAT() {
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

export default GMAT