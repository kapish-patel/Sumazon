import React from 'react';
import Crousel from "../common/crousel";
import { useSelector } from 'react-redux';

function Trending() {
  const products = useSelector(state => state.products.products);

  if (!products) {
    return <div>Loading...</div>;
  }

  const trendingProducts = products.filter(product => product.bestSeller === true).slice(0, 10);

  return (
    <div className="trending_container">
      <Crousel info={{ itemname: 'Trending', products: trendingProducts }} />
    </div>
  );
}

export default Trending;
