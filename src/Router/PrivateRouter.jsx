import React from "react";
import { Routes } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  return <Routes>{children}</Routes>;
};
