import React from "react";
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import category6 from "../assets/category6.png";
import category7 from "../assets/category7.png";
import category8 from "../assets/category8.png";

export default function Categories() {
  const categories = [
    {
      image: category1,
      title: "Fashion",
      describe: "290K Items",
    },
    {
      image: category2,
      title: "Headphone",
      describe: "3M Items",
    },
    {
      image: category3,
      title: "Laptop",
      describe: "1.2M Items",
    },
    {
      image: category4,
      title: "Music",
      describe: "751K Items",
    },
    {
      image: category5,
      title: "Photography",
      describe: "1.0M Items",
    },
    {
      image: category6,
      title: "Furniture",
      describe: "88K Items",
    },
    {
      image: category7,
      title: "Health",
      describe: "761K Items",
    },
    {
      image: category8,
      title: "Sports",
      describe: "2.9K Items",
    },
  ];
  return (
    <div id="categories" className="categories-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Categories</h2>
          <div className="categories">
            {categories.map(({ image, title, describe }, index) => {
              return (
                <div className="category" key={index}>
                  <img src={image} alt="category" />
                  <h4>{title}</h4>
                  <p>{describe}</p>
                </div>
              );
            })}
          </div>
          <button>Show All</button>
        </div>
      </div>
    </div>
  );
}
