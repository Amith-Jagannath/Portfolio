import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Project({ image, desc }) {
  const router = useRouter();

  const handleClick = (src) => {
    console.log(src);
    //if (src == "portfolio.png")
    // window.open("https://mynetflix-mu.vercel.app/", "_blank");
    //if(src=="project2.png")
    //window.open("https://mynetflix-mu.vercel.app/", "_blank");
    if (src == "netflix_stranger.png")
      window.open("https://mynetflix-mu.vercel.app/", "_blank");
    //if (src == "hammer.png")
    //window.open("https://mynetflix-mu.vercel.app/", "_blank");
  };
  return (
    <>
      <div class="container1 border-2 flex flex-wrap h-auto rounded-2xl m-2 flex items-center justify-center grid grid-cols-2 gap-4 m-10">
        <Image
          class="m-1.5 rounded-lg resizer"
          src={`/${image}`}
          alt="Picture of the author"
          width={500}
          height={500}
          onClick={() => handleClick(image)}
        />

        <p class="text-base md:text-lg lg:text-xl xl:text-2xl m-1.5">{desc}</p>
      </div>
    </>
  );
}

export default Project;
