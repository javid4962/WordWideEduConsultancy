import React from 'react'
import Banner from '../Banner'

const data = {
    title: "Vision & Mission",
    subTitle: "",
    content: [<b className='text-red-400'>Vision:</b>, "We try to provide the best quality services to our Customers and Clients and maintain quality of business practices.", <b className='text-red-400'>Mission:</b>, "We are the Overseas Education Providers and Deliver:",
    <ul style={{ listStyle: 'disc' }} className='m-3'>
        <li className='p-2'><strong>International student services</strong> - We Inform and Advise International Students on USA, UK, Canada, New Zealand, Ireland, Australian, Germany, Sweden etc., Countries Education and Assist in Enrolment in USA, UK, Canada, New Zealand, Ireland, Australian, Germany, Sweden etc., Countries Universities and Colleges across all sectors.</li>
        <li className='p-2'><strong>Our clients include</strong> – Education Universities & Colleges in USA, UK, Canada, New Zealand, Ireland, Australia, Germany, Sweden, etc.,</li>
        <li className='p-2'><b>Our customers include</b> - Prospective International Students, their Parents and Families.</li>
        <li className='p-2'><b>WWEC Focused</b> - On Meeting Market Requirements and the Expectations of our Customers, Clients.</li>
    </ul>,
    <b className='text-red-400'>Values:</b>,
    <ul style={{ listStyle: 'disc' }} className='m-3'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <li className='p-2'>Accountability</li>
        <li className='p-2'>Committed to Quality Service</li>
        <li className='p-2'>Customer Care</li>
        <li className='p-2'>Exposure to Many Countries</li>
        <li className='p-2'>Information Hub</li>
        <li className='p-2'>Integrity and Honesty</li>
        <li className='p-2'>Intelligent Risk-Taking</li>
        <li className='p-2'>Leadership</li>
        <li className='p-2'>Openness</li>
        <li className='p-2'>Research</li>
        <li className='p-2'>Strong Principles</li>
        <li className='p-2'>Team Work</li>
        <li className='p-2'>Time- Management</li>
        <li className='p-2'>Transparency</li>
        <li className='p-2'>Valuing People</li>
        </div>
    </ul>
    ]
}

function Vision() {
    return (
        <Banner title={data.title} subTitle={data.subTitle} content={data.content} />
    )
}

export default Vision