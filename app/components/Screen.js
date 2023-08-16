"use client"
import Image from "next/image";
import React from 'react';
import { useEffect, useState } from 'react';
import '../globals.css';

const Screen = () => {

              const [query,setQuery] =useState('dhaka');
              const[apiData,setApiData] = useState(null);

              const key="9fda3e28bdbf04488a129f72b7e5852d"

          
              
              


              const handleData =  async() => {
              const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=metric`);
              const data= await res.json();
              setApiData(data);}

            // console.log(apiData);


            const handleChange = (e) => {
              setQuery(e.target.value);
             
            };


            const handleSubmit = (e) => {
              e.preventDefault();
              handleData();
            };


              useEffect(()=>{
                  handleData();

              },[]);


           
                
    return (
             
<div className=" w-full mx-auto  overflow-hidden ">

      <div>
        <Image 
        src="/bg-img.jpg"
        width={1280}
        height={500}
        className="fixed object-cover object-center w-full h-full "
        alt="background image"
        />


      </div>

      <div className=" relative w-full mt-20 px-10 sm:px-0 mx-auto mb-20   z-10 ">
        
          <form onSubmit={handleSubmit} className=" text-center  mx-auto sm:text-left" >


            <div className="flex flex-col mx-auto sm:flex-row  w-full  box-border sm:w-[50%] justify-center">
            <input type="text" 
                className=" bg-white/10 border border-t-0 border-l-0 border-opcity-30 text-2xl shadow-5xl text-white mx-auto  px-6 py-4 mb-5 sm:mb-0  w-full sm:w-[100%]   rounded-lg sm:mr-5 text-left "
                value={query} 
                placeholder='Enter city name ' required
                onChange={handleChange} />


                <button 
                type="submit" 
                className='bg-white/10 border border-r-0 border-b-0 border-opcity-30 shadow-5xl text-2xl px-6 py-4 sm:py-8 rounded-lg  text-white '
                >Search</button>

            </div>

              
            </form>            
        </div>

        

      
      

     { !apiData ? (
      <h1> No Data Found</h1>
     ):(

            
             <div className="w-full px-10 sm:px-0 mx-auto ">

            <div className=' relative mt-20 w-full   text-center m-20 sm:w-1/2 h-full p-20 mx-auto bg-white/10 shadow-5xl border border-r-0 border-b-0 border-opcity-30  rounded-3xl'>
              
             <Image
              src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`}
              width={100}
              height={100}
              className='  block px-10 sm:px-0 mx-auto' alt="icon" /> 
            
                
              <h1 className=" text-4xl text-white text-center pb-3 font-semibold  block">{apiData.name}, {apiData.sys.country}</h1> 
                <h3><span className=" block text-white pb-3 font-semibold text-3xl text-center ">{apiData.main.temp} °C</span></h3>
                <h1 className= " block text-3xl text-center font-semibold  text-white ">{apiData.weather[0].main}</h1> 

                </div> 

                </div>
        )} 
 
</div>  
            
    );
};

export default Screen;
