import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen bg-gray-100">
      <Header />
      <App />
    </div>
  </StrictMode>
);
