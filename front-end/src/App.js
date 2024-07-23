import "./App.css"
import { useState } from "react"
import LoginForm from "./Components/LoginForm/LoginForm"
import MainPage from "./Pages/MainPage/MainPage"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogoff = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/main-page" />
              ) : (
                <LoginForm onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/main-page"
            element={
              isLoggedIn ? (
                <MainPage onLogoff={handleLogoff} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
