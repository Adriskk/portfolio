"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { MaskLetters } from "@/components/MaskText/MaskText";
import { MotionValue, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

type PreloaderProps = {
  status: MotionValue<number>;
  onComplete: () => void;
};

const Preloader = ({ status, onComplete }: PreloaderProps) => {
  const [gradient, setGradient] = useState<string>("");

  useEffect(() => {
    status.on("change", (latestValue) => {
      const floored = Math.floor(latestValue);
      if (floored === 99) onComplete();
      setGradient(
        `linear-gradient(to top, var(--primary-clr) 0%, var(--primary-clr) ${floored}%, rgba(0, 0, 0, 0) ${
          floored < 99 ? floored + 1 : floored >= 99 ? 99 : floored
        }%, rgba(0, 0, 0, 0) 100%)`
      );
    });
  }, [status]);

  const PreloaderVariants: Variants = {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      exit="exit"
      initial="initial"
      variants={PreloaderVariants}
      className="w-full h-full fixed inset-0 bg-background"
    >
      <MaxWidthWrapper className="flex items-end">
        <motion.div>
          <MaskLetters
            text="Loading"
            className="loading-text font-anton uppercase text-5xl md:text-6xl lg:text-7xl !bg-clip-text text-transparent"
            style={{
              background: gradient,
            }}
          />
        </motion.div>
      </MaxWidthWrapper>
    </motion.section>
  );
};

export default Preloader;
