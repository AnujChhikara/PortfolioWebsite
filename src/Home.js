import React from 'react'
import Typewriter from "typewriter-effect";
import Navbar from './Navbar'
function Home() {
  return (
    <div className="font-nunito w-auto h-[700px] bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
      <div className="mb-32"><Navbar/></div>
      <div className='flex mx-72 items-center space-x-2'>
      <img className='w-60 ' src="/profile.png" alt="" />
      <div className='text-4xl pl-4 pb-16'>
        <h2 className='font-sans'>👋 Hi There!</h2>
      <div className='flex space-x-2 mt-1 ' >
      <h2 className=''> I'm </h2>
      <h1 className='text-[#434242] underline'>Anuj Chhikara</h1>
      </div>
      
      <div className='text-2xl mt-4 absolute text-[#434242]  '>
        
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("I am a self-learned MERN stack developer")
            .pauseFor(600)
            .deleteAll()
            .typeString(`Forever a student of code, always learning 🚀`)
            .start()
          }}
        
        />
        
        </div>
      </div>
      </div>
      
        <footer className='font-sans font-medium w-screen flex justify-center fixed mb-2 bottom-0'>built with ❤️ anuj</footer>
    </div>
  )
}

export default Home