import React from "react";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div className="grid grid-cols-5 gap-2 rounded-lg p-3 bg-[#effef6] rounded-lg max-w-[99vw] m-auto items-start">
      
      {/* Linkes aside section */}
      <aside className=" border  border-black p-3 flex flex-col hidden md:block rounded-lg bg-white text-black sticky top-[5rem]">
        <div className="flex flex-col gap-2 ">
        <Link to='/usa' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-400 delay-[50ms]">Study in USA</Link>
        <Link to='/uk' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-400 delay-[50ms]">Study in UK</Link>
        <Link to='/canada' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-400 delay-[50ms]">Study in Canada</Link>
        <Link to='/newzealand' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-400 delay-[50ms]">Study in New Zealand</Link>
        <Link to='/ireland' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-400 delay-[50ms]">Study in Ireland</Link>
        <Link to='/australia' className="block bg-gray-100 p-2 rounded-lg text-black hover:bg-gray-400 delay-[50ms]">Study in Australia</Link>
        </div>
      </aside>

      {/* The article section */}
      <article className="min-h-20 border border-1 border-black p-3 grid grid-cols-1 col-span-5 md:col-span-4 sm:grid-cols-2 rounded-lg bg-white text-black">
        <h1 className="font-bold p-2 text-2xl">Study {props.country.toUpperCase()}</h1>
        <span></span>
        <img src={props.img} alt={props.country} className="w-3/4 m-auto col-span-2 sm:col-span-1 rounded-lg" loading="lazy" />
        <div className="flex flex-col justify-items-start">
          <span className="my-2">Country Facts</span>
          <ul>
            <li>Capital: <b>{props.capital}</b></li>
            <li>Population: <b>{props.population}</b></li>
            <li>Area: <b>{props.area}</b></li>
            <li>Language: <b>{props.language}</b></li>
            <li>Religion: <b>{props.religion}</b></li>
            <li>Continent: <b>{props.continent}</b></li>
          </ul>
        </div>

        <div className="content w-full col-span-2">
          <h1 className="font-bold text-2xl my-3">Why {props.country.toUpperCase()}</h1>
    
          {props.why.map((cont, index)=>{
            return <p className="m-2" key={index}>{cont}</p>
          })}
        </div>

         {/* Images section */}
      <section className="flex flex-wrap gap-2 items-center justify-evenly w-full col-span-2 m-3 hidden sm:flex">
     
       {props.slides.map((i, index)=>{
        return <img src={i} alt={i.country} className="rounded-lg  min-w-[100px] min-h-[200px]" key={index} loading="lazy"/>
       })}
    
      </section>
      <section className="flex items-center justify-center m-auto col-span-2">
      <iframe src={props.iframe} title={props.country} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      className="flex justify-center items-center w-[75vw] h-[50vh] m-3 rounded-lg m-auto"></iframe>
      </section>
      </article>
     
     

    </div>
  );
}

export default Banner;
