function Projects(props) {
  return (
    <div className="mt-10 flex flex-col justify-center items-center space-y-4 sm:px-6 md:px-16 mx-12 sm:mx-4">
      <div className="mb-2">
        <h2 className="text-xl">
          My First Steps in MERN Stack{" "}
          <hr className="h-0.5 mt-1 border border-gray-700" />
        </h2>
      </div>
      <div></div>

      <div
        className={`border border-[#A31ACB] p-2 rounded-lg shadow-md shadow-[#A31ACB] sm:text-sm md:text-lg ${
          props.darkMode
            ? "text-gray-400 bg-transparent"
            : "text-black bg-gradient-to-r from-rose-100 to-teal-100 "
        } `}
      >
        <div>
          <p className="text-sm font-thin tracking-tight">
            I'm excited to keep learning and building more cool projects. As I
            get better, I'll be taking on bigger and more complex projects, and
            I can't wait to show you what I'll come up with next.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Projects;
