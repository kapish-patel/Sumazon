import React from "react";
import { useNavigate } from "react-router-dom";
import Arrows from "./arrows";
import "./common.css";

function Crousel({ info }) {
    const { itemname, products } = info;
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className="crousel_component">
            <div className="crousel_top">
                <p>{itemname}</p>
                <Arrows />
            </div>
            <div className="crousel_bottom">
                <div className="crousel_cards">
                    {products && products.length > 0 ? (
                        products.map((product, index) => (
                            <div
                                className="crousel_card"
                                key={index}
                                onClick={() => {
                                    handleCardClick(product.id);
                                }}
                            >
                                <img src={product.image} alt={product.name} />
                                <div className="card_data">
                                    <p>{product.productName}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Crousel;
