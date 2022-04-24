import React, { useEffect, useState } from "react";
import { getLocalStorageId } from "../component/LocalStroge/LocalStroge";

// this is a custom hook this hook use find localstroge value and display show

const useCart = () => {
  const [cart, setCart] = useState([]);

  // localstroge data display show
  useEffect(() => {
    const storedCart = getLocalStorageId();
    console.log(storedCart);
    const savedCart = [];
    const keys = Object.keys(storedCart);

    fetch("http://localhost:5000/productByKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        for (let dataItem in storedCart) {
          const cartProduct = products.find((item) => item._id === dataItem);

          if (cartProduct) {
            // get localstroge product value
            const quantity = storedCart[dataItem];
            cartProduct.quantity = quantity;
            // console.log(cartProduct);
            savedCart.push(cartProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);

  return [cart, setCart];
};

export default useCart;
