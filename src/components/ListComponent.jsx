import React from 'react'
import TaskComponent from './TaskComponent'
import styles from '../modules/list.module.css'

const ListComponent = ({list, setList}) => {

  return (
    <div >
        {
            list.map(item => {
                return (
                    <TaskComponent
                    key={item.id}
                    list={list}
                    item={item}
                    setList={setList}
                     />
                )
            })
        }
    </div>
  )
}

export default ListComponent
