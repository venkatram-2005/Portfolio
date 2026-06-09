"use client";

import "react-vertical-timeline-component/style.min.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";

import { styles } from "../lib/styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../lib/motion";

import cognizant from "../assets/company/cognizant.png";
import recruitcrm from "../assets/company/recruitcrm.png";
import edunet from "../assets/company/edunet.png";
import springboard from "../assets/company/springboard.png";
import SectionHeader from "@/components/SectionHeader";

// Dynamic imports with ssr: false
const VerticalTimeline = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimeline),
  { ssr: false }
);

const VerticalTimelineElement = dynamic(
  () => import("react-vertical-timeline-component").then((mod) => mod.VerticalTimelineElement),
  { ssr: false }
);

const experiences = [
  {
    title: "Java Full Stack & Angular Developer Intern",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#383E56",
    date: "February 2026 - May 2026",
    points: [
      "Developed scalable enterprise applications using Spring Boot, Microservices, and Angular.",
      "Led the design and implementation of project modules, ensuring timely delivery in an Agile environment.",
      "Implemented deployment workflows and leveraged Git, Docker, and AWS for cloud-based development and delivery.",
      "Collaborated with cross-functional teams to build and maintain production-ready software solutions."
    ],
  },

  {
    title: "Associate Software Engineer Intern",
    company_name: "Recruit CRM",
    icon: recruitcrm,
    iconBg: "#383E56",
    date: "October 2025 - January 2026",
    points: [
      "Diagnosed and resolved application defects, improving platform reliability and development efficiency.",
      "Developed and enhanced AI-powered features, including chatbot workflows and resume parsing capabilities.",
      "Built and maintained features using Vue.js, PrimeVue, TypeScript, FastAPI, Spring Boot, and MySQL.",
      "Collaborated with engineering teams to deliver scalable and user-centric CRM functionalities."
    ],
  },

  {
    title: "AI: Transformative Learning with TechSaksham",
    company_name: "Microsoft & SAP - Edunet Foundation (AICTE)",
    icon: edunet,
    iconBg: "#383E56",
    date: "January 2025 - February 2025",
    points: [
      "Completed a 4-week Artificial Intelligence internship under the TechSaksham initiative.",
      "Received mentorship from Microsoft and SAP experts through technical and project-based sessions.",
      "Developed a Potato Leaf Disease Detection model with Grad-CAM integration for Explainable AI.",
      "Earned certifications from Microsoft, SAP, AICTE, and Edunet Foundation."
    ],
  },

  {
    title: "Full Stack Web Developer",
    company_name: "Infosys SpringBoard",
    icon: springboard,
    iconBg: "#383E56",
    date: "October 2024 - December 2024",
    points: [
      "Developed a Java backend using JDBC and MySQL for secure data management.",
      "Implemented role-based authentication for customers, agents, and administrators.",
      "Built appointment booking, cancellation, and agent availability management features.",
      "Designed an admin dashboard to manage agents, appointments, and insurance plans."
    ],
  },
];
interface Experience {
  title: string;
  company_name: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}


const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 }); // 👈 Keeps reloading

  // Animation with staggered delay
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: index * 0.3 } // 🔥 Delay based on index
    },
  };

  return (
    <motion.div className="mb-10 sm:mb-0" ref={ref} key={inView ? `view-${index}` : `hidden-${index}`} // 👈 Forces reanimation
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      exit={{ opacity: 0, y: -50 }} // Fade out instead of sudden disappearance
    >
      <VerticalTimelineElement
        visible={true}
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <Image src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
          </div>
        }
        position={index % 2 === 0 ? "left" : "right"} // 🔥 Alternating left & right
      >
        <div>
          <div>
            <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
            <p className="text-secondary text-[16px] font-semibold m-0">{experience.company_name}</p>
          </div>
          <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, idx) => (
              <li key={idx} className="text-white-100 text-[14px] pl-1 tracking-wider">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>
    </motion.div>
  );
};



const Internships = () => {
  return (
    <section id="internships" className="pb-16 lg:py-24 scroll-mt-20">
      <div className="mt-20">
        <motion.div variants={textVariant(0.1)}>
          <SectionHeader
            eyebrow="Internships"
            title="What have I done so far ?"
            description="A glimpse into my hands-on industry experience."
          />
        </motion.div>
        <div className="mt-20 flex flex-col items-center">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Internships, "work");