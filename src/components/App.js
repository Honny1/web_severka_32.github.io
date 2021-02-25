import React from "react";
import { render } from "react-dom";
import "../scss/main.scss";
import Header from "./Header";
import Articles from "./Articles";
import Footer from "./Footer";
import "regenerator-runtime/runtime"; // This needs to be here for async await to work
import Sidebar from "./navbar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' />
          <Route path='/' />
          <Route path='/' />
          <Route path='/' />
          <Route path='/' />
          <Route path='/' />
        </Switch>
      </Router>
      <Header />
      <Articles />
      <Footer />
    </>
  );
};

render(<App />, document.getElementById("root"));
