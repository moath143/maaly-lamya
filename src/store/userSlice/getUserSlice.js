import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {id: 1, name: 'name 1'},
        {id: 2, name: 'name 2'},
        {id: 3, name: 'name 3'},
    ],
    y: false,
    z: 'z',
    loading: 'loading',
    num: 5
}

const userSlice = createSlice({
  name: "users",
    initialState,
  reducers: {},
  extraReducers: (builder) => {}
});

export default userSlice;