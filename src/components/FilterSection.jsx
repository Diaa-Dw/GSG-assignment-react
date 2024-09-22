import useFetchCategories from "../hooks/useFetchCategories";

const FilterSection = ({ onCategoryChange }) => {
  const [categories] = useFetchCategories();
  return (
    <section className='filter-section'>
      <select className='category-filter' onChange={(e) => onCategoryChange(e)}>
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
