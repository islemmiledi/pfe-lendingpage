import React, { useState } from "react";
import ContactDetails from "./contactdetails"; // Assurez-vous que le chemin est correct

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gérer la soumission du formulaire ici
    console.log(formData);
  };

  return (
    <div className="bg-black text-white p-8">
      <h2 className="text-white font-bold text-3xl mb-4 text-center">
        CONTACTER NOUS
      </h2>
      <p className="text-gray-400 text-center mb-8">
        If you have any questions, just fill in the contact form, and we will
        answer you shortly.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
              id="email"
              type="email"
              placeholder="Entrer un email valid "
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700"
              id="name"
              type="text"
              placeholder="Entrer Votre Nom"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              htmlFor="address"
            >
              Adresse
            </label>
            <input
              className="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
              id="address"
              type="text"
              placeholder="Entrer Votre adresse"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-800 text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
              id="message"
              placeholder="Entrer Votre message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3 text-center">
            <button
              className="shadow bg-red-600 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      {/* <ContactDetails /> */}
      <ContactForm />
    </div>
  );
};

export default Main;
