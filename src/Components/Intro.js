import Typewriter from "typewriter-effect";

function Intro(props) {
  return (
    <div className="md:flex md:flex-row font-Sans sm:flex sm:flex-col justify-center  sm:items-center items-center space-x-2 fade-in-left">
      <img
        className="md:w-60 sm:w-32 mb-6 duration-1000 hover:scale-95 rounded-full "
        src="/Anuj_profile (1).jpg"
        alt="photo.jpg"
      />
      <div className="md:text-4xl sm:text-xl md:pl-4 md:pb-16 sm:mt-2 md:mt-0 ">
        <h2 className="">👋 Hi There!</h2>
        <div className="flex space-x-2 mt-3 ">
          <h2 className=""> I'm </h2>
          <h1 className="text-[#D62AD0] fill md:text-3xl sm:text-2xl border border-xl border-[#D62AD0] shadow-[#D62AD0] rounded shadow-md p-1 px-3 ">
            Anuj Chhikara
          </h1>
        </div>

        <div
          className={`md:text-2xl sm:text-lg mt-4 absolute ${
            props.darkMode ? "text-gray-300" : "text-[#434242]"
          }  `}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I am a self-learned MERN stack developer")
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
