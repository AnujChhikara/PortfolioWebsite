function ProjectCard(props) {

 
  
  return (
    <div className="projectBg sm:w-[300px] sm:h-80 rounded-xl flex flex-col justify-around py-4 items-center space-y-4 shadow-white shadow-md">
      <div><img src={`${props.img}`} alt="" className="w-[260px] h-28 rounded shadow-gray-100 shadow-sm" /></div>
      <div className="flex space-x-4 text-sm mt-4">
        <div className="bg-gray-500 px-3 shadow-white shadow-sm">
          {props.tech1}
        </div>
        <div className="bg-gray-500 px-3 shadow-white shadow-sm">
          {props.tech2}
        </div>
        <div className="bg-gray-500 px-3 shadow-white shadow-sm">
          {props.tech3}
        </div>
   
      </div>
      <div><h3 className="underline mt-2 text-lg star ">{props.title}</h3></div>
      <div className="flex space-x-4">
        <a className="bg-gray-500 py-1 px-3 shadow-white shadow-sm" href={`${props.githubLink}`}>Source Code</a><a className="bg-white text-black px-3 py-1 " href={`${props.live}`}>Live Preview</a>
      </div>

    </div>
  );
}
export default ProjectCard;
