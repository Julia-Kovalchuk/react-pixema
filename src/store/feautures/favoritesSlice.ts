import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie, IMovieDetails } from "types/types";

interface IFavoritesState {
  favorites: IMovieDetails[];
  sortedFavorites: null | IMovieDetails[];
}

const initialState: IFavoritesState = {
  favorites: [],
  sortedFavorites: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavotires(state, { payload }: PayloadAction<IMovieDetails>) {
      const favorites = state.favorites.find(
        (movie) => movie.id === payload.id,
      );
      if (!favorites) state.favorites.push(payload);
    },
    removeFavorites(state, { payload }: PayloadAction<string>) {
      state.favorites = state.favorites.filter((movie) => {
        return movie.id !== payload;
      });
    },
    // getSortedFavorites(state, { payload }: PayloadAction<string>) {
    //   state.sortedFavorites = state.favorites.filter((movie) => {
    //     return movie.title.includes(payload);
    //   });
    // },
  },
});

export default favoritesSlice.reducer;

export const { addToFavotires, removeFavorites } = favoritesSlice.actions;
