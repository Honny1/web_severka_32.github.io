import React, { useState, useEffect, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as s from './Sidebar.styles';

const Sidebar = props => {
  const {
    backgroundImage = '',
    sidebarHeader = {
      fullName: '32. PTO Severka',
      shortName: ''
    },
    menuItems = [],
    fonts = {
      header: 'Poppins',
      menu: 'Poppins'
    },
    colorPalette = {
      bgColor1: "#353535",
      bgColor2: "#353535",
      fontColor: "rgba(161, 161, 161)",
      fontColorSelected: "rgba(255, 255, 255)",
      dividerColor: "rgba(48, 48, 48)",
      selectedBackgroundCollapsedMode: "light"
    }
  } = props;

  // State
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.fullName);
  const [subMenusStates, setSubmenus] = useState({})

  // Effects

  // Set selected menu item based on URL pathname
  useLayoutEffect(() => {
    const path = window.location.pathname;
    const parts = path.split('/');

    if (path !== '/' && parts[1].charAt(0).toUpperCase() !== menuItems[0].name) {
      const selectedItem = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
      setSelectedMenuItem(selectedItem)
    }
  }, [menuItems])

  // Update of header state
  useEffect(() => {
    isSidebarOpen ? setTimeout(() => setHeader(sidebarHeader.fullName), 200) : setHeader(sidebarHeader.shortName);
  }, [isSidebarOpen, sidebarHeader])


  // Update of sidebar state
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1280) setSidebarState(false);
      else setSidebarState(true)
    }

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [isSidebarOpen]);


  // Add index of items that contain sub menu items
  useEffect(() => {
    const newSubmenus = {};

    menuItems.forEach((item, index) => {
      const hasSubmenus = !!item.subMenuItems.length;

      if (hasSubmenus) {
        newSubmenus[index] = {};
        newSubmenus[index]['isOpen'] = false;
        newSubmenus[index]['selected'] = null;
      }
    })


    // Set selected submenu if user landed on one
    const path = window.location.pathname;
    const parts = path.split('/');

    if (parts.length === 3) {
      const selectedItem = parts[1].toLowerCase();
      const selectedSubItem = parts[2].toLowerCase()
      const selectedItemIndex = menuItems.findIndex(item => item.name.toLowerCase() === selectedItem);
      const selectedSubItemIndex = menuItems[selectedItemIndex]?.subMenuItems.findIndex(subItem => subItem.name.toLowerCase() === selectedSubItem);

      if (selectedItemIndex !== -1) newSubmenus[selectedItemIndex]['isOpen'] = true;
      if (selectedItemIndex !== -1 && selectedSubItemIndex !== -1) newSubmenus[selectedItemIndex]['selected'] = selectedSubItemIndex;
    }

    Object.keys(subMenusStates).length === 0 && setSubmenus(newSubmenus);
  }, [menuItems, subMenusStates]);

  const handleMenuItemClick = (name, index) => {
    setSelectedMenuItem(name);

    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

    // eslint-disable-next-line no-prototype-builtins
    if (subMenusStates.hasOwnProperty(index)) {
      subMenusCopy[index]['isOpen'] = !subMenusStates[index]['isOpen']
      setSubmenus(subMenusCopy)
    }
    else {
      for (let item in subMenusStates) {
        subMenusCopy[item]['isOpen'] = false;
        subMenusCopy[item]['selected'] = null
      }
      setSubmenus(subMenusCopy);
    }
  }

  const handleSubMenuItemClick = (menuItemIdx, subMenuItemIdx) => {
    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

    subMenusCopy[menuItemIdx]['selected'] = subMenuItemIdx;
    setSubmenus(subMenusCopy);
  }


  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;

    const hasSubmenus = !!item.subMenuItems.length;
    const isOpen = subMenusStates[index]?.isOpen;

    const subMenusJSX = item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
      const isSubmenuItemSelected = subMenusStates[index]?.selected === subMenuItemIndex;

      return (
        <Link to={`${item.to}${subMenuItem.to}`} style={{ textDecoration: 'none' }} key={subMenuItemIndex}>
          <s.SubMenuItem
            onClick={() => handleSubMenuItemClick(index, subMenuItemIndex)}
            selected={isSubmenuItemSelected}
            colorPalette={colorPalette}
          >
            {subMenuItem.name}
          </s.SubMenuItem>
        </Link>
      )
    })

    return (
      <s.ItemContainer key={index}>
        <Link to={item.to} style={{ textDecoration: 'none' }}>
          <s.MenuItem
            font={fonts.menu}
            selected={isItemSelected}
            onClick={() => handleMenuItemClick(item.name, index)}
            isSidebarOpen={isSidebarOpen}
            isOpen={isOpen}
            colorPalette={colorPalette}
          >
            <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon} />
            <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
            {hasSubmenus && isSidebarOpen && (
              <s.DropdownIcon selected={isItemSelected} isOpen={isOpen} colorPalette={colorPalette} />
            )}
          </s.MenuItem>
        </Link>

        {/* Display submenus if they exist  */}
        <AnimatePresence>
          {hasSubmenus && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen} colorPalette={colorPalette}>{subMenusJSX}</s.SubMenuItemContainer>
            </motion.nav>
          )}
        </AnimatePresence>
      </s.ItemContainer>
    )
  });

  return (
    <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen} colorPalette={colorPalette}>
      <s.SidebarHeader font={fonts.header}>
        {header}
        {
          (header === '') ?
            <img src={require("../../images/Severka-logo.png")} alt="Logo Severky" width="55px" /> :
            <div></div>
        }

      </s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler />
      </s.TogglerContainer>
    </s.SidebarContainer>
  )
}

export default Sidebar