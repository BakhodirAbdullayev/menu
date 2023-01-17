import React from "react";

const Foods = ({foodData}) => {
  return (
    <div className="foodWrapper">
      {foodData.map((food) => {
        const { id, title, price, img, desc, category } = food;
        return (
          <div className="food" key={id}>
            <div className="photo">
              <img src={img} alt={title} />
              <div className="foodCategory">{category}</div>
            </div>
            <div className="text">
              <div className="textHead">
                <span>{title}</span>
                <span>${price}</span>
              </div>
              <div className="textBody">{desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Foods;
