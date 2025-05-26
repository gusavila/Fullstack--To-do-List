import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      window.location.href = "/todos";
    } catch (err) {
      console.error(err);
      setError("Email ou senha inválidos.");
    }
  };

  return (
    <div className="flex items-center justify-center mt-14 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && (
          <p className="text-red-500 mb-4 text-sm text-center">{error}</p>
        )}

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm text-gray-700">Senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-green-400"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Digite sua senha"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-green-600 focus:bg-green-600 border-radius-1 mb-2"
        >
          Entrar
        </button>

        <a
          href="/register"
          className="block text-center w-full px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-gray-200 focus:bg-gray-200"
        >
          Criar conta
        </a>
      </div>
    </div>
  );
}

export default Login;
