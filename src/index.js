import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './static/vendor/fontawesome-free/css/all.min.css'
import './static/css/sb-admin-2.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Forgot from './components/pages/Forgot';

ReactDOM.render(
  <React.StrictMode>
     <Router>
            <div>
              <Switch>
                <Route path="/forgot">
                  <Forgot/>
                </Route>
                <Route path="/register">
                  <Register/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/">
                <App />
                </Route>
              </Switch>
            </div>
          </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
