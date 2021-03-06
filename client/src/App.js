//import { Route, Switch } from "react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";//, BrowserRouter
//import { useDispatch } from 'react-redux';
//import { useEffect, useState } from 'react';
//import axios from 'axios';
import './App.css';

//import de componentes
import Home from "./components/Home/Home";
import LandingPage from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import FormAdRecipe from "./components/FormAdRecipe/FormAdRecipe";
import FootBar from "./components/FootBar/FootBar";
import SearchRecipe from "./components/SearchRecipe/SearchRecipe";



function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route exact path="/" component={LandingPage} />

        <Route path="/">
          <NavBar/>

          <Route exact path="/Home">
            <Home/>
          </Route>

          <Route exact path="/Search"> 
            <SearchRecipe />
          </Route>

          <Route exact path="/Form">
            <FormAdRecipe/>
          </Route>

          <FootBar/>

        </Route>
      </Switch>
    </div>
  );
}

export default App;
