import React from "react";
import "./scss/main.scss";
import "regenerator-runtime/runtime"; // This needs to be here for async await to work
// import { useHistory } from "react-router-dom";
// import StylishSidebar from "stylish-sidebar";
import Sidebar from "./components/Navbar/Navbar";
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
  // const [isOpen, setIsOpen] = useState(true);

  const colorPalette = {
    bgColor1: "#353535",
    bgColor2: "#353535",
    fontColor: "rgba(161, 161, 161)",
    fontColorSelected: "rgba(255, 255, 255)",
    dividerColor: "rgba(48, 48, 48)",
    selectedBackgroundCollapsedMode: "light"
  };

  const fonts = {
    header: "Poppins",
    menu: "Poppins"
  };

  // const headerImage = {
  //   urlExpanded: "images/logo_expanded.png",
  //   urlCollapsed: "images/logo_collapsed.png",
  //   heightCollapsed: "22pt",
  //   heightExpanded: "30pt",
  //   align: "right"
  // };

  const backgroundImage = {
    url: "",
    showImage: false
  };

  const sidebarHeader = {
    fullName: "32. PTO Severka",
    shortName: ""
  };

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


  // const history = useHistory();

  // const handleMenuItemClick = (index) => {
  //   history.push(menuItems[index].to);
  // };

  // const handleSubMenuItemClick = (menuItemIndex, subMenuItemIndex) => {
  //   history.push(
  //     `${menuItems[menuItemIndex].to}${menuItems[menuItemIndex].subMenuItems[subMenuItemIndex].to}`
  //   );
  // };

  return (
    <s.App>
      {/* <Sidebar />
       */}
      {/* <StylishSidebar
        backgroundImage={backgroundImage}
        colorPalette={colorPalette}
        useImageAsHeader={true}
        headerImage={headerImage}
        fonts={fonts}
        menuItems={menuItems}
        widthExpanded={"20%"}
        widthCollapsed={"5%"}
        minWidth={"80px"}
        maxWidth={"280px"}
        isOpen={isOpen}
        showToggler={true}
        onTogglerClick={() => setIsOpen(!isOpen)}
        onHeaderClick={() => history.push("editor")}
        onMenuItemClick={handleMenuItemClick}
        onSubMenuItemClick={handleSubMenuItemClick}
      /> */}
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={colorPalette}
      />
      <MainView />
    </s.App>
  );
};

export default App;
