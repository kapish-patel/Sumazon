import "./Product.css";
import Rating from "@mui/material/Rating";
import { CheckCircleOutline } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
    setCurrentProduct,
    addToCart,
    removeFromCart,
} from "../../Redux/slice/productSlice";

import { useState } from "react";

function Product() {
    const { id } = useParams();
    const dispatch = useDispatch();

    // Fetch product from Redux state
    const product = useSelector((state) =>
        state.products.products.find((product) => product.id === id)
    );

    // get user info
    const customer = useSelector((state) => state.customer.customerDetails);

    // get the cart from the redux state
    const cart = useSelector((state) => state.products.productCart);

    // Set current product in Redux state
    dispatch(setCurrentProduct(product));

    // Retrieve current product from Redux state
    const currentProduct = useSelector(
        (state) => state.products.currentSelectedProduct
    );

    const currentCart = useSelector((state) => state.products.productCart);

    // Check if product is already in cart where cart is a map of product id and quantity
    const isProductInCart = cart[id] ? true : false;

    const [isAddedToCart, setIsAddedToCart] = useState(isProductInCart);

    const handleAddtoCartClick = () => {
        dispatch(
            addToCart({
                id: id,
                customer_id: customer.id,
                quantity: currentCart[id] ? currentCart[id] + 1 : 1,
            })
        );
        setIsAddedToCart(true);
    };

    const handleRemoveFromCart = () => {
        console.log("Removing from cart", id);
        dispatch(
            removeFromCart({
                id: id,
                customer_id: customer.id,
            })
        );
        setIsAddedToCart(false);
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
            setIsAddedToCart(false);
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
        <div className="main-component">
            <div className="product-page-component">
                <div className="product-image">
                    <img src={currentProduct.image} alt="product" />
                </div>
                <div className="product-details">
                    {currentProduct.bestSeller && (
                        <div className="best-seller">
                            <CheckCircleOutline style={{ color: "green" }} />{" "}
                            Best Seller
                        </div>
                    )}
                    <div className="product-name">
                        <p id="productName">{currentProduct.productName}</p>
                        <p id="productCategory">{currentProduct.category}</p>
                    </div>
                    <div className="product-price-ratings">
                        <p id="productPrice">${currentProduct.price}</p>
                        <Rating
                            name="read-only"
                            value={currentProduct.ratings}
                            readOnly
                        />
                    </div>
                    <div className="product-description">
                        <p>{currentProduct.description}</p>
                        {isAddedToCart ? (
                            <>
                                <p className="added-to-cart">
                                    Added to Cart {cart[id]}
                                </p>
                                <div className="quantity-change-component">
                                    <div
                                        className="icon_container"
                                        onClick={handleAddBtnClick}
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
                            </>
                        ) : null}
                    </div>

                    <div className="form-group cart-form">
                        <button type="submit" onClick={handleAddtoCartClick}>
                            <ShoppingCartIcon /> Add to Cart
                        </button>
                        {isAddedToCart ? (
                            // remove button after adding to cart
                            <button
                                type="submit"
                                className="remove-button"
                                onClick={handleRemoveFromCart}
                            >
                                <RemoveShoppingCartIcon />
                                Remove from Cart
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
