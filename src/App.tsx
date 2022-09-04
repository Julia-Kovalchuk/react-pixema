import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "./components/MainTemplate/MainTemplate";
import { RequareAuth } from "./components/RequareAuth/RequareAuth";
import { useTheme } from "./hooks/useTheme";
import { FavoritesPage } from "./pages/FavoritesPage";
import { HomePage } from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { TrendsPage } from "./pages/TrendsPage";
import { ROUTE } from "./routes";

export const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_IN} element={<SignUpPage />} />
        {/* <Route /> for movie*/}
        <Route path={ROUTE.NOT_FOUND} />

        <Route element={<RequareAuth />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
