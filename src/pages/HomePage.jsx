import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to KOSKO Shop</h1>
        <p>Your one-stop destination for quality products</p>
        <Link to="/shop" className="shop-now-btn">Shop Now →</Link>
      </div>
    </div>
  )
}

export default HomePage