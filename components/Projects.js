import React from "react";
import Image from "next/image";
export const Projects = () => {
  return (
    <div class="m-5">
      <h2 class="text-center text-3xl">PROJECTS</h2>

      <div class="container1 border-4 flex flex-wrap h-auto rounded-2xl m-2 flex items-center justify-center grid grid-cols-2 gap-4 m-10">
        <Image
          class="m-1.5"
          src="/project2.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />

        <p class="text-base md:text-lg lg:text-xl xl:text-2xl m-1.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae dolorem deserunt numquam voluptas necessitatibus! Ipsum debitis
          assumenda asperiores placeat harum voluptates dolorem magnam, porro
          maiores excepturi recusandae natus iusto iure.
        </p>
      </div>
      <div class="container1 border-4 flex flex-wrap h-auto rounded-2xl m-2 flex items-center justify-center grid grid-cols-2 gap-4 m-10">
        <Image
          class="m-1.5"
          src="/hammer.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />

        <p class="text-base md:text-lg lg:text-xl xl:text-2xl m-1.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae dolorem deserunt numquam voluptas necessitatibus! Ipsum debitis
          assumenda asperiores placeat harum voluptates dolorem magnam, porro
          maiores excepturi recusandae natus iusto iure.
        </p>
      </div>
    </div>
  );
};
