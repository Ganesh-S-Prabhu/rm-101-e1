import React, { useState } from "react";
import styles from "./addTask.module.css";
import tasks from "../../data/tasks.json";
const AddTask = ({addNewTask}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [task,settask]=useState("")
function addtask(){
if(task!=""){
  let todo={
    id:tasks.length+1,
    text:task,
    done:false,
    count:1,
  }
 addNewTask(todo)
 
}
}

const handleinput=(e)=>{
  settask(e.target.value)
}

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={handleinput}/>
      <button data-testid="add-task-button" onClick={addtask}>+</button>
    </div>
  );
};

export default AddTask;
