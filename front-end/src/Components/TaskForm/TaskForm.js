import React, { useRef, useState, useEffect } from "react"
import "./TaskForm.css"

const TaskForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "")

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    })
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      {props.edit ? (
        <>
          <input
            placeholder="Atualizar"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="task-input edit"
          />
          <button onClick={handleSubmit} className="task-button edit">
            Atualizar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Adicionar"
            value={input}
            onChange={handleChange}
            name="text"
            className="task-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="task-button">
            Adicionar
          </button>
        </>
      )}
    </form>
  )
}

export default TaskForm
