import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const MenuOverlay = ({ links, activeLink, setActiveLink, setNavbarOpen }) => {
  return (
    <ul className="flex flex-col pb-5 gap-2 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            isActive={link.path === activeLink}
            setActiveLink={setActiveLink}
            setNavbarOpen={setNavbarOpen}
          />
        </li>
      ))}
      <Link href="/images/my-resume.pdf" download={true}>
        <span className="block text-[#ADB7BE] sm:text-xl rounded md:p-0 font-sans hover:divide-x-8 hover:text-white">
          Download CV
        </span>
      </Link>
    </ul>
  );
};

export default MenuOverlay;
