import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieAPI } from "services/movieAPI";

const initialState = {
  isLoading: false,
  error: null,
  details: {},
};

// вместо объекта ниже интерфейс
export const fetchMovieByDetails = createAsyncThunk<{}, string>(
  "movieDetails/fetchMovieByDetails",
  async (id) => {
    return await movieAPI.getDetailsById(id);
  },
);

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovieByDetails.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchMovieByDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.details = payload;
    });
    builder.addCase(fetchMovieByDetails.rejected, (state) => {
      state.isLoading = false;
      state.error = null;
    });
  },
});

export default movieDetailsSlice.reducer;
