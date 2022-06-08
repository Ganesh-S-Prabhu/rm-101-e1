import React from "react";
import AddTask from "./AddTask/AddTask";
import Tasks from "../data/tasks.json";
import styles from "./taskApp.module.css";
import { useState } from "react";
import { TaskHeader } from "./TaskHeader";
import tasks from "./Tasks/Tasks";

const TaskApp = () => {
  const [allTasks, setAllTasks] = useState([
    {
      id: 1,
      text: "Push up",
      done: true,
      count: 2,
    },
    {
      id: 2,
      text: "Pull Up",
      done: true,
      count: 3,
    },
    {
      id: 3,
      text: "Squats",
      done: false,
      count: 1,
    },
    {
      id: 4,
      text: "Sprint",
      done: false,
      count: 5,
    },
    {
      id: 5,
      text: "Stairs",
      done: false,
      count: 200,
    },
  ]);
  // NOTE: do not delete `data-testid` key value pair
  const check = (id) => {
    let newArray = [];
    for (let i = 0; i < allTasks.length; i++) {
      if (allTasks[i].id === id) {
        allTasks[i].done = !allTasks[i].done;
      }
      // console.log(allTasks[i].count);
      newArray.push(allTasks[i]);
    }
    setAllTasks(newArray);
  };

  const addNewTask = (task) => {
    let count = 0;
    for (let i = 0; i < allTasks.length; i++) {
      if (allTasks[i].text === task.text) {
        return
      }
    }
    
     
      setAllTasks([...allTasks, task]);
   
  };

  const deleteTask = (id) => {
    let newArray = [];
    for (let i = 0; i < allTasks.length; i++) {
      if (allTasks[i].id === id) {
        continue;
      }
      // console.log(allTasks[i].count);
      newArray.push(allTasks[i]);
    }
    setAllTasks(newArray);
  };

  const counter = (count, id) => {
    console.log(count);
    let newArray = [];
    for (let i = 0; i < allTasks.length; i++) {
      if (allTasks[i].id === id) {
        allTasks[i].count = allTasks[i].count + count;
      }
      // console.log(allTasks[i].count);
      newArray.push(allTasks[i]);
    }
    setAllTasks(newArray);
  };

  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={allTasks} />
      <AddTask addNewTask={addNewTask} />
      <Tasks
        tasks={allTasks}
        counter={counter}
        check={check}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskApp;
