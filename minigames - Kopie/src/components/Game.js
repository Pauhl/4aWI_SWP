import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from "./Game.module.css";

class Game extends Component {


    
    
    render() {
        return (
            <div className={styles.game}>
                
                <p>{this.props.gamename}</p>
              
            </div>
            
        )
    }

}

export default Game;