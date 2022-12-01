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
          <div className="md:flex-row flex-col flex justify-center items-center gap-14">
            <ReactSvg />
            <Progress
              progress={70}
              className='md:w-96 w-60 text-xl'
              label="React.js: 70%"
              labelPosition="inside"
              labelProgress={true}
              size='xl'
              color="blue"
              
            />
          </div>
          <div className="md:flex-row flex-col flex justify-center items-center gap-14">
            <NextSvg />
            <Progress
              progress={75}
              className='md:w-96 w-60 text-xl'
              label="Next.js: 75%"
              labelPosition="inside"
              labelProgress={true}
              size='xl'
              color="blue"
              
            />
          </div>
          <div className="md:flex-row flex-col flex justify-center items-center gap-14">
            <TailwindSvg />
            <Progress
              progress={100}
              className='md:w-96 w-60 text-xl'
              label="Tailwind CSS: 100%"
              labelPosition="inside"
              labelProgress={true}
              size='xl'
              color="blue"
              
            />
          </div>
          <div className="md:flex-row flex-col flex justify-center items-center gap-14">
            <ViteSvg />
            <Progress
              progress={90}
              className='md:w-96 w-60 text-xl'
              label="Vite.js: 90%"
              labelPosition="inside"
              labelProgress={true}
              size='xl'
              color="blue"
              
            />
          </div>
          <div className="md:flex-row flex-col flex justify-center items-center gap-14">
            <NodeSvg />
            <Progress
              progress={40}
              className='md:w-96 w-60'
              label="Node.js: 20%"
              labelPosition="inside"
              labelProgress={true}
              size='xl'
              color="blue"
              
            />
          </div>
          <div className="md:flex-row flex-col flex justify-center items-center gap-14">
            <GitSvg />
            <Progress
              progress={95}
              className='md:w-96 w-60 text-xl'
              label="Git: 95%"
              labelPosition="inside"
              labelProgress={true}
              size='xl'
              color="blue"
              
            />
          </div>
          <div className="md:flex-row flex-col flex justify-center items-center gap-14">
            <GitHubSvg />
            <Progress
              progress={100}
              className='md:w-96 w-60 text-xl'
              label="Github: 100%"
              labelPosition="inside"
              labelProgress={true}
              size='xl'
              color="blue"
              
            />
          </div>
          <div className="md:flex-row flex-col flex justify-center items-center gap-14">
            <VsCodeSvg />
            <Progress
              progress={100}
              className='md:w-96 w-60 text-xl'
              label="Visual Studio Code: 100%"
              labelPosition="inside"
              labelProgress={true}
              size='xl'
              color="blue"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};
