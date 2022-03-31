import React from "react";
import { Component } from "react/cjs/react.production.min";

class TaskAdder extends Component {


    constructor(props) {
        super(props);
        this.state = {
            inputValue:""
        }
    }

    addTask = ()=>{
        
        this.props.onTaskAdded(this.state.inputValue)
        
    }

    handleChange =(event)=>{
        this.setState({
            inputValue: event.target.value
        })

    }
    
    render() {
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.inputValue} type="text"></input>
                <button onClick={this.addTask}>Save</button>
            </div>
        )
    }

}

export default TaskAdder;