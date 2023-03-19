import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <div className="md:flex md:flex-row font-Sans sm:flex sm:flex-col justify-center  sm:items-center items-center space-x-4 fade-in-left">
      <img
        className="md:w-60 sm:w-40 mb-6 duration-1000  rounded-full "
        src="./anuj.jpg"
        alt="Anuj-profile-img"
      />

      <div className="md:text-4xl sm:text-xl md:pl-4 md:pb-16 sm:mt-2 md:mt-8 ">
        <h2 className="">👋 Hi There!</h2>
        <div className="flex space-x-2 mt-3 ">
          <h2 className="md:mr-2"> I'm </h2>
          <h1 className="font-play text-[#D62AD0] font-extrabold fill md:text-3xl sm:text-[24px] border border-xl border-[#D62AD0] shadow-[#D62AD0] rounded shadow-lg p-1 px-3 py-2">
            Anuj Chhikara
          </h1>
        </div>

        <div
          className={`md:text-[18px] sm:text-lg  mt-6 sm:absolute md:relative
            
           `}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I am a MERN Stack Developer")
                .pauseFor(600)

                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default Intro;
