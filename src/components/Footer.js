// src/components/Footer.js
import React from "react";

const branch = [{
  name:'Guntur',
  email:'venkat@wweconline.com',
  phone:'+919000133866',
  address:'Sri Ram Nilayam, 3rd Lane, Lakshmipuram, Near Union Bank of India, Backside of UNLIMITED Showroom, GUNTUR-522007, AP, India.',
},{
  name:'Vijayawada',
  email:'venkat@wweconline.com',
  phone:'+919000233866',
  address:'D.No. 440-5/3-6/1, Shyam Nagar, Tikkle Road, Behind Manar Food Plaza, Labbipet, VIJAYAWADA-520010',
},{
  name:'Visakhapatnam',
  email:'venkat@wweconline.com',
  phone:'0891 6677788',
  address:'Door No. 48-3-26, Srinagar, Rama Talkies, VISAKHAPATNAM-530016',
},{
  name:'Hyderabad',
  email:'venkat@wweconline.com',
  phone:'+919000133977',
  address:'Plot No. 108, Door No. 1-11-256/B, Street No.1, Bhagwanthapur, Begampet, HYDERABAD-500016,Telangana',
}];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-5">Contact Us:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {branch.map((i, index)=>{
            return (
        <div className={index+1<branch.length?"border-r-2 border-black":""} key={index}>
            <h1 className="text-2xl text-red-500 [text-shadow:_0_1px_1px_rgb(255_255_255_/_0.5)]">
              {i.name}
            </h1>
            <p>
            {/* Address:  */}
             {i.address}
            </p>
            {/* <p>
              Email:
              <a href={`mailto:${i.email}`}> {i.email}</a>
            </p> */}
            <p>
            {/* Phone:  */}
             <a href={`tel:${i.phone}`}>{i.phone}</a>
            </p>
          </div>
            )
          })}
          
        </div>
      </div>
      <p className="mt-4 flex items-center justify-center mt-5">
        &copy; 2024 World Wide Education and Careers
      </p>
    </footer>
  );
};

export default Footer;
