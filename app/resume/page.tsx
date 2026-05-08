"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeUp } from "../page";

const page = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="py-8"
    >
      <header className="flex gap-4 items-center">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium">
          <BsArrowLeft className="text-xs" />
          Back to Home
        </Link>
        <h3 className="text-2xl font-semibold">Resume</h3>
      </header>
      <main className=" flex items-center justify-center mt-8">
        <Image
          alt="resume"
          src="/resume.png"
          width={700}
          height={700}
          className="border rounded-lg shadow-lg"
        />
      </main>
    </motion.div>
  );
};

export default page;
