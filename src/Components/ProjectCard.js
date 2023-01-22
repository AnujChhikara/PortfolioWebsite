function ProjectCard(props) {
  return (
    <div className="md:w-72 sm:w-[300px] md:h-40 sm:h-36 border border-black rounded shadow-lg px-3 pt-2 hover:scale-105 duration-700">
      <div>
        <div className="flex space-x-6 items-center justify-center  ">
          <div className="w-12">{props.svg}</div>
          <h2 className="text-[16px] font-sans">{props.title}</h2>
        </div>
        <div className="">
          <h5 className="text-[13px] font-thin leading-[13px] p-2">
            {props.brief}
          </h5>
        </div>
        <div className="flex space-x-6 px-4 items-center ">
          <h4>Live Demo</h4>
          <a href={`${props.link}`}>
            <svg
              className="w-6 fill-transparent "
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 12H14.5"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 15L15.5 12L12.5 9"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
