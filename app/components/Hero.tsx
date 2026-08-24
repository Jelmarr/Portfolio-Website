import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import ScaleImage from "./ScaleImage";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Magnet from "@/components/Magnet";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";

const Hero = () => {
  return (
    <section className="col-span-full w-full">
      <div className="flex flex-col sm:flex-row w-full items-center">
        <ScaleImage />
        <div className="min-w-0 flex-1 flex flex-col gap-4 mt-4 sm:mt-0">
          <LayoutTextFlip
            text="Jelmar Rapis"
            words={[
              "Web Developer",
              "Software Engineer",
              "Front End Enginner",
              "Back End Enginner",
            ]}
          />

          <div className="flex gap-4 text-muted-foreground">
            <Link href={""}>
              <Magnet>
                <FaGithub />
              </Magnet>
            </Link>
            <Link href={""}>
              <Magnet>
                <FaLinkedin />
              </Magnet>
            </Link>

            <Link href={""}>
              <Magnet>
                <IoMdMail />
              </Magnet>
            </Link>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground ">
            I&apos;m a full stack engineer. I build modern websites using React,
            Next.js, .Net and Postgresql.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Currently enhancing my tech skills through hands-on projects and
            continuous learning. I love shaping ideas into real projects that
            deliver results.
          </p>

          <div className="sm:w-fit">
            <MagneticButton>
              <button className="bg-black text-white text-sm px-4 py-1.5 rounded-md hover:bg-gray-800 dark:bg-white dark:text-black font-semibold dark:hover:bg-gray-100 cursor-pointer">
                View Resume
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
