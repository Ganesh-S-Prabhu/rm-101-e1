import React from "react";
import AddTask from "./AddTask/AddTask";
import datas from "../data/tasks.json";
import styles from "./taskApp.module.css";
import { useState } from "react";
import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  const [allTasks, setAllTasks] = useState(datas);


  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={allTasks} />
      <AddTask tasks={allTasks} modify={setAllTasks} />
      <Tasks
        tasks={allTasks} modify={setAllTasks}
      />
    </div>
  );
};

export default TaskApp;
