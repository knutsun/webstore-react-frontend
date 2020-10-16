import React, { useState, useEffect } from "react";
import './product.css';


const url = "http://localhost:8080/products";

const Products = (props) => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "*",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const products = await response.json();
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);


    console.log(props);

    return (
      <div>
        <h2>Products</h2>
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h3>{product.name}</h3>
            <img src={product.image} alt=""/>
            <p>{product.description}</p>
            <h5>${product.price}</h5>
          </div>
        ))}
      </div>
    );
}

export default Products;
