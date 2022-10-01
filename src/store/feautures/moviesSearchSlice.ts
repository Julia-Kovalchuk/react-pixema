import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { transformMoviesAPI } from "services/mappers/transformMoviesAPI";
import { movieAPI } from "../../services/movieAPI";
import { IMovie, IMoviesAPIResponse, ISearchParams } from "../../types/types";

interface IMoviesSearchState {
  movies: IMovie[];
  isLoading: boolean;
  error: null | string;
  searchParams: ISearchParams;
}

const initialState: IMoviesSearchState = {
  movies: [],
  isLoading: false,
  error: null,
  searchParams: {
    title: "",
    type: "",
    year: "",
    page: 1,
  },
};

const fetchMoviesSearch = createAsyncThunk<
  IMoviesAPIResponse,
  ISearchParams,
  { rejectValue: string }
>(
  "moviesSearch/fetchMoviesSearch",
  async (searchParams, { rejectWithValue }) => {
    try {
      return await movieAPI.getMovieBySearchParams(searchParams);
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

const moviesSearchSlice = createSlice({
  name: "moviesSearch",
  initialState,
  reducers: {
    resetMoviesSearch(state) {
      state.movies = [];
    },
    updateTitleParam(state, { payload }: PayloadAction<string>) {
      state.searchParams.title = payload;
    },
    updateYearParam(state, { payload }: PayloadAction<string>) {
      state.searchParams.year = payload;
    },
    // тут будутлежать для добавления в параметры
  },

  extraReducers(builder) {
    builder.addCase(fetchMoviesSearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMoviesSearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = transformMoviesAPI(payload.Search);
    });
    builder.addCase(fetchMoviesSearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default moviesSearchSlice.reducer;
export { fetchMoviesSearch };

export const { resetMoviesSearch, updateTitleParam, updateYearParam } =
  moviesSearchSlice.actions;
