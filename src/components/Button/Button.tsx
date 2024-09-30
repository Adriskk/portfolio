"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  isLoading?: boolean;
};

const Button = ({ text, type, isLoading }: ButtonProps) => {
  const SpanVariants: Variants = {
    initial: {
      top: "0%",
    },
    animate: {
      top: -40,
      transition: {
        ease: [0.33, 1, 0.68, 1],
        duration: 0.4,
      },
    },
  };
  const DivVariants: Variants = {
    initial: {
      top: "110%",
      width: "60%",
    },
    animate: {
      top: "0%",
      width: "100%",
      transition: {
        ease: [0.33, 1, 0.68, 1],
        duration: 0.4,
      },
    },
  };

  return (
    <motion.button
      className={cn(
        "flex items-center justify-center py-5 px-10 bg-primary text-background rounded-full min-w-[140px] overflow-hidden relative",
        {
          "opacity-50": isLoading,
        }
      )}
      type={type}
      initial="initial"
      whileHover="animate"
      whileFocus="animate"
      animate={isLoading ? "animate" : "initial"}
      disabled={isLoading}
    >
      <motion.span
        variants={SpanVariants}
        className="font-medium inline-block relative uppercase"
      >
        {text}
      </motion.span>

      <motion.div
        variants={DivVariants}
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-accent flex items-center justify-center
        py-5 px-10 h-full"
      >
        {!isLoading ? (
          <span className="absolute uppercase">{text}</span>
        ) : (
          <div className="loader" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default Button;
