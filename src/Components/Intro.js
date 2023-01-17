import Typewriter from "typewriter-effect";


function Intro() {
  return (
    <div className='md:flex md:flex-row sm:flex sm:flex-col md:mx-72 sm:mx-10 sm:items-center items-center space-x-2 animate__animated animate__fadeInLeft animate__slow' >
    <img className='md:w-60 sm:w-32' src="/profile.png" alt="" />
    <div className='text-4xl md:pl-4 md:pb-16 '>
      <h2 className='font-sans'>👋 Hi There!</h2>
    <div className='flex space-x-2 mt-3 ' >
    <h2 className=''> I'm </h2>
    <h3 className='text-[#D62AD0]  text-3xl border border-xl border-[#D62AD0] shadow-[#D62AD0] rounded shadow-lg p-1 px-3 '>Anuj Chhikara</h3>
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
    
  )
}
export default Intro