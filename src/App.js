import React from "react";
import "./scss/main.scss";
import "regenerator-runtime/runtime"; // This needs to be here for async await to work
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";
import * as s from "./App.styles";

//Icons
import homeIcon from "./icons/home.svg";
import personIcon from "./icons/user.svg";
import infoIcon from "./icons/info (1).svg";
import calendarIcon from "./icons/calendar.svg";
import bookIcon from "./icons/book (1).svg";
import houseIcon from "./icons/house.svg";
import campIcon from "./icons/camping.svg";
import graduationIcon from "./icons/graduate.svg";
import forestIcon from "./icons/forest.svg";
import phoneIcon from "./icons/phone.svg";
import travelIcon from "./icons/travel.svg";

const App = () => {
  const menuItems = [
    {
      name: "Úvodní stránka",
      to: "/",
      icon: homeIcon,
      subMenuItems: []
    },
    {
      name: "Kdo jsme",
      to: "/kdo-jsme",
      icon: personIcon,
      subMenuItems: [
        { name: "Historie", to: "/historie" },
        { name: "Pionýr", to: "/pionyr" },
        { name: "Tradice", to: "/tradice" },
        { name: "PTO", to: "/pto" },
        { name: "Vedoucí", to: "/vedoci" }
      ]
    },
    { name: "Informace", to: "/informace", icon: infoIcon, subMenuItems: [] },
    {
      name: "Plán akcí",
      to: "/plan-akci",
      icon: calendarIcon,
      subMenuItems: []
    },
    { name: "Kronika", to: "/kronika", icon: bookIcon, subMenuItems: [] },
    { name: "Klubovna", to: "/klubovna", icon: houseIcon, subMenuItems: [] },
    { name: "Tábory", to: "/tabory", icon: campIcon, subMenuItems: [] },
    {
      name: "Vzdělávání",
      to: "/vzdelavani",
      icon: graduationIcon,
      subMenuItems: []
    },
    {
      name: "Naučná stezka",
      to: "/naucna-stezka",
      icon: forestIcon,
      subMenuItems: []
    },
    { name: "Kontakty", to: "/kontakty", icon: phoneIcon, subMenuItems: [] },
    {
      name: "Kilometrovník",
      to: "/kilometrovnik",
      icon: travelIcon,
      subMenuItems: []
    }
  ];

  return (
    <s.App>
      <Sidebar
        menuItems={menuItems}
      />
      <MainView />
    </s.App>
  );
};

export default App;
