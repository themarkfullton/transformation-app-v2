import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
