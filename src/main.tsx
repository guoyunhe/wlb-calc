import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import "./i18n";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <MantineProvider defaultColorScheme="auto">
        <App />
      </MantineProvider>
    </HelmetProvider>
  </StrictMode>,
);
