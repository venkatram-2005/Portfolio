"use client";

import StarIcon from "@/assets/icons/star.svg";
import SectionHeader from "@/components/SectionHeader";
import { textVariant } from "@/lib/motion";
import { motion } from "framer-motion";
import React from "react";

const words = [
  "Java",
  "Python",
  "C",
  // "C++",
  // "VS Code",
  // "Eclipse",
  "Power BI",
  "Git",
  "GitHub",
  // "Postman",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Express.js",
  "Node.js",
  "Bootstrap",
  // "JSP",
  // "Servlets",
  "MySQL",
  "MongoDB",
  "Spring Boot",
  "Angular",
  "Hibernate",
  "Spring Data JPA",
  "Docker"
  // "JDBC",
  // "TensorFlow",
  // "NumPy",
  // "Pandas",
  // "Scikit-learn",
  // "Selenium",
  // "Beautiful Soup"
];

export const TapeSection = () => {
  return (
    <section>
      <motion.div variants={textVariant(0.1)}>
        <SectionHeader
          eyebrow="Tools & Technologies"
          title="What do I work with ?"
          description="A collection of languages, frameworks, and tools I use to build and innovate."
        />
      </motion.div>
      <div className="overflow-x-clip py-16 lg:py-24">
        <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none -translate-x-1/2 animate-move-left gap-4 py-3 pr-4 [animation-duration:50s]">
              {[...new Array(2)].fill(0).map((_, i) => (
                <React.Fragment key={i}>
                  {words.map((word) => (
                    <div key={word} className="inline-flex items-center gap-4">
                      <span className="text-sm font-extrabold uppercase text-gray-900">
                        {word}
                      </span>
                      <StarIcon className="size-6 -rotate-12 text-gray-900" />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};