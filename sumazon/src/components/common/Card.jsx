import React from 'react';
import {useNavigate} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {addToCart} from '../../Redux/slice/productSlice';
import {useDispatch} from 'react-redux';
import './Card.css';

function Card({product}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddtoCartBtnClick = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product.id));
  }

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.productName}</h2>
        <p className="card-description">{product.description}</p>
        <div className="bottom-container">
          <p className="card-price">${product.price}</p>
          <div className="form-group" onClick={handleAddtoCartBtnClick}>
            <button>
              <ShoppingCartIcon /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
