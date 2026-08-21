import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { ExternalLink } from "lucide-react";
import { CARD_STACK } from "@/lib/constant/card-stack";
import Link from "next/link";

const RESTING_SLOTS = [
  { x: -190, y: 22, rotate: -10 },
  { x: 190, y: 30, rotate: 10 },
];
const DEFAULT_REST = { x: 0, y: 0, rotate: 0 };

export default function CardStack() {
  const [activeId, setActiveId] = useState(CARD_STACK[0].id);

  let slotCursor = 0;
  const restById = {};
  CARD_STACK.forEach((card) => {
    if (card.id !== activeId) {
      restById[card.id] = RESTING_SLOTS[slotCursor++] || DEFAULT_REST;
    }
  });

  return (
    <div className="card-stack-root">
      <style>{`
        /* White is the default, always — no OS-preference override.
           Dark mode only applies if an ancestor has a .dark class
           (e.g. Tailwind's class strategy / next-themes). */
        .card-stack-root {
          --cs-card-bg: #ffffff;
          --cs-card-border: #e4e4e7;
          --cs-shadow-active: 0 24px 48px -12px rgba(0,0,0,0.16);
          --cs-shadow-idle: 0 12px 24px -8px rgba(0,0,0,0.10);
          --cs-badge-bg: #18181b;
          --cs-badge-text: #ffffff;
          --cs-tag-border: #d4d4d8;
          --cs-tag-text: #71717a;
          --cs-title-text: #18181b;
          --cs-desc-text: #52525b;
          --cs-pill-bg: #f4f4f5;
          --cs-pill-border: #e4e4e7;
          --cs-pill-text: #18181b;

          position: relative;
          width: 340px;
          height: 300px;
          margin: 0 auto;
        }

        .dark .card-stack-root,
        .card-stack-root.dark {
          --cs-card-bg: #151516;
          --cs-card-border: #29292b;
          --cs-shadow-active: 0 24px 48px -12px rgba(0,0,0,0.6);
          --cs-shadow-idle: 0 12px 24px -8px rgba(0,0,0,0.5);
          --cs-badge-bg: #e4e4e6;
          --cs-badge-text: #0c0c0d;
          --cs-tag-border: #3a3a3d;
          --cs-tag-text: #9a9a9e;
          --cs-title-text: #f2f2f3;
          --cs-desc-text: #a3a3a7;
          --cs-pill-bg: #0c0c0d;
          --cs-pill-border: #2e2e31;
          --cs-pill-text: #e4e4e6;
        }
      `}</style>

      {CARD_STACK.map((card, i) => {
        const isActive = card.id === activeId;
        const rest = restById[card.id] || DEFAULT_REST;

        return (
          <motion.div
            key={card.id}
            onClick={() => setActiveId(card.id)}
            initial={false}
            animate={{
              x: isActive ? 0 : rest.x,
              y: isActive ? -12 : rest.y,
              rotate: isActive ? 0 : rest.rotate,
              scale: isActive ? 1 : 0.92,
              opacity: isActive ? 1 : 0.88,
            }}
            transition={{
              type: "spring",
              stiffness: 340,
              damping: 32,
              mass: 0.9,
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 320,
              cursor: "pointer",
              zIndex: isActive ? 10 : 5 - i,
              transformOrigin: "center bottom",
            }}
            whileHover={!isActive ? { y: rest.y - 8 } : {}}
          >
            <div
              style={{
                background: "var(--cs-card-bg)",
                border: "1px solid var(--cs-card-border)",
                borderRadius: 20,
                padding: 22,
                boxShadow: isActive
                  ? "var(--cs-shadow-active)"
                  : "var(--cs-shadow-idle)",
              }}
            >
              <div className="border relative h-40 mb-4 rounded-md">
                <Image
                  src={card.imageUrl}
                  alt="project-img"
                  fill
                  className="object-contain w-full h-full"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 12,
                }}
              >
                <h3
                  style={{
                    color: "var(--cs-title-text)",
                    fontSize: 17,
                    fontWeight: 600,
                    margin: 0,
                    fontFamily: "'Söhne', 'Inter', -apple-system, sans-serif",
                  }}
                >
                  {card.title}
                </h3>
              </div>

              <p
                style={{
                  color: "var(--cs-desc-text)",
                  fontSize: 13,
                  lineHeight: 1.5,
                  margin: 0,
                  fontFamily: "'Inter', -apple-system, sans-serif",
                }}
              >
                {card.desc}
              </p>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="flex items-center gap-8 mt-4"
                >
                  <div className="flex flex-row items-center w-full">
                    <AnimatedTooltip items={card.techStacks} />
                  </div>
                  <Link href="#">
                    <ExternalLink className="text-muted-foreground hover:text-black transition-transform duration-300 hover:translate-x-0.5 hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
