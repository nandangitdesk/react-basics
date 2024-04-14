import axios from "../components/axios";
import React, { useEffect, useState } from "react";

const Show = () => {
  const [products, setProduct] = useState([]);

  const getProducts = () => {
    // const Api = "https://fakestoreapi.com/products";

    axios
      .get("/products")
      .then((products) => {
        console.log(products);
        setProduct(products.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(products);

  useEffect(() => {
    getProducts();
  });

  return (
    <>
      <hr className="mt-4" />

      <ul>
        {products.length > 0 ? (
          products.map((p, index) => (
            <li
              key={index}
              className="mb-2 px-4 py-2 bg-zinc-400 text-black rounded-md text-xs"
            >
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;

{
  /* <button
onClick={getProducts}
className="px-5 py-2 bg-slate-500 text-white rounded-md text-xs mr-7"
>
Get All Products
</button> */
}
