import React from "react";
import { render } from "react-dom";
import "../scss/main.scss";
import Header from "./Header";
import Articles from "./Articles";
import Footer from "./Footer";
import "regenerator-runtime/runtime"; // This needs to be here for async await to work

const App = () => {
  return (
    <div>
      <Header />
      <Articles />
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById("root"));
