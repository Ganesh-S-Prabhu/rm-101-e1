import React, { useState } from "react";
import styles from "./addTask.module.css";
import tasks from "../../data/tasks.json";
const AddTask = ({modify,tasks}) => {
  // NOTE: do not delete `data-testid` key value pair
 
  const [text,setText]=useState({
    id:tasks.length,
    text:"",
    done:false, 
    count: 1
  })
function addtask(){
modify(...tasks,text)
 
}


const handleinput=(e)=>{
  setText( setText({
    ...text,
    text:e.target.value,
  }))
}

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={handleinput}/>
      <button data-testid="add-task-button" onClick={addtask}>+</button>
    </div>
  );
  }

export default AddTask;
