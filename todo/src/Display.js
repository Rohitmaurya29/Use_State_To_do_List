import React from 'react'
import styles from './display.module.css'

function Display(props) {
  return (
    <div>
        <input type="checkbox"  id="tasks" className={styles.input}/>
        <label for="tasks">{props.items}</label>
    </div>
  )
}

export default Display
