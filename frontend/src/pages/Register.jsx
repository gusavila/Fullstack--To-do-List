import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../context/AuthContext.jsx";

const MotionLink = motion.create(Link);

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Digite um e-mail válido.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/register", {
        name,
        email,
        password,
      });

      const token = res.data.token;
      login(token);
      navigate("/todos");
    } catch (err) {
      console.error("Erro ao registrar:", err);
      const msg = err.response?.data?.error || "Erro ao registrar conta.";
      setError(msg);
    }
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      handleRegister();
    }
  };

  const handleEmail = async (event) => {
    const value = event.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.trim())) {
      setEmailError("Digite um e-mail válido.");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = async (event) => {
    const value = event.target.value;
    setPassword(value);

    if (value.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="flex items-center justify-center mt-14 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Crie a sua conta
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm text-gray-700">
            Nome
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Seu nome"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm text-gray-700">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmail}
            onKeyDown={handleKeyDown}
            placeholder="Seu email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-green-400"
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-1 text-sm text-gray-700"
          >
            Senha
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePassword}
            onKeyDown={handleKeyDown}
            placeholder="Crie uma senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-green-400"
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-sm mb-4 text-center">{success}</p>
        )}

        <motion.button
          onClick={handleRegister}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-green-600 focus:bg-green-600 border-radius-1 mb-2"
        >
          Cadastrar
        </motion.button>

        <MotionLink
          to="/"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="block text-center w-full px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-gray-200 focus:bg-gray-200"
        >
          Já possuí uma conta? Entrar
        </MotionLink>
      </div>
    </div>
  );
}

export default Register;
