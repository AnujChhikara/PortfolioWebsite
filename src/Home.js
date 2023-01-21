import React, { useState } from "react";

import "./App.css";
import "animate.css";
import Intro from "./Components/Intro";
import Tech from "./Components/Tech";

import Navbar from "./Components/Navbar";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div
      className={`font-nunito flex flex-col  items-center justify-center font-semibold w-screen h-full ${
        darkMode
          ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white"
          : "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900"
      } `}
    >
      <div className="mb-2">
        <div className="md:mb-28 sm:mb-20 ">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
      <div className="mb-20 ">
        <Intro darkMode={darkMode} />
      </div>
      <div className=" flex  flex-col justify-center mt-10 ">
        <div>
          <h3 className={`text-2xl font-Sans mb-4`}>
            Technologies I Work With
          </h3>
        </div>
        <div className="">
          <Tech darkMode={darkMode} />
        </div>
      </div>
      <footer className="opacity-80 pb-2 pt-10 mt-auto font-sans font-medium w-screen flex justify-center ">
        built with ❤️ anuj
      </footer>
    </div>
  );
}

export default Home;
