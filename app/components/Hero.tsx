import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import ScaleImage from "./ScaleImage";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import Magnet from "@/components/Magnet";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="col-span-full w-full">
      <div className="flex flex-col sm:flex-row w-full items-center">
        <ScaleImage />
        <div className="min-w-0 flex-1 flex flex-col gap-4 mt-4">
          <LayoutTextFlip
            text="Jelmar Rapis"
            words={[
              "Web Developer",
              "Software Engineer",
              "Front End Developer",
              "Back End Developer",
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
                <CiLinkedin />
              </Magnet>
            </Link>

            <Link href={""}>
              <Magnet>
                <IoMdMail />
              </Magnet>
            </Link>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            I&apos;m a full stack developer building websites using React,
            Next.js, .Net and Postgresql.
          </p>

          <div className="sm:w-fit">
            <MagneticButton>
              <Button className="cursor-pointer w-full">View Resume</Button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
