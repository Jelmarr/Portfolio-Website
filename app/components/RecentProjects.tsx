import Link from "next/link";
import { IoArrowForward, IoBriefcaseOutline } from "react-icons/io5";

const RecentProjects = () => {
  return (
    <>
      <h1 className="text-xl font-semibold flex gap-2 items-center">
        <IoBriefcaseOutline className="text-[17px] text-gray-500" />
        Recent Projects
      </h1>
      <div className="mt-4 flex gap-4">
        <RenderCard
          desc="Inventory Management System"
          link="/projects/macoleens_pharmacy"
          title="Macoleen&#39;s Pharmacy"
        />
        <RenderCard
          desc="Noynay Medical Main Website"
          link="https://noynay-medical.vercel.app"
          title="NMI Website"
        />
      </div>
    </>
  );
};

export default RecentProjects;

const RenderCard = ({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) => {
  const isExternal = link.startsWith("http");

  return (
    <div className="border w-60 rounded-md p-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm group">
      <Link
        href={link}
        className="w-full"
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm mt-2">{desc}</p>
        <div className="bg-gray-100 dark:bg-black mt-4 p-1 px-2 rounded-sm flex w-fit items-center gap-2">
          <p className="text-xs">View</p>
          <IoArrowForward className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
};
