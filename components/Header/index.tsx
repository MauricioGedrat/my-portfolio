import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div data-aos="fade-up" className="fixed w-full z-[1000]">
      {/* Mbile menu */}
      <div>
        <div className="rounded-xl relative flex justify-between items-center z-[99] bg-transparent px-10 backdrop-blur-lg">
          <div className="text-2xl text-gray-200">
            <svg
              width="75"
              height="75"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.408 0.696V9H8.316V2.808L5.556 9H4.788L2.016 2.796V9H0.924V0.696H2.1L5.172 7.56L8.244 0.696H9.408Z"
                fill="#CECECE"
              />
              <path
                d="M13.0359 3.06C12.8039 2.572 12.4679 2.196 12.0279 1.932C11.5879 1.66 11.0759 1.524 10.4919 1.524C9.90794 1.524 9.37994 1.66 8.90794 1.932C8.44394 2.196 8.07594 2.58 7.80394 3.084C7.53994 3.58 7.40794 4.156 7.40794 4.812C7.40794 5.468 7.53994 6.044 7.80394 6.54C8.07594 7.036 8.44394 7.42 8.90794 7.692C9.37994 7.956 9.90794 8.088 10.4919 8.088C11.3079 8.088 11.9799 7.844 12.5079 7.356C13.0359 6.868 13.3439 6.208 13.4319 5.376H10.0959V4.488H14.5959V5.328C14.5319 6.016 14.3159 6.648 13.9479 7.224C13.5799 7.792 13.0959 8.244 12.4959 8.58C11.8959 8.908 11.2279 9.072 10.4919 9.072C9.71594 9.072 9.00794 8.892 8.36794 8.532C7.72794 8.164 7.21994 7.656 6.84394 7.008C6.47594 6.36 6.29194 5.628 6.29194 4.812C6.29194 3.996 6.47594 3.264 6.84394 2.616C7.21994 1.96 7.72794 1.452 8.36794 1.092C9.00794 0.724 9.71594 0.539999 10.4919 0.539999C11.3799 0.539999 12.1639 0.76 12.8439 1.2C13.5319 1.64 14.0319 2.26 14.3439 3.06H13.0359Z"
                fill="white"
              />
            </svg>
          </div>
          <button className={`text-white p-5`} onClick={() => setShow(!show)}>
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
            data-aos="zoom-in"
            className="mt-[65px] absolute  flex items-center justify-center flex-col top-0 bottom-0 left-0 right-0 bg-transparent backdrop-blur-lg h-[95vh] z-[99]"
          >
            <div className="mb-10">
              <a
              onClick={() => setShow(!show)}
                href="#"
                className="text-[#d3d3d3] hover:animate-pulse hover:border-b-2 border-gray-500 duration-300 font-bold md:text-7xl text-4xl hover:text-white font-['Poppins'] transition-colors"
              >
                Home
              </a>
            </div>
            <div className="mb-10">
              <a
              onClick={() => setShow(!show)}
                href="#projects"
                className="text-[#d3d3d3] hover:animate-pulse hover:border-b-2 border-gray-500 duration-300 font-bold md:text-7xl text-4xl hover:text-white font-['Poppins'] transition-colors"
              >
                Projects
              </a>
            </div>{" "}
            <div className="mb-10">
              <a
              onClick={() => setShow(!show)}
                href="#skills"
                className="text-[#d3d3d3] hover:animate-pulse hover:border-b-2 border-gray-500 duration-300 font-bold md:text-7xl text-4xl hover:text-white font-['Poppins'] transition-colors"
              >
                Skills
          
              </a>
            </div>{" "}
            <div className="mb-10">
              <a
              onClick={() => setShow(!show)}
                href="#"
                className="text-[#d3d3d3] hover:animate-pulse hover:border-b-2 border-gray-500 duration-300 font-bold md:text-7xl text-4xl hover:text-white font-['Poppins'] transition-colors"
              >
                Pricing
              </a>
            </div>{" "}
            <div className="mb-10">
              <a
              onClick={() => setShow(!show)}
                href="#"
                className="text-[#d3d3d3] hover:animate-pulse hover:border-b-2 border-gray-500 duration-300 font-bold md:text-7xl text-4xl hover:text-white font-['Poppins'] transition-colors"
              >
                Contact
              </a>
            </div>{" "}
          </div>
        )}
      </div>
      {/* Mobile Menu */}
     {/*  <div className=" rounded-xl md:flex hidden relative  justify-between items-center z-[99] bg-transparent px-10 backdrop-blur-md">
        <div className="text-2xl text-gray-200">
          <svg
            width="75"
            height="75"
            viewBox="0 0 15 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.408 0.696V9H8.316V2.808L5.556 9H4.788L2.016 2.796V9H0.924V0.696H2.1L5.172 7.56L8.244 0.696H9.408Z"
              fill="#CECECE"
            />
            <path
              d="M13.0359 3.06C12.8039 2.572 12.4679 2.196 12.0279 1.932C11.5879 1.66 11.0759 1.524 10.4919 1.524C9.90794 1.524 9.37994 1.66 8.90794 1.932C8.44394 2.196 8.07594 2.58 7.80394 3.084C7.53994 3.58 7.40794 4.156 7.40794 4.812C7.40794 5.468 7.53994 6.044 7.80394 6.54C8.07594 7.036 8.44394 7.42 8.90794 7.692C9.37994 7.956 9.90794 8.088 10.4919 8.088C11.3079 8.088 11.9799 7.844 12.5079 7.356C13.0359 6.868 13.3439 6.208 13.4319 5.376H10.0959V4.488H14.5959V5.328C14.5319 6.016 14.3159 6.648 13.9479 7.224C13.5799 7.792 13.0959 8.244 12.4959 8.58C11.8959 8.908 11.2279 9.072 10.4919 9.072C9.71594 9.072 9.00794 8.892 8.36794 8.532C7.72794 8.164 7.21994 7.656 6.84394 7.008C6.47594 6.36 6.29194 5.628 6.29194 4.812C6.29194 3.996 6.47594 3.264 6.84394 2.616C7.21994 1.96 7.72794 1.452 8.36794 1.092C9.00794 0.724 9.71594 0.539999 10.4919 0.539999C11.3799 0.539999 12.1639 0.76 12.8439 1.2C13.5319 1.64 14.0319 2.26 14.3439 3.06H13.0359Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center gap-5">
          <a
            href="#"
            className="text-[#d3d3d3] hover:text-white font-['Poppins'] transition-colors"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-[#d3d3d3] hover:text-white font-['Poppins'] transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-[#d3d3d3] hover:text-white font-['Poppins'] transition-colors"
          >
            Skills
        
          </a>
          <a
            href="#"
            className="text-[#d3d3d3] hover:text-white font-['Poppins'] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[#d3d3d3] hover:text-white font-['Poppins'] transition-colors"
          >
            Contact
          </a>
        </div>
        </div>*/}
    </div>
  );
};
