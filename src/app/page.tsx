"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Shape from "../../public/svg/shape.svg";
import Circle from "../../public/svg/circle.svg";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Paragraph from "@/components/Character/Character";
import { CONTACT, SOCIALS } from "@/config";
import ProjectGallery from "@/components/ProjectsGallery/ProjectsGallery";
import Projects from "@/components/Projects/Projects";
import { Marquees } from "@/components/Marquee/Marquee";
import { MaskLetters } from "@/components/MaskText/MaskText";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const HeroShapeVariants: Variants = {
    initial: {
      scale: 0.5,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 135,
      transition: {
        delay: 2.2,
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
        opacity: {
          duration: 0.4,
        },
      },
    },
  };

  const RevealUpVariants: Variants = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  };

  const svgRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: svgRef,
    offset: ["start start", "start end"],
  });

  const shapeRotate = useTransform(scrollYProgress, [0, 1], [-360, 360], {
    clamp: false,
  });

  return (
    <div>
      <section className="relative">
        <MaxWidthWrapper>
          <motion.div
            ref={svgRef}
            variants={HeroShapeVariants}
            initial="initial"
            animate="animate"
            style={{ rotate: shapeRotate }}
            className="absolute right-5 md:right-14 lg:right-4 xl:right-8 top-0 md:-top-16 lg:-top-24 max-w-[150px] md:max-w-[200px] lg:max-w-[270px] xl:max-w-[340px]"
          >
            <Image priority src={Shape} alt="shape" className="w-full" />
          </motion.div>

          <div className="hero-text mt-32 md:mt-16 lg:mt-0">
            <div className="w-full flex flex-col-reverse lg:flex-row lg:items-end">
              <span className="uppercase font-anton text-7xl md:text-9xl lg:text-[14vw] block">
                Frontend Developer
              </span>

              <small className="w-fit min-w-[200px] lg:mr-[10vw]">
                Based in Kielce/Wrocław, Poland
              </small>
            </div>
            <span className="uppercase font-anton text-7xl md:text-9xl lg:text-[14vw] block">
              UI & UX Designer
            </span>
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="about">
        <MaxWidthWrapper className="pb-24">
          <div className="w-full flex flex-col mt-16 md:mt-32 relative md:flex-row gap-5 lg:gap-16">
            <span
              className="uppercase font-anton relative inline-block min-w-fit"
              style={{
                fontSize: `clamp(200px, 40vw, 450px)`,
                lineHeight: `clamp(180px, 35vw, 393px)`,
              }}
            >
              <Paragraph paragraph="Hi" />
            </span>

            <div className="w-full flex flex-col mt-2 gap-5">
              <motion.div
                className="w-full flex flex-col gap-5 lg:max-w-[70%] xl:max-w-[600px]"
                whileInView="animate"
                initial="initial"
                viewport={{ once: true }}
                variants={{
                  initial: {},
                  animate: {
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.div variants={RevealUpVariants}>
                  <p className="text-2xl md:text-3xl text-balance">
                    My name is Adrian. I’m a 20-year-old front-end developer and
                    designer based in Kielce/Wrocław, who creates websites in
                    the online space with a spotlight on user experience and
                    visual.
                  </p>
                </motion.div>

                <motion.div variants={RevealUpVariants}>
                  <p className="text-2xl md:text-3xl text-balance">
                    My love to web development started in 2020, and since then I
                    admire beautiful design and animations on sites.
                  </p>
                </motion.div>

                <motion.div variants={RevealUpVariants}>
                  <p className="text-2xl md:text-3xl text-balance">
                    I’m ready to hear your idea and bring it to life.
                  </p>
                </motion.div>
              </motion.div>

              <div className="w-full flex flex-col gap-3 mt-16 lg:flex-row lg:justify-between">
                <small className="md:text-[.9em]">
                  Let’s create your business solution.
                </small>

                <div className="flex flex-col gap-4">
                  <span className="font-anton text-3xl uppercase">
                    Check my socials
                  </span>

                  <div className="w-full flex flex-wrap gap-3">
                    {SOCIALS.map((social) => (
                      <a
                        href={social.link}
                        key={social.label}
                        target="_blank"
                        className="underscore-anim"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section id="work">
        <MaxWidthWrapper>
          <div className="mt-24">
            <div className="relative w-full flex flex-col">
              <span className="uppercase font-anton text-4xl md:text-5xl lg:text-6xl">
                Highlighted work
              </span>
              <small className="mt-4 max-w-[200px] leading-tight text-secondary">
                I created fully by my own or took a big part in creating.
              </small>

              <Image
                priority
                src={Circle}
                alt="cicle"
                className="pointer-events-none select-none absolute w-auto h-[96px] md:h-[124px] lg:h-[148px]
                left-28 md:left-44 -top-5 md:-top-8 lg:left-64 lg:-top-12 transition-all duration-500"
              />
            </div>

            <Projects />
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="overflow-hidden">
        <div className="py-96">
          <Marquees />
        </div>
      </section>

      <section id="contact">
        <MaxWidthWrapper>
          <div className="mt-16 pb-32">
            <div className="relative w-full">
              <MaskLetters
                text="Drop a message"
                className="uppercase font-anton text-5xl sm:text-6xl md:text-8xl lg:text-9xl"
              />

              <motion.div
                variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Image
                  priority
                  src={Circle}
                  alt="cicle"
                  className="pointer-events-none select-none absolute w-auto h-[96px] md:h-[124px] lg:h-[148px]
                -left-4 -top-5 md:-top-8 lg:-top-6 transition-all duration-500"
                />
              </motion.div>
            </div>

            <div className="flex flex-col gap-16 md:flex-row mt-12 md:mt-24">
              <ContactForm />

              <div className="w-full flex flex-col gap-10">
                <div className="w-full flex flex-col gap-2">
                  <span className="uppercase text-secondary">Phone</span>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="underscore-anim text-4xl font-anton w-fit after:h-2 md:text-5xl after:-bottom-[0.4rem]"
                  >
                    {CONTACT.phone}
                  </a>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <span className="uppercase text-secondary">E-mail</span>
                  <a
                    href={`mailto:${CONTACT.mail}`}
                    className="underscore-anim text-4xl font-anton w-fit after:h-2 md:text-5xl after:-bottom-[0.4rem]"
                  >
                    {CONTACT.mail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
