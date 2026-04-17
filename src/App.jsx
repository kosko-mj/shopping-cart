import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'

function App() {
  const [cart, setCart] = useState([])

  // Add item to cart
  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      
      if (existingItem) {
        // If item already in cart, increase quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        // Add new item
        return [...prevCart, { ...product, quantity }]
      }
    })
  }

  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // Remove item if quantity becomes 0
      setCart(prevCart => prevCart.filter(item => item.id !== productId))
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  // Calculate total items in cart (for Navbar badge)
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="app">
      <Navbar cartItemCount={cartItemCount} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/cart" element={
          <CartPage 
            cart={cart} 
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        } />
      </Routes>
    </div>
  )
}

export default App