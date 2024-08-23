import React from "react";
import { createRoot } from "react-dom/client";
import MovieSearchPage from "./pages/MovieSearchPage";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<MovieSearchPage />);
} else {
  console.error("Root container is missing in the DOM.");
}
