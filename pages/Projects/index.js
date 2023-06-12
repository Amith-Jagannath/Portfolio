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
          An innovative shoe website where users can view and order their
          favorite footwear. Built with HTML, CSS, Bootstrap, JavaScript,
          Node.js, and MongoDB, it offers a seamless browsing experience.
          Explore our stylish collection and place your shoe orders effortlessly
          on sneakX.com.
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
          Hammer is a comprehensive website that empowers you to take control of
          your health and fitness journey. With a range of curated diet plans,
          along with intuitive BMI and BMR calculators.From frontend to backend,
          the website is built using HTML, CSS, JavaScript, Node.js, and
          MongoDB.
        </p>
      </div>
    </div>
  );
};
