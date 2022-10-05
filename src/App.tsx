import { Route, Routes } from "react-router-dom";
import { AuthTemplate, MainTemplate, RequareAuth } from "./components";
import {
  DetailsMoviePage,
  FavoritesPage,
  HomePage,
  NewPage,
  NotFoundPage,
  ResetPasswordPage,
  SearchPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
} from "./pages";
import { ROUTE } from "./routes/routes";
import "./firebase";
import { ReactPixemaPage } from "pages/ReactPixemaPage/ReactPixemaPage";

export const App = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path={ROUTE.NEW} element={<NewPage />} />
        <Route path={ROUTE.DETAILS} element={<DetailsMoviePage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      </Route>

      <Route path={ROUTE.HOME} element={<AuthTemplate />}>
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.RESSET_PASSWORD} element={<ResetPasswordPage />} />
        <Route path={ROUTE.PIXEMA} element={<ReactPixemaPage />} />
      </Route>

      <Route element={<RequareAuth />}>
        <Route path={ROUTE.HOME} element={<MainTemplate />}>
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
