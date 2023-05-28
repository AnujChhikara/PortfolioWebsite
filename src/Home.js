import "./App.css";
import Intro from "./Components/Intro";
import Tech from "./Components/Tech";
import Journey from "./Components/Journey";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Career from "./Components/Career";

function Home() {
  return (
    <div
      className={`font-mon bg-earth bg-contain bg-no-repeat flex flex-col md:items-center justify-center font-semibold w-screen h-fit  
        
       `}
    >
      {/* Navbar */}

      <header className="mb-2 ">
        <div className="md:mb-28 md:mt-6 sm:mb-10 mr-52">
          <Navbar />
        </div>
      </header>

      {/* Intro */}
      <div className="lg:mr-72  ">
        <Intro />
      </div>

      {/* Technology */}

      <div className=" flex  flex-col justify-center items-center lg:mt-48 sm:mt-28 mb-20">
        <div className="flex flex-col md:mb-8 sm:mb-6">
          <h3
            className={`sm:text-2xl md:text-3xl font-play md:text-yellow-400 font-semibold `}
          >
            My Favorite Tech
          </h3>
          <hr className="h-0.5 border border-gray-500" />
        </div>
        <div
          className={`hover:scale-105 duration-1000 rounded-lg hover:shadow-orange-300 hover:shadow-sm`}
        >
          <Tech />
        </div>
      </div>

      {/* Career */}
      <Career />

      {/* Journey */}
      <div>
        <Journey />
      </div>

      {/* Project */}
      <div className="">
        <Projects />
      </div>

      {/* Thank you */}
      <div className="mt-10 mx-auto sm:w-72 md:w-[500px]  rounded-md text-gray-400 py-4">
        <h4 className="text-gray-200">
          Thanks for visiting my website. Your support is appreciated. Let me
          know if you have any feedback. 😊
        </h4>
      </div>
      {/* contact */}
      <div className="w-32  flex mx-auto flex-row space-x-4 mb-10 ">
        <a
          className="hover:scale-110 duration-1000"
          href="mailto:anujchhikara777@gmail.com"
        >
          <img
            src="https://www.svgrepo.com/show/404657/email-notification-message-envelope-letter-chat.svg"
            alt="email.jpeg"
          />
        </a>
        <a
          className="hover:scale-110 duration-1000"
          href="https://github.com/AnujChhikara"
        >
          <img
            src="https://www.svgrepo.com/show/372862/github-full.svg"
            alt="githubIcon.jpeg"
          />
        </a>
      </div>

      {/* footer */}
      <footer>
        <div className="p-2 text-white font-sans font-medium w-screen flex justify-center ">
          built with ❤️ anuj
        </div>
      </footer>
    </div>
  );
}

export default Home;
