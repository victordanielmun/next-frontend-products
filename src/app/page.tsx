import React from "react";
import { deleteProduct, getProducts } from "./products/product.api";

import ProductCard from "./components/ProductCard";

const HomePage = async () => {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {products.map((product: any) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default HomePage;
