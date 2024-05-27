import React from "react";
import { useNavigate } from "react-router-dom";
import "./common.css"; // Ensure your CSS file path is correct
import { useSelector } from "react-redux";

const SearchResults = ({ query }) => {
    const navigate = useNavigate();
    // Mock data for demonstration; in a real application, you might fetch this from an API
    const products = useSelector((state) => state.products.products);

    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
        product.productName.toLowerCase().includes(query.toLowerCase())
    );

    const handleSearchResultClick = (id) => {   
        navigate(`/product/${id}`);
    }

    return (
        <div className="search-result-container">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div key={product.id} className="search_result_card" onClick={() => {handleSearchResultClick(product.id)}}>
                        <p>{product.productName}</p>
                    </div>
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
        // <>
        //   {filteredProducts.length > 0 ? (
        //     filteredProducts.map(product => (
        //       <div key={product.id} className="search_result_card">
        //         <img src={product.image} alt={product.name} />
        //         <p>{product.name}</p>
        //       </div>
        //     ))
        //   ) : (
        //     <p>No results found</p>
        //   )}
        // </>
    );
};

export default SearchResults;
