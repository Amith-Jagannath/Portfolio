import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },

  { text: "Projects", href: "/projects" },
  { text: "Skills", href: "/skills" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header>
      <nav className={currentTheme === "light" ? "lighttheme" : "darktheme"}>
        <Link legacyBehavior href={"/"}>
          <a>
            <h1 className="logo">Amith JS</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          {currentTheme === "dark" ? (
            <button
              className="bg-black-700 hover:bg-black w-16 rounded-md border-purple-400 border-2 p-4"
              onClick={() => setTheme("light")}
            >
              {" "}
              <Image src="/sun.svg" alt="logo" height={30} width={30} />
            </button>
          ) : (
            <button
              className="bg-gray-100 w-16 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
              onClick={() => setTheme("dark")}
            >
              <Image src="/moon.svg" alt="logo" height={30} width={30} />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
