import ProductCard from "../ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={addToCart} />)}
      </div>
    </section>
  );
}

export default ProductsPage;
