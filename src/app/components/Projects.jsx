"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Shadow Properties Website",
    description:
      "Real-estate CRM for lead generation, and marketing automation. Shadow Properties is the future of real estate investment. Our easy-to-use app streamlines everything, and it is available at your fingertips, which gives you all the information you manually search to sell or rent houses. Our tool is apt for individuals and teams that believe in real estate as a business. It is simple to use and can result in deals that can change your life.",
    image: "./images/shadow/house-1.avif",
    tag: ["All", "Web"],
    gitUrl: "https://web.shadow.properties/",
    previewUrl: "https://web.shadow.properties/",
  },
  {
    id: 2,
    title: "Buyers Landing Page",
    description:
      "This landing page specifically for buyers within the Shadow Properties app, with a focus on enhancing buyer management.",
    image: "./images/shadow/house-2.avif",
    tag: ["All", "Web"],
    gitUrl:
      "https://webtest.shadow.properties/contacts/6501503d4f8fbed7c8f0ca19",
    previewUrl:
      "https://webtest.shadow.properties/contacts/6501503d4f8fbed7c8f0ca19",
  },
  {
    id: 3,
    title: "My Portfolio",
    description:
      "Welcome to my portfolio showcasing my work as a frontend developer. Explore a collection of web and mobile projects that highlight my skills and passion for creating visually stunning and user-friendly interfaces. Whether you're looking for web development, mobile app design, or UI development, you'll find examples of my diverse expertise here.",
    image: "./images/shadow/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Shadow Properties Android App",
    description:
      "Explore the future of real estate investment with our Android app. Shadow Properties is your comprehensive real-estate CRM for lead generation and marketing automation. Our easy-to-use app brings everything you need to your fingertips, providing you with all the information required to sell or rent houses effortlessly. Whether you're an individual or part of a real estate team, our tool simplifies the process and can lead to life-changing deals.",
    image: "./images/shadow/house-3.avif",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://play.google.com/store/apps/details?id=and.app.properties.shadow",
    previewUrl:
      "https://play.google.com/store/apps/details?id=and.app.properties.shadow",
  },
  {
    id: 5,
    title: "Shadow Properties IOS App",
    description:
      "Discover the future of real estate investment with our iOS app. Shadow Properties offers a comprehensive real-estate CRM designed for lead generation and marketing automation. Our user-friendly app puts everything at your fingertips, providing all the information you need for selling or renting houses effortlessly. Whether you're an individual or part of a real estate team, our tool simplifies the process and can lead to transformative deals.",
    image: "./images/shadow/house-5.avif",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://itunes.apple.com/us/app/shadow-properties-ios/idXXXXXXXXXX",
    previewUrl:
      "https://itunes.apple.com/us/app/shadow-properties-ios/idXXXXXXXXXX",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="portfolio">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
