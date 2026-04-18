import { Link } from 'react-router-dom'

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={onClose}>×</button>
        <nav className="sidebar-nav">
          <Link to="/shop?category=new" onClick={onClose}>New</Link>
          <Link to="/shop?category=furniture" onClick={onClose}>Furniture</Link>
          <Link to="/shop?category=home-decoration" onClick={onClose}>Home Decor</Link>
          <Link to="/shop?category=kitchen-accessories" onClick={onClose}>Kitchen</Link>
          <Link to="/shop?category=grooming" onClick={onClose}>Grooming</Link>
        </nav>
      </div>
    </>
  )
}

export default Sidebar