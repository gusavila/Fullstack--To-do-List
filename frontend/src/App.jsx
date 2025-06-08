import { Routes, Route } from "react-router-dom";
import TodoApp from "./pages/TodoApp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoApp />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
