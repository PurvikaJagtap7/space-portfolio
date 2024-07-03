'use client';

import Image from "next/image";
import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
  technologies: string[];
}

const ProjectCard: React.FC<Props> = ({
  src,
  title,
  description,
  demoLink,
  githubLink,
  technologies
}) => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-[#2A0E61] w-[350px] bg-[#030014]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-[200px] object-cover"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-semibold text-white bg-[#2A0E61] rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => handleLinkClick(demoLink)}
            className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors cursor-pointer"
          >
            <FaGlobe className="mr-2" />
            Live Website
          </button>
          <button
            onClick={() => handleLinkClick(githubLink)}
            className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
          >
            <FaGithub className="mr-2" />
            View Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;