import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({ e, counter, check, deleteTask }) => {
  // NOTE: do not delete `data-testid` key value pair

  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" defaultChecked={e.done}   onClick={() => {
          check(e.id);
        }}/>
      <div data-testid="task-text">{e.text}</div>
      {/* Counter here */}
      {/* <span></span> */}
      
      <Counter count={e.count} counter={counter} id={e.id}/>
      <button data-testid="task-remove-button"  onClick={() => {
          deleteTask(e.id);
        }}><svg
    height="21"
    viewBox="0 0 21 21"
    width="21"
    xmlns="http://www.w3.org/2000/svg"
    >
    <g
        fill="none"
        fill-rule="evenodd"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        transform="translate(5 5)"
    >
        <path d="m10.5 10.5-10-10z" />
        <path d="m10.5.5-10 10" />
    </g>
</svg></button>
    </li>
  );
};

export default Task;
