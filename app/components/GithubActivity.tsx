"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => ({
      default: mod.GitHubCalendar,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 w-full animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />
    ),
  },
);

const theme = {
  light: ["#ebedf0", "#c6c6c6", "#8a8a8a", "#4a4a4a", "#000000"],
  dark: ["#1a1a1a", "#3a3a3a", "#5a5a5a", "#8a8a8a", "#ffffff"],
};

const GitHubActivity = () => {
  return (
    <div className="flex justify-center overflow-x-auto py-4">
      <div className="dark:hidden">
        <GitHubCalendar username="Jelmarr" colorScheme="light" theme={theme} />
      </div>
      <div className="hidden dark:block">
        <GitHubCalendar username="Jelmarr" colorScheme="dark" theme={theme} />
      </div>
    </div>
  );
};

export default GitHubActivity;
