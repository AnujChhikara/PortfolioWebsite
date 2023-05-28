import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <div className="md:flex md:flex-row font-Sans sm:flex sm:flex-col justify-center  sm:items-center items-center space-x-4 fade-in-left">
      <img
        className="md:w-40 border-2 border-yellow-200 shadow-md hover:shadow-white hover:shadow-md shadow-white sm:w-40 -rotate-6 mb-6 duration-1000  rounded-full "
        src="./anuj.jpg"
        alt="Anuj-profile-img"
      />
      <div className="flex flex-col justify-center text-3xl font-nunito items-start space-y-3">
        <h3>👋 Hi There!</h3>
        <div className="flex space-x-4">
          <h4>I'm </h4>
          <h1 class="outlined-text md:text-[50px]">Anuj Chhikara</h1>
        </div>
        <div
          className={`md:text-[28px] star sm:text-lg md:pt-2  md:relative
            
           `}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("i am a MERN Stack Developer")
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
