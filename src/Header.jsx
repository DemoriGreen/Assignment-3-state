function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="logo">
        <span>Component</span>Corner
      </div>

      <nav>
        <a href="#products">Products</a>
        <a href="#cart">Cart</a>
      </nav>

      <div className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-badge">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;
