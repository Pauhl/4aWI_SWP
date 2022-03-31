import ToDo from "./ToDo";
import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from "./ToDoList.module.css";

class ToDoList extends Component {


    getAllTodos() {
        
        let widgets = [];
        this.props.todos.forEach(todo => {
            if (todo.done == false)  {
            widgets.push(<ToDo deleting={this.props.deleting} title={todo.name} id={todo.id} isdone={todo.done}/>);
            }
        })

        return widgets;
    }
    
    render() {
        
        return (
            <div className={styles.center}>
            <div className={styles.container}>
         {this.getAllTodos()}
          </div> 
          </div>

        )
    }

}

export default ToDoList;