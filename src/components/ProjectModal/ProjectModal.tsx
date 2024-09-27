import { ModalType } from "@/components/Projects/Projects";
import { Project } from "@/types/Project";
import Image from "next/image";
import { Variants, motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

type ProjectModalProps = {
  modal: ModalType;
  projects: Project[];
};

const ProjectModal = ({ modal, projects }: ProjectModalProps) => {
  const { index, active } = modal;

  const ModalVariants: Variants = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    scaled: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  const container = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    });
  }, []);

  return (
    <motion.div
      ref={container}
      variants={ModalVariants}
      initial="initial"
      animate={active ? "scaled" : "closed"}
      className="h-[350px] w-[400px] flex items-center justify-center overflow-hidden fixed pointer-events-none"
    >
      <div
        className="w-full h-full absolute transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{ top: index * -100 + "%" }}
      >
        {projects.map((project) => (
          <div
            className="relative h-full flex items-center justify-center"
            style={{ backgroundColor: project.color }}
            key={project.title}
          >
            <Image
              src={`/projects/${project.src}`}
              alt={project.title}
              width={330}
              height={0}
              className="h-auto"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectModal;
