import { useState } from 'react'

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1)

  const increment = () => setQuantity(prev => prev + 1)
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    onAddToCart(product, quantity)
    setQuantity(1)
  }

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <div className="product-info">
        <div className="product-brand">NO IDEA</div>
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <div className="product-actions">
          <div className="quantity-controls">
            <button onClick={decrement} className="qty-btn">−</button>
            <span className="qty-value">{quantity}</span>
            <button onClick={increment} className="qty-btn">+</button>
          </div>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard