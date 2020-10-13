import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//==========| Containers \===================>
import Splash from "./containers/Splash";
import About from "./containers/About";
import APIPage from "./containers/APIPage";
import Clinics from "./containers/Clinics";
import Fashion from "./containers/Fashion";
import Fitness from "./containers/Fitness";
import History from "./containers/History";
import Identity from "./containers/History";
import Identity from "./containers/Identity";
import Travel from "./containers/Travel";
import NotFound from "./containers/NotFound";

//==========| Stylesheets \===================>
import "./assets/css/reset.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/about" component={About} />
          <Route exact path ="/api" component={APIPage} />
          <Route exact path="/clinics" component={Clinics} />
          <Route exact path="/fashion" component={Fashion} />
          <Route exact path="/fitness" component={Fitness} />
          <Route exact path="/history" component={History} />
          <Route exact path="/identity" component={Identity} />
          <Route exact path="/travel" component={Travel} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
