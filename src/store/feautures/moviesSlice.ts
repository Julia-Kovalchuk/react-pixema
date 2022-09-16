import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI } from "../../services/movieAPI";
import { IMovieAPI } from "../../types/types";

interface IMoviesState {
  movies: any; //WritableDraft<IMovies> предлагает vscode запуталась что  где происходит
  isLoading: boolean;
  error: null | string;
}

const initialState: IMoviesState = {
  movies: { Search: [], totalResults: null, Response: null },
  isLoading: false,
  error: null,
};

const fetchMovies = createAsyncThunk<
  IMovieAPI[],
  undefined,
  { rejectValue: string }
>("movies/fetchMovies", async (_, { rejectWithValue }) => {
  try {
    return await movieAPI.getAll();
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
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
