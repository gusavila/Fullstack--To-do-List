// src/hooks/useContactForm.js
import { useState, useEffect } from "react";
import { sendUserFeedback } from "../services/api";

export default function useContactForm() {
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedback: "",
  });

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const validateForms = () => {
    const newErrors = {};
    if (formData.firstName.trim().length < 2)
      newErrors.firstName = "Nome muito curto.";
    if (formData.lastName.trim().length < 2)
      newErrors.lastName = "Sobrenome muito curto.";
    if (!formData.email.trim()) newErrors.email = "E-mail é obrigatório.";
    if (!formData.feedback.trim())
      newErrors.feedback = "Mensagem é obrigatória.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    if (!validateForms()) return;

    if (!agreed) {
      setMessage({
        type: "error",
        text: "Você precisa concordar com a política de privacidade.",
      });
      return;
    }

    try {
      await sendUserFeedback(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.feedback
      );

      setMessage({ type: "success", text: "Mensagem enviada com sucesso!" });
      setFormData({ firstName: "", lastName: "", email: "", feedback: "" });
      setAgreed(false);
      setErrors({});
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      setMessage({
        type: "error",
        text: "Erro ao enviar mensagem. Tente novamente mais tarde.",
      });
    }
  };

  return {
    formData,
    agreed,
    message,
    errors,
    setAgreed,
    handleChange,
    handleSubmit,
  };
}
