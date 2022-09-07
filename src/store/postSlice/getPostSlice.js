import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // loading: false,
  posts: [
    // {idx: 1, title: 'title 1', body: 'body 1'},
    // {idx: 2, title: 'title 1', body: 'body 1'},
    // {idx: 3, title: 'title 1', body: 'body 1'},
    // {idx: 4, title: 'title 1', body: 'body 1'},
  ],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload)
      localStorage.setItem("maaly", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {},
});

export const { addPost } = postSlice.actions;

export default postSlice;
