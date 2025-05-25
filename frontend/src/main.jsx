import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import Header from "./components/Header.jsx";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      <Header />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
