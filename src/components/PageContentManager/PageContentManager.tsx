"use client";

import React, { useEffect, useState } from "react";
import Preloader from "@/components/Preloader/Preloader";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import { AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const PageContentManager = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const LOADING_TIME = 2 * 1000;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const v = useMotionValue(0);
  const percentage = useSpring(v, {
    duration: LOADING_TIME,
    damping: 70,
    stiffness: 50,
  });

  useEffect(() => {
    setTimeout(() => {
      percentage.set(100);
    }, 1000);
  }, []);

  const onComplete = () => {
    setIsLoading(false);
    percentage.destroy();
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isLoading ? (
        <Preloader status={percentage} onComplete={onComplete} />
      ) : (
        <>
          <Navigation />
          {children}
          <Footer />
        </>
      )}
    </AnimatePresence>
  );
};

export default PageContentManager;
