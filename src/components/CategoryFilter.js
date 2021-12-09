import React from "react";

function CategoryFilter({ categories, onFilterButtonClick, selectedCategory }) {

  const filterButtons = categories.map((item) => {
    const selectedClass = item === selectedCategory ? "selected" : null;
      return <button key={item} onClick={() => onFilterButtonClick(item)} name={item} className={selectedClass}>{item}</button>
    });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {filterButtons}
    </div>
  );
}

export default CategoryFilter;
