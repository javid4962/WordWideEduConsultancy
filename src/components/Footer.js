// src/components/Footer.js
import React from "react";

const branch = [
  {
    name: "Guntur",
    email: "venkat@wweconline.com",
    phone: "+919000133866, +919000433332",
    landline: "+91-863-2238877",
    address:
      "Sri Ram Nilayam, 3rd Lane, Lakshmipuram, Near Union Bank of India, Backside of UNLIMITED Showroom, GUNTUR-522007, AP, India.",
  },
  {
    name: "Vijayawada",
    email: "venkat@wweconline.com",
    phone: "+919000133866, +919000133866",
    landline: "+91-866-2498788",
    address:
      "D.No. 440-5/3-6/1, Shyam Nagar, Tikkle Road, Behind Manar Food Plaza, Labbipet, VIJAYAWADA-520010",
  },
  {
    name: "Hyderabad",
    email: "venkat@wweconline.com",
    phone: "+91-9000133977 / 9030133977",
    landline: "+91-040-35162981/2",
    address: "Plot No : 108, Door No : 1-11-256/B, Ground Floor, Street No. 1, Bhagwathapur, Begumpet, Hyderabad - 500016, Telangana, INDIA",
  },
  {
    name: "Mysuru",
    email: "venkat@wweconline.com",
    phone: "+91-9000133866 / 9448061335",
    landline: "",
    address:
      "#603, P&T Block, 2nd Floor,Anikethana Road,Kuvempunagara, Mysuru - 570023,Karnataka, INDIA",
  },
  {
    name: "Secunderabad",
    email: "venkat@wweconline.com",
    phone: "+91-9000133977 / +91-9030133977",
    landline: "",
    address:
      "9-1-87 & 9-1-119/1, EdenAmsri Square, Flat No: 604St.John's Road, Beside Apollo Hospitals, Secunderabad-500 003, Telangana, INDIA",
  },
  {
    name: "Rajahmundry",
    email: "venkat@wweconline.com",
    phone: "+91-9000133866 / +91-9000299862",
    landline: "+91-883-2464566",
    address:
      "Flat No. 203, KELAM Classic, Syamala Nagar, Rajahmundry - 533103, Andhra Pradesh, INDIA",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8  max-h-[25%]">
      <div className="container-fluid mx-auto">
        <p className="text-lg mb-5 text-center">Contact Us:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 grid-rows-1 m-2 overflow-x-auto align-center text-sm">
          {branch.map((i, index) => {
            return (
              <div
                key={index}
                className="border border-gray-500 rounded-lg m-1 p-2 "
              >
                <h1 className="text-xl lg:text-2xl text-red-500 font-bold text-center">
                  {i.name}
                </h1>
                <p className="text-md lg:text-md my-2">
                  Address: <span className="text-gray-400 select-all">{i.address}</span>
                </p>
                <p>
                  {/* Phone:  */}
                  <p className="my-2">
                    Landline:{" "}
                    <span className="text-gray-400 select-all"> {i.landline}</span>
                  </p>
                  <p className="my-2">
                    Mobile: <span className="text-gray-400 select-all">{i.phone}</span>
                  </p>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <p className="mt-4 flex items-center justify-center mt-5">
        &copy; {new Date().getFullYear()} WorldWide Education and Careers
      </p>
    </footer>
  );
};

export default Footer;
