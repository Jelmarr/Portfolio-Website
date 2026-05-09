import { FaLinkedin, FaInstagram } from "react-icons/fa";
import LinkButton from "./ui/LinkButton";
import { SiGithub } from "react-icons/si";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import Link from "next/link";
import { FiFileText } from "react-icons/fi";

const socialLinks = [
  {
    label: "Linkedin",
    icon: <FaLinkedin />,
    href: "//www.linkedin.com/in/jelmar-rapis-b771b23a2",
  },
  { label: "Github", icon: <SiGithub />, href: "https://github.com/Jelmarr" },
  {
    label: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/jelmar27/",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
      {/* What I Can Help With */}
      <div className="w-full md:w-auto md:flex-1">
        <h5 className="flex items-center gap-1 font-medium">
          <HiOutlineLightningBolt className="text-sm text-gray-500" />
          What I Can Help With
        </h5>
        <ul className="border dark:border-white rounded-md text-xs flex flex-col gap-2 p-3.5 list-disc list-inside mt-2">
          <li>Build full-stack CRUD systems</li>
          <li>Optimize database queries & performance</li>
          <li>Design clean, responsive UIs</li>
          <li>Integrate authentication & secure APIs</li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="w-full md:w-auto md:flex-initial flex flex-col gap-2">
        <h5 className="flex items-center gap-1 font-medium">
          <IoShareSocialOutline className="text-sm text-gray-500" />
          Social Links
        </h5>
        {socialLinks.map((item, index) => {
          return (
            <div className="" key={index}>
              <LinkButton
                href={item.href}
                newTab
                label={item.label}
                icon={item.icon}
                classname="py-1 w-full md:w-52 px-2 text-xs"
                iconClassName="text-2xl text-gray-800 dark:text-gray-300"
              />
            </div>
          );
        })}
      </div>

      <div className="w-full md:w-auto md:flex-1 flex flex-col gap-5 mt-2 md:mt-7">
        <Link
          href="mailto:jelmarrapis@gmail.com"
          className="border flex dark:border-white py-2 rounded-md px-2 transition-transform duration-300 hover:-translate-y-1"
        >
          <p className="text-xs flex flex-col gap-1">
            <span className="flex items-center gap-1">
              <LuMail className="text-lg" /> Email
            </span>
            jelmarrapis@gmail.com
          </p>
        </Link>
        <Link
          href="/resume"
          className="border flex items-center gap-2 dark:border-white rounded-md transition-transform duration-300 hover:-translate-y-1 p-3 text-sm"
        >
          <FiFileText />
          View Resume
        </Link>
      </div>
    </div>
  );
};

export default Contact;
