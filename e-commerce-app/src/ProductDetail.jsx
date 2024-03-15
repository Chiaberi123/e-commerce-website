// ProductDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  // Simulate fetching data for the selected product
  const getProductById = (id) => {
    // In a real scenario, this would be an API call
    return products.find((product) => product.id === parseInt(id));
  };

  const product = getProductById(productId);

  return (
    <div className="product-detail">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.name} />
        </>
      ) : (
        <p>Product not found</p>
      )}
      <Link to="/">Go back to Product List</Link>
    </div>
  );
};

export default ProductDetail;
