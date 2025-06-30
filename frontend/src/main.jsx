import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import Header from "./components/Header.jsx";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex flex-col justify-between min-h-screen text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-50 transition-colors duration-300">
        <AuthProvider>
          <Header />
          <App />
          <Footer />
        </AuthProvider>
      </div>
    </BrowserRouter>
  </StrictMode>
);
