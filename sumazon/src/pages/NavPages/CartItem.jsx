import React from 'react'
import './Cart.css'

function CartItem({product}) {
  return (
    <div className="cart-item-container">
        <div className="cart-item">
            <div className="cart-item-image">
            <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="cart-item-details">
            <h3>{product.name}</h3>
            <p>Product Price: ${product.price}</p>
            <p>Quantity: </p>
            </div>
            <div className="cart-item-details">
            <h3>Subtotal</h3>
            <p>50$</p>
            </div>
            <div className="cart-item-remove">
            <div className="form-group">
            <button type="submit">
                Remove
            </button>
          </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem
