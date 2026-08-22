"use client";

import { ToggleTheme } from "@/components/lightswind/toggle-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ToggleTheme
      duration={600}
      animationType="diag-down-right"
      className="bg-gray-100 dark:bg-gray-700"
    >
      {children}
    </ToggleTheme>
  );
}
