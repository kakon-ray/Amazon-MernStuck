import React from "react";
import useCart from "../../CustomHooks/useCart";
import useProducts from "../../CustomHooks/useProducts";
import ShopSidebar from "../ShopSidebar/ShopSidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Order.css";
import {
  addLocalStrge,
  getLocalStorageId,
  removeLocalStrge,
} from "../LocalStroge/LocalStroge";
import { Link } from "react-router-dom";

const Order = () => {
  const [cart, setCart] = useCart();

  const handleRemove = (item) => {
    const rest = cart.filter((cartItem) => cartItem._id !== item._id);
    setCart(rest);
    removeLocalStrge(item._id);
  };

  const clearLocalDB = () => {
    localStorage.clear();
    setCart([]);
  };
  return (
    <div>
      <div className="product container">
        <div className="product-body">
          {cart.map((cartItem) => (
            <React.Fragment key={cartItem._id}>
              <div className="card">
                <img
                  src={cartItem.img}
                  alt="Avatar"
                  style={{ width: "100%", heigth: "100%" }}
                />
                <div className="container">
                  <h4>
                    <b>{cartItem.name}</b>
                  </h4>
                  <p>{cartItem.price}</p>
                  <p>This Item Number: {cartItem.quantity}</p>
                </div>
                <button
                  className="product-body-footer"
                  onClick={() => handleRemove(cartItem)}
                >
                  Remove To Cart{" "}
                  <FontAwesomeIcon className="icon" icon={faTrash} />
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="product-sidebar">
          <ShopSidebar cart={cart} clearLocalDB={clearLocalDB}>
            <Link to="/shiping">
              <button className="remove-order">
                Shipping Information{" "}
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </button>
            </Link>
          </ShopSidebar>
        </div>
      </div>
    </div>
  );
};

export default Order;
