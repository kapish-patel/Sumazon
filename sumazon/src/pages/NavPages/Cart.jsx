import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { checkoutCart } from '../../Redux/slice/productSlice'
import CartItem from './CartItem'
import './Cart.css'

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.products.productCart);
  const products = useSelector(state => state.products.products);
  const customer = useSelector((state) => state.customer.customerDetails);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartProducts = products.filter(product => cart[product.id]);
    const newTotal = cartProducts.reduce((accum, product) => {
      return accum + (cart[product.id] * product.price);
    }, 0);
    setTotal(newTotal);
  }, [cart, products]);


  const handleCheckoutBtnClick = () => {
    console.log('Checkout button clicked');
    dispatch(checkoutCart(customer.id));
    // redirect to confirmation page
  }

  const cartProducts = products.filter(product => cart[product.id]);

  return (
    Object.keys(cart).length === 0 ? 
    <div className="empty-cart-container">
      <div className="empty-cart">
        <h1>Your cart is empty</h1>
      </div>
    </div> :
    <div>
      <div className="main-component">
        <div className="cart-component">
          <div className="header">
            <h1>cart</h1>
          </div>
          <div className="content">
            {cartProducts.map(product => (
              <CartItem 
                key={product.id} 
                product={product} 
                quantity={cart[product.id]} 
                subTotal={cart[product.id] * product.price} 
              />
            ))}
          </div>
          <div className="footer-content">
            <div className="footer">
              <h3>Total: ${total.toFixed(2)}</h3>
              <div className="form-group">
                <button type="submit"
                  onClick={handleCheckoutBtnClick}
                >
                  Checkout / Pay 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
