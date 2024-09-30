"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useDimension } from "@/hooks/useDimension";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const IMAGES = [
  "Mock.png",
  "Mock2.png",
  "Mock3.png",
  "Mock4.png",
  "Mock5.png",
  "Mock6.png",
  "Mock7.png",
  "Mock8.png",
  "Mock9.png",
  "Mock10.png",
];

const ProjectGallery = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <div
      ref={container}
      className="pointer-events-none select-none h-[130vh] md:h-[150vh] lg:h-[180vh] bg-primary-dark flex box-border gap-[2vw] p-[2vw] overflow-hidden"
    >
      <ProjectGalleryColumn
        cls="-top-[65%] md:-top-[55%] lg:-top-[45%] w-full"
        images={[IMAGES[0], IMAGES[1], IMAGES[2]]}
        y={y1}
      />
      <ProjectGalleryColumn
        cls="-top-[95%] hidden w-full lg:flex"
        images={[IMAGES[3], IMAGES[9], IMAGES[5]]}
        y={y2}
      />
      <ProjectGalleryColumn
        cls="-top-[45%] hidden w-full md:flex lg:-top-[50%]"
        images={[IMAGES[6], IMAGES[7], IMAGES[8]]}
        y={y3}
      />
      <ProjectGalleryColumn
        cls="-top-[110%] lg:-top-[75%] w-full"
        images={[IMAGES[4], IMAGES[3], IMAGES[6]]}
        y={y4}
      />
    </div>
  );
};

type ProjectGalleryColumnProps = {
  images: string[];
  cls: ClassValue;
  y: MotionValue<number>;
};

const ProjectGalleryColumn = ({
  images,
  cls = "",
  y,
}: ProjectGalleryColumnProps) => {
  return (
    <motion.div
      className={cn("relative w-1/4 h-full flex flex-col gap-[2vw]", cls)}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="w-full h-full relative rounded-[1vw] overflow-hidden"
        >
          <Image
            src={`/projects/${src}`}
            alt="Project image"
            fill
            className="object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ProjectGallery;
