"use client";

import Phrase from "@/components/Phrase/Phrase";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

type MarqueeProps = {
  text: string;
  progress: MotionValue<number>;
  left?: string;
  direction?: "left" | "right";
};

const Marquee = ({
  text,
  left,
  progress,
  direction = "left",
}: MarqueeProps) => {
  const dir: number = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);

  return (
    <motion.div
      className="relative flex whitespace-nowrap gap-4 py-2 text-background"
      style={{ left, x }}
    >
      <Phrase text={text} />
      <Phrase text={text} />
      <Phrase text={text} />
      <Phrase text={text} />
      <Phrase text={text} />
      <Phrase text={text} />
    </motion.div>
  );
};

export const Marquees = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={container} className="bg-primary-dark py-4">
      <Marquee text="Let's turn" left="-55%" progress={scrollYProgress} />
      <Marquee
        text="Your idea"
        left="-55%"
        progress={scrollYProgress}
        direction="right"
      />
      <Marquee text="Into a website" left="-40%" progress={scrollYProgress} />
    </div>
  );
};

export default Marquee;
