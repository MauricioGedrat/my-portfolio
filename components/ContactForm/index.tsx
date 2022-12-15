import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { WhatsSvg } from "../SvgComponents/WhatsSvg";
export function ContactForm() {
  const [state, handleSubmit] = useForm("xoqzaaab");

  return (
    <div className="flex justify-center items-center flex-col max-w-[1200px] m-auto">
      <div className="mt-32 flex justify-center mb-10" id="projects">
        <h1
          data-aos="zoom-in-left"
          data-aos-duration={2000}
          className="font-bold font-['Poppins'] sm:text-7xl text-5xl title-shadow text-blue-500"
        >
          Lets talk
        </h1>
      </div>
      <form onSubmit={handleSubmit} action="https://formspree.io/f/xoqzaaab">
        <div>
          <label
            className="text-[#d3d3d3] font-thin mb-5 text-xl"
            htmlFor="name"
          >
            Name
          </label>
        </div>
        <div>
          <input
            id="name"
            type="text"
            name="name"
            className="xl:w-[1200px] lg:w-[800px] md:w-[600px] sm:w-[400px] w-[300px] m-auto rounded-md mb-5 p-4 bg-gray-900 text-white"
          />
        </div>
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <div>
          <label
            className="text-[#d3d3d3] font-thin mb-5 text-xl"
            htmlFor="email"
          >
            Email Address
          </label>
        </div>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            className="xl:w-[1200px] lg:w-[800px] md:w-[600px] sm:w-[400px] w-[300px] m-auto rounded-md mb-5 p-4 bg-gray-900 text-white"
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div>
          <label
            className="text-[#d3d3d3] font-thin mb-5 text-xl"
            htmlFor="message"
          >
            Message
          </label>
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            className="xl:w-[1200px] lg:w-[800px] md:w-[600px] sm:w-[400px] w-[300px] m-auto rounded-md mb-5 p-4 bg-gray-900 text-white"
          />
        </div>

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="md:flex gap-[20px]">
          <button
            type="submit"
            className="w-full md:w-auto form-btn mb-5 border-4 border-blue-500 font-bold text-blue-500 rounded-lg text-2xl hover:bg-blue-500 hover:text-white duration-300 px-20 py-4 "
            disabled={state.submitting}
          >
            Send
          </button>
          <div>
            <a
              className="flex justify-center gap-2 items-center whats-btn border-4 border-[#25D366] hover:bg-[#25D366] font-bold rounded-lg text-white text-xl duration-300 text-center px-4 py-4"
              href="https://api.whatsapp.com/send/?phone=5551997967855"
            >
              Whatsapp <WhatsSvg />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
