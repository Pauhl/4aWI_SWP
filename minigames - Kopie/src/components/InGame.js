import React from "react";
import { Component } from "react/cjs/react.production.min";

import styles from "./Ingame.module.css";
import { useEffect } from 'react';

class InGame extends Component {


    constructor(props) {
        super(props);
        let comps = {"scorers":[]}
        this.state = {
            daten: comps
        }
    }

    componentDidMount(){
        console.log("mounted");
        this.getData();
    }

    getData = (value) => {

        let url = 'https://api.football-data.org/v2/competitions/CL/scorers';
        fetch(url,

            {
                method: "GET",
                headers: {
                    "x-auth-token": "1b09c3488b9c4bd5827930e1a049e5e7"
                }
            })
            .then(response => response.json())
            .then(data => { 
                console.log(data); 
                this.setState({daten:data})
            });
        //.then(data => this.setState({daten: data}));
    };

    getPlayer = ()=>{
        let zahl = Math.floor(Math.random() * 10);
        let name;
        let playerclub;
        this.state.daten.scorers.forEach(element => {
            
        //alert(element.player.name)    
        
        
         name = element.player.name;
         playerclub = element.team.name;

        });
        return playerclub;
    }



    render() {
        return (
            <div className={styles.fussballspiel}>
                <h1>{this.props.name}</h1>
                <br></br>
                <br></br>
               <p>Hier: {this.getPlayer()}</p>
            </div>
        );
    }

}

export default InGame;