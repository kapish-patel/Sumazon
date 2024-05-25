import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Card.css';

function Card({product}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.productName}</h2>
        <p className="card-description">{product.description}</p>
        <div className="bottom-container">
          <p className="card-price">${product.price}</p>
          <button className="card-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
