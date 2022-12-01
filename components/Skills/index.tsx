import React from "react";
import { GitSvg } from "../SvgComponents/GitSvg";
import { NextSvg } from "../SvgComponents/NextSvg";
import { NodeSvg } from "../SvgComponents/NodeSvg";
import { ReactSvg } from "../SvgComponents/ReactSvg";
import { TailwindSvg } from "../SvgComponents/TailwindSvg";
import { ViteSvg } from "../SvgComponents/ViteSvg";
import { GitHubSvg } from "../SvgComponents/GitHubSvg";
import { VsCodeSvg } from "../SvgComponents/VsCodeSvg";
import { Progress } from "flowbite-react";

export const Skills = () => {
  return (
    <div id="skills">
      <div className=" flex justify-center pb-20" id="projects">
        <h1
          data-aos="zoom-in-left"
          data-aos-duration={2000}
          className="font-bold font-['Poppins'] sm:text-7xl text-6xl title-shadow text-blue-500"
        >
          Skills
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
          <div data-aos='flip-down' data-aos-duration={2000} className="md:flex-row flex-col flex justify-center items-center gap-14">
            <ReactSvg />

            <div className="relative  flex items-center md:w-96 w-60 text-xl border-4 rounded-full h-10 border-blue-500 text-white progress-shadow">
              <div className="absolute left-0 top-0 rounded-l-full h-full flex justify-center bg-blue-500 w-[70%]">
                React.js: 70%
              </div>
            </div>
          </div>
          <div data-aos='flip-down' data-aos-duration={2000} className="md:flex-row flex-col flex justify-center items-center gap-14">
            <NextSvg />
            <div className="relative  flex items-center md:w-96 w-60 text-xl border-4 rounded-full h-10 border-blue-500 text-white progress-shadow">
              <div className="absolute left-0 top-0 rounded-l-full h-full flex justify-center bg-blue-500 w-[75%]">
                Next.js: 75%
              </div>
            </div>
          </div>
          <div data-aos='flip-down' data-aos-duration={2000} className="md:flex-row flex-col flex justify-center items-center gap-14">
            <TailwindSvg />
            <div className="relative  flex items-center md:w-96 w-60 text-xl border-4 rounded-full h-10 border-blue-500 text-white progress-shadow">
              <div className="absolute left-0 top-0 rounded-full h-full flex justify-center bg-blue-500 w-[100%]">
                Tailwind CSS: 100%
              </div>
            </div>
          </div>
          <div data-aos='flip-down' data-aos-duration={2000} className="md:flex-row flex-col flex justify-center items-center gap-14">
            <ViteSvg />
            <div className="relative  flex items-center md:w-96 w-60 text-xl border-4 rounded-full h-10 border-blue-500 text-white progress-shadow">
              <div className="absolute left-0 top-0 rounded-l-full h-full flex justify-center bg-blue-500 w-[80%]">
                Vite.js: 80%
              </div>
            </div>
          </div>
          <div data-aos='flip-down' data-aos-duration={2000} className="md:flex-row flex-col flex justify-center items-center gap-14">
            <NodeSvg />
            <div className="relative  flex items-center md:w-96 w-60 text-sm  sm:text-xl border-4 rounded-full h-10 border-blue-500 text-white progress-shadow">
              <div className="absolute left-0 top-0 rounded-l-full h-full flex items-center justify-center bg-blue-500 w-[40%]">
                Node.js: 20%
              </div>
            </div>
          </div>
          <div data-aos='flip-down' data-aos-duration={2000} className="md:flex-row flex-col flex justify-center items-center gap-14">
            <GitSvg />
            <div className="relative  flex items-center md:w-96 w-60 text-xl border-4 rounded-full h-10 border-blue-500 text-white progress-shadow">
              <div className="absolute left-0 top-0 rounded-l-full h-full flex justify-center bg-blue-500 w-[85%]">
                Git: 85%
              </div>
            </div>
          </div>
          <div data-aos='flip-down' data-aos-duration={2000} className="md:flex-row flex-col flex justify-center items-center gap-14">
            <GitHubSvg />
            <div className="relative  flex items-center md:w-96 w-60 text-xl border-4 rounded-full h-10 border-blue-500 text-white progress-shadow">
              <div className="absolute left-0 top-0 rounded-full h-full flex justify-center bg-blue-500 w-[100%]">
                GitHub: 100%
              </div>
            </div>
          </div>
          <div data-aos='flip-down' data-aos-duration={2000} className="md:flex-row flex-col flex justify-center items-center gap-14">
            <VsCodeSvg />
            <div className="relative  flex items-center md:w-96 w-60 text-xl border-4 rounded-full h-10 border-blue-500 text-white progress-shadow">
              <div className="absolute left-0 top-0 rounded-full h-full flex justify-center bg-blue-500 w-[100%]">
                Visual Studio Code: 100%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
