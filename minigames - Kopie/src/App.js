import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Grid from './components/Grid.js';
import InGame from './components/InGame.js';
import { Component } from 'react/cjs/react.production.min';


class App extends Component {




render() {
  return (
    <div className="App">
        <Navbar/>
        <Grid/>
        <InGame name="spiel1"/>
        
    </div>
  );
}
}
export default App;
