
import { Component } from "react/cjs/react.production.min";

import styles from "./Ingame.module.css";

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


        
        let randomurl;

        switch (Math.floor(Math.random() * 3)) {

            

           

            case 1: 
            randomurl = 'BL1';
            break;

            case 2:
            randomurl = 'FL1';
            break;
            
            case 3:
            randomurl = 'PL';
            break;

            case 0:

            randomurl = 'CL';
            break;
        }

        console.log(randomurl);

        let url = 'https://api.football-data.org/v2/competitions/'+randomurl+'/scorers';
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
            
        console.log( this.state.daten.scorers[zahl].player.name)    
        
        
         name =  this.state.daten.scorers[zahl].player.name;
         playerclub = this.state.daten.scorers[zahl].team.name;

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