import LogoLoop from "@/components/LogoLoop";
import {
  backEndLogos,
  frontEndLogos,
  toolsLogo,
} from "@/lib/constant/logo-loop";

const LoopingLogo = () => {
  return (
    <div className="h-50 relative overflow-hidden flex flex-col gap-y-6">
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={frontEndLogos}
        speed={50}
        direction="left"
        logoHeight={40}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        ariaLabel="Frontend"
      />

      <LogoLoop
        logos={backEndLogos}
        speed={50}
        direction="right"
        logoHeight={40}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        ariaLabel="Backend"
      />

      <LogoLoop
        logos={toolsLogo}
        speed={50}
        direction="left"
        logoHeight={40}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        ariaLabel="Tools"
      />
    </div>
  );
};

export default LoopingLogo;
