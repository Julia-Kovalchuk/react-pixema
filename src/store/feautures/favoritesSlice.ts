import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieDetails } from "types/types";

interface IFavoritesState {
  favorites: IMovieDetails[];
}

const initialState: IFavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavotires(state, { payload }: PayloadAction<IMovieDetails>) {
      const result = state.favorites.find((movie) => movie.id === payload.id);
      if (!result) state.favorites.push(payload);
    },
    removeFavorites(state, { payload }: PayloadAction<string>) {
      state.favorites = state.favorites.filter((movie) => {
        return movie.id !== payload;
      });
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavotires, removeFavorites } = favoritesSlice.actions;
