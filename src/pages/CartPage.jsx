import CartItem from "../CartItem";

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <section className="cart-section">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart"><p>Your cart is empty.</p><p>Add a product to get started!</p></div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => <CartItem key={item.id + "-" + index} item={item} onRemove={removeFromCart} />)}
          </div>
          <div className="cart-total"><span>Total:</span><strong>${cartTotal.toFixed(2)}</strong></div>
        </>
      )}
    </section>
  );
}

export default CartPage;
