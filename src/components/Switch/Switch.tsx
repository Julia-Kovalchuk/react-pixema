import React from "react";
import { useTheme } from "../../hooks";
import { Button, Circle } from "./styles";

export const Switch = () => {
  const { theme, setTheme } = useTheme();
  let isDarkTheme;

  document.documentElement.getAttribute("data-theme") === "dark"
    ? (isDarkTheme = false)
    : (isDarkTheme = true);

  const handleClick = (): void => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button type="button" onClick={handleClick} $isDarkTheme={isDarkTheme}>
      <Circle $isDarkTheme={isDarkTheme}></Circle>
    </Button>
  );
};
