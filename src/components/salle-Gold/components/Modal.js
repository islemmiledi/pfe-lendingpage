import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ajoutOrdre } from "../../../Redux/actions/produit.actions";

const Modal = ({ showModal, handleClose, produits }) => {
  const dispatch = useDispatch();
  const salleId = localStorage.getItem("id");

  const [form, setForm] = useState({
    user: {
      nom: "",
      prénom: "",
      email: "",
      adrlivraison: "",
      numtl: "",
      salleId: salleId,
    },
    order: produits,
  });

  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      user: {
        ...prevForm.user,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Process form data
    dispatch(ajoutOrdre(form));
    localStorage.removeItem("cartItems");
    handleClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="bg-gray-800 px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg leading-6 font-medium text-white">
              Devis Form
            </h3>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              &times;
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={form.user.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nom:
            </label>
            <input
              type="text"
              name="nom"
              value={form.user.nom}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Prénom:
            </label>
            <input
              type="text"
              name="prénom"
              value={form.user.prénom}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Adresse de livraison:
            </label>
            <input
              type="text"
              name="adrlivraison"
              value={form.user.adrlivraison}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Numéro de Telephone:
            </label>
            <input
              type="text"
              name="numtl"
              value={form.user.numtl}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#e31c25] text-base font-medium text-white hover:bg-[#bf1620] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e31c25] sm:ml-3 sm:text-sm"
            >
              Submit
            </button>
            <button
              onClick={handleClose}
              type="button"
              className="w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:mt-0 sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
