"use client";
import { ToggleTheme } from "@/components/lightswind/toggle-theme";
import LineSidebar from "@/components/LineSidebar";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Internship", id: "internship" },
  { label: "Technologies", id: "technologies" },
  { label: "Education", id: "education" },
  { label: "Github", id: "github" },
  { label: "Contact", id: "contact" },
];

const SideBar = () => {
  const handleItemClick = (index: number, label: string) => {
    const item = NAV_ITEMS.find((i) => i.label === label);
    if (!item) return;

    const section = document.getElementById(item.id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside className="fixed left-6 top-6">
      <ToggleTheme duration={600} animationType="diag-down-right" />
      <LineSidebar
        items={[
          "Home",
          "Projects",
          "Internship",
          "Technologies",
          "Education",
          "Github",
          "Contact",
        ]}
        accentColor="hsl(var(--foreground))"
        textColor="hsl(var(--muted-foreground))"
        markerColor="hsl(var(--border))"
        showIndex
        showMarker
        proximityRadius={100}
        maxShift={30}
        falloff="smooth"
        markerLength={60}
        markerGap={0}
        tickScale={0.5}
        scaleTick
        itemGap={20}
        fontSize={1.1}
        smoothing={100}
        defaultActive={0}
        onItemClick={handleItemClick}
      />
    </aside>
  );
};

export default SideBar;
