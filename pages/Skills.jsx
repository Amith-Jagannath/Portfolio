import React from "react";

import classes from "../components/Skills.module.css";
function Skills() {
  return (
    <div className="mb-32">
      <h2 className="text-center text-3xl">SKILLS</h2>
      <div className="text-start mx-10">
        <h3 className="text-2xl mx-2">Languages</h3>
        <div className="flex gap-2 flex-wrap mt-3 m-auto grid-cols-3 gap-4">
          <a className=" border-2 border-yellow-600 text-yellow-600 dark:text-yellow-300 dark:border-yellow-300 px-4 py-2 font-semibold whitespace-nowrap max-w-min rounded-xl cursor-pointer">
            Javascript
          </a>
          <a className=" border-2 border-indigo-600 text-indigo-600 dark:text-indigo-300 dark:border-indigo-300 px-4 py-2 font-semibold whitespace-nowrap max-w-min rounded-xl cursor-pointer">
            C/C++
          </a>
          <a className=" border-2 border-orange-600 text-orange-600 dark:text-orange-300 dark:border-orange-300 px-4 py-2 font-semibold whitespace-nowrap max-w-min rounded-xl cursor-pointer">
            HTML 5
          </a>
          <a className=" border-2 border-cyan-600 text-cyan-600 dark:text-cyan-300 dark:border-cyan-300 px-4 py-2 font-semibold whitespace-nowrap max-w-min rounded-xl cursor-pointer">
            CSS
          </a>
        </div>
        <div className=" text-start mt-3">
          <h3 className="text-lg ">Frameworks &amp;Libraries</h3>
          <div className="flex gap-2 flex-wrap mt-3">
            <a className="bg-opacity-90 bg-white border-2 border-black/90 text-black/90 px-4 py-2 font-semibold whitespace-nowrap max-w-min rounded-xl cursor-pointer">
              Next JS
            </a>
            <a className="bg-opacity-90 bg-[#282c34] text-[#61dafb] border-2 border-[#61dafb] px-4 py-2 font-semibold whitespace-nowrap max-w-min rounded-xl cursor-pointer">
              React JS
            </a>
            <a className="bg-opacity-90 bg-[#0c111f] text-[#62baf2] border-2 border-[#62baf2] px-4 py-2 font-semibold whitespace-nowrap max-w-min rounded-xl cursor-pointer">
              Tailwind CSS
            </a>
            <a className="bg-opacity-90 bg-[#026e00] text-[#ffffff]/90 border-2 border-[#ffffff]/70 px-4 py-2 font-semibold whitespace-nowrap max-w-min rounded-xl cursor-pointer">
              Node JS
            </a>

            <a className="bg-opacity-90 bg-yellow-500 text-[#000]/90 border-2 border-[#000]/70 px-4 py-2 font-semibold whitespace-nowrap max-w-min rounded-xl cursor-pointer">
              HandleBars
            </a>
            <a className="bg-opacity-90 bg-[#4C51BF] text-[#fff]/90 border-2 border-[#fff]/70 px-4 py-2 font-semibold whitespace-nowrap max-w-min rounded-xl cursor-pointer">
              Bootstrap
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
