import styles from './Person.module.css';
import React, { Component } from "react";

export default class Person extends Component{
    render() {
        return <div>
            <img height="200px" src="https://www.w3schools.com/howto/img_avatar.png"></img><br></br>
            <b>{this.props.name}</b><br></br>
            <b className={styles.info}>{this.props.info}</b>
        </div>
    }
}