import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { INTERN_STACKS } from "@/lib/constant/intern-techstack";

const modules = [
  {
    title: "Patient Information System",
    description:
      "Built centralized patient records management to streamline intake and clinical history tracking.",
  },
  {
    title: "Pharmacy & POS System",
    description:
      "Developed inventory lot tracking with integrated point-of-sale for automated medication billing.",
  },
  {
    title: "Laboratory Request Module",
    description:
      "Implemented digital test requisition and lab result processing workflows.",
  },
  {
    title: "Official Website",
    description:
      "Designed and implemented the official company landing page for public web presence.",
  },
];

const InternshipDetails = () => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_3fr] md:gap-8">
      {/* Date Column */}
      <p className="mt-1 text-sm text-muted-foreground font-medium">
        February 2026 – May 2026
      </p>

      {/* Details Column */}
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Full Stack Engineer Intern
          </h3>
          <p className="text-sm font-medium text-muted-foreground">
            Noynay Medical Inc.
          </p>
          <p className="text-xs font-medium text-muted-foreground mt-1">
            Dasmariñas City - Cavite, Philippines
          </p>
        </div>

        {/* Summary Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          Engineered core clinical operations modules and developed the official
          corporate website.
        </p>

        {/* Built Modules List */}
        <div className="mt-4 flex flex-col gap-2.5">
          {modules.map((item, i) => (
            <div
              key={i}
              className="border-l border-neutral-300 pl-3 transition-colors hover:border-foreground dark:border-neutral-800"
            >
              <p className="text-sm text-foreground font-medium">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stacks */}
        <div className="flex flex-row items-center w-full mt-2">
          <AnimatedTooltip items={INTERN_STACKS} />
        </div>
      </div>
    </section>
  );
};

export default InternshipDetails;
