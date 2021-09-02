//import { Route, Switch } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Card from "./components/Card";
import LandingPage from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home">
          <Card/>
          <Card/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
