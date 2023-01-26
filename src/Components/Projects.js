import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";
function Projects(props) {
  const cards = ProjectData.map(function (item) {
    return (
      <ProjectCard
        title={item.title}
        svg={item.svg}
        brief={item.brief}
        link={item.link}
      />
    );
  });
  return (
    <div className="mt-10 flex flex-col justify-center items-center space-y-4 sm:px-6  md:px-16 mx-12 sm:mx-4">
      <div className="mb-2">
        <h2 className="text-xl">
          My First Steps in MERN Stack{" "}
          <hr className="h-0.5 mt-1 border border-gray-700" />
        </h2>
      </div>
      <div
        className={`sm:flex ${
          props.darkMode ? "text-gray-400" : "text-black"
        }  sm:flex-col md:grid md:grid-cols-2 md:gap-4 sm:space-x-0 sm:items-center sm:space-y-4 md:space-y-0 `}
      >
        {cards}
      </div>

      <div
        className={`border border-[#A31ACB] p-2 rounded-lg shadow-md shadow-[#A31ACB] sm:text-sm md:text-lg ${
          props.darkMode ? "text-gray-400 bg-transparent" : "text-black "
        } `}
      >
        <div className="">
          <p className="w-72 text-sm font-thin tracking-tight">
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
