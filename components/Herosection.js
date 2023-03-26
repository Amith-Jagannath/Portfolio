import React from "react";
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
    <div className="flex py-10">
      <div className="w-1/2 ">
        <div className="card rounded-none text-center">
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
      </div>
      <div className="w-1/2">
        <div className="card rounded-none text-center">
          <h1>This is AJS image</h1>
        </div>
      </div>
    </div>
  );
};
