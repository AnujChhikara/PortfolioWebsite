function Career() {
  return (
    <div className="flex flex-col justify-start  mb-20  text-xl">
      <h2 className="text-xl  flex flex-col items-center justify-center mb-6 ">
        Professional Experience
        <hr className="h-0.5 w-60 mt-1 border border-gray-700" />
      </h2>
      <div className="flex sm:flex-col md:flex-row  justify-center items-center">
        <div className="flex text-[18px] items-center justify-center">
          <div className="flex flex-col  duration-500 shadow-white shadow-md rounded-xl  px-8 py-6">
            <h5>2022 - Current</h5>
            <h3 className=" text-2xl flex text-transparent bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 bg-clip-text ">
              Graphic
              <h4 className="ml-2 text-transparent bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 bg-clip-text ">
                Designer
              </h4>
            </h3>

            <h4>
              - <a href="https://speedexind.com/">at Speedex</a>{" "}
            </h4>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 md:h-1 md:w-20 sm:h-20 sm:w-1 "></div>

        <div className="  flex h-32 w-64 rounded-lg shadow-md shadow-white text-[16px]  duration-700"></div>
      </div>
    </div>
  );
}
export default Career;
