"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        My hobby of automating workflows pushed me to learn programming. I enrolled in a
        coding bootcamp and learned full-stack web development. My favorite part of programming is the problem-solving
        aspect. I love the feeling of finally figuring out a solution to a problem.
      </p>
      <p className='mb-3'>My core stack is <span className='font-medium'>React</span>, <span
          className='font-medium'>Next.js</span>,{' '}
        <span className='font-medium'>Node.js</span> and <span className='font-medium'>MongoDB</span>. I am also
        familiar with TypeScript, Nest.js, PostgreSQL. I am always looking to learn new
        technologies. I am currently looking for a full-time position as a software developer.</p>

      <p>
        When I&apos;m not coding, I enjoy watching anime and to do yoga. I also enjoy
        learning new things. I am currently learning Vue.js, English and German.
      </p>
    </motion.section>
  );
}
