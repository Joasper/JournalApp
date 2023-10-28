import { ThemeContext, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import { PurpleTheme } from "./purple";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={PurpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
