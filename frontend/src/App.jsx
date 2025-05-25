import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "./pages/TodoApp";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todos" element={<TodoApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
