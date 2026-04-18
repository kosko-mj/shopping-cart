function CartPage({ cart, updateQuantity, removeFromCart }) {
  const getSubtotal = (item) => {
    return item.price * item.quantity
  }

  const getGrandTotal = () => {
    return cart.reduce((total, item) => total + getSubtotal(item), 0)
  }

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <a href="/shop" className="continue-shopping">Continue shopping</a>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>Your cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img 
              src={item.thumbnail || item.image || item.images?.[0]} 
              alt={item.title} 
              className="cart-item-image" 
              onError={(e) => {
                e.target.src = 'https://placehold.co/80x80?text=No+Image'
              }}
            />
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
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  )
}

export default CartPage