import Link from "next/link";
import React, { useState } from "react";
import { LogoSvg } from "../SvgComponents/LogoSvg";

export const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div data-aos="fade-up" className="fixed w-full z-[1000]">
      {/* Mbile menu */}
      <div>
        <div className="rounded-xl relative flex justify-between items-center z-[99] bg-transparent px-10 backdrop-blur-lg">
          <div className="text-2xl text-gray-200">
            <LogoSvg width="75" height="75" />
          </div>
          <button
            className={`text-white p-5 cursor-none`}
            onClick={() => setShow(!show)}
          >
            <div
              className={`${
                show ? "rotate-[145deg]  -translate-y-1 -translate-x-2" : ""
              } w-10 h-[2px] bg-white duration-500 `}
            ></div>
            <div
              className={`${
                show ? "-rotate-[145deg] -translate-x-2 -translate-y-4" : ""
              } w-10 h-[2px] bg-white duration-500 mt-3 `}
            ></div>
          </button>
        </div>
        {show && (
          <div
            data-aos="fade-down"
            className="mt-[65px] absolute  flex items-center justify-center flex-col top-0 bottom-0 left-0 right-0 bg-transparent backdrop-blur-lg h-[95vh] z-[99]"
          >
            <div className="mb-10">
              <a
                onClick={() => setShow(!show)}
                href="#"
                className="text-[#d3d3d3] border-opacity-0 hover:border-opacity-100 border-b-2 border-gray-500 duration-300 font-bold md:text-7xl text-4xl hover:text-white font-poppins transition-colors"
              >
                Home
              </a>
            </div>
            <div className="mb-10">
              <a
                onClick={() => setShow(!show)}
                href="#projects"
                className="text-[#d3d3d3] border-opacity-0 hover:border-opacity-100 border-b-2 border-gray-500 duration-300 font-bold md:text-7xl text-4xl hover:text-white font-poppins transition-colors"
              >
                Projects
              </a>
            </div>{" "}
            <div className="mb-10">
              <a
                onClick={() => setShow(!show)}
                href="#skills"
                className="text-[#d3d3d3] border-opacity-0 hover:border-opacity-100 border-b-2 border-gray-500 duration-300 font-bold md:text-7xl text-4xl hover:text-white font-poppins transition-colors"
              >
                Skills
              </a>
            </div>{" "}
            <div className="mb-10">
              <a
                onClick={() => setShow(!show)}
                href="#"
                className="text-[#d3d3d3] border-opacity-0 hover:border-opacity-100 border-b-2 border-gray-500 duration-300 font-bold md:text-7xl text-4xl hover:text-white font-poppins transition-colors"
              >
                Contact
              </a>
            </div>{" "}
          </div>
        )}
      </div>
      {/* Mobile Menu */}
    </div>
  );
};
