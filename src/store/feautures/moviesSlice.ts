import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { transformMoviesAPI } from "services/mappers/transformMoviesAPI";
import { movieAPI } from "services/movieAPI";
import { IMovie, IMoviesAPIResponse } from "types/types";

interface IMoviesState {
  movies: IMovie[];
  isLoading: boolean;
  error: null | string;
  page: number;
}

const initialState: IMoviesState = {
  movies: [],
  isLoading: false,
  error: null,
  page: 1,
};

const fetchMovies = createAsyncThunk<
  IMoviesAPIResponse,
  { page: number },
  { rejectValue: string }
>("movies/fetchMovies", async ({ page }, { rejectWithValue }) => {
  try {
    return await movieAPI.getAll(page);
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    createNextPage(state, { payload }: PayloadAction<boolean>) {
      payload ? (state.page = state.page + 1) : (state.page = 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = transformMoviesAPI(payload.Search);
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default moviesSlice.reducer;
export { fetchMovies };

export const { createNextPage } = moviesSlice.actions;
