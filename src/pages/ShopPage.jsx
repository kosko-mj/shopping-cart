import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function ShopPage({ onAddToCart }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchParams] = useSearchParams()
  const activeCategory = searchParams.get('category')
  
  // Only price filter (works with DummyJSON)
  const [selectedPrice, setSelectedPrice] = useState('')

  // Map sidebar categories to actual API categories
  const getApiCategory = (category) => {
    const mapping = {
      'furniture': 'furniture',
      'home-decoration': 'home-decoration',
      'kitchen-accessories': 'kitchen-accessories',
      'grooming': null,
      'new': null,
    }
    return mapping[category]
  }

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        let productsData = []
        
        // Handle grooming category (combine beauty + fragrances)
        if (activeCategory === 'grooming') {
          const [beautyRes, fragrancesRes] = await Promise.all([
            fetch('https://dummyjson.com/products/category/beauty'),
            fetch('https://dummyjson.com/products/category/fragrances')
          ])
          const beautyData = await beautyRes.json()
          const fragrancesData = await fragrancesRes.json()
          
          productsData = [
            ...(beautyData.products || beautyData),
            ...(fragrancesData.products || fragrancesData)
          ]
        } 
        // Handle new category (show newest products)
        else if (activeCategory === 'new') {
          const response = await fetch('https://dummyjson.com/products?limit=50')
          const data = await response.json()
          productsData = (data.products || data).sort((a, b) => b.id - a.id).slice(0, 12)
        }
        // Handle regular categories
        else {
          let url = 'https://dummyjson.com/products?limit=50'
          const apiCategory = getApiCategory(activeCategory)
          
          if (apiCategory) {
            url = `https://dummyjson.com/products/category/${apiCategory}`
          }
          
          const response = await fetch(url)
          if (!response.ok) throw new Error('Failed to fetch products')
          const data = await response.json()
          productsData = data.products || data
        }
        
        // Apply price filter
        if (selectedPrice) {
          const [min, max] = selectedPrice.split('-')
          productsData = productsData.filter(p => p.price >= parseInt(min) && p.price <= parseInt(max))
        }
        
        setProducts(productsData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [activeCategory, selectedPrice])

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="shop-page">
      {/* Simplified Filter Bar - Only Price */}
      <div className="filter-bar">
        <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
          <option value="">All Prices</option>
          <option value="0-50">Under $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-500">$200 - $500</option>
          <option value="500-1000">$500+</option>
        </select>
      </div>
      
      {/* Product Grid - 4 per row */}
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default ShopPage