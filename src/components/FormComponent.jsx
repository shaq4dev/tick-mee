import React from 'react'
import styles from '../modules/form.module.css'

const FormComponent = ({ 
  task, 
  handleChange, 
  handleSubmit, 
  list
}) => {
  return (
    <div className={styles.container}>
      <form 
      id='formSubmit'
      action="submit"
      onSubmit={handleSubmit}
      >
        <input 
        type="text" 
        value={task}
        placeholder='Add a task'
        onChange={handleChange}
        className={styles.inputStyles}
        />
        <button 
        type="submit"
        className={styles.add}>Add ✓</button>
      </form>
    </div>
  )
}

export default FormComponent
