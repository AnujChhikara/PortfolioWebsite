import React, { useState } from "react";
import "./App.css";
import Intro from "./Components/Intro";
import Tech from "./Components/Tech";
import Journey from "./Components/Journey";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
});
function Home() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div
      className={`font-nunito flex flex-col md:items-center justify-center font-semibold w-screen h-fit  ${
        darkMode
          ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white"
          : "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900"
      } `}
    >
      {/* Navbar */}
      <div className="mb-2">
        <div className="md:mb-28 sm:mb-10 mr-2">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>

      {/* Intro */}
      <div data-aos="fade-in" className="mb-20  ">
        <Intro darkMode={darkMode} />
      </div>

      {/* Technology */}
      <div className=" flex  flex-col justify-center items-center mt-10 mb-20">
        <div className="flex flex-col md:mb-8 sm:mb-6">
          <h3 className={`text-2xl font-Sans font-semibold `}>
            Technologies I Work With
          </h3>
          <hr className="h-0.5 border border-gray-700" />
        </div>
        <div
          className={`${
            darkMode
              ? "bg-transparent"
              : "bg-gradient-to-r from-rose-100 to-teal-100"
          } hover:scale-105 duration-1000 rounded-lg hover:shadow-orange-300 hover:shadow-sm`}
        >
          <Tech darkMode={darkMode} />
        </div>
      </div>

      {/* Journey */}
      <div>
        <Journey darkMode={darkMode} />
      </div>

      {/* Project */}
      <div data-aos="flip-left">
        <Projects darkMode={darkMode} />
      </div>
      {/* Thank you */}
      <div
        data-aos="slide-up"
        className="mt-12 mx-auto px-4 sm:w-72 border  border-[#A31ACB] rounded-md text-gray-400 py-4"
      >
        <h4 className={`${darkMode ? "text-gray-400" : "text-black"}`}>
          Thanks for visiting my website. Your support is appreciated. Let me
          know if you have any feedback. 😊
        </h4>
      </div>
      {/* contact */}
      <div className="w-32 mt-4 flex mx-auto flex-row space-x-4 mb-10 ">
        <a
          className="hover:scale-110 duration-1000"
          href="mailto:anujchhikara777@gmail.com"
        >
          <img
            src="https://www.svgrepo.com/show/404657/email-notification-message-envelope-letter-chat.svg"
            alt=""
          />
        </a>
        <a
          className="hover:scale-110 duration-1000"
          href="https://github.com/AnujChhikara"
        >
          <img
            src="https://www.svgrepo.com/show/372862/github-full.svg"
            alt=""
          />
        </a>
      </div>
      {/* footer */}

      <footer className="p-2 scale- mt-auto font-sans font-medium w-screen flex justify-center ">
        built with ❤️ anuj
      </footer>
    </div>
  );
}

export default Home;
