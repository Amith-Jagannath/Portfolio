import React from "react";
import Image from "next/image";
export const Projects = () => {
  return (
    <div class="m-8">
      <h2 class="text-center text-3xl">PROJECTS</h2>
      <div class="grid grid-cols-1 m-2 flex flex-wrap">
        <div class="border-4  h-80 rounded-2xl m-2 flex items-center justify-center grid grid-cols-2 gap-4">
          <div class="">
            <div>
              <Image
                src="/project1.png"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              veritatis.
            </p>
          </div>
        </div>
      </div>
      <div class="border-4  h-60 rounded-2xl m-2"></div>
      <div class="border-4  h-60 rounded-2xl m-2"></div>
    </div>
  );
};
