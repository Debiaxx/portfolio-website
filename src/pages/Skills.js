import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaPython,
  FaGitAlt,
  FaSass,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiVisualstudiocode,
  SiTailwindcss,
  SiJquery,
} from "react-icons/si";

const data = [
  {
    Icon: <FaReact />,
    name: "React",
  },
  {
    Icon: <FaNodeJs />,
    name: "Node.js",
  },
  {
    Icon: <SiExpress />,
    name: "Express",
  },
  {
    Icon: <SiJavascript />,
    name: "JavaScript",
  },
  {
    Icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    Icon: <SiMysql />,
    name: "MySQL",
  },
  {
    Icon: <FaHtml5 />,
    name: "HTML5",
  },
  {
    Icon: <FaCss3Alt />,
    name: "CSS3",
  },
  {
    Icon: <SiTailwindcss />,
    name: "TailwindCSS",
  },
  {
    Icon: <FaAws />,
    name: "AWS",
  },
  {
    Icon: <FaPython />,
    name: "Python",
  },
  {
    Icon: <FaGitAlt />,
    name: "Git",
  },
  {
    Icon: <SiVisualstudiocode />,
    name: "VS Code",
  },
  {
    Icon: <FaSass />,
    name: "SASS",
  },
  {
    Icon: <SiJquery />,
    name: "jQuery",
  },
];

const Skills = () => {
  return (
    <div className="my-8">
      <label className="text-3xl sm:text-5xl font-bold text-gray-700 font-sans">
        <span className="gradient-text">Some tools</span> that I play with{" "}
        <br className="hidden md:block" /> on a daily basis
      </label>
      <div className="flex flex-wrap my-8 justify-center sm:justify-start">
        {data.map((item) => (
          <div
            key={item.Icon}
            className="md:w-36 w-32 py-4 border  rounded-xl m-2 hover:shadow-lg transition duration-500"
          >
            <div className="flex text-lg md:text-xl flex-col items-center justify-center text-gray-700 font-semibold">
              {item.Icon}{" "}
              <span className="text-gray-700 text-lg pt-2">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <label className="text-xl font-semibold text-gray-500">
          Currently Learning{" "}
          <span className="text-gray-700 underline ">NextJS</span>,{" "}
          <span className="text-gray-700 underline ">Solidity</span>
        </label>
      </div>
    </div>
  );
};

export default Skills;
