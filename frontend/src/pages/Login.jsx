import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

const MotionLink = motion.create(Link);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState({ error: "", success: "" });
  
  useEffect(() => {
  if (localStorage.getItem("token")) {
    navigate("/");
  }
}, []);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    setFeedback({ error: "", success: "" });

    if (!email || !password) {
      setFeedback({ error:"Preencha todos os campos." });
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      login(res.data.token);

      setFeedback({ success: "Login realizado com sucesso!" });
      navigate("/");
    } catch (err) {
      console.error(err);
      setFeedback({ error: "Email ou senha inválidos." });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="flex items-center justify-center mt-14 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Entre em sua conta
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-green-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Digite seu email"
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm text-gray-700">Senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-green-400"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Digite sua senha"
            onKeyDown={handleKeyDown}
          />
        </div>

        {feedback.error && (
          <p className="text-red-500 mb-4 text-sm text-center">{feedback.error}</p>
        )}
        {feedback.success && (
          <p className="text-green-500 mb-4 text-sm text-center">{feedback.success}</p>
        )}

        <motion.button
          onClick={handleLogin}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-green-600 focus:bg-green-600 border-radius-1 mb-2"
        >
          Entrar
        </motion.button>

        <MotionLink
          to="/register"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="block text-center w-full px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-gray-200 focus:bg-gray-200"
        >
          Criar uma conta
        </MotionLink>
      </div>
    </div>
  );
}

export default Login;
