import React from "react";
import { IndexRouter } from "./Router/IndexRouter";
import { AppTheme } from "./Theme/AppTheme";

export const JounalApp = () => {
  return (
    <AppTheme>
      <IndexRouter />
    </AppTheme>
  );
};
