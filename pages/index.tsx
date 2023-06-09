import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import { Herosection } from "../components/Herosection";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
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
