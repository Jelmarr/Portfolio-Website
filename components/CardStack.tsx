import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { CARD_STACK } from "@/lib/constant/card-stack";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/lightswind/dialog";
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
              <div className="border relative h-40 mb-4 rounded-md overflow-hidden">
                <Image
                  src={card.imageUrl ?? ""}
                  alt="project-img"
                  fill
                  className="object-cover w-full h-full"
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

              <p className="text-muted-foreground text-xs m-0 ">{card.desc}</p>

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
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-sm cursor-pointer flex items-center gap-2 font-medium group text-muted-foreground hover:text-white">
                        View
                        <ArrowRight
                          size={13}
                          className="mt-0.5 group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl">
                      <DialogHeader className="border-b pb-4">
                        <div className="relative h-80 my-4 rounded-md overflow-hidden">
                          <Image
                            alt="project-image"
                            src={card.imageUrl ?? ""}
                            fill
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <DialogTitle className="my-4">{card.title}</DialogTitle>
                        <DialogDescription>{card.desc}</DialogDescription>
                      </DialogHeader>
                      <div className="my-4 border-b pb-4">
                        <h3 className="font-semibold mb-3">Key Features</h3>
                        {card.features &&
                        card.features.length > 0 &&
                        card.features[0].name ? (
                          <ul className="space-y-2">
                            {card.features.map((feature) => (
                              <li
                                key={feature.id}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <Check
                                  size={14}
                                  className="mt-0.5 shrink-0 text-neutral-500 dark:text-neutral-400"
                                />
                                <span>{feature.name}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-muted-foreground">
                            Coming soon.
                          </p>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Links</h3>
                        <Link
                          href={card.link}
                          target="_blank"
                          className="flex items-center gap-2 group cursor-pointer"
                        >
                          <p>Demo</p>
                          <ExternalLink
                            size={15}
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                          />
                        </Link>
                        {card.id == "pharmacy" && (
                          <div>
                            <h3 className="font-semibold mt-4">Account Demo</h3>
                            <p className="text-sm mt-2 text-muted-foreground">
                              Manager: jelmarrapis47@gmail.com pass:jelmar123
                            </p>
                            <p className="text-sm mt-2 text-muted-foreground">
                              Nurse: jelmarrapis46@gmail.com pass:jelmar123
                            </p>
                            <p className="text-sm mt-2 text-muted-foreground">
                              Pharmacist: jelmarrapis63@gmail.com pass:jelmar123
                            </p>
                            <p className="text-sm mt-2 text-muted-foreground">
                              Cashier: shyzen8gmail.com pass:jelmar123
                            </p>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
