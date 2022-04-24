import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const ShopCard = ({ addToCart, item, price, name, img, category, seller }) => {
  return (
    <>
      <div className="flex-col">
        <div className="img-container">
          <img src={img} alt="" className="img" />
        </div>
        <div className="header-area">
          <h4>{name}</h4>
          <p className="price">Price: {price}</p>
        </div>

        <div className="footer-area">
          <p>{category}</p>
          <p>{seller}</p>
        </div>
        <div>
          <button
            className="product-body-footer"
            onClick={() => addToCart(item)}
          >
            Add to Cart
            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
