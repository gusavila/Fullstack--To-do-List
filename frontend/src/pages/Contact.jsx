
import useContactForm from "../hooks/useContactForm.js";
import ContactTitle from "../components/contact/ContactTitle.jsx";
import Form from "../components/contact/Form.jsx";

function Contact() {
  const {
    formData,
    agreed,
    message,
    setAgreed,
    errors,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="isolate px-6 py-24 sm:py-8 lg:px-8 max-w-fit m-auto rounded-2xl p-6 shadow-xl ring-1 ring-gray-400/10 bg-white dark:bg-gray-700">
      <ContactTitle />

      <Form
        formData={formData}
        agreed={agreed}
        setAgreed={setAgreed}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {message && (
        <p
          className={`mt-6 absolute m-auto left-0 right-0 text-center text-xs font-medium px-3 py-1 rounded-lg max-w-fit mx-auto ${
            message.type === "success"
              ? "text-green-800 bg-green-100"
              : "text-red-800 bg-red-100"
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}

export default Contact;
