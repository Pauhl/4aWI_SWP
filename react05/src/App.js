import './App.css';
import Button from './components/Button.js';
import Liste from './components/Liste.js';
import Person from './components/Person.js';
let namen =["Florian", "Samuel", "Brian", "Lukas", "Lucas"];


function App() {
  return (
    <div className="App">

    

      <Button name="hallo"/>
      <Button name="test2"/>

      <Liste items={namen}/>


      <Person name="John Doe" info="Architect & Engineer"/>
    

  
    </div>
  );
}

export default App;
