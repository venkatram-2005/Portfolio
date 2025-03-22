import { motion } from "framer-motion";
import { styles } from "../lib/styles";
import { staggerContainer } from "../lib/motion";
import React from "react";

type SectionWrapperProps = {
  idName: string;
};

// Define the HOC with TypeScript typing
const SectionWrapper = (Component: React.FC, idName: string) => {
  const HOC: React.FC<SectionWrapperProps> = () => (
    <motion.section
      variants={staggerContainer(0.5, 0.1)} // Pass values for staggerChildren and delayChildren
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
  );

  return HOC;
};

export default SectionWrapper;
