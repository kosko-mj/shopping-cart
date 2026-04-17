import { useState } from 'react'

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1)

  const increment = () => setQuantity(prev => prev + 1)
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    onAddToCart(product, quantity)
    setQuantity(1) // Reset quantity after adding
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button onClick={decrement} className="qty-btn">-</button>
          <span className="qty-value">{quantity}</span>
          <button onClick={increment} className="qty-btn">+</button>
        </div>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard