"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Stillwater Films Company website",
    description: "This is the first website that I created for the company Stillwater Films",
    image: "/images/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://stillwaterweddingfilm.com/",
    previewUrl: "https://stillwaterweddingfilm.com/",
  },
  {
    id: 2,
    title: "School Project",
    description: "This project is for my website development class that features a simple calculator web application",
    image: "/images/2.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://jairahfigueroa.github.io/Calculator/",
    previewUrl: "https://jairahfigueroa.github.io/Calculator/",
  },
  {
    id: 3,
    title: "Flappy bird clone",
    description: "A side project dedicated for javascript only code",
    image: "/images/3.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://jairahfigueroa.github.io/Flappybird/",
    previewUrl: "https://jairahfigueroa.github.io/Flappybird/",
  },
  {
    id: 4,
    title: "Whitelist application project",
    description: "This is my first game created for the NFT named The Possessed which is mainly for getting whitelisted",
    image: "/images/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://sikeloon.itch.io/blessed-or-possessed",
    previewUrl: "https://sikeloon.itch.io/blessed-or-possessed",
  },
  {
    id: 5,
    title: "",
    description: "",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "",
    description: "",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
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
    <section id="projects">
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

export default ProjectsSection;