import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useState, useEffect} from 'react'
import CartItem from './CartItem'
import './Cart.css'

function Cart() {
  // const dispatch = useDispatch();
  const cart = useSelector(state => state.products.productCart);
  const cartProducts = useSelector(state => state.products.products.filter(product => cart.includes(product.id)));

  // start working with changing the schema of cart make sure to add cart product quantity

  return (
    cart.length === 0 ? 
    <div className="empty-cart-container">
      <div className="empty-cart">
        <h1>Your cart is empty</h1>
      </div>
    </div> :

    <div>
      <div className="main-component">
        <div className="header">
          <h1>cart</h1>
        </div>
        <div className="content">
          {cartProducts.map(product => <CartItem key={product.id} product={product} />)}
        </div>
        <div className="footer-content">
          <div className="footer">
            <h3>Total: $100</h3>
            <div className="form-group">
            <button type="submit">
              Checkout 
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
