import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Design", "Simulate", "Code"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Mathesh
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Mechanical Engineering Student<br /> 3D CAD Designer
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Design Mechanics
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      {/* Added overflow-hidden and px-4 so text never touches the edge of the screen */}
      <div className="flex flex-col space-y-4 md:hidden px-4 overflow-hidden w-full max-w-full">
        <motion.p
          className="text-2xl font-medium" // Reduced from 4xl
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Mathesh
        </motion.p>
        <div className="flex flex-col gap-2">
          <motion.p
            className="text-3xl sm:text-4xl font-black text-neutral-300 leading-tight" // Reduced from 5xl
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Mech & 3D Designer
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-5xl sm:text-6xl" // Scaled down from 7xl so "Simulate" fits
            />
          </motion.div>
          <motion.p
            className="text-2xl sm:text-3xl font-black text-neutral-300" // Reduced from 4xl & fixed typo
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Design Mechanics
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;