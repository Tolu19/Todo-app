import styles from "./ToDoList.module.css";

import { useState } from "react";
import { ToDoInput } from "./ToDoInput";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className={styles.container}>
      <ToDoInput onAddTask={addTask} />

      {tasks.length === 0 ? (
        <p>No Tasks Yet</p>
      ) : (
        tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            index={index}
            onDelete={deleteTask}
          />
        ))
      )}
    </div>
  );
};
