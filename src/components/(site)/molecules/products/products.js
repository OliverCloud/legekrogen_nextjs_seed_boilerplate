"use client"
import { useEffect, useState } from 'react';
import ProductCard from './productCard/productCard';
import styles from './products.module.css';

const Products = ({ recomended }) => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = recomended ? products.filter(product => product.recommended) : products;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p>Et udpluk af vores</p>
          <p>LEGETØJ</p>
        </div>
        <div className={styles.products}>
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;