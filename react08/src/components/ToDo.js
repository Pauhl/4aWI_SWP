import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from "./ToDo.module.css";
import { BsCheck2 } from "react-icons/bs";

class ToDo extends Component {

 


    deleteTask = ()=> {
        this.props.deleting((this.props.id))

    }
    
    
    
    render() {
        return (
            <div className={styles.container}>
               <div className={styles.title}>{this.props.title}</div>

               <div><button className={styles.button} id={this.props.id} onClick={this.deleteTask}><BsCheck2 className={styles.icon}/></button></div>
            </div>
        )
    }


}

export default ToDo;