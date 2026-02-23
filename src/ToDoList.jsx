import styles from "./ToDoList.module.css";

import { useState, useEffect} from "react";
import { ToDoInput } from "./ToDoInput";
import { ToDoItem } from "./ToDoItem";
export const ToDoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  };

  const toggleTask = (idToToggle) => {
    setTasks(
      tasks.map((task) =>
        task.id === idToToggle ? { ...task, done: !task.done } : task,
      ),
    );
  };

  return (
    <div className={styles.container}>
      <ToDoInput onAddTask={addTask} />

      {tasks.length === 0 ? (
        <p>No Tasks Yet</p>
      ) : (
        tasks.map((task) => (
          <ToDoItem
            key={task.id}
            taskObj={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))
      )}
    </div>
  );
};
