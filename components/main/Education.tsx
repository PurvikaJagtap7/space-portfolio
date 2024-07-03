// components/Education.tsx
import React from 'react';


const educationData = [
  {
    degree: "Post SSC Diploma",
    field: "Computer Science and Engineering",
    school: "Government Polytechnic College, Mumbai",
    year: "2021 - 2024",
    details: [
      "GPA: 8.5/10",
      "Specialized in Web Technologies",
      "Organized and executed TECHKNOW 2023, a college event at Government Polytechnic Mumbai, by collaborating with a cross-functional team of 15 to curate a diverse range of tech-related sessions, including coding challenges, hackathons, and panel discussions."
    ]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "10th Grade",
    school: "General Education Academy School, Chembur",
    year: "2021",
    details: [
      "Overall Percentage: 95%",
      "Secured 1st rank in the School"
    ]
  },
  // Add more education entries as needed
];

const EducationCard: React.FC<{ education: any }> = ({ education }) => (
  <div className="bg-[#1C0B2B] p-4 sm:p-6 rounded-lg shadow-lg mb-4 sm:mb-6">
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{education.degree}</h3>
    <p className="text-purple-300 mb-1 text-sm sm:text-base">{education.field}</p>
    <p className="text-gray-400 mb-3 text-sm sm:text-base">{education.school} | {education.year}</p>
    <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
      {education.details.map((detail: string, idx: number) => (
        <li key={idx}>{detail}</li>
      ))}
    </ul>
  </div>
);

const Education: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-[#0E0015]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
          My Educational Journey
        </h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

