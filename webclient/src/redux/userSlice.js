import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk for fetching user data
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch user";
      });
  },
});

export default userSlice.reducer;
