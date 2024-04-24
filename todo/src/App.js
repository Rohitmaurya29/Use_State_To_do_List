import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import Display from './Display';
import React, { useState } from 'react';

function App() {
  const [listData,setListData]= useState([]);
  const add=(inputText)=>{
    setListData([...listData, inputText])
  };
  return (
    <div className="App">
      <h1 className='todo'><i><u>To Do List</u></i></h1>
      <hr></hr>
      <Todo item={add}/>
      <h3 className='tasks'><u>Tasks To Be Done</u></h3>
      {listData.map((listInput,i)=>{
        return(
          <Display key={i} items={listInput}/>
        )
      })}
    </div>
  );
}

export default App;
