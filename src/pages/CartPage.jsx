function CartPage({ cart, updateQuantity, removeFromCart }) {
  // Calculate subtotal for an item
  const getSubtotal = (item) => {
    return item.price * item.quantity
  }

  // Calculate grand total for all items
  const getGrandTotal = () => {
    return cart.reduce((total, item) => total + getSubtotal(item), 0)
  }

  // If cart is empty, show empty state
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <a href="/shop" className="continue-shopping">Continue Shopping</a>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-quantity">
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="qty-btn"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="qty-btn"
              >
                +
              </button>
            </div>
            <div className="cart-item-subtotal">
              ${getSubtotal(item).toFixed(2)}
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <div className="grand-total">
          <strong>Total:</strong> ${getGrandTotal().toFixed(2)}
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default CartPage