import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import { sendUserFeedback } from "../services/api.js";
import { motion } from "framer-motion";

function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedback: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await sendUserFeedback(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.feedback,
      );
      setMessage("Mensagem enviada.");
      setFormData("");
      console.log(res.data);
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      setMessage("Erro ao enviar mensagem.");
    }
  };

  return (
    <div className="isolate px-6 py-24 text-gray-700 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Me envie uma mensagem
        </h2>
        <p className="mt-2 text-lg/8 text-gray-500">
          Quero ouvir o seu feedback e sujestões! 😀
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm/6 font-semibold"
            >
              Nome
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                autoComplete="given-name"
                placeholder="Primeiro nome"
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm/6 font-semibold">
              Sobrenome
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                autoComplete="family-name"
                placeholder="Sobrenome"
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold">
              E-mail
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                autoComplete="email"
                placeholder="email@example.com"
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="feedback"
              className="block text-sm/6 font-semibold "
            >
              Sua mensagem
            </label>
            <div className="mt-2.5">
              <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                rows={4}
                placeholder="Escreva a sua opnião e sugestões"
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500"
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 data-checked:bg-green-500"
              >
                <span className="sr-only">Concordar com a politica</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              Selecionando essa opção, você concordo com o nossa{" "}
              <a href="#" className="font-semibold text-green-600">
                política&nbsp;de&nbsp;privacidade
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className={`block w-full rounded-md bg-gray-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs ${
              agreed &&
              "bg-green-500 hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            }`}
          >
            Enviar a mensagem
          </motion.button>
        </div>
      </form>

      {message && <p className="text-white bg-gray-700 mb-4 max-w-40 text-sm m-auto p-0.5 rounded text-center mt-4">{message}</p>}
    </div>
  );
}

export default Contact;
