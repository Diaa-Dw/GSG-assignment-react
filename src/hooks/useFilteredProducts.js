import { useEffect, useState } from "react";

const useFilteredProducts = (products, selectedCategory) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);
  return [filteredProducts];
};

export default useFilteredProducts;
