import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import Status from './components/Status';
import ToDo from './components/ToDo';
import ToDoList from './components/ToDoList';
import { Component } from 'react/cjs/react.production.min';
import { findAllInRenderedTree } from 'react-dom/cjs/react-dom-test-utils.production.min';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [{ "id": 1, "name": "einkaufen", "done": false }, { "id": 2, "name": "sport", "done": false }]
    }
  }


  addTask = (value) => {
    let todos = this.state.todos;

    let todo = {
      id: todos.length+1,
      name: value,
      done: false
    }

   
    todos.push(todo);

    this.setState({
      todos: todos
    })
  }

  removeTask = (value) => {

    let todos = this.state.todos;


    todos.forEach(todo => {
      if (todo.id == value) {
        todo.done = true;
        

      }
    });

    this.setState({
      todos: todos
    })
  }




  render() {
    return (
      <div className="App">
        <Header />
        <TaskAdder onTaskAdded={this.addTask} />
        <Status info={this.state.todos}/>
        <ToDoList deleting={this.removeTask} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
