import React from "react";

const addLocalStrge = (id) => {
  let shopingCart = {};

  // get and check valu localstroge i
  const storedCart = localStorage.getItem("Shoping-Cart");
  if (storedCart) {
    shopingCart = JSON.parse(storedCart);
  }

  //if old product leave then add new quentity
  const quentity = shopingCart[id];
  if (quentity) {
    const newQuentity = quentity + 1;
    shopingCart[id] = newQuentity;
    // localStorage.setItem(id, newQuentity);
  }
  // if old old product is not abeable then add id localstroge and add value 1
  else {
    shopingCart[id] = 1;
  }
  localStorage.setItem("Shoping-Cart", JSON.stringify(shopingCart));
};

const getLocalStorageId = () => {
  let shopingCart = {};

  // get and check valu localstroge i
  const storedCart = localStorage.getItem("Shoping-Cart");
  if (storedCart) {
    shopingCart = JSON.parse(storedCart);
  }

  return shopingCart;
};

const removeLocalStrge = (id) => {
  // get and check valu localstroge i
  const storedCart = localStorage.getItem("Shoping-Cart");
  if (storedCart) {
    const shopingCart = JSON.parse(storedCart);
    if (id in shopingCart) {
      delete shopingCart[id];
      localStorage.setItem("Shoping-Cart", JSON.stringify(shopingCart));
    } else {
      console.log("Do not Value Shoping cart");
    }
  }
};

const totalProductPrice = (product) => {
  const totalPrice = product.reduce(
    (totalPrice, currentPrice) => totalPrice + Math.round(currentPrice.price),
    0
  );

  return totalPrice;
};

export {
  addLocalStrge,
  getLocalStorageId,
  removeLocalStrge,
  totalProductPrice as getTotal,
};
