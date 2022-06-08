import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({task,tasks,update}) => {
  // NOTE: do not delete `data-testid` key value pair
  const changetasks=()=>{
 
    for(var i=0;i<tasks.length;i++){
      if(tasks[i].id===task.id){
       let ans= [...tasks]
          ans.splice(i,1)
        
        return  update(ans)
         
          

      }
    }
}

const upDone=()=>{
 let ans=[...tasks]
 for(var i=0;i<ans.length;i++){
   if(ans[i].id===task.id){
        ans[i].done=!ans[i].done
         
     
     return  update(ans)
      
       

   }
 }

}
  return (
    <li data-testid="task" className={styles.task}>
     <input  onChange={()=>upDone()} type="checkbox" data-testid="task-checkbox" defaultChecked={task.done}/> 
      <div  data-testid="task-text">{task.text}</div> 
      {/* Counter here */<Counter task={task} tasks={tasks} update={update}/>}
      <button onClick={()=>changetasks()} data-testid="task-remove-button">X</button>
    </li>
  );
};

export default Task;
