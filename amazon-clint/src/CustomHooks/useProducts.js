import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [products, setData];
};

export default useProducts;
