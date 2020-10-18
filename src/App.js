import React from 'react';
import { Route, Switch } from "react-router-dom";

//==========| Components \===================>
import Header from "./components/Header";
import Footer from "./components/Footer";

//==========| Containers \===================>
import Splash from "./containers/Splash";
import About from "./containers/About";
import Suggest from "./containers/Suggest";
import Clinics from "./containers/Clinics";
import Fashion from "./containers/Fashion";
import Fitness from "./containers/Fitness";
import History from "./containers/History";
import Identity from "./containers/Identity";
import Jobs from "./containers/Jobs";
import Travel from "./containers/Travel";
import NotFound from "./containers/NotFound";

//==========| Stylesheets \===================>
import "./assets/css/reset.css";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="content">
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/about" component={About} />
          <Route exact path="/suggest" component={Suggest} />
          <Route exact path="/clinics" component={Clinics} />
          <Route exact path="/fashion" component={Fashion} />
          <Route exact path="/fitness" component={Fitness} />
          <Route exact path="/history" component={History} />
          <Route exact path="/identity" component={Identity} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/travel" component={Travel} />
          <Route component={NotFound} />
          </Switch>
          </div>
      <Footer />
    </div>
  );
}

export default App;
