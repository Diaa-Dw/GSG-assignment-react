import { useEffect, useState } from "react";
import "./App.css";
import FilterSection from "./components/FilterSection";
import Header from "./components/Header";
import useFetchProducts from "./hooks/useFetchProducts";
import ProductContainer from "./components/ProductContainer";
import useFilteredProducts from "./hooks/useFilteredProducts";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, isLoading] = useFetchProducts();
  const [filteredProducts] = useFilteredProducts(products, selectedCategory);

  const onCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div className='app'>
      <Header />
      <FilterSection onCategoryChange={onCategoryChange} />
      <ProductContainer products={filteredProducts} isLoading={isLoading} />
    </div>
  );
}

export default App;
