import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:3000/register", {
        name,
        email,
        password,
      });

      setSuccess("Usuário cadastrado com sucesso! Faça login.");
      setError("");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setError("Erro ao registrar conta.");
      setSuccess("");
    }
  };

  return (
    <div className="flex items-center justify-center mt-14 bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Criar Conta</h2>

        

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Seu nome"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Seu email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm text-gray-700">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Crie uma senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-4 text-center">{success}</p>}

        <button
          onClick={handleRegister}
          className="w-full px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-500 transition cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-green-600 focus:bg-green-500 border-radius-1"
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Register;
