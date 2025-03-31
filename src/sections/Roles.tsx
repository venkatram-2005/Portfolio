"use client";

// About.tsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";

import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "../lib/motion";

import mobile from "@/assets/mobile.png";
import backend from "@/assets/backend.png";
import web from "@/assets/web.png";
import SectionHeader from "@/components/SectionHeader";

// Define service item interface
interface Service {
  title: string;
  icon: StaticImageData;  
}

// Define props for ServiceCard component
interface ServiceCardProps {
  index: number;
  title: string;
  icon: StaticImageData;
}

const services: Service[] = [
  { title: "Full Stack Web Developer", icon: web },
  { title: "Machine Learning", icon: mobile },
  { title: "Data Science", icon: backend },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow multiple triggers
    threshold: 0.3, // 30% of the card must be visible
  });

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }} // Start hidden
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Reset when out of view
        transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        exit={{ opacity: 0, y: -50 }} // Fade out instead of sudden disappearance
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Roles: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animations to repeat
    threshold: 0.6, // 40% of section must be in view
  });

  return (
    <section id="overview" className="pb-16 lg:py-24">
      <div className="container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Reset when out of view
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0, y: -50 }} // Fade out instead of sudden disappearance
      >
        <SectionHeader
          eyebrow="Areas of Expertise"
          title="Where I Shine ?"
          description="Explore the areas where my strengths and expertise truly shine."
        />
      </motion.div>

      <div className="mt-10 flex justify-center gap-10 sm:px-16 px-6 flex-row flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      </div>
    </section>
  );
};

export default SectionWrapper(Roles, "roles");

