import React, { useState } from "react"
import TaskForm from "../TaskForm/TaskForm"
import TaskItem from "../TaskItem/TaskItem"

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return
    }

    const newTasks = [task, ...tasks]
    setTasks(newTasks)
    console.log(tasks) // Corrigido
  }

  const updateTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTasks((prev) =>
      prev.map((item) => (item.id === taskId ? newValue : item))
    )
  }

  const removeTask = (id) => {
    const removedArray = [...tasks].filter((task) => task.id !== id)
    setTasks(removedArray)
  }

  const completeTask = (id) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete
      }
      return task
    })
    setTasks(updateTasks)
  }

  return (
    <>
      <h1>Tarefas</h1>
      <TaskForm onSubmit={addTask} />
      <TaskItem
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </>
  )
}

export default TaskList
