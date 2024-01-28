import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSLice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInsStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.currentUser = null;
      state.error = action.payload;
    },
  },
});

export const { signInsStart, signInFailure, signInSuccess } = userSLice.actions;
export default userSLice.reducer;
