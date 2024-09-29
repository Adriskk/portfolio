"use client";

import { Project } from "@/types/Project";
import { motion, Variants } from "framer-motion";
import { SetStateAction } from "react";
import { ModalType } from "@/components/Projects/Projects";
import { ArrowUpRight } from "lucide-react";

type ProjectItemProps = {
  project: Project;
  setModal: React.Dispatch<SetStateAction<ModalType>>;
  index: number;
};

const ProjectItem = ({ project, setModal, index }: ProjectItemProps) => {
  const DURATION: number = 0.65;
  const STAGGER: number = 0.025;

  const FLipTextVariants1: Variants = {
    initial: {
      y: 0,
    },
    animate: {
      y: "-100%",
    },
  };
  const FLipTextVariants2: Variants = {
    initial: {
      y: "102%",
    },
    animate: {
      y: 0,
    },
  };
  const WorksVariants: Variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: -15,
      transition: {
        duration: 0.7,
        ease: [0.71, 0.06, 0.06, 0.93],
      },
    },
  };

  return (
    <motion.a
      initial="initial"
      whileHover="animate"
      href={project.link}
      className="project-item w-full flex flex-col md:flex-row md:items-center md:justify-between py-6 md:py-10
      transition-opacity duration-300 group-hover:opacity-70 hover:!opacity-100"
      onMouseEnter={() => setModal({ index, active: true })}
      onMouseLeave={() => setModal({ index, active: false })}
    >
      <span className="overflow-hidden block relative whitespace-pre-wrap">
        <div>
          {project.title.split("").map((letter, index) => (
            <motion.span
              variants={FLipTextVariants1}
              transition={{
                delay: index * STAGGER,
                duration: DURATION,
                ease: [0.71, 0.06, 0.06, 0.93],
              }}
              className="font-anton text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase inline-block"
              key={index}
            >
              {letter}
            </motion.span>
          ))}

          <motion.span
            variants={FLipTextVariants1}
            transition={{
              delay: project.title.split("").length * STAGGER,
              duration: DURATION,
              ease: [0.71, 0.06, 0.06, 0.93],
            }}
            className="inline-block invisible"
          >
            <ArrowUpRight className="w-10 h-10 lg:w-20 lg:h-20 xl:w-28 xl:h-28 stroke-[4] ml-4" />
          </motion.span>
        </div>

        <div className="absolute left-0 bottom-0">
          {project.title.split("").map((letter, index) => (
            <motion.span
              variants={FLipTextVariants2}
              transition={{
                delay: index * STAGGER,
                duration: DURATION,
                ease: [0.71, 0.06, 0.06, 0.93],
              }}
              className="font-anton text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase inline-block"
              key={index}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            variants={FLipTextVariants2}
            transition={{
              delay: project.title.split("").length * STAGGER,
              duration: DURATION,
              ease: [0.71, 0.06, 0.06, 0.93],
            }}
            className="inline-block"
          >
            <ArrowUpRight className="w-10 h-10 lg:w-20 lg:h-20 xl:w-28 xl:h-28 stroke-[4] ml-4" />
          </motion.span>
        </div>
      </span>

      <motion.small
        variants={WorksVariants}
        className="text-[.9em] inline-block"
      >
        {project.works}
      </motion.small>
    </motion.a>
  );
};

export default ProjectItem;
