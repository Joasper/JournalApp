import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./auth/AuthSlice";
import { JournalSlice } from "./Journal/JournalSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    journal: JournalSlice.reducer,
  },
});
