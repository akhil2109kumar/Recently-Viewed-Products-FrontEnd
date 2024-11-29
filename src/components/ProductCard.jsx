import { Link } from "react-router-dom";
import "../assets/style.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`} state={product} className="view-details">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;

