import React from "react";
import styles from "./tasks.module.css";
// import tasks from "../../data/tasks.json";
import Task from "../Task/Task";
const Tasks = ({tasks,modify}) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */
          tasks.length!==0? tasks.map((ele)=>{
             return <Task key={ele.id} task={ele} tasks={tasks} update={modify}/>
           }):null
        }
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */tasks.length===0? <h1>Empty</h1>:null}
      </div>
    </>
  );
};

export default Tasks;
