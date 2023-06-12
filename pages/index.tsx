import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Navbar from "./Navbar";
import { Herosection } from "./Herosection";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
