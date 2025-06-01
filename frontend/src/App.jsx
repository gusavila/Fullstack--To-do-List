import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "./pages/TodoApp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/todos" element={<TodoApp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
