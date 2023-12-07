import React from 'react'
import styles from '../modules/task.module.css'
import Tick from '../images/tick-v3.png'

const TaskComponent = ({
    list, 
    item, 
    setList
}) => {

    const handleDelete = () => {
        setList(
            list.filter(task => task.id !== item.id )
        )
    }

  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.itemNameStyles}>{item.name}</div>
        <button 
        className={styles.delete}
        onClick={handleDelete}
        ><span className={styles.delSpan}>Delete</span> <span className={styles.delmk}>✖</span> <span className={styles.tickmk}>
            <img src={Tick} alt="ticklogo" className={styles.tickbit} />
            </span></button>
        </div>
    </div>
  )
}

export default TaskComponent
