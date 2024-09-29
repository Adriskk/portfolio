"use client";

import { useInView } from "react-intersection-observer";
import { motion, MotionStyle, Variants } from "framer-motion";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

type MaskTextProps = {
  text: string;
  className?: ClassValue;
  style?: MotionStyle;
};

const MaskText = ({ text, className = "", style = {} }: MaskTextProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const RevealVariants: Variants = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={ref} className="overflow-hidden w-full">
      <motion.p
        className={cn("m-0 w-full", className!)}
        variants={RevealVariants}
        initial="initial"
        animate={inView ? "enter" : ""}
        style={style}
      >
        {text}
      </motion.p>
    </div>
  );
};

export const MaskLetters = ({ text, style, className = "" }: MaskTextProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const RevealVariants: Variants = {
    initial: { y: "102%" },
    enter: {
      y: "0",
    },
  };

  return (
    <div ref={ref} className="overflow-hidden w-full whitespace-pre-wrap">
      {text?.split("").map((letter, index) => (
        <motion.span
          key={index}
          style={style}
          variants={RevealVariants}
          initial="initial"
          animate={inView ? "enter" : "initial"}
          transition={{
            delay: 0.045 * index,
            // duration: 0.65,
            ease: [0.33, 1, 0.68, 1],
          }}
          className={cn("inline-block relative", className!)}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default MaskText;
