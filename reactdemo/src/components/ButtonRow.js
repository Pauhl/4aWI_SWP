import SuperButton from './SupperButton';
import React, { Component } from "react";
import styles from './SupperButton.module.css';

export default class ButtonRow extends Component{
    render() {
        return <div className={styles.row}><SuperButton/><SuperButton/><SuperButton/></div>
    }
}