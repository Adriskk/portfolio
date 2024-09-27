"use client";

import { PROJECTS } from "@/config";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import { useState } from "react";
import ProjectModal from "@/components/ProjectModal/ProjectModal";

const Projects = () => {
  const [modal, setModal] = useState<ModalType>({
    active: false,
    index: 0,
  });

  return (
    <>
      <div className="mt-24 md:mt-32 w-full border-t border-secondary/30 flex flex-col group">
        {PROJECTS.map((project, index) => (
          <ProjectItem
            project={project}
            index={index}
            setModal={setModal}
            key={index}
          />
        ))}
        <ProjectModal modal={modal} projects={PROJECTS} />
      </div>
    </>
  );
};

export type ModalType = { active: boolean; index: number };

export default Projects;
