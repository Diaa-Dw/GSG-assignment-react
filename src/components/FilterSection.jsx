import React, { useEffect, useState } from "react";

const FilterSection = () => {
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
  return (
    <section class='filter-section'>
      <select class='category-filter'>
        <option value='all'>All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {capitalizeFirstLetter(category)}
          </option>
        ))}
      </select>
    </section>
  );
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default FilterSection;
