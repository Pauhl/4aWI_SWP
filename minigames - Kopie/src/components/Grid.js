import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from "./Grid.module.css";
import Game from './Game.js';

class Grid extends Component {


    
    
    render() {
        return (
        <div>            
            <h1>Choose your game</h1>
            <br>
            </br>
            <br></br>
            <br></br>

            <br></br>


            <div className={styles.games}>
                
                <Game gamename="ahllo"/>
                <Game gamename="asdf"/>
                <Game gamename="arerae"/>
                <Game gamename="423342"/>
                
            </div>
        </div>
           
        )
    }

}

export default Grid;