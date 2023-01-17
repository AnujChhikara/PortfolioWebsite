import React from 'react'

import Snow from './Snow';
import './App.css'
import "animate.css"
import Intro from './Components/Intro';

import Navbar from './Navbar'
function Home() {
  return (
    <div className="font-nunito font-semibold w-screen h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
      <Snow/>
     <div className='fixed top-0'>
      
     <div className="md:mb-28 sm:mb-20 "><Navbar/></div>
     <Intro/>
      
      
        <footer className='font-sans font-medium w-screen flex justify-center fixed mb-2 bottom-0'>built with ❤️ anuj</footer>
    </div>
    </div>
  )
}

export default Home