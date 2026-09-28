import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://placehold.co/600x400/1e293b/ffffff?text=Headphones",
      description: "Premium noise-cancelling headphones with 30-hour battery life.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://placehold.co/600x400/2563eb/ffffff?text=Smart+Watch",
      description: "Fitness tracker with heart rate monitor and GPS.",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://placehold.co/600x400/7c3aed/ffffff?text=Speaker",
      description: "Portable waterproof speaker with 360-degree sound.",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://placehold.co/600x400/059669/ffffff?text=Laptop+Stand",
      description: "Ergonomic aluminum stand for laptops and tablets.",
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image: "https://placehold.co/600x400/d97706/ffffff?text=Webcam",
      description: "4K webcam with auto-focus and noise reduction.",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://placehold.co/600x400/dc2626/ffffff?text=Keyboard",
      description: "RGB backlit keyboard with custom switches.",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app">
      <Header cartCount={cart.length} />

      <main>
        <section className="hero">
          <h1>Welcome to ComponentCorner</h1>
          <p>
            Find useful tech products for your everyday life.
          </p>
        </section>

        <section className="products-section">
          <h2>Our Products</h2>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="cart-section">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
              <p>Add a product above to get started!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <CartItem
                    key={`${item.id}-${index}`}
                    item={item}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>

              <div className="cart-total">
                <span>Total:</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>
            </>
          )}
        </section>
      </main>

      <footer>
        <p>© 2026 ComponentCorner</p>
      </footer>
    </div>
  );
}

export default App;
