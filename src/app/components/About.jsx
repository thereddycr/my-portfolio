"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <ul className="list-disc pl-2">
            <li>ReactJS</li>
            <li>React Native</li>
            <li>JavaScript</li>
            <li>Redux</li>
            <li>Expo</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div className="w-1/2">
          <ul className="list-disc pl-2">
            <li>Native Base</li>
            <li>Gluestack UI</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Junior Software Developer at Fission Infotech Pvt Ltd. (2021 -
          Current)
        </li>
        <li>Internship at Fission Infotech Pvt Ltd.</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>AVN Institute of Engineering and Technology (2018 - 2022)</li>
        <li>Narayana Junior College (2016 - 2018)</li>
        <li>Santhi Nikethan High School (2016)</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-8" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about_image"
          src="./images/shadow/about.avif"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-2">
            I&apos;m a Frontend Developer building the front-end of Mobile and
            Web applications that lead to the success of the overall products.
            Check out some of my work in the Projects section.
          </p>
          <p className="text-base lg:text-lg mb-2">
            My main focus these days revolves around cutting-edge,
            pixel-perfect, beautiful interfaces and intuitively implemented UX.
          </p>
          <p className="text-base lg:text-lg">
            When I&apos;m not at the computer, I&apos;m usually hanging out with
            my family and friends, or play games - cricket, badminton, ensuring
            a perfect blend of work and play in my life.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
