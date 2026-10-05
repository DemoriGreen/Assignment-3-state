import { Link, useParams } from "react-router-dom";

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) return <section className="cart-section"><h2>Product Not Found</h2><Link to="/products">Back to Products</Link></section>;

  return (
    <section className="products-section">
      <article className="product-card">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="description">{product.description}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <button className="add-button" onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to="/products">Back to Products</Link>
        </div>
      </article>
    </section>
  );
}

export default ProductDetailsPage;
