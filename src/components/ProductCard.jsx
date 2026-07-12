import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart, darkMode }) => {
  return (
    <div
      className={[
        styles.card,
        !product.inStock ? styles.outOfStock : '',
        darkMode ? styles.dark : ''
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <button data-testid={'product-' + product.id} onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
