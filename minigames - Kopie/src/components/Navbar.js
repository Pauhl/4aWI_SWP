import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from "./Navbar.module.css";

class Navbar extends Component {


    
    
    render() {
        return (
            <div className={styles.bar}>
                <h1 className={styles.headline}>MiniGames</h1>
                        </div>
        )
    }

}

export default Navbar;