import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Education from "@/components/main/Education";
import WorkExperience from "@/components/main/Experience";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Education />
        <Encryption />
        <WorkExperience />
        <Projects />
      </div>
      
    </main>
  );
}
