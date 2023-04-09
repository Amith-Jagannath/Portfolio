import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
export const Herosection = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 1000);

    const textArray =
      "Hey, my name is Amith Jagannath Soorenji and I'm a third-year computer science student. I'm passionate about using technology to solve real-world problems and make a positive impact in people's lives.".split(
        ""
      );
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < textArray.length - 1) {
        setText((prevText) => prevText + textArray[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="py-32 container1  ">
      <div className=" div1 card rounded-none text-center w-1/2">
        <h1 className="text-5xl pb-9">A Software Developer</h1>
        <div className="flex items-center justify-center">
          <p
            className={`text-2xl  ${
              isVisible
                ? "opacity-100 transition-opacity duration-1000"
                : "opacity-0"
            }`}
          >
            {text}
          </p>
        </div>
      </div>

      <div className="div2 card rounded-none text-center w-1/2">
        <h1 className="mb-20">This is AJS image</h1>

        <Image
          src="/next.svg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
