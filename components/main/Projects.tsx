import React from "react";
import dynamic from 'next/dynamic';

const ProjectCard = dynamic(() => import("../sub/ProjectCard"), { ssr: false });

const technologies = {
  "Modern Next.js Portfolio": ["Next.js", "React", "Tailwind CSS"],
  "Interactive Website Cards": ["HTML", "CSS", "JavaScript"],
  "Space Themed Website": ["Next.js", "React", "Three.js", "Framer Motion"],
};

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 max-w-7xl">
        <ProjectCard
          src="/sanskriti.png"
          title="Real Estate Web Application"
          description="sanskritiSpaces, a Real Esatate NextJS Web application made using Rapid API"
          demoLink="https://sanskriti-spaces.vercel.app/"
          githubLink="https://github.com/PurvikaJagtap7/sanskritiSpaces"
          technologies={technologies["Modern Next.js Portfolio"]}
        />
        <ProjectCard
          src="/sushi.png"
          title="Interactive Sushi Website"
          description="Visually appealing Website which is aesthetically designed creating 3d effects using CSS"
          demoLink="https://sushi-bites.vercel.app/"
          githubLink="https://github.com/PurvikaJagtap7/sushi_bites"
          technologies={technologies["Interactive Website Cards"]}
        />
        <ProjectCard
          src="/bookstore.png"
          title="Space Themed Website"
          description="3D Animated Next.js Space Theme Portfolio developed by Purvika Jagtap"
          demoLink="https://your-demo-link-3.com"
          githubLink="https://github.com/your-username/project-3"
          technologies={technologies["Space Themed Website"]}
        />
      </div>
    </div>
  );
};

export default Projects;