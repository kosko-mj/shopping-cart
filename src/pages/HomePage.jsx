import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>NO IDEA</h1>
        <p className="hero-tagline">A curated collection of things we found</p>
        <p className="hero-description">
          We don't know what we're doing either. But we found some stuff we like, 
          and we thought you might too. No theme. No direction. Just objects.
        </p>
        <Link to="/shop" className="shop-link">See what we found →</Link>
      </div>
      
      {/* Editorial Image 1 */}
      <div className="editorial-image">
        <img src="/images/editorial-3.jpg" alt="Editorial" />
      </div>
      
      {/* Editorial Split - 2a and 2b side by side */}
      <div className="editorial-split">
        <div className="split-item">
          <img src="/images/editorial-2a.jpg" alt="Editorial" />
        </div>
        <div className="split-item">
          <img src="/images/editorial-2b.jpg" alt="Editorial" />
        </div>
      </div>
      
      {/* Editorial Image 3 - Full width */}
      <div className="editorial-image">
        <img src="/images/editorial-1.jpg" alt="Editorial" />
      </div>
    </div>
  )
}

export default HomePage