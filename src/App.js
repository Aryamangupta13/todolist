// eslint-disable-next-line
import React, { useState } from "react";
import './App.css';
import Lis from './Lis';

//Hex codes: Raspberry #8A307F, #79A7D3 bacck-> #6883BC
const App=()=>{
  const [listcontent,setlistcontent]=useState();
  const [Items,setItems]=useState([]);

  const itemevent=(event)=>{
    setlistcontent(event.target.value);
  }

  const todoer=(id)=>{
    setItems((old)=>{
      return old.filter((arrElem,ind)=>{
        return ind !== id;
      })
    })
  }

  function onclkbtn(){

    setItems((oldval)=>{
      return [...oldval,listcontent];
    })
    setlistcontent("");

  }
  return(
    <div className="box">
    
    <div className="insidebox">
      <br/>
      <h1> ToDo List</h1>
      <br/>
      
      <input type="text" placeholder=" Add a item" value={listcontent} onChange={itemevent}/>
      <button className="but" onClick={onclkbtn}> + </button>
      <ol>
        {Items.map((val,index)=>{
            return(
              <Lis 
              txt={val}
              id={index}
              key={index}
              onSelect={todoer}
              />
            );
        })}
      </ol>
    </div>
    </div>
  )
}
export default App;