import { GitHubCalendar } from "react-github-calendar";

const GitHubActivity = () => {
  const theme = {
    light: ["#ebedf0", "#c6c6c6", "#8a8a8a", "#4a4a4a", "#000000"],
    dark: ["#1a1a1a", "#3a3a3a", "#5a5a5a", "#8a8a8a", "#ffffff"],
  };

  return (
    <>
      <div className="dark:hidden">
        <GitHubCalendar username="Jelmarr" colorScheme="light" theme={theme} />
      </div>
      <div className="hidden dark:block">
        <GitHubCalendar username="Jelmarr" colorScheme="dark" theme={theme} />
      </div>
    </>
  );
};

export default GitHubActivity;
