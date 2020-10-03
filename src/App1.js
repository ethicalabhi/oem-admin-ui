import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';


import Sidebar from './components/layouts/Sidebar';
import MainContent from './components/layouts/MainContent'
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Buttons from './components/pages/Buttons';
import Tables from './components/pages/Tables';
import Edit from './components/pages/Edit';
import NewCard from './components/pages/NewCard';
import ErrorPage from './components/pages/Error';
import BlankPage from './components/pages/Blank';
import ChartsPage from './components/pages/Charts';
import Animation from './components/pages/Animation';
import Other from './components/pages/Other';
import Border from './components/pages/Border';
import Color from './components/pages/Color';
import BCards from './components/pages/BCards';
import Bbuttons from './components/pages/Bbuttons';
import Servicecenter from './components/pages/Servicecenter';


function App() {
  return (
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <Router>
            <div id="content">
              <Navbar/>
              <Switch>
                <Route path="/bbuttons">
                  <Bbuttons/>
                </Route>
                <Route path="/bcards">
                  <BCards/>
                </Route>
                <Route path="/color">
                  <Color/>
                </Route>
                <Route path="/border">
                  <Border/>
                </Route>
                <Route path="/others">
                  <Other/>
                </Route>
                <Route path="/animation">
                  <Animation/>
                </Route>
                <Route path="/charts">
                  <ChartsPage/>
                </Route>
                <Route path="/blank">
                  <BlankPage/>
                </Route>
                
              <Route path="/tables">
                  <Tables/>
                </Route>
                <Route path="/edit/:id">
                  <Edit/>
                </Route>

                <Route path="/servicecenter">
                  <Servicecenter/>
                </Route>

                <Route path="/error">
                  <ErrorPage/>
                </Route>
                <Route path="/">
                  <MainContent/>
                </Route>
                <Route path="/buttons">
                  <Buttons/>
                </Route>
                <Route path="/cfr">
                  <NewCard/>
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer/>
        </div>
      </div>
  );
}
export default App;
