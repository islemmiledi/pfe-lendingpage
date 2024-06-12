import React, { useEffect, useState } from "react";
import "./Produit.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemsToCart,
  getAllProduits,
} from "../../../Redux/actions/produit.actions";
import { getOneSalleById } from "../../../Redux/actions/salle.actions";

const Produit = ({ produit }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  /**incrementer le compteur */
  const increaseQuantity = () => {
    const qty = quantity + 1;
    setQuantity(qty);
  };

  /**decrementer le compteur */
  const decreaseQuantity = () => {
    /**Stop decrement to 1  */
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };
  const handleAddToCart = () => {
    dispatch(addItemsToCart({ id: produit.id, quantity }));
  };
  return (
    <div className="produit-card">
      <h2 className="produit-card-title">Order Item</h2>
      <div className="produit-card-content">
        <img
          src={produit.file}
          alt={produit.Nomproduit}
          className="produit-card-image"
        />
        <div className="produit-card-info">
          <div className="produit-card-header">
            <h3 className="produit-card-name">{produit.Nomproduit}</h3>
            <span className="produit-card-price">{`${produit.Prix}DT`}</span>
          </div>
          <div className="produit-card-details">
            <p>
              Description: <span className="detail">{produit.Description}</span>
            </p>
          </div>
          <div className="produit-card-actions">
            <div className="quantity">
              <button className="quantity-button" onClick={decreaseQuantity}>
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-button" onClick={increaseQuantity}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const salleId = localStorage.getItem("id");
  const products = useSelector((state) => state?.salle?.salle?.data?.produits);

  useEffect(() => {
    dispatch(getOneSalleById({ id: salleId }));
  }, [dispatch, salleId]);

  return (
    <div className="Apps">
      <h1 className="products-heading">
        Explore Our Exclusive Collection and Place Your Order Today!
      </h1>
      <div className="products-container">
        {products &&
          products.map((produit) => (
            <Produit key={produit.id} produit={produit} />
          ))}
      </div>
    </div>
  );
};

export default App;
