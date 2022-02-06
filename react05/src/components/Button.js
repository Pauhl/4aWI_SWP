import styles from './Button.module.css';
import React, { Component } from "react";

export default class Button extends Component{
    render() {
        return <div>
            <button className={styles.button}>{this.props.name}</button>
        </div>
    }
}