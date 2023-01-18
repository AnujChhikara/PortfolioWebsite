import React from 'react'
import Snowman from "./Components/Snowman"
import Snow from './Components/Snow';
import './App.css'
import "animate.css"
import Intro from './Components/Intro';


import Navbar from './Components/Navbar'
function Home() {

  return (
    <div className="font-nunito font-semibold min-h-screen m-w-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
      <Snow/>
      

     <div className='absolute top-0'>
      
     <div className="md:mb-28 sm:mb-20 "><Navbar/></div>
     </div>
     <div className='absolute top-40'><Intro/></div>
     
     
      <div className="absolute md:top-[400px] sm:top-[550px] sm:left-1/3 md:left-3/4  rotate-12 hover:-rotate-12 duration-1000">
      <Snowman/>
      </div>
      
        <footer className='opacity-80 mb-2  mt-auto font-sans font-medium w-screen flex justify-center '>built with ❤️ anuj</footer>
   
    
    </div>
  )
}

export default Home