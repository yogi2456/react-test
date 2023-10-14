import React, { useState } from 'react'

function Q1() {

    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState([])

    const addtodo = () => {
        setTodos([...todos, "Eat Lunch",])
    }
  return (
    <div>
      <h1>counter : {counter}</h1>
      <button onClick={() => setCounter((value) => value + 1)}>+</button>
      <h1>todos </h1>
    </div>
  )
}

export default Q1
