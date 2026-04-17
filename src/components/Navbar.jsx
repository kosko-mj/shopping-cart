import { Link } from 'react-router-dom'

function Navbar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">KOSKO Shop</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          Cart {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar