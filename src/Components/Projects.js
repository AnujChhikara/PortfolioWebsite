import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";
function Projects() {
  const cards = ProjectData.map(function (item) {
    return (
      <ProjectCard
        title={item.title}
        svg={item.svg}
        brief={item.brief}
        link={item.link}
        key={item.id}
      />
    );
  });
  return (
    <div className="mt-10 flex flex-col justify-center items-center space-y-4 sm:px-6  md:px-16 mx-12 sm:mx-4">
      <div className="md:mb-6 sm:mb-2">
        <h2 className="text-xl font-play">
          Projects
          <hr className="h-0.5 mt-1 border border-gray-500" />
        </h2>
      </div>
      <div
        className={`sm:flex 
          text-gray-300 sm:flex-col md:grid md:grid-cols-2 md:gap-8  sm:space-x-0 sm:items-center sm:space-y-4 md:space-y-0 pb-4`}
      >
        {cards}
      </div>

      <div
        className={`p-4  sm:text-sm md:text-lg 
         text-gray-200 bg-transparent
         `}
      >
        <div className="">
          <p className="sm:w-72 md:w-[650px] text-sm font-thin tracking-tight">
            I'm excited to keep learning and building more cool projects. As I
            get better, I'll be taking on bigger and more complex projects, and
            I can't wait to show you what I'll come up with next.
          </p>
        </div>
      </div>
      <div className="">
        <hr className="h-0.5 w-80  border border-gray-400 " />
      </div>
    </div>
  );
}
export default Projects;
