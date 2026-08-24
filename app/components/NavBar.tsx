"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ToggleTheme } from "@/components/lightswind/toggle-theme";
import { NAV_ITEMS } from "@/lib/constant/nav-items";
import { handleItemClick } from "@/lib/nav-click";

// Returns false on the server (and during initial hydration), true once
// mounted on the client — without the setState-in-effect pattern.
function useMounted() {
  return useSyncExternalStore(
    () => () => {}, // no-op subscribe: mount status never changes after the fact
    () => true, // client snapshot
    () => false, // server snapshot
  );
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const goTo = (id: string) => {
    setIsOpen(false);
    if (id.startsWith("mailto:") || id.startsWith("http")) {
      window.open(id, "_blank");
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleItemClick(id);
    }
  };

  const drawer = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed top-0 right-0 h-dvh w-64 max-w-[80%] bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 z-50 md:hidden flex flex-col"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="h-9 w-9 flex items-center justify-center text-neutral-600 dark:text-neutral-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="flex flex-col px-6 gap-1">
              {NAV_ITEMS.map((nav, i) => (
                <motion.li
                  key={nav.id}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <button
                    onClick={() => goTo(nav.id)}
                    className="w-full text-left py-3 text-base text-neutral-700 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors"
                  >
                    {nav.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto p-6 flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                Theme
              </span>
              <ToggleTheme animationType="diag-down-right" />
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <header
      className="flex p-4 bg-white/10 dark:bg-neutral-900/30 backdrop-blur-md border-white/20 dark:border-white/10 justify-between items-center mb-20"
      id="home"
    >
      <button onClick={() => goTo("home")}>
        <p className="text-lg font-bold tracking-widest font-(family-name:--font-jet-brains) cursor-pointer">
          JR
        </p>
      </button>

      <div className="hidden md:flex items-center gap-8">
        <nav>
          <ul className="flex gap-6">
            {NAV_ITEMS.map((nav) => (
              <li key={nav.id}>
                <button
                  onClick={() => goTo(nav.id)}
                  className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {nav.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <ToggleTheme animationType="diag-down-right" />
      </div>

      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="md:hidden relative h-9 w-9 flex items-center justify-center text-neutral-600 dark:text-neutral-300"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
              className="absolute"
            >
              <X className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
              className="absolute"
            >
              <Menu className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {mounted && createPortal(drawer, document.body)}
    </header>
  );
};

export default NavBar;
