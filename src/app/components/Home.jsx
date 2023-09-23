"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram.svg";

// animate.css for animation styles (suggested by tej)
//

const Home = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center sm:text-left justify-self-start"
        >
          <span className="text-white border border-white rounded-full px-4 py-1">
            <span className="text-sm text-white font-light">Hello!</span>
            {/* <span className="absolute -top-5 right-5 translate-x-8 rotate-45">
              <span className="text-white text-sm text-white font-extralight pt-1">
                |
              </span>
              <span className="text-white text-xl text-white font-extralight pt-1">
                |
              </span>
              <span className="text-white text-sm text-white font-extralight pt-1">
                |
              </span>
            </span> */}
          </span>
          <h1 className="text-pink-400 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold mt-5 text-left">
            <span className="text-white">I&apos;m </span>
            <TypeAnimation
              sequence={[
                "Chandu Reddy",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 font-sans text-xl sm:text-2xl text-left mt-2">
            Experienced Frontend Developer with a passion for creating visually
            and user-friendly interfaces.
          </p>
          <div className="socials flex flex-row gap-3">
            <Link href="https://github.com/thereddycr">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/chandrakanthreddysurikanti/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <Link href="https://www.instagram.com/thereddy.cr/">
              <Image
                src={InstagramIcon}
                alt="Instagram Icon"
                width={45}
                height={45}
              />
            </Link>
          </div>
          <div>
            {/* <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-br from-pink-400 to-black hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link> */}

            {/* <Link
              href="/#contact"
              download={true}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Let&apos;s Talk
              </span>
            </Link> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-24 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="./images/profile1.png"
              alt="profile image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-44 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
