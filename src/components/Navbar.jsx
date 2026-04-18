import { Link } from 'react-router-dom'

function Navbar({ cartItemCount, onMenuClick }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="hamburger-btn" onClick={onMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <div className="nav-center">
        <Link to="/" className="nav-brand">NO IDEA</Link>
      </div>
      
      <div className="nav-right">
        <button className="nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <button className="nav-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
        <Link to="/cart" className="cart-link">
          {/* Shopping Bag Icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar