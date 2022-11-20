import React from "react";
import Typewriter from "typewriter-effect";

export const CodeMockup = () => {
  return (
    <div className="bg-[#191622] animate-mock shadow-2xl shadow-black border-2 border-gray-600 dark:border-gray-800  rounded-lg mt-10 max-w-2xl w-[520px] h-[145px]">
      <div className="flex gap-2 p-5 border-b border-gray-600 dark:border-gray-800 ">
        <div className="w-3 h-3 rounded-full bg-[#d92c2c]"></div>
        <div className="w-3 h-3 rounded-full bg-[#d7d94b]"></div>
        <div className="w-3 h-3 rounded-full bg-[#6ad970]"></div>
      </div>
      <div className="p-5">
        <code className="text-white ">
          <Typewriter
            options={{
              strings: [
                `Hello World!! 👋 <br/>Meu nome é Maurício Gedrat e este é meu portfólio!!`,
              ],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
            // onInit={(typewriter) => {
            //   typewriter.typeString().start();
            // }}
          />
        </code>
      </div>
    </div>
  );
};
