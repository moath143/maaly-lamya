import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  loading: false,
  post: [],
  status: "failed",
};

export const postApiThunk = createAsyncThunk("posts/postApiThunk", async () => {
  return await axios
    .get(baseUrl)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

const postApiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postApiThunk.pending, (state, action) => {
      state.loading = true;
      state.status = "loading...";
    });
    builder.addCase(postApiThunk.fulfilled, (state, action) => {
      state.post = action.payload;
      state.loading = false;
      state.status = "success";
    });
    builder.addCase(postApiThunk.rejected, (state, action) => {
      state.loading = true;
      state.status = "failed";
    });
  },
});

export default postApiSlice;
