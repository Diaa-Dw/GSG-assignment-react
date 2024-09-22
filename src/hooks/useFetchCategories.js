import { useEffect, useState } from "react";

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/categories`,
          { signal }
        );
        if (res.status !== 200) {
          throw new Error(`Something went wrong while fetching categories`);
        }
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          alert(err);
        }
      }
    };
    fetchCategories();

    return () => {
      controller.abort();
    };
  }, []);

  return [categories];
};

export default useFetchCategories;
