// components/WorkExperience.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { BriefcaseIcon } from '@heroicons/react/24/solid';


const WorkExperience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "WebSolutions Co.",
      period: "June 2020 - December 2021",
      details: [
        "Developed and maintained client websites using React and Next.js",
        "Collaborated with UX designers to implement pixel-perfect designs",
        "Integrated RESTful APIs and GraphQL endpoints",
      ],
    },
    {
      title: "Web Development Intern",
      company: "VortexWeb Cloud LLP",
      period: "January 2024 - February 2024",
      details: [
        "Assisted in building a company portfolio website using HTML, CSS, and JavaScript",
        "Learned version control with Git and collaborated using GitHub",
        "Participated in daily stand-ups and agile development processes",
      ],
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-col items-center justify-center px-4 md:px-20 py-12 sm:py-24 w-full z-[20] bg-[#0E0015]'
    >
      <motion.div
        variants={slideInFromTop}
        className='WorkExperience-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[20px] sm:mb-[40px]'
      >
        <BriefcaseIcon className='text-[#b49bff] mr-[10px] h-5 w-5 inline-block' />
        <h1 className='WorkExperience-text text-[13px] text-white inline-block'>My Professional Journey</h1>
      </motion.div>

      <div className='relative w-full max-w-4xl'>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? slideInFromLeft(0.5) : slideInFromRight(0.5)}
            className={`mb-8 flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div className='w-full sm:w-11/12 md:w-5/12'>
              <div className='bg-[#1C0B2B] p-4 sm:p-6 rounded-lg shadow-lg relative'>
                <div className={`hidden sm:block absolute top-6 w-6 h-6 rounded-full bg-purple-600 z-10
                                ${index % 2 === 0 ? 'right-[-35px]' : 'left-[-35px]'}`}>
                </div>
                <div className={`hidden sm:block absolute top-8 w-8 h-1 bg-purple-600
                                ${index % 2 === 0 ? 'right-[-30px]' : 'left-[-30px]'}`}>
                </div>
                <h2 className='text-xl sm:text-2xl font-bold text-white mb-2'>{experience.title}</h2>
                <p className='text-purple-300 text-sm sm:text-base'>{experience.company}</p>
                <p className='text-gray-400 mb-4 text-sm sm:text-base'>{experience.period}</p>
                <ul className='list-disc list-inside text-gray-300 text-sm sm:text-base'>
                  {experience.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
        <div className='hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-purple-600'></div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;