import React from "react";
import recommend1 from "../assets/recommend1.jpg";
import recommend2 from "../assets/recommend2.jpg";
import recommend3 from "../assets/recommend3.jpeg";
import recommend4 from "../assets/recommend4.jpg";

export default function Recommend() {
  const data = [
    {
      image: recommend1,
      text: "The best Anti Aging Cream with Cheap price",
    },
    {
      image: recommend2,
      text: "Best budget Headphone for RPG Gamers",
    },
    {
      image: recommend3,
      text: "Have a much project? You must have this Savage Laptop",
    },
    {
      image: recommend4,
      text: "Bored work from home. You can make juice for your health",
    },
  ];
  return (
    <div id="Recommend" className="recommend-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Recommend for You</h2>
        </div>
        <div className="recommend">
          {data.map(({ image, text }, index) => {
            return (
              <div className="category" key={index}>
                <img src={image} alt="recommend" />
                <h4>{text}</h4>
              </div>
            );
          })}
        </div>
        <button>Show All</button>
      </div>
    </div>
  );
}
