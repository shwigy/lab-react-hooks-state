import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import darkStyles from './styles/DarkMode.module.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div className={`app ${darkMode ? darkStyles.dark : ''}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome in! Shop for your favorite (definitely real) products!
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />

      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} onAddToCart={handleAddToCart} darkMode={darkMode} />

      <Cart items={cartItems} />
    </div>
  )
}

export default App
