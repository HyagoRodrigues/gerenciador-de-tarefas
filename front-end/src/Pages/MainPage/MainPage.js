import React, { useState } from "react"
import "./MainPage.css"
import Navbar from "../../Components/Navbar/Navbar"

const MainPage = ({ onLogoff }) => {
  const [tasks, setTasks] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)

  const handleAddTask = () => {
    setCurrentTask(null)
    setIsFormOpen(true)
  }

  const handleEditTask = (task) => {
    setCurrentTask(task)
    setIsFormOpen(true)
  }

  const handleSaveTask = (task) => {
    if (currentTask) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)))
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }])
    }
    setIsFormOpen(false)
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId))
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  const handleLogoff = () => {
    onLogoff()
  }

  return (
    <div className="main">
      <Navbar onLogoff={handleLogoff} />
      <p>Gerenciador de Tarefas!!!!!!</p>
    </div>
  )
}

export default MainPage
