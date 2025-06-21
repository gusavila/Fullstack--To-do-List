 function ValidateForms() {
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

export default ValidateForms;