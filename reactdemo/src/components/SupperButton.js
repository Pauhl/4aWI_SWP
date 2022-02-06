import styles from './SupperButton.module.css';
import React, { Component } from "react";

export default class SuperButton extends Component{
    render() {
        return <div className={styles.heading}>
            <button>Button</button>
        </div>
    }
}