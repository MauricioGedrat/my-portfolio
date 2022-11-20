import { DarkThemeToggle, Navbar } from "flowbite-react";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className=" rounded-xl relative flex justify-between z-[99] bg-transparent  border-b border-gray-800 py-7 px-7 backdrop-blur-md">
      <div className="text-2xl text-gray-200">Maurício</div>
      <div className="flex justify-center items-center gap-5">
        <Link
          href="#"
          className="text-[#d3d3d3] hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-[#d3d3d3] hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-[#d3d3d3] hover:text-white transition-colors"
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-[#d3d3d3] hover:text-white transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-[#d3d3d3] hover:text-white transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
