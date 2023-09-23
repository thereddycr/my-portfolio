"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import "../styles/NavBar.css";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Portfolio",
    path: "#portfolio",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  return (
    <nav className="fixed mx-auto border-b border-[#33353F] border-opacity-50 top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div
        style={{
          display: "flex",
          container: true,
          flexWrap: "wrap",
          alignItems: "center",
          margin: "auto",
          padding: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "3rem",
            width: "100%",
          }}
        >
          <div className="flex items-center gap-10">
            <Link
              href={"/"}
              className="flex space-x-1 gap-10"
              onClick={() => setActiveLink("/")}
            >
              <p className="sm:text-2xl font-semibold rounded md:p-0 text-white font-extralight first-letter:text-pink-400 first-letter:font-normal">
                {"<chandu"}
                <span className="text-pink-400 font-normal">{">"}</span>
              </p>
              <span className="text-white text-xl text-white font-extralight pt-1 opacity-20 hidden sm:inline">
                |
              </span>
            </Link>
            {/* Web Version */}
            <div className="menu hidden md:block md:w-auto" id="navbar">
              <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                {navLinks.map((link, index) => (
                  <>
                    <li key={index}>
                      <NavLink
                        href={link.path}
                        title={link.title}
                        isActive={link.path === activeLink}
                        setActiveLink={setActiveLink}
                        setNavbarOpen={setNavbarOpen}
                      />
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          {/* Mobile Version */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-2 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-2 py-1 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          {/* Download CV */}
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              <li>
                <Link
                  href="/images/my-resume.pdf"
                  download={true}
                  className="bg-white text-[#121212] border-none rounded-md px-3 py-1 flex align-center justify-center gap-3"
                >
                  <span className="font-semibold text-sm">Download CV</span>
                  <Image
                    src="/file-document.svg"
                    alt="Your SVG Alt Text"
                    width={17}
                    height={17}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          setNavbarOpen={setNavbarOpen}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
