import React from "react";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/slice/productSlice";
import { addToCart, removeOneFromCart } from "../../Redux/slice/productSlice";
import "./Cart.css";

function CartItem({ product, quantity, subTotal }) {
    const dispatch = useDispatch();

    const handleRemoveFromCart = (e) => {
        e.stopPropagation();
        dispatch(removeFromCart(product.id));
    };

    const handleAddBtnClick = (e) => {
        e.stopPropagation();
        dispatch(addToCart(product.id));
    }

    const handMinusBtnClick = (e) => {
        e.stopPropagation();
        dispatch(removeOneFromCart(product.id));
    }

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
                        <div className="icon_container" onClick={handleAddBtnClick}>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div className="icon_container" onClick={handMinusBtnClick}>
                            <FontAwesomeIcon icon={faMinus} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
