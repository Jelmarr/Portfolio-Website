"use client";

import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Education from "./components/Education";
import RecentProjects from "./components/RecentProjects";
import SideBar from "./components/SideBar";
import TechStack from "./components/TechStack";
import Article from "./components/ui/Article";
import Hero from "./components/Hero";
import SpotlightCards from "@/components/kokonutui/spotlight-cards";
import Scales, { ScalesContainer } from "@/components/ui/scales";
import CardStack from "@/components/CardStack";
import DarkModeToggle from "./components/ui/DarkModeToggle";
import InternshipDetailts from "./components/InternshipDetailts";
import LoopingLogo from "./components/LoopingLogo";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

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

        <div className="relative mt-8 h-6 w-full col-span-full mask-[linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
          <ScalesContainer containerClassName="h-full w-full" />
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 mb-30"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="col-span-full">
          <p>
            - <span className="text-xl font-semibold">Projects</span>
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
      >
        <div className="col-span-full">
          <p>
            - <span className="text-xl font-semibold">Internship</span>
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
      >
        <div className="col-span-full">
          <p>
            - <span className="text-xl font-semibold">Technologies</span>
          </p>
          <div className="mt-14">
            <LoopingLogo />
          </div>
        </div>
      </motion.div>

      {/* <motion.div
        className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <section className="flex flex-col gap-4">
          <Article>
            <TechStack />
          </Article>
          <Article>
            <CurrentlyBuilding />
          </Article>
        </section>

        <aside className="border rounded-lg p-4 dark:bg-gray-950">
          <Education />
        </aside>
      </motion.div> */}

      {/* <motion.section
        className="border rounded-lg p-4 dark:bg-gray-950"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Contact />
      </motion.section> */}
    </main>
  );
}
