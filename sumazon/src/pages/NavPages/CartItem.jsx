import React from "react";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/slice/productSlice";
import { useSelector } from "react-redux";
import { addToCart, removeOneFromCart } from "../../Redux/slice/productSlice";
import "./Cart.css";

function CartItem({ product, quantity, subTotal }) {
    const dispatch = useDispatch();

    const currentCart = useSelector((state) => state.products.productCart);

    const customer = useSelector((state) => state.customer.customerDetails);

    const id = product.id;

    const handleRemoveFromCart = () => {
        console.log("Removing from cart", id);
        dispatch(
            removeFromCart({
                id: id,
                customer_id: customer.id,
            })
        );
    };

    const handleAddBtnClick = (e) => {
        e.stopPropagation();
        dispatch(
            addToCart({
                id: id,
                customer_id: customer.id,
                quantity: currentCart[id] ? currentCart[id] + 1 : 1,
            })
        );
    };

    const handMinusBtnClick = (e) => {
        e.stopPropagation();
        if (currentCart[id] === 1) {
            dispatch(
                removeFromCart({
                    id: id,
                    customer_id: customer.id,
                })
            );
            return;
        }
        dispatch(
            addToCart({
                id: id,
                customer_id: customer.id,
                quantity: currentCart[id] ? currentCart[id] - 1 : 1,
            })
        );
    };

    return (
        <div className="cart-item-container">
            <div className="cart-item">
                <div className="cart-item-image">
                    <img src={product.image} alt="product" />
                </div>
                <div className="cart-item-details">
                    <h3>{product.productName}</h3>
                    <p>Product Price: ${product.price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="cart-item-details">
                    <h3>Subtotal</h3>
                    <p>${subTotal}</p>
                </div>
                <div className="cart-item-remove">
                    <div className="form-group">
                        <button
                            type="submit"
                            className="remove-button"
                            onClick={handleRemoveFromCart}
                        >
                            <RemoveShoppingCartIcon />
                            Remove from Cart
                        </button>
                    </div>
                    <div className="quantity-change-component">
                        <div
                            className="icon_container"
                            onClick={handleAddBtnClick}
                            style={{
                                display: currentCart[id] >= product.quantity ? 'none' : 'flex'
                            }}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div
                            className="icon_container"
                            onClick={handMinusBtnClick}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
