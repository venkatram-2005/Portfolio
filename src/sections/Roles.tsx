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
  { title: "Machine Learning Engineer", icon: mobile },
  { title: "Data Analyst", icon: backend },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <Image src={icon} alt={title} className='w-16 h-16 object-contain' />

        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const Roles: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only once when it appears on screen
    threshold: 0.5, // How much of the element is in view (0.1 = 10%)
  });

  return (
    <div ref={ref}>
      {inView && (
        <>
          <motion.div variants={textVariant(0.1)}>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("up", "tween", 0.1, 1)}
            className="sm:py-16 py-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a versatile Software Developer, Machine Learning Enthusiast, and Full-Stack Developer
            with a strong foundation in Java, Python, C, C++, and cutting-edge technologies like React,
            Node.js, TensorFlow, and the MERN stack. I specialize in building scalable, efficient, and 
            user-centric web applications while seamlessly integrating machine learning models to deliver 
            intelligent solutions. With hands-on experience in developing robust projects like JobSphere 
            and deploying predictive models for real-world problems, I thrive in collaborative environments 
            where innovation meets practicality.
          </motion.p>

          <div className="mt-20 flex justify-center gap-10 sm:px-16 px-6 flex-row flex-wrap">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SectionWrapper(Roles, "roles");
