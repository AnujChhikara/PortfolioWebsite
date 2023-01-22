function Journey(props) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 sm:px-6 md:px-16 mx-12 sm:mx-2">
      <div className="mb-2">
        <h2 className={`text-xl `}>
          My Development Journey
          <hr className="h-0.5 mt-1 border border-gray-700" />
        </h2>
      </div>
      <div
        className={`sm:text-sm md:text-lg ${
          props.darkMode
            ? "text-gray-400 bg-transparent"
            : "text-black bg-gradient-to-r from-rose-100 to-teal-100 "
        } border hover:scale-105 duration-1000 border-[#A31ACB] p-2  rounded-lg shadow-md shadow-[#A31ACB] flex flex-col space-y-4 tracking-tight font-thin `}
      >
        <div className="px-4 rounded-lg ">
          <h3>
            I come from a non-technical background, but I have always been
            fascinated by the endless possibilities that technology has to
            offer. My interest in web development sparked a year ago, and since
            then, I've been dedicating my time to learning the ins and outs of
            coding.
          </h3>
        </div>
        <div className="px-4">
          <h3>
            In my journey, I discovered the power of MERN stack (MongoDB,
            Express.js, React, and Node.js) and I have been focusing on learning
            and working with these technologies to build modern web
            applications. My journey has been challenging, but also incredibly
            rewarding.
          </h3>
        </div>
        <div className="px-4">
          <h3>
            I am optimistic about the future and I am constantly seeking ways to
            improve my skills and knowledge. I believe that there is always room
            for growth and I'm excited to see where my journey in web
            development takes me.
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Journey;
