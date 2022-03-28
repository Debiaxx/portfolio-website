import React from "react";
import resume from "../resume.pdf";
const About = () => {
  return (
    <div className="my-8">
      <div className="flex flex-col">
        <div className="">
          <div className="shadow"></div>
          <div className="bowl">
            <div className="liquid"></div>
          </div>
        </div>
        <label className="py-4 text-2xl md:text-3xl text-gray-600 font-bold font-sans">
          Hey, It's{" "}
          <span className="text-gray-700 text-3xl md:text-5xl font-extrabold">
            Saurabh
          </span>
        </label>
        <label className="text-5xl sm:text-7xl font-extrabold text-gray-700 py-3">
          I am a <span className="gradient-text">Full Stack Developer</span>
        </label>
        <p className="text-lg sm:text-xl font-semibold py-3 text-gray-500">
          Exploring Web3.0 and learning how can I turn my bugs into features.
          Love to talk about startups, tech and life. Currently working at{" "}
          <a
            href="https://linkedphone.com/"
            target="_blank"
            className="underline text-gray-700"
          >
            Linkedphone
          </a>
        </p>
        <p className="text-gray-500 text-lg font-semibold">
          any opportunity for me? Schedule a{" "}
          <a
            href="https://calendly.com/saurabbhh/30min"
            target="_blank"
            className="underline text-gray-700"
          >
            meeting
          </a>
        </p>
        <div className="flex items-center">
          <a
            href={resume}
            download
            className="text-xl flex items-center justify-center font-semibold py-2 my-4  bg-gray-700 text-gray-100 rounded-lg w-28"
          >
            resume{" "}
            <div className="rounded-full h-2 w-2 bg-gray-50 animate-ping ml-2"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
