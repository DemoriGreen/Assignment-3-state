import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <Link to={"/products/" + product.id}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <Link to={"/products/" + product.id}><h3>{product.name}</h3></Link>
        <p className="description">{product.description}</p>
        <div className="product-bottom">
          <span className="price">${product.price.toFixed(2)}</span>
          <button className="add-button" onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
