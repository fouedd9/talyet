import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// 1. Importer les éléments nécessaires de TanStack Query

// 2. Créer une instance du QueryClient
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
