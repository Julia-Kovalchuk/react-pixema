import {
  addToFavotires,
  removeFavorites,
  sortFavorites,
  resetSortedFavorites,
  updateSearchword,
} from "./favoritesSlice";
import { fetchMovieByDetails } from "./movieDetailsSlice";
import {
  fetchMoviesSearch,
  resetMoviesSearch,
  updateTitleParam,
  updateYearParam,
  updateTypeParam,
  deleteAllParams,
} from "./moviesSearchSlice";
import { fetchMovies, createNextPage } from "./moviesSlice";
import { fetchNewMovies, createNextPageNewMovies } from "./newMoviesSlice";
import {
  updateUserName,
  resetError,
  toggleTheme,
  fetchSignUpUser,
  fetchSignInUser,
  fetchSignOutUser,
  fetchResetPassword,
  fetchUpdatePassword,
  fetchUpdateEmail,
} from "./userSlice";

export {
  addToFavotires,
  removeFavorites,
  sortFavorites,
  resetSortedFavorites,
  updateSearchword,
  fetchMovieByDetails,
  resetMoviesSearch,
  updateTitleParam,
  updateYearParam,
  updateTypeParam,
  deleteAllParams,
  fetchMoviesSearch,
  fetchMovies,
  createNextPage,
  fetchNewMovies,
  updateUserName,
  resetError,
  toggleTheme,
  fetchSignUpUser,
  fetchSignInUser,
  fetchSignOutUser,
  fetchResetPassword,
  fetchUpdatePassword,
  fetchUpdateEmail,
  createNextPageNewMovies,
};
