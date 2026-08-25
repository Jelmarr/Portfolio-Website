"use client";

import { motion } from "framer-motion";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import CardStack from "@/components/CardStack";
import InternshipDetailts from "./components/InternshipDetailts";
import LoopingLogo from "./components/LoopingLogo";
import GitHubActivity from "./components/GithubActivity";
import ScaleSeparator from "./components/ScaleSeparator";
import { fadeUp } from "@/lib/animation";

export default function Home() {
  return (
    <main className="flex flex-col">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 mb-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <Hero />

        <ScaleSeparator />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 mb-30"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        id="projects"
      >
        <div className="col-span-full">
          <p>
            <span className="text-lg font-semibold font-(family-name:--font-jet-brains) tracking-widest lowercase text-muted-foreground">
              Projects
            </span>
          </p>
          <div className="mt-14">
            <CardStack />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 mb-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.4 }}
        id="internship"
      >
        <div className="col-span-full">
          <p>
            <span className="text-lg font-semibold font-(family-name:--font-jet-brains) tracking-widest lowercase text-muted-foreground">
              Internship
            </span>
          </p>
          <div className="mt-14">
            <InternshipDetailts />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 mb-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.4 }}
        id="technologies"
      >
        <div className="col-span-full">
          <p>
            <span className="text-lg font-semibold font-(family-name:--font-jet-brains) tracking-widest lowercase text-muted-foreground">
              Technologies
            </span>
          </p>
          <div className="mt-14">
            <LoopingLogo />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 mb-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.6 }}
        id="education"
      >
        <div className="col-span-full">
          <p>
            <span className="text-lg font-semibold font-(family-name:--font-jet-brains) tracking-widest lowercase text-muted-foreground">
              Education
            </span>
          </p>
          <div className="mt-14">
            <Education />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 mb-20"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.6 }}
        id="github"
      >
        <div className="col-span-full">
          <p>
            <span className="text-lg font-semibold font-(family-name:--font-jet-brains) tracking-widest lowercase text-muted-foreground">
              Github
            </span>
          </p>
          <div className="mt-14">
            <GitHubActivity />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.6 }}
        id="github"
      >
        <div className="col-span-full">
          <p>
            <span className="text-lg font-semibold font-(family-name:--font-jet-brains) tracking-widest lowercase text-muted-foreground">
              get in touch
            </span>
          </p>
          <div className="mt-14">
            <Contact />
          </div>
        </div>
      </motion.div>

      <ScaleSeparator />
    </main>
  );
}
