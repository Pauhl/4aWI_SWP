import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Grid from './components/Grid.js';
import InGame from './components/InGame.js';
import { Component } from 'react/cjs/react.production.min';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
  BrowserRouter
} from "react-router-dom";


class App extends Component {




render() {
  return (
    <div className="App">
   
          
        <Navbar/>
        <Grid/>
        
        <NavLink to="/ingame">Ingame</NavLink>
      
    
      
        
    
    </div>
  );
}
}
export default App;
