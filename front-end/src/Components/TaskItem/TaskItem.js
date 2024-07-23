import React, { useState } from "react"
import TaskForm from "../TaskForm/TaskForm"
import { FaTrash, FaEdit } from "react-icons/fa"
import "./TaskItem.css"

const TaskItem = ({ tasks, completeTask, removeTask, updateTask }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  })

  const submitUpdate = (value) => {
    updateTask(edit.id, value)
    setEdit({
      id: null,
      value: "",
    })
  }

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitUpdate} />
  }

  return tasks.map((task) => (
    <div
      className={task.isComplete ? "task-row complete" : "task-row"}
      key={task.id}
    >
      <div onClick={() => completeTask(task.id)}>{task.text}</div>
      <div className="icons">
        <FaTrash onClick={() => removeTask(task.id)} className="delete-icon" />
        <FaEdit
          onClick={() => setEdit({ id: task.id, value: task.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ))
}

export default TaskItem
