"use client"
import Image from "next/image";
import React from 'react';
import { useEffect, useState } from 'react';
import '../globals.css';

const Screen = () => {
    const [query,setQuery] =useState("");
  const[apiData,setApiData] = useState();

  const handleData =() => {
    // fetch(`https://api.weatherapi.com/v1/current.json?key=042b2ab255544e5ab7a114318231407&q=${query}`)
    // fetch(`https://api.weatherapi.com/v1/current.json?key=042b2ab255544e5ab7a114318231407&q=${query}&aqi=no`)
    fetch("https://api.weatherapi.com/v1/current.json?key=106ba587aed64dc6820142032231507&q=dhaka")
    
    
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setApiData(data);
    })
  }

console.log(apiData);

const handleChange = (e) => {
  setQuery(e.target.value);
};


  useEffect(()=>{
   handleData();
  },[])
    
    return (
        <div>
            <div>

<div>
  <Image 
  src="/bg-img.jpg"
  width={1920}
  height={720}
  className=" fixed object-cover w-full h-full "
  alt="background image"
  />


</div>

<div className=" relative flex justify-center z-10 ">
  <div></div>
    <form className=" " >
      <div className=' pt-20'>
          <input type="text" 
          className=" bg-white  border-blue-700 p-4 w-100 text-teal-950  "
          value={query} 
          placeholder='Enter a location for Weather ' required
          onChange={handleChange} />
          <button 
          type="submit" 
          className='bg-blue-700 p-4  text-white '
          onClick={handleData}>search</button>

          </div>
      

      </form>            
  </div>


<div>

   <div className=' relative'>

      <img src={apiData.current.condition.icon}
     className='  block pt-10 pb-3 mx-auto w-5/4' alt="icon" />
      
     <h1 className=" text-4xl text-white text-center pb-3 font-semibold  block">{apiData.location.name}, {apiData.location.country}</h1> 
      <h3><span className=" block text-white pb-3 font-semibold text-3xl text-center ">{apiData.current.temp_c} °C</span></h3>
      <h1 className= " block text-3xl text-center font-semibold  text-white ">{apiData.current.condition.text}</h1> 


     </div> 
</div>


</div>  
            
        </div>
    );
};

export default Screen;
