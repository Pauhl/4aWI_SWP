import styles from './Liste.module.css';
import React, { Component } from "react";

export default class Liste extends Component{


    listItems = this.props.items.map((number) =>
    <li><p className={styles.eins}>{number}</p></li>
        );

    render() {
        

       return <div><ul className={styles.liste}>{this.listItems}</ul></div>
       

   


     
    }
}