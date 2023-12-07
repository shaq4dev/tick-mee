import React, { useState } from 'react'
import Heading from './components/Heading'
import FormComponent from './components/FormComponent'
import ListComponent from './components/ListComponent'

const App = () => {

  const [task, setTask] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    setTask(
      e.target.value
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let keygen = Math.floor(Math.random()*100000000)
    setList([
      ...list, 
      { id: keygen, name: task}
    ])
    setTask('')
  }


  return (
    <div>
      <Heading title='Tick Mee'/>
      <FormComponent 
      task={task}
      handleChange={handleChange} 
      handleSubmit={handleSubmit}
      list={list}/>
      <ListComponent 
      list={list}
      setList={setList}
      />
    </div>
  )
}

export default App
