import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products`, {
          signal,
        });
        if (res.status !== 200) {
          throw new Error(`Something went wrong while fetching categories`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          alert(err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();

    return () => {
      controller.abort();
    };
  }, []);

  return [products, isLoading];
};

export default useFetchProducts;
