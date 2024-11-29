import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from Fakestore API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/users/recentlyViewed/0xAmkeMwPgJ6XyaRez1q");
        const data = await response.json();
        console.log('data',data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="image-container">
            <img src={product.image} alt={product.title} className="product-image" />
          </div>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`} state={product} className="view-details">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
