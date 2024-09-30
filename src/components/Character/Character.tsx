import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";

type ParagraphProps = {
  paragraph: string;
};

export default function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <div
      ref={container}
      className="flex flex-wrap items-center relative w-full"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
}

type WordProps = {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
};

const Word = ({ children, progress, range }: WordProps) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative w-full">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

type CharProps = WordProps;

const Char = ({ children, progress, range }: CharProps) => {
  const y = useTransform(progress, range, ["100%", "0%"]);

  return (
    <div className="bg-inherit overflow-hidden inline-block">
      <motion.div className="font-anton block" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};
