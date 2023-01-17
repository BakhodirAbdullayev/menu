import React, { useState } from "react";
import "./Menu.scss";
import { data } from "./data";
import Categories from "./Categories";
import Foods from "./Foods";

const allCategories = ["all", ...new Set(data.map((i) => i.category))];

const Menu = () => {
  const [foodData, setFoodData] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterFood = (category) => {
    if (category === "all") {
      setFoodData(data);
      return;
    }
    const newFoodData = data.filter((item) => item.category === category);
    setFoodData(newFoodData);
  };

  return (
    <div className="container">
      <div className="heading">our menu</div>

      <Categories filterFood={filterFood} categories={categories} />
      <Foods foodData={foodData} />
    </div>
  );
};

export default Menu;
