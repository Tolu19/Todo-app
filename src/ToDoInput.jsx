import styles from "./ToDoInput.module.css"

import { useState } from "react";

export const ToDoInput = ({onAddTask}) => {
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() === "") return;
    onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Add new tasks here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
      />
      <button onClick={addTask} className={styles.Addbtn}>Add Task</button>
    </div>
  );
};
