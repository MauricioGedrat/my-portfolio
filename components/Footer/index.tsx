import React from "react";
import { LogoSvg } from "../SvgComponents/LogoSvg";

export const Footer = () => {
  return (
    <footer className="bg-transparent mt-10 px-10 py-2">
      <div className="flex items-center justify-center sm:flex-row flex-col flex-wrap border-t-2 border-gray-900">
        <LogoSvg width="50" height="50" />
        <div className="sm:block hidden w-[2px] h-[50px] bg-gray-900 ml-2 mr-2"></div>
        <p className="text-[#d3d3d3] font-poppins sm:text-lg text-sm">
          Some rights reserved
        </p>
        <div className="sm:block hidden w-[2px] h-[50px] bg-gray-900 ml-2 mr-2"></div>
        <p className="text-blue-500 font-poppins sm:text-lg text-sm">
          Developed by Maurício Gedrat
        </p>
      </div>
    </footer>
  );
};
