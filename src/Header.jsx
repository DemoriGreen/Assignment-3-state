import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header className="header">
      <Link to="/" className="logo"><span>Component</span>Corner</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Link to="/cart" className="cart-container" aria-label="Shopping cart">
        <span className="cart-icon">🛒</span>
        <span className="cart-badge">{cartCount}</span>
      </Link>
    </header>
  );
}

export default Header;
