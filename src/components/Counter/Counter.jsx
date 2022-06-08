import React from "react";
import styles from "./counter.module.css";

const Counter = ({ count, counter, id }) => {
  // sample value to be replaced
  // let count = counter.count;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button"  onClick={()=>{counter(1,id)}}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={()=>{counter(-1,id)}}>-</button>
    </div>
  );
};

export default Counter;
