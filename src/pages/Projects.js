import React from "react";
import { FaRegEye, FaGithub } from "react-icons/fa";
import senju from "../senju.png";
import linkme from "../linkme.png";

const ProjectsData = [
  {
    title: "Senju",
    description:
      "Your Metaverse Repository. Use non-fungible tokens to build and manage your own blog on this platform, which is added to your decentralised profile.",
    image: senju,
    url: "https://senju.in/",
    github: "https://senju.in",
    techStack: "MERN, TailwindCSS, Onec Dev Tools",
  },
  {
    title: "Zeno",
    description:
      "Zeno allows you to send/buy crypto in FIAT also you can lend your tokens",
    image:
      "https://cdn.sanity.io/images/p7wt73d0/production/e3d348e5ead3b0649964f67c2c225e96da1ca768-1432x692.png",
    url: "https://zenoo.netlify.app/",
    github: "https://zeno.netlify.app/",
    techStack: "MERN, Solidity, ether.js, TailwindCSS",
  },
  {
    title: "linkME",
    description:
      "A webapp where you can place all your social media links at one place and share them with anyone",
    image: linkme,
    url: "https://linkmehq.netlify.app/",
    github: "https://github.com/starc007/linkme",
    techStack: "React, TailwindCSS, Node, MongoDB, Google Auth",
  },
  {
    title: "Payifi",
    description:
      "Simple responsive website built in React and Bootstrap. I've built this website during my internship",
    image:
      "https://cdn.sanity.io/images/p7wt73d0/production/aab6e7fc0bd32ce87975f77fd9e49da68d022628-1910x851.png",
    url: "https://starc007-dev.netlify.app/",
    github: "https://starc007-dev.netlify.app/",
    techStack: "React, Bootstrap",
  },
];

const Projects = () => {
  return (
    <div className="my-8">
      <label className="text-3xl sm:text-5xl font-bold text-gray-700 font-sans">
        Some <span className="gradient-text">cool things</span> that I have
        built
      </label>
      <div className="flex flex-wrap mt-6 mb-28">
        {ProjectsData.map((project) => (
          <div className="w-full md:w-2/5 sm:mx-4 mt-4">
            <div className="shadow p-5 border border-gray-700 rounded-xl bg-white group hover:shadow-xl duration-500 transition">
              <div className="relative mb-6 w-full h-48 bg-gray-200 rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt="coverImage"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute opacity-0 transition duration-200 bg-gray-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                  <ul className="flex flex-wrap space-x-4">
                    <li>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className=" flex items-center justify-center primary-border rounded-full hover:text-gray-100 p-2 hover:bg-gray-700 duration-500 transition text-gray-700"
                      >
                        <FaRegEye size={28} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className=" flex items-center justify-center primary-border rounded-full hover:text-gray-100 p-2 hover:bg-gray-700 duration-500 transition text-gray-700"
                      >
                        <FaGithub size={28} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-gray-700 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 font-semibold truncate">
                {project.description}
              </p>
              <p className="text-gray-700 font-bold">
                built using -{" "}
                <span className="text-gray-400 ">{project.techStack}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
