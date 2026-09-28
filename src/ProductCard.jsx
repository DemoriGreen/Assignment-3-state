function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="description">
          {product.description}
        </p>

        <div className="product-bottom">
          <span className="price">
            ${product.price.toFixed(2)}
          </span>

          <button
            className="add-button"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
