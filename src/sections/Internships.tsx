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

import aicte from "../assets/company/aicte.png";
import motioncut from "../assets/company/motioncut.png";
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
    title: "Full Stack Web Developer",
    company_name: "Infosys SpringBoard",
    icon: springboard,
    iconBg: "#383E56",
    date: "October 2024 - December 2024",
    points: [
      "Designed and implemented the backend using Java with JDBC and integrated it with a MySQL database for secure data storage and retrieval.",
      "Created secure login and registration functionalities for customers, agents, and administrators, ensuring proper access control.",
      "Developed functionalities for appointment booking, viewing, and cancellation, along with agent availability management and status updates.",
      "Created a centralized admin dashboard for managing agents, appointments, and insurance plans, ensuring smooth administrative control.",
    ],
  },
  {
    title: "AI/ML Engineer",
    company_name: "AICTE",
    icon: aicte,
    iconBg: "#E6DEDD",
    date: "April 2024 - June 2024",
    points: [
      "Neural Networks: Programmed neural networks using TensorFlow.",
      "Object Detection: Completed projects on object detection and product image search.",
      "Image Classification: Enhanced image classification techniques",
    ],
  },
  {
    title: "AWS Data Engineering",
    company_name: "AICTE",
    icon: aicte,
    iconBg: "#E6DEDD",
    date: "January 2024 - March 2024",
    points: [
      "Gained knowledge about data-driven decision-making and modern data strategies.",
      "Completed labs on data access and analysis using Amazon S3.",
      "Designed and built data pipelines focusing on ingestion, storage, processing, and consumption using AWS services like Glue, Redshift, Kinesis, and Athena.",
      "Processed big data with Amazon EMR, performed ETL tasks with AWS Glue, and created data-driven solutions.",
    ],
  },
  
  /*{
    title: "Front-end Developer",
    company_name: "Motion Cut",
    icon: motioncut,
    iconBg: "#383E56",
    date: "September 2024 - October 2024",
    points: [
      "Developed responsive web pages using HTML, CSS, JavaScript, and React.",
      "Assisted the Manager with technical tasks and project requirements.",
      "Improved user interfaces to ensure better accessibility and usability.",
    ],
  },*/
  



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
    <section id="internships" className="pb-16 lg:py-24">
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