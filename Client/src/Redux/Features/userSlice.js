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
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.currentUser = null;
      state.error = action.payload;
    },
    DeleteUserStart: (state) => {
      state.loading = true;
    },
    DeleteUserSuccess: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    DeleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signInsStart,
  signInFailure,
  signInSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  DeleteUserFailure,
  DeleteUserSuccess,
  DeleteUserStart,
} = userSLice.actions;
export default userSLice.reducer;
