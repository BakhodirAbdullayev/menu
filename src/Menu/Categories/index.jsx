import React from "react";

const Categories = ({ filterFood, categories, activeBtn }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          type="button"
          className={activeBtn === category ? 'categoryBtn activeBtn' : "categoryBtn"  }
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
