import { Field, Label, Switch } from "@headlessui/react";
import { motion } from "framer-motion";

function Form({
  formData,
  agreed,
  setAgreed,
  errors,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
        {["firstName", "lastName"].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-sm font-semibold">
              {field === "firstName" ? "Nome" : "Sobrenome"}
            </label>
            <div className="mt-2.5">
              <input
                id={field}
                name={field}
                type="text"
                value={formData[field]}
                autoComplete={
                  field === "firstName" ? "given-name" : "family-name"
                }
                placeholder={
                  field === "firstName" ? "Primeiro nome" : "Sobrenome"
                }
                onChange={handleChange}
                className="block w-full rounded-md bg-white dark:text-gray-600 px-3.5 py-2 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-500"
              />
            </div>
            {errors[field] && (
              <p className="absolute m-auto text-center pl-2 text-xs text-red-500 dark:text-red-400 mt-1">
                {errors[field]}
              </p>
            )}
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold">
            E-mail
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="email@example.com"
              autoComplete="email"
              onChange={handleChange}
              className="block w-full rounded-md bg-white dark:text-gray-600 px-3.5 py-2 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-500"
            />
            {errors.email && (
              <p className="absolute m-auto text-center pl-2 text-xs text-red-500 dark:text-red-400 mt-1">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="feedback" className="block text-sm font-semibold">
            Sua mensagem
          </label>
          <div className="mt-2.5">
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows={4}
              placeholder="Escreva sua opinião ou sugestão"
              className="block w-full rounded-md bg-white dark:text-gray-600 px-3.5 py-2 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-green-500"
            />
            {errors.feedback && (
              <p className="absolute m-auto text-center pl-2 text-xs text-red-500 dark:text-red-400 mt-1">
                {errors.feedback}
              </p>
            )}
          </div>
        </div>

        <Field className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={`group flex w-8 cursor-pointer rounded-full p-px transition-colors duration-200 ring-1 ring-inset ring-gray-900/5 ${
                agreed ? "bg-green-500" : "bg-gray-200"
              }`}
            >
              <span className="sr-only">Concordar com a política</span>
              <span
                aria-hidden="true"
                className={`size-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ${
                  agreed ? "translate-x-3.5" : "translate-x-0"
                }`}
              />
            </Switch>
          </div>
          <Label className="text-sm text-gray-600 dark:text-gray-300">
            Selecionando essa opção, você concorda com a nossa{" "}
            <a href="#" className="font-semibold text-green-600">
              política de privacidade
            </a>
            .
          </Label>
        </Field>
        {errors.policy && (
          <p className="text-sm text-red-500 sm:col-span-2">{errors.policy}</p>
        )}
      </div>

      <div className="mt-8">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm ${
            agreed
              ? "bg-green-500 hover:bg-green-600 focus:outline-green-500"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Enviar mensagem
        </motion.button>
      </div>
    </form>
  );
}

export default Form;
