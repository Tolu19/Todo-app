import styles from "./ToDoItem.module.css"

export const ToDoItem = ({ taskObj, onDelete, onToggle }) => {
  const deleteTask = () => {
    onDelete(taskObj.id);
  };

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={taskObj.done}
          onChange={() => onToggle(taskObj.id)}
        />
        <span>{taskObj.text}</span>
      </div>

      <button className={styles.dlbtn} onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
};