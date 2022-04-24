import React from "react";
import "./ShopSldebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useCart from "../../CustomHooks/useCart";
import useProducts from "../../CustomHooks/useProducts";

const ShopSidebar = (props) => {
  const [products, setData] = useProducts();
  const [cart, setCart] = useCart(products);

  //   console.log(cart);

  // array reduce mathod usegin totalprice in the props cart

  let totalPrice = 0;
  let totalShipingCarj = 0;
  let quantity = 0;
  for (const cartItem of props.cart) {
    totalPrice = totalPrice + cartItem.price * cartItem.quantity;
    quantity = quantity + cartItem.quantity;
    totalShipingCarj = totalShipingCarj + cartItem.shipping;
  }

  const totalText = (totalPrice * 10) / 100;
  const grandTotal = totalPrice + totalShipingCarj + totalText;

  return (
    <div className="cart-siderbar-design">
      <h1 className="Order">Order Summery</h1>
      <div className="order-body">
        <h3>Selected Items: {quantity}</h3>
        <h3>Total Price: ${totalPrice}</h3>
        <h3>Total Shipping Charge: ${totalShipingCarj}</h3>
        <h3>Tax: ${totalText}</h3>
        <h3>Grand Total: ${grandTotal}</h3>
      </div>
      <div>
        <button className="clear-cart" onClick={props.clearLocalDB}>
          Clear Cart <FontAwesomeIcon className="icon" icon={faTrash} />
        </button>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default ShopSidebar;
