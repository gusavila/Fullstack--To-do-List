import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    setMessage(null);

    if (!email || !password) {
      setMessage({ type: "error", text: "Preencha todos os campos." });
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      login(res.data.token);

      setMessage({ type: "success", text: "Login realizado com sucesso!" });
      navigate("/");
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Email ou senha inválidos." });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };
}

export default useLogin;
