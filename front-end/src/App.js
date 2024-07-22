import "./App.css"
import Login from "./Pages/Login/Login.js"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import MainPage from "./Pages/MainPage/MainPage.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main-page" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
