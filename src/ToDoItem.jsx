import styles from "./ToDoItem.module.css"

export const ToDoItem = ({task,index, onDelete}) => {

  const deleteTask = () => {
  onDelete(index);  
  }
 
    return (
      <div className={styles.item}>
        <div className={styles.left}>
          <input type="checkbox" />
          <span>{task}</span>
        </div>

        <button className={styles.dlbtn} onClick={deleteTask}>Delete</button>
      </div>
    );

}