import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchResults from "../common/SearchResults";
import "../common/common.css";

function Tailing() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [showResults, setShowResults] = useState(false);
    const searchContainerRef = useRef(null);

    const handleCartClick = () => {
        navigate("/cart");
    };

    const handleProfileClick = () => {
        navigate("/profile");
    };

    const handleSearchClick = () => {
        setShowResults(true);
    };

    const handleOutsideClick = (event) => {
        if (
            searchContainerRef.current &&
            !searchContainerRef.current.contains(event.target)
        ) {
            setShowResults(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="tailing_component">
            {/* Search component */}
            <div className="search-search-result" ref={searchContainerRef}>
                <div className="search_container">
                    <div className="icon_container">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div className="search_bar_container">
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setShowResults(true);
                            }}
                            onClick={handleSearchClick}
                        />
                    </div>
                </div>
                {showResults && (
                    <div className="search_result_container">
                        {search && <SearchResults query={search} />}
                    </div>
                )}
            </div>
            {/* Cart component */}
            <div className="icon_container" onClick={handleCartClick}>
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>

            {/* User component */}
            <div className="icon_container" onClick={handleProfileClick}>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    );
}

export default Tailing;
