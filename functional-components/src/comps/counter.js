import React, { Component } from 'react';
import { render } from 'react-dom';




class Counter extends Component {
    constructor(props) {
        super(props); {
            this.state = { count: 0}
        }
    }

        increase = ()=>{
            this.setState({
                count: this.state.count + 1
            })
            
        }
    


        componentDidMount() {
            console.log("started")
        }

        
    
    render() {  
        return (
            <div>
                <h1>Count</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.increase}>Inc</button>
            </div>
        );
    }

}

export default Counter;