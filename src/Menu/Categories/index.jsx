import React from "react";

const Categories = ({ filterFood, categories }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          type="button"
          className="categoryBtn"
          key={index}
          onClick={() => filterFood(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
