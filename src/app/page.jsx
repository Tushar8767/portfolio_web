"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EngineeringProof from "@/components/sections/EngineeringProof";
import Projects from "@/components/sections/Projects";
import HowIBuild from "@/components/sections/HowIBuild";
import TechnicalDecisions from "@/components/sections/TechnicalDecisions";
import Expertise from "@/components/sections/Expertise";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import TerminalWidget from "@/components/ui/TerminalWidget";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterSelect = (filterId) => {
    setActiveFilter(filterId);
    if (filterId) {
      const projElem = document.getElementById("projects");
      if (projElem) {
        projElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero
          onFilterSelect={handleFilterSelect}
          activeFilter={activeFilter}
        />
        <EngineeringProof />
        <Projects
          activeFilter={activeFilter}
          onClearFilter={() => setActiveFilter(null)}
        />
        <HowIBuild />
        <TechnicalDecisions />
        <Expertise />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <TerminalWidget />
      <Footer />
    </>
  );
}
