import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from "./Game.module.css";

class Answer extends Component {


    
    
    render() {
        return (
            <div className={styles.game}>
                
                <button>this.props.playername</button>
              
            </div>
            
        )
    }

}

export default Answer;