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
        speed={100}
        direction="left"
        logoHeight={40}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Frontend"
      />

      <LogoLoop
        logos={backEndLogos}
        speed={100}
        direction="right"
        logoHeight={40}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Backend"
      />

      <LogoLoop
        logos={toolsLogo}
        speed={100}
        direction="left"
        logoHeight={40}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Tools"
      />
    </div>
  );
};

export default LoopingLogo;
