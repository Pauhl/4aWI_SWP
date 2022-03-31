import React from "react";
import { Component } from "react/cjs/react.production.min";


class Status extends Component {


    
    
    render() {
        let notdone=1;
        return (

    <div>       <p>Erledigte Aufgabe: { this.props.info.reduce(function (n, todo) {
        return n + (todo.done == true);
    }, 0)}

    </p>
    <p>
        Noch offen: { this.props.info.reduce(function (n, todo) {
        return n + (todo.done == false);
    }, 0)}
    </p>
    </div>
       
    
    
        )

        
    }

}

export default Status;