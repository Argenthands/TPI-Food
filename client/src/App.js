//import { Route, Switch } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './App.css';
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <h1>Esto es food</h1>
      <Card />
      <Card />
    </div>
  );
}

export default App;
