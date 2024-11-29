import { useLocation } from "react-router-dom";
import "../assets/style.css";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state;

  return (
    <div className="product-detail">
      <div className="image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
