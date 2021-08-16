import "./App.css";
import { React, useState } from "react";
import Header from "./components/Header/Header";
import HeadBod from "./components/HeadBod/HeadBod";
import Twopage from "./components/Twopage/Twopage";
import Donate from "./components/Donate/Donate"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Threepage from "./components/Threepage/Threepage";
import Qonulluol from "./components/Qonulluol/Qonulluol";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
      {/* <Route path="/qonulluol">
          <Qonulluol />
        </Route> */}
      <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/haqqimizda">
          <Threepage />
        </Route>
        <Route path="/yardim">
          <Twopage />
        </Route>
        <Route  path="/">
          <HeadBod />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
