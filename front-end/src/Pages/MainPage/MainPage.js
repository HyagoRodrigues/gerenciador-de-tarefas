import React, { useState } from "react"
import "./MainPage.css"
import Navbar from "../../Components/Navbar/Navbar"
import TaskList from "../../Components/TaskList/TaskList"

const MainPage = ({ onLogoff }) => {
  const handleLogoff = () => {
    onLogoff()
  }
  return (
    <div className="main">
      <Navbar onLogoff={handleLogoff} />
      <div className="container">
        <TaskList />
      </div>
    </div>
  )
}

export default MainPage
