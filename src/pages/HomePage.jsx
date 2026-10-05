import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="hero">
      <h1>Welcome to ComponentCorner</h1>
      <p>Find useful tech products for your everyday life.</p>
      <p>Why shop with us? We make it easy to find simple and useful technology in one place.</p>
      <Link className="add-button" to="/products">Shop Products</Link>
    </section>
  );
}

export default HomePage;
