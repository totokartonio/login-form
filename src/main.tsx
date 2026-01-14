import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const Root = () => {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Root />
    </AuthProvider>
  </StrictMode>
);
