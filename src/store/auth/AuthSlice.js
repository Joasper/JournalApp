import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "Auth",
  //declaracion del estado inicial de las variables
  initialState: {
    status: "Not-Auth",
    uid: null,
    email: null,
    phtoURL: null,
    DiplayName: null,
    errorMessage: null,
  },

  reducers: {
    Login: (state, { payload }) => {
      (state.status = "Auth"),
        (state.uid = payload.uid),
        (state.email = payload.email),
        (state.phtoURL = payload.photoURL),
        (state.DiplayName = payload.displayName),
        (state.errorMessage = null);
    },
    Logout: (state, action) => {
      (state.status = "Not-Auth"),
        (state.uid = null),
        (state.email = null),
        (state.phtoURL = null),
        (state.DiplayName = null),
        (state.errorMessage = action.payload?.errorMessage);
    },
    CheckingCredentials: (state, payload) => {
      state.status = "Checking";
    },
  },
});

export const { Login, Logout, CheckingCredentials } = AuthSlice.actions;
