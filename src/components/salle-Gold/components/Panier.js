import React, { useEffect, useState } from "react";
import "./Panier.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsFromCart } from "../../../Redux/actions/produit.actions";
import Modal from "../components/Modal";

const Panier = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.cart?.cartItems);
  const produit = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [produits, setProduits] = useState(produit);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, [produit]);
  const handleRemoveItem = async (product) => {
    try {
      const items = (await JSON.parse(localStorage.getItem("cartItems"))) || [];
      const newItems = items.filter((item) => item.product != product);
      setProduits(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    } catch (error) {
      console.error("Error parsing local storage data:", error);
      // Handle the error appropriately, e.g., set an error state
    }
  };

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="panier-container">
      <h1 className="panier-heading">Your Shopping Cart</h1>
      {produits.length === 0 ? (
        <div className="panier-empty">
          <h2>Your cart is empty</h2>
          <p>Please add some products to your cart.</p>
        </div>
      ) : (
        <div className="panier-content">
          {produits &&
            produits.map((product) => (
              <div key={product.id} className="panier-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="panier-item-image"
                />
                <div className="panier-item-details">
                  <h2 className="panier-item-name">{product.name}</h2>
                  <p className="panier-item-description">
                    {product.description}
                  </p>
                  <div className="panier-item-actions">
                    <div className="quantity-controls">
                      <button className="quantity-button">-</button>
                      <span className="quantity-value">{product.quantity}</span>
                      <button className="quantity-button">+</button>
                    </div>
                    <span className="panier-item-price">{`${product.price.toFixed(
                      2
                    )}DT`}</span>
                    <button
                      className="remove-button"
                      onClick={() => handleRemoveItem(product.product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
      <div className="panier-summary">
        <h2>Order Summary</h2>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>{`${produits
            .reduce(
              (total, product) => total + product.price * product.quantity,
              0
            )
            .toFixed(2)}DT`}</span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span>7.000DT</span>
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span>{`${produits
            .reduce(
              (total, product) => total + product.price * product.quantity,
              0
            )
            .toFixed(2)}DT`}</span>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
      <Modal
        showModal={showModal}
        handleClose={handleCloseModal}
        produits={produits}
      />
    </div>
  );
};

export default Panier;
