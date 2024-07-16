// src/components/ProductList.js
import React from 'react';

const productlist = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <h2>{product.productName}</h2>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability}</p>
        </li>
      ))}
    </ul>
  );
};

export default productlist;
