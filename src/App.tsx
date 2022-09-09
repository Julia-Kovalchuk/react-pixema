import { Route, Routes } from "react-router-dom";
import { MainTemplate, RequareAuth } from "./components/index";
import { useTheme } from "./hooks/index";
import {
  FavoritesPage,
  HomePage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  TrendsPage,
} from "./pages";
import { ROUTE } from "./routes";

export const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
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
