import { configureStore } from '@reduxjs/toolkit'
import postApiSlice from './postApi/postApiSlice';
import postSlice from './postSlice/getPostSlice'
import userSlice from './userSlice/getUserSlice'

const store = configureStore({
  reducer: {
    postStore: postSlice.reducer,
    userStore: userSlice.reducer,
    postApi: postApiSlice.reducer // initalState
  },
});

export default store;