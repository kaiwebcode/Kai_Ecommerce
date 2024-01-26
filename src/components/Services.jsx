import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Service1 from "../assets/service1.png";
import Service2 from "../assets/service2.png";
import Service3 from "../assets/service3.png";
import Service4 from "../assets/service4.png";

const Services = () => {
  return (
    <div id="Service" className="services-container mx-3 py-3">
      <div className="container">
        <div className="service one">
          <p>Weekly Deals</p>
          <h4>Free Delivery</h4>
          <button>Learn More</button>
          <div className="image">
            <img src={Service1} alt="" />
          </div>
        </div>
        <div className="service two">
          <div className="content">
            <h4>Dics up to 25%</h4>
            <p>
              Learn More <HiArrowSmRight />
            </p>
          </div>
          <div className="image">
            <img src={Service2} alt="service2" />
          </div>
        </div>
        <div className="service three">
          <div className="image">
            <img src={Service3} alt="service3" />
          </div>
          <div className="content">
            <h4>Free 5GB Data</h4>
            <p>
              Learn More <HiArrowSmRight />
            </p>
          </div>
        </div>
        <div className="service four">
          <p>Kaiversarry Monthly Deals</p>
          <h4>Free Delivery</h4>
          <p>
            Learn More <HiArrowSmRight />
          </p>
          <div className="image">
            <img src={Service4} alt="service 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
