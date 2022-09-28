import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { transformMoviesAPI } from "services/mappers/transformMoviesAPI";
import { movieAPI } from "../../services/movieAPI";
import { IMovie, IMoviesAPIResponse } from "../../types/types";

interface IMoviesState {
  newMovies: IMovie[];
  isLoading: boolean;
  error: null | string;
}

const initialState: IMoviesState = {
  newMovies: [],
  isLoading: false,
  error: null,
};

const fetchNewMovies = createAsyncThunk<
  IMoviesAPIResponse,
  undefined,
  { rejectValue: string }
>("newMovies/fetchNewMovies", async (_, { rejectWithValue }) => {
  try {
    return await movieAPI.getNewMovies();
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const newMoviesSlice = createSlice({
  name: "newMovies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNewMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.newMovies = transformMoviesAPI(payload.Search);
    });
    builder.addCase(fetchNewMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default newMoviesSlice.reducer;
export { fetchNewMovies };
