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
      return response.data; // action.payload
    })
    .catch((err) => {
      console.log(err);
    });
});

export const postDataThunk = createAsyncThunk("post/postDataThunk", ({title, body}) => {
  return axios
    .post(`${baseUrl}`, { title, body })
    .then((res) => {
      return res.data;
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
    builder.addCase(postDataThunk.pending, (state, action) => {
      state.loading = true;
      state.status = "loading...";
      
    });
    builder.addCase(postDataThunk.fulfilled, (state, action) => {
      const { title, body } = action.payload;
      // state.post = action.payload;
      state.post.unshift(action.payload);
      

    });
    builder.addCase(postDataThunk.rejected, (state, action) => {
      state.loading = true;
      state.status = "failed";
    });
  },
});

export default postApiSlice;
