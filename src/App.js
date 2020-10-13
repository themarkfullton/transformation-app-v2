import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/reset.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/about" component={About} />
          <Route exact path="/clinics" component={Clinics} />
          <Route exact path="/fashion" component={fashion} />
          <Route exact path="/fitness" component={fitness} />
          <Route exact path="/history" component={history} />
          <Route exact path="/identity" component={Identity} />
          <Route exact path="/travel" component={Travel} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
