import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { useToggle } from "../../../hooks";
import { Button, Circle } from "./styles";
import { getUserInfo } from "store/selectors/userSelectors";
import { toggleTheme } from "store/feautures/userSlice";
import { useLayoutEffect } from "react";

export const Switch = () => {
  const { themeMode } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const [isDarkTheme, toggleDarkTheme] = useToggle(themeMode === "dark");

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  const handleTheme = () => {
    if (themeMode === "dark") {
      dispatch(toggleTheme("light"));
    } else {
      dispatch(toggleTheme("dark"));
    }
    toggleDarkTheme();
  };

  return (
    <Button type="button" onClick={handleTheme} $isDarkTheme={isDarkTheme}>
      <Circle $isDarkTheme={isDarkTheme}></Circle>
    </Button>
  );
};
