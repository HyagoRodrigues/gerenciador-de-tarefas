import React from "react"
import "./Navbar.css"

const Navbar = ({ onLogoff }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Gerenciador de Tarefas</div>
      <div className="navbar-logoff" onClick={onLogoff}>
        Sair
      </div>
    </nav>
  )
}

export default Navbar
