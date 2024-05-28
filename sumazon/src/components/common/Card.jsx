import React from 'react';
import {useNavigate} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {addToCart} from '../../Redux/slice/productSlice';
import {useDispatch, useSelector} from 'react-redux';
import './Card.css';

function Card({product}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customer = useSelector((state) => state.customer.customerDetails);
  const currentCart = useSelector((state) => state.products.productCart);

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddtoCartClick = (e) => {
    e.stopPropagation();
    dispatch(
        addToCart({
            id: product.id,
            customer_id: customer.id,
            quantity: currentCart[product.id] ? currentCart[product.id] + 1 : 1,
        })
    );
};

  if (product.quantity === 0) {
    return (
      <div className="card">
        <img src={product.image} alt={product.name} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{product.productName}</h2>
          <p className="card-description">{product.description}</p>
          <div className="bottom-container">
            <p className="card-price">${product.price}</p>
            <div className="form-group">
              <button disabled>
                <ShoppingCartIcon /> Out of stock
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.productName}</h2>
        <p className="card-description">{product.description}</p>
        <div className="bottom-container">
          <p className="card-price">${product.price}</p>
          <div className="form-group" onClick={handleAddtoCartClick}>
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
