import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { JounalApp } from "../../JounalApp";
import { JournalPage } from "../Pages/JournalPage";

export const JournalRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<JournalPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
