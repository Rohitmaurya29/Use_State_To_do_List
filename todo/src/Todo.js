import React, { useEffect, useState } from 'react'
import styles from './todo.module.css'

function Todo(props) {
    const [input,setInput]= useState("");
    useEffect(()=>{
      console.log("added")
    },[input]);
  return (
    <div>
      <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} className={styles.input}/>
      <button type="button" onClick={()=>{props.item(input); setInput("")}} className={styles.button}>Add</button>
    </div>
  )
}

export default Todo;