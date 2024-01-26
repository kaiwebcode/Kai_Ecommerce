import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const data = [
    {
      type: "Product",
      subTypes: [
        "Landing Page",
        "Features",
        "Documentation",
        "Referral Program",
        "Pricing",
      ],
    },
    {
      type: "Services",
      subTypes: ["Illustration", "Design", "Documentation", "Theme", "UI Kit"],
    },
    {
      type: "Company",
      subTypes: ["About", "Terms", "Privacy Policy", "Careers"],
    },
    {
      type: "More",
      subTypes: ["Documentation", "Terms", "License", "Changelog"],
    },
  ];
  const socailLinks = [
    <BsFacebook />,
    <BsInstagram />,
    <BsLinkedin />,
    <BsTwitter />,
  ];
  return (
    <footer id="Help" className="py-3 mx-3">
      <div className="brand-container">
        <div className="brand">
          <span>KAI</span>
          <span className="dot">.</span>
        </div>
        <p className="description">
          Build a modern and creative website with crealand
        </p>
        <ul className="social-links">
          {socailLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="links">
        {data.map(({ type, subTypes }, index) => {
          return (
            <div className="link" key={index}>
              <h3 className="title">{type}</h3>
              <ul>
                {subTypes.map((type, index2) => (
                  <li>
                    <a key={index2} href="#">
                      {type}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
