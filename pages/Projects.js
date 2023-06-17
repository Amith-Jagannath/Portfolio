import React from "react";
import Image from "next/image";
import Project from "./Project";

function Projects() {
  return (
    <div className="m-5">
      <h2 className="text-center text-3xl">PROJECTS</h2>
      <Project
        image="portfolio-dark.png"
        desc="My Next.js portfolio is a showcase of my skills and projects, featuring a modern and responsive design. It highlights my work experience, technical expertise, and showcases a collection of my best projects, demonstrating my passion for web development."
      />
      <Project
        image="netflix_stranger.png"
        desc="My React.js Netflix clone is a dynamic web application that leverages the TMDB API to fetch and display detailed information about movies. With a user-friendly interface, it provides an immersive experience for exploring a vast collection of films, descriptions, and trailers."
      />
      <Project
        image="project2.png"
        desc=" An innovative shoe website where users can view and order their
  favorite footwear. Built with HTML, CSS, Bootstrap, JavaScript,
  Node.js, and MongoDB, it offers a seamless browsing experience.
  Explore our stylish collection and place your shoe orders effortlessly
  on sneakX.com."
      />
      <Project
        image="hammer.png"
        desc="Hammer is a comprehensive website that empowers you to take control of
          your health and fitness journey. With a range of curated diet plans,
          along with intuitive BMI and BMR calculators.From frontend to backend,
          the website is built using HTML, CSS, JavaScript, Node.js, and
          MongoDB."
      />
    </div>
  );
}

export default Projects;
