import { Route, Routes } from "react-router-dom";
import { AuthTemplate, MainTemplate, RequareAuth } from "./components/index";
import {
  FavoritesPage,
  HomePage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  TrendsPage,
} from "./pages";
import { ROUTE } from "./routes";
import "./firebase";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />

        {/* <Route /> for movie*/}
        <Route path={ROUTE.NOT_FOUND} />
      </Route>
      <Route path={ROUTE.HOME} element={<AuthTemplate />}>
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      </Route>

      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};
