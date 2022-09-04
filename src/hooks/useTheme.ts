import { useLayoutEffect, useState } from "react";
import { Theme } from "../types";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
