import React from "react";
import Routes from "../../Routes";
import * as s from "./MainView.styles";
import Footer from './Footer';

const MainView = () => {
  return (
    <s.MainViewContainer>
      <Routes />
      <Footer />
    </s.MainViewContainer>
  );
};

export default MainView;
