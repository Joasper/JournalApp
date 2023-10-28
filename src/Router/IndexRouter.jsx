import React, { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthRoutes } from "../Auth/Routes/AuthRoutes";
import { JournalRouter } from "../Jounal/Routes/JournalRouter";
import { LoudingLayout } from "../UI/LoudingLayout";

import { PrivateRouter } from "./PrivateRouter";
import { useAuth } from "../Hooks/useAuth";

export const IndexRouter = () => {
  const { status } = useAuth();
  if (status === "Checking") {
    return <LoudingLayout />;
  }

  return (
    <PrivateRouter>
      {status === "Auth" ? (
        <Route path="/*" element={<JournalRouter />} />
      ) : (
        <Route path="auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </PrivateRouter>
  );
};
