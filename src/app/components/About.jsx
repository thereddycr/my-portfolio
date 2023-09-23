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
            <li>React</li>
            <li>React Native</li>
            <li>Native Base</li>
            <li>JavaScript</li>
            <li>Redux</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div className="w-1/2">
          <ul className="list-disc pl-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Mobile Developer</li>
            <li>Web Developer</li>
            <li>UI Developer</li>
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
          Junior Software Engineer at Fission Infotech Pvt Ltd. (2022 - Current)
        </li>
        <li>Internship at Fission Infotech Pvt Ltd. (2021 - 2022)</li>
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
        <Image src="./images/shadow/about.avif" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Frontend Developer with expertise in creating responsive
            applications for Android, iOS, and web platforms. With a strong
            foundation in JavaScript, HTML, and CSS, I excel in building dynamic
            user interfaces. My proficiency extends to popular frameworks and
            libraries, including React, React Native, Native Base, Redux, and
            Next.js. As a skilled Git user, I prioritize collaboration and
            version control, making me a valuable asset to any development team.
            With a passion for both mobile and web development, I bring a wealth
            of experience to every project, embodying the role of a UI
            Developer, Mobile Developer, and Web Developer.
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
