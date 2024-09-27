"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [blendMode, setBlendMode] = useState("initial");

  const LogoVariants: Variants = {
    initial: {
      x: "-100%",
      opacity: 0,
      background: "#FEFFFF",
    },
    animate: {
      x: 0,
      opacity: 1,
      background: "rgba(255, 255, 255, 0)",
      transition: {
        duration: 0.1,
        background: {
          duration: 2,
        },
      },
    },
  };
  const LinksVariants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const ParentVariants: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const InnerParentVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const RevealVariants: Variants = {
    initial: {
      height: "100%",
    },
    animate: {
      height: 0,
      transition: {
        delay: 2.5,
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <motion.div
      variants={ParentVariants}
      initial="initial"
      animate="animate"
      onAnimationComplete={() => setBlendMode("exclusion")}
      className={cn("sticky top-2 md:top-0 left-0 z-50", {
        "mix-blend-exclusion": blendMode === "exclusion",
      })}
    >
      <div
        className="relative z-50 w-full flex h-auto items-center justify-between z-2 px-3 md:px-4 lg:px-14
      py-4 lg:py-8"
      >
        <Link
          href="/"
          className="uppercase text-2xl md:text-3xl inline-block group cursor-pointer"
        >
          <motion.span
            variants={LogoVariants}
            className={cn(
              "font-anton after:inline-block after:content-[''] after:relative after:w-1 after:h-1 " +
                "after:rounded-full after:mb-2 after:ml-0 after:opacity-0 group-hover:after:opacity-100 " +
                "group-hover:after:w-1.5 group-hover:after:h-1.5 group-hover:after:ml-1 " +
                "after:transition-[var(--transition-fast)] group-hover:ml-1 transition-[var(--transition-fast)]",
              {
                "after:bg-[#D2CCD2] text-[#D2CCD2]": blendMode === "exclusion",
              }
            )}
          >
            Adrian
          </motion.span>
          <motion.span
            variants={LogoVariants}
            className={cn(
              "font-anton inline-block group-hover:ml-[.2em] transition-[var(--transition-medium)]",
              {
                "text-[#D2CCD2]": blendMode === "exclusion",
              }
            )}
          >
            Iskra
          </motion.span>
        </Link>

        <motion.div
          variants={InnerParentVariants}
          className="nav-links lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex gap-3 md:gap-8 lg:bottom-1/2
          lg:translate-y-1/2"
        >
          <motion.span variants={LinksVariants}>
            <Link
              href="#about"
              className={cn("nav-link underscore-anim", {
                "text-[#D2CCD2] after:bg-[#D2CCD2]": blendMode === "exclusion",
              })}
            >
              About
            </Link>
          </motion.span>

          <motion.span variants={LinksVariants}>
            <Link
              href="#work"
              className={cn("nav-link underscore-anim", {
                "text-[#D2CCD2] after:bg-[#D2CCD2]": blendMode === "exclusion",
              })}
            >
              Work
            </Link>
          </motion.span>

          <motion.span variants={LinksVariants}>
            <Link
              href="#contact"
              className={cn("nav-link underscore-anim", {
                "text-[#D2CCD2] after:bg-[#D2CCD2]": blendMode === "exclusion",
              })}
            >
              Contact
            </Link>
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        variants={RevealVariants}
        className="reveal fixed left-0 top-0 h-full w-full bg-background z-40"
      ></motion.div>
    </motion.div>
  );
};

export default Navigation;
