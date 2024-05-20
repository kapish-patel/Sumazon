import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../common/Card";
import { getProducts } from "../../Redux/slice/productSlice";
import "./Category.css";

function Category({ name }) {
const dispatch = useDispatch();
const products = useSelector((state) => state.products.products);
const [currentCategoryProducts, setCurrentCategoryProducts] = useState([]);
useEffect(() => {
    dispatch(getProducts());
}, [dispatch]);

  useEffect(() => {
    const categoryMapping = {
        clothing: ["Male Clothing & Accessories", "Female Clothing & Accessories"],
        sports: ["Sports & Fitness"],
        electronics: ["Electronics & Technology"],
        more: [
            "Kids & Toys",
            "Home & Lifestyle",
            "Pets & Animals",
            "Health & Wellness",
            "DIY & Industrial",
            "Automotive & Vehicle",
        ],
    };
    let filteredProducts;
    if (name === "bestSeller") {
      filteredProducts = products.filter((product) => product.bestSeller);
    } else {
      const categories = categoryMapping[name] || [name];
      filteredProducts = products.filter((product) =>
        categories.includes(product.category)
      );
    }
    setCurrentCategoryProducts(filteredProducts);
  }, [products, name]);

  return (
    <div className="main-component">
      <div className="cards-component">
        {currentCategoryProducts.map((product) => (
          <Card key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Category;