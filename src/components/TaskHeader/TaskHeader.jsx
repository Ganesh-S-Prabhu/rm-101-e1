import React from "react";
import styles from "./taskHeader.module.css";
// import tasks from "../../data/tasks.json";
const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  let totalTask = tasks.length;
  let uc=tasks.filter((ele)=>{
    return ele.done!==true
  })
  let unCompletedTask = uc.length;
   
  

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
           <h2>Todo List</h2>  
      <b data-testid="header-remaining-task">You have {unCompletedTask} of </b>
      <b data-testid="header-total-task">{totalTask} tasks remaining</b>
    </div>
  );
};
// You have 3 of 5 tasks remaining

export default TaskHeader;
