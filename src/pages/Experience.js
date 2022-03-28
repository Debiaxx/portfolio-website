import React from "react";

const Experience = () => {
  return (
    <div className="my-8">
      <label className="text-3xl sm:text-5xl font-bold text-gray-700 font-sans">
        Work <span className="gradient-text">Experience </span> and{" "}
        <span className="gradient-text">Education </span>
      </label>
      <div className="mt-8 mb-28">
        <div className="flex flex-wrap md:px-4">
          <div className="w-full">
            <div className="md:mx-4">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full">
                      <svg
                        className="w-4 text-gray-500 animate-bounce"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-400" />
                </div>
                <div className="pt-1 pb-8 ">
                  <p className=" text-xl font-bold text-gray-700">
                    Full Stack Developer
                  </p>
                  <p className=" text-gray-700 font-medium">Linkedphone</p>
                  <p className=" text-gray-500 mb-2">08/2021 - Present</p>
                  <ul className="text-sm text-gray-500 leading-6 ">
                    <li>
                      Enhancing their ui using HTML,CSS, JavaScript and Jquery.
                    </li>
                    <li>
                      Developing new features and functionality using
                      Node.js,HTML,CSS, JavaScript and Jquery.
                    </li>
                    <li>
                      Developed websocket api using AWS lambda and API gateway
                      in Node.js
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full">
                      <svg
                        className="w-4 text-gray-500 animate-bounce"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-400" />
                </div>
                <div className="pt-1 pb-4">
                  <p className="text-xl font-bold text-gray-700">
                    Software Developer Intern
                  </p>
                  <p className=" text-gray-700 font-medium">Dot Com Labs LLP</p>
                  <p className=" text-gray-500 mb-2">03/2021 - 07/2021</p>
                  <ul className="text-sm text-gray-500 leading-6 ul-bullet">
                    <li>
                      Build stable and maintainable codebases using React.
                    </li>
                    <li>
                      Enhanced user experience and accomplish webpage objectives
                      by creating site structure, navigation, page optimization
                      and graphics integraton.
                    </li>
                    <li>Developed user friendly and responsive websites.</li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-500 rounded-full">
                      <svg
                        className="w-4 text-gray-500"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-400" />
                </div>
                <div className="pt-1 ">
                  <p className="text-xl font-bold text-gray-700">
                    Lovely Professional University
                  </p>
                  <p className=" text-gray-700 font-medium">
                    B.tech(Computer Science & Engineering)
                  </p>
                  <p className=" text-gray-500 mb-2">2017 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
