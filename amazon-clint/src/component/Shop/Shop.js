/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../CustomHooks/useCart";
import useProducts from "../../CustomHooks/useProducts";
import { addLocalStrge, getLocalStorageId } from "../LocalStroge/LocalStroge";
import ShopSidebar from "../ShopSidebar/ShopSidebar";
import "./Shop.css";
import ShopCard from "./ShopCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setData] = useState([]);
  const [cart, setCart] = useCart();

  // pagination state
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);

  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [page, size]);

  useEffect(() => {
    fetch("http://localhost:5000/productcount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  const addToCart = (item) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === item._id);

    if (!exists) {
      item.quantity = 1;
      newCart = [...cart, item];
      // console.log(newCart);
    } else {
      const rest = cart.filter((product) => product._id !== item._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
      // console.log(newCart);
    }

    setCart(newCart);
    // console.log(cart);
    addLocalStrge(item._id);
  };
  const clearLocalDB = () => {
    localStorage.clear();
    setCart([]);
  };
  return (
    <div>
      <div className="product container shop-container">
        <div className="product-body">
          {products.map((item) => {
            return (
              <ShopCard
                key={item._id}
                img={item.img}
                name={item.name}
                category={item.category}
                seller={item.seller}
                price={item.price}
                item={item}
                addToCart={addToCart}
              />
            );
          })}
        </div>

        <div className="product-sidebar">
          <ShopSidebar cart={cart} clearLocalDB={clearLocalDB}>
            <Link to="/order">
              <button className="remove-order">
                Reviw Order{" "}
                <FontAwesomeIcon className="icon" icon={faArrowRight} />
              </button>
            </Link>
          </ShopSidebar>
        </div>

        {/* start pagination */}

        <div className="pagination">
          <h1>Start Pagination</h1>
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={`${page === number ? "selected" : ""}`}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}

          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="9" selected>
              9
            </option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      {/* end pagination code */}
    </div>
  );
};

export default Shop;
