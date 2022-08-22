import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // loading: false,
  posts: [
      {idx: 1, title: 'title 1', body: 'body 1'},
      {idx: 2, title: 'title 1', body: 'body 1'},
      {idx: 3, title: 'title 1', body: 'body 1'},
      {idx: 4, title: 'title 1', body: 'body 1'},
    ]
}

const postSlice = createSlice({
  name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
  }
});


export default postSlice;