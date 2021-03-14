import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Home from "./components/MainView/Home/Home";
import WhoAreWe from "./components/MainView/WhoAreWe/WhoAreWe";
import History from "./components/MainView/History/History";
import Pionyr from "./components/MainView/Pionyr/Pionyr";
import Tradition from "./components/MainView/Tradition/Tradition";
import Pto from "./components/MainView/Pto/Pto";
import Leaders from "./components/MainView/Leaders/Leaders";
import Info from "./components/MainView/Info/Info";
import Plan from "./components/MainView/Plan/Plan";
import Chronicle from "./components/MainView/Chronicle/Chronicle";
import Club from "./components/MainView/Club/Club";
import Camps from "./components/MainView/Camps/Camps";
import Education from "./components/MainView/Education/Educations";
import NatureTrail from "./components/MainView/NatureTrail/NatureTrail";
import Contacts from "./components/MainView/Contacts/Contacts";
import Mileage from "./components/MainView/Mileage/Mileage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/kdo-jsme" component={WhoAreWe} />
      <Route exact path="/kdo-jsme/historie" component={History} />
      <Route exact path="/kdo-jsme/pionyr" component={Pionyr} />
      <Route exact path="/kdo-jsme/tradice" component={Tradition} />
      <Route exact path="/kdo-jsme/pto" component={Pto} />
      <Route exact path="/kdo-jsme/vedoci" component={Leaders} />
      <Route exact path="/informace" component={Info} />
      <Route exact path="/plan-akci" component={Plan} />
      <Route exact path="/kronika" component={Chronicle} />
      <Route exact path="/klubovna" component={Club} />
      <Route exact path="/tabory" component={Camps} />
      <Route exact path="/vzdelavani" component={Education} />
      <Route exact path="/naucna-stezka" component={NatureTrail} />
      <Route exact path="/kontakty" component={Contacts} />
      <Route exact path="/kilometrovnik" component={Mileage} />
    </Switch>
  );
};

export default Routes;
