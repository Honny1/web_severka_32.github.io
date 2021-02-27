import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src={require("../images/Severka-logo.png")}
        alt="Severka logo"
        className="footer-severka-logo"
      />
      <div className="footer-copy">
        <p>© 2021 32. PTO Severka</p>
        <p>32. PS Galaxie, Hoštická 613/75, Brno, 642 00, IČO: 01514563</p>
      </div>
      <div className="footer-sponsors">
        <img src={require("../images/MŠMT-logo.png")} alt="MŠMT logo" />
        <img src={require("../images/Bohunice.gif")} alt="Bohunice logo" />
        <img src={require("../images/Brno-logo.gif")} alt="Brno logo" />
        <img src={require("../images/Pionyr-logo.png")} alt="Pionýr logo" />
        <img
          src={require("../images/Jihomoravský-kraj-logo.gif")}
          alt="Jihomoravský kraj logo"
        />
        <img src={require("../images/Borovice-logo.png")} alt="Borovice logo" />
      </div>
    </footer>
  );
};

export default Footer;
