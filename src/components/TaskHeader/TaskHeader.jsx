import React from "react";
import styles from "./taskHeader.module.css";
// import tasks from "../../data/tasks.json";
const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  let count=0
  function getlength(){
     
    for(let i=0;i<tasks.length;i++){
      if(!tasks[i].done){
        count++
      }
    }
  }
  getlength();
  let totalTask = tasks.length;
  let unCompletedTask = count;


  

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      
      You have  <b data-testid="header-remaining-task">{unCompletedTask}</b> 
        of <b data-testid="header-total-task">{totalTask}</b>  tasks remaining
    </div>
  );
};
// You have 3 of 5 tasks remaining

export default TaskHeader;
