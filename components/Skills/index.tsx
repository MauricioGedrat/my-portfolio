import React from "react";
import { GitSvg } from "../SvgComponents/GitSvg";
import { NextSvg } from "../SvgComponents/NextSvg";
import { NodeSvg } from "../SvgComponents/NodeSvg";
import { ReactSvg } from "../SvgComponents/ReactSvg";
import { TailwindSvg } from "../SvgComponents/TailwindSvg";
import { ViteSvg } from "../SvgComponents/ViteSvg";
import { GitHubSvg } from "../SvgComponents/GitHubSvg";
import { VsCodeSvg } from "../SvgComponents/VsCodeSvg";

export const Skills = () => {
  return (
    <div id="skills" className="pb-10">
      <div className=" flex justify-center pb-20" id="projects">
        <h1
          data-aos="zoom-in"
          data-aos-duration={2000}
          className="font-bold font-['Poppins'] sm:text-7xl text-6xl title-shadow text-blue-500"
        >
          Skills
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className="md:flex-row flex-col flex justify-center items-center gap-14"
          >
            <ReactSvg />

            <div className="relative  flex items-center text-white ">
              <div className=" w-[250px] font-['Poppins'] text-[#d3d3d3] text-center text-xl">
                <span className="font-bold text-white">React.js:</span> 1 year of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className="md:flex-row flex-col flex justify-center items-center gap-14"
          >
            <NextSvg />
            <div className="relative flex items-center text-white">
              <div className=" w-[250px] font-['Poppins'] text-[#d3d3d3] text-center text-xl">
                <span className="font-bold text-white">Next.js:</span> 10 months of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className="md:flex-row flex-col flex justify-center items-center gap-14"
          >
            <TailwindSvg />
            <div className="relative flex items-center text-white">
              <div className=" w-[250px] font-['Poppins'] text-[#d3d3d3] text-center text-xl">
                <span className="font-bold text-white">Tailwind CSS:</span> 1 year of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className="md:flex-row flex-col flex justify-center items-center gap-14"
          >
            <ViteSvg />
            <div className="relative flex items-center text-white">
              <div className=" w-[250px] font-['Poppins'] text-[#d3d3d3] text-center text-xl">
                <span className="font-bold text-white">Vite.js:</span> 7 months of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className="md:flex-row flex-col flex justify-center items-center gap-14"
          >
            <NodeSvg />
            <div className="relative flex items-center text-white">
              <div className=" w-[250px] font-['Poppins'] text-[#d3d3d3] text-center text-xl">
                <span className="font-bold text-white">Node.js:</span> Without much experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className="md:flex-row flex-col flex justify-center items-center gap-14"
          >
            <GitSvg />
            <div className="relative flex items-center text-white">
              <div className=" w-[250px] font-['Poppins'] text-[#d3d3d3] text-center text-xl">
                <span className="font-bold text-white">Git:</span> 1 year and 3 months of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className="md:flex-row flex-col flex justify-center items-center gap-14"
          >
            <GitHubSvg />
            <div className="relative flex items-center text-white">
              <div className=" w-[250px] font-['Poppins'] text-[#d3d3d3] text-center text-xl">
                <span className="font-bold text-white">GitHub:</span> 1 year and 5 months of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className="md:flex-row flex-col flex justify-center items-center gap-14"
          >
            <VsCodeSvg />
            <div className="relative flex items-center text-white">
              <div className=" w-[250px] font-['Poppins'] text-[#d3d3d3] text-center text-xl">
                <span className="font-bold text-white">Visual Studio Code:</span> 2 years of experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
